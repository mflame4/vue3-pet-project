<template>
  <div class="container">
    <h1>About the Pet Project</h1>
    <h2>
      <p>
        In this Vue.js project, I will cover a wide range of topics to create an
        engaging project.
      </p>
      <p>
        From rendering content conditionally to implementing a modal window,
        working with the server using Axios, managing component lifecycles, and
        much more.
      </p>
    </h2>
    <div class="section">
      <div class="section-title">Rendering Based on Conditions</div>
      <div class="section-content">
        Dynamically render content based on conditions, creating a smooth user
        experience.
      </div>
    </div>
    <div class="section">
      <div class="section-title">Modal Window Implementation</div>
      <div class="section-content">
        Building and integrating a modal window into project for effective user
        interactions.
      </div>
    </div>
    <div class="section">
      <div class="section-title">Utilizing V-MODEL Modifiers</div>
      <div class="section-content">
        The power of V-MODEL modifiers to streamline two-way data binding.
      </div>
    </div>
    <div class="section">
      <div class="section-title">
        Server Interaction: Fetching Posts with Axios
      </div>
      <div class="section-content">
        Working with the server by fetching posts using the Axios library,
        enhancing project data capabilities.
      </div>
    </div>
    <div class="section">
      <div class="section-title">Component Lifecycle</div>
      <div class="section-content">
        The lifecycle of Vue.js components and optimizing their behavior.
      </div>
    </div>
    <div class="section">
      <div class="section-title">Dropdown List and Post Sorting</div>
      <div class="section-content">
        The dropdown list to sort posts, enhancing the user's ability to
        navigate and explore content.
      </div>
    </div>
    <div class="section">
      <div class="section-title">WATCH Observables and COMPUTED Properties</div>
      <div class="section-content">
        Vue's powerful WATCH observables and COMPUTED properties for efficient
        state management.
      </div>
    </div>
    <div class="section">
      <div class="section-title">Transition Group Animations</div>
      <div class="section-content">
        Implementing smooth animations using Vue's transition group, adding a
        touch of elegance to the UI.
      </div>
    </div>
    <div class="section">
      <div class="section-title">Post Search and Filtering</div>
      <div class="section-content">
        Implementing a search functionality to filter posts based on user input.
      </div>
    </div>
    <div class="section">
      <div class="section-title">Pagination: Displaying Content by Pages</div>
      <div class="section-content">
        Implementing pagination to display content in a structured manner,
        enhancing user readability.
      </div>
    </div>
    <div class="section">
      <div class="section-title">Dynamic Binding of Classes and Styles</div>
      <div class="section-content">
        Dynamically bind classes and styles for flexible UI customization.
      </div>
    </div>
    <div class="section">
      <div class="section-title">
        Dynamic Pagination: Infinite Scroll using Intersection API
      </div>
      <div class="section-content">
        Implementing dynamic pagination and infinite scrolling using the
        Intersection API for a seamless user experience.
      </div>
    </div>
    <div class="section">
      <div class="section-title">Refs: Accessing DOM Elements</div>
      <div class="section-content">
        Using refs to access and manipulate DOM elements in Vue.js.
      </div>
    </div>
    <div class="section">
      <div class="section-title">Vue Router: Page Navigation</div>
      <div class="section-content">
        Using Vue Router for creating page-based navigation within the project.
      </div>
    </div>
    <div class="section">
      <div class="section-title">Dynamic Navigation Implementation</div>
      <div class="section-content">
        Creating dynamic navigation features within your application.
      </div>
    </div>
    <div class="section">
      <div class="section-title">
        Creating Custom Directives: V-INTERSACTION and V-FOCUS
      </div>
      <div class="section-content">
        Crafting custom directives, such as V-INTERSACTION and V-FOCUS, for
        enhanced functionality.
      </div>
    </div>
    <div class="section">
      <div class="section-title">Mixins: Reusable Functionality</div>
      <div class="section-content">
        The power of mixins to achieve reusable functionality across components.
      </div>
    </div>
    <div class="section">
      <div class="section-title">Vuex: Managing Global Application State</div>
      <div class="section-content">
        Vuex, Vue's state management library, to efficiently manage global
        state.
      </div>
    </div>
    <div class="section">
      <div class="section-title">Composition API</div>
      <div class="section-content">
        Composition API, a new way to organize and manage Vue components.
      </div>
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
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

h1,
h2,
h3,
p {
  margin-bottom: 20px;
  text-align: center;
  line-height: 1.2;
}

.section {
  margin-bottom: 30px;
  padding: 20px;
  background-color: rgb(24, 26, 27, 0.3);
  box-shadow: 0 2px 4px rgba(255, 255, 255, 0.3);
}

.section-title {
  font-size: 1.4rem;
  color: rgb(161, 215, 255);
  margin-bottom: 10px;
}

.section-content {
  font-size: 1.2rem;
  color: rgb(161, 215, 255);
}
</style>
