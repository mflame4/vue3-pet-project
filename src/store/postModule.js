import axios from "axios";

export const postModule = {
    state: () => ({
        posts: [],
        isPostsLoading: false,
        selectedSort: '',
        searchQuery: '',
        page: 1,
        limit: 10,
        totalPages: 0,
        sortOptions: [
            { value: "id", name: "By ID" },
            { value: 'title', name: 'By Title' },
            { value: 'body', name: 'By Description' },

        ]
    }),
    getters: {
        sortedPosts(state) {

            return [...state.posts].sort((post1, post2) => {
                const value1 = post1[state.selectedSort];
                const value2 = post2[state.selectedSort];

                if (typeof value1 === "number" && typeof value2 === "number") {
                    return value1 - value2;
                }

                if (typeof value1 === "number") {
                    return -1;
                }
                if (typeof value2 === "number") {
                    return 1;
                }

                if (typeof value1 === "string" && typeof value2 === "string") {
                    return value1.localeCompare(value2);
                }

                return String(value1).localeCompare(String(value2));
            });
        },
        sortedAndSearchedPosts(state, getters) {
            return getters.sortedPosts.filter(post => post.title.toLowerCase().includes(state.searchQuery.toLowerCase()))
        }
    },
    mutations: {
        setPosts(state, posts) {
            state.posts = posts;
        },
        setLoading(state, bool) {
            state.isPostsLoading = bool
        },
        setPage(state, page) {
            state.page = page
        },
        setSelectedSort(state, selectedSort) {
            state.selectedSort = selectedSort
        },
        setTotalPages(state, totalPages) {
            state.totalPages = totalPages
        },
        setSearchQuery(state, searchQuery) {
            state.searchQuery = searchQuery
        },
        removePost(state, postToRemove) {
            state.posts = state.posts.filter((post) => post.id !== postToRemove.id);
        },
    },
    actions: {
        async fetchPosts({ state, commit }) {
            try {
                commit('setLoading', true);
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _page: state.page,
                        _limit: state.limit
                    }
                });
                commit('setTotalPages', Math.ceil(response.headers['x-total-count'] / state.limit))
                commit('setPosts', response.data)
            } catch (e) {
                console.log(e)
            } finally {
                commit('setLoading', false);
            }
        },
        async loadMorePosts({ state, commit }) {
            try {
                commit('setPage', state.page + 1)
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _page: state.page,
                        _limit: state.limit
                    }
                });
                commit('setTotalPages', Math.ceil(response.headers['x-total-count'] / state.limit))
                commit('setPosts', [...state.posts, ...response.data]);
            } catch (e) {
                console.log(e)
            }
        }
    },
    namespaced: true
}
