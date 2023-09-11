<template>
  <div>
    <h1>Page with posts</h1>
    <my-input v-model="searchQuery" placeholder="Search..." v-focus />
    <div class="app__btns">
      <my-button @click="showDialog"> Create a post </my-button>
      <my-select v-model="selectedSort" :options="sortOptions" />
    </div>
    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost" />
    </my-dialog>
    <post-list
      :posts="sortedAndSearchedPosts"
      @remove="removePost"
      v-if="!isPostsLoading"
    />
    <div v-else>Loading...</div>
    <div v-intersection="loadMorePosts" class="observer"></div>
    <div class="page__wrapper">
      <div
        v-for="pageNumber in totalPageCount"
        :key="pageNumber"
        class="page"
        :class="{
          'current-page': currentPage === pageNumber,
        }"
        @click="changePage(pageNumber)"
      >
        {{ pageNumber }}
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onUnmounted, onMounted } from "vue";
import {
  usePosts,
  showDialog,
  createPost,
  removePost,
  loadMorePosts,
  changePage,
  dialogVisible,
} from "@/hooks/usePosts";
import useSortedPosts from "@/hooks/useSortedPosts";
import useSortedAndSearchedPosts from "@/hooks/useSortedAndSearchedPosts";
import MyButton from "@/components/UI/MyButton";
import MySelect from "@/components/UI/MySelect";
import MyInput from "@/components/UI/MyInput";
import PostList from "@/components/PostList";
import PostForm from "@/components/PostForm";

export default {
  components: {
    MyInput,
    MySelect,
    MyButton,
    PostList,
    PostForm,
  },

  setup(props) {
    const { posts, isPostsLoading, totalPages, page, limit } = usePosts();

    const { sortedPosts, selectedSort } = useSortedPosts(posts);
    const { searchQuery, sortedAndSearchedPosts } =
      useSortedAndSearchedPosts(sortedPosts);
    const currentPage = computed(() => page.value);
    const totalPageCount = computed(() => totalPages.value);
    const sortOptions = [
      { value: "id", name: "By ID" },
      { value: "title", name: "By Title" },
      { value: "body", name: "By Description" },
    ];

    onUnmounted(() => {
      changePage(1);
    });

    return {
      posts,
      isPostsLoading,
      sortedPosts,
      selectedSort,
      searchQuery,
      sortedAndSearchedPosts,
      showDialog,
      createPost,
      removePost,
      currentPage,
      totalPages,
      totalPageCount,
      sortOptions,
      loadMorePosts,
      changePage,
      dialogVisible,
    };
  },
};
</script>

<style>
.app__btns {
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
}
.page__wrapper {
  display: flex;
  margin-top: 15px;
}
.page {
  border: 1px solid black;
  padding: 10px;
}
.current-page {
  border: 2px solid teal;
}
.observer {
  height: 30px;
  background: rgb(0, 98, 128);
}
</style>
