import { ref, onMounted } from "vue";
import axios from "axios";

export const posts = ref([]);
export const page = ref(1);
export const limit = 10;
export const totalPages = ref(0);
export const isPostsLoading = ref(true);
export const dialogVisible = ref(false);

export function showDialog() {
    dialogVisible.value = true;
}

export function createPost(post) {
    posts.value.push(post);
    dialogVisible.value = false;
}

export function removePost(postToRemove) {
    posts.value = posts.value.filter((p) => p.id !== postToRemove.id);
}
export function changePage(newPage) {
    page.value = newPage;
}
export function usePosts() {
    const fetching = async () => {
        try {
            const response = await axios.get(
                "https://jsonplaceholder.typicode.com/posts",
                {
                    params: {
                        _page: page.value,
                        _limit: limit,
                    },
                }
            );

            totalPages.value = Math.ceil(
                response.headers["x-total-count"] / limit
            );
            posts.value = response.data;
        } catch (e) {
            alert("Error");
        } finally {
            isPostsLoading.value = false;
        }
    };

    onMounted(fetching);

    return {
        posts,
        isPostsLoading,
        totalPages,
        page,
        limit,
    };
}

export async function loadMorePosts() {
    try {
        page.value += 1;
        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/posts",
            {
                params: {
                    _page: page.value,
                    _limit: limit,
                },
            }
        );

        totalPages.value = Math.ceil(
            response.headers["x-total-count"] / limit
        );
        posts.value = [...posts.value, ...response.data];
    } catch (e) {
        alert("Error");
    }
}

