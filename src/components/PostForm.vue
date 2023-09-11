<template>
  <div class="modal">
    <form @submit.prevent>
      <h4>Create a post</h4>
      <my-input v-focus v-model="post.title" type="text" placeholder="Title" />
      <my-input v-model="post.body" type="text" placeholder="Description" />
      <my-button
        style="align-self: flex-end; margin-top: 15px"
        @click="createPost"
      >
        Create
      </my-button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: "",
        body: "",
      },
    };
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit("create", this.post);
      this.post = {
        title: "",
        body: "",
      };
    },
  },
};
</script>

<style>
.modal {
  background-color: rgb(24, 26, 27) !important;
  padding: 10px;
  color: rgb(194, 228, 255);
  width: 300px;
  margin: 0;
  border-radius: 5px;
  border-radius: 20px;
}
form {
  display: flex;
  background-color: rgb(24, 26, 27) !important;
  flex-direction: column;
}
</style>
