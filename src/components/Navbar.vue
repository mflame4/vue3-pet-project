<template>
  <div class="navbar">
    <div class="navbar__btns">
      <my-button class="my-button" @click="$router.push('/')"
        >Home Page</my-button
      >
      <my-button class="my-button" @click="$router.push('/posts')"
        >Posts</my-button
      >
      <my-button class="my-button" @click="$router.push('/store')"
        >Posts with Store</my-button
      >
      <my-button class="my-button" @click="$router.push('/composition')"
        >Posts with Composition API</my-button
      >
      <my-button class="my-button" @click="$router.push('/about')"
        >About</my-button
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
  height: auto;
  background-color: #074180;
  color: #fff;
  box-shadow: 2px 2px 4px white;
  display: flex;
  align-items: center;
  justify-content: center;
}
.navbar__btns {
  align-items: center;
  justify-content: center;
}
.my-button {
  margin: 10px;
}
</style>
