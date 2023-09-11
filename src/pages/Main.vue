<template>
  <div class="content">
    <div class="title">Welcome to my Pet Project</div>
    <div class="description">
      You can find more details about this project on the About page, and for
      additional projects, please visit my
      <a href="https://github.com/mflame4">GitHub</a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
body {
  font-family: Arial, sans-serif;
  background-color: #f8f8f8;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.content {
  text-align: center;
}

.title {
  font-size: 2rem;
  margin-bottom: 20px;
}

.description {
  font-size: 1.4rem;
  margin-bottom: 30px;
}
</style>
