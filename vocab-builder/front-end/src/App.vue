<template>
  <div id="app">
    <!-- Navigation -->
    <div class="ui inverted segment navbar">
      <div class="ui center aligned container">
        <div class="ui large secondary inverted pointing menu compact">
          <router-link to="/words" exact class="item">
            <i class="comment outline icon"></i> Words
          </router-link>
          <router-link to="/words/new" class="item">
            <i class="plus circle icon"></i> New
          </router-link>
          <router-link to="/test" class="item">
            <i class="graduation cap icon"></i> Test
          </router-link>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="ui text container">
      <flash-message class="myFlash"></flash-message>
      <div class="ui one column grid">
        <div class="column">
          <router-view />
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div class="ui inverted vertical footer segment">
      <div class="ui center aligned container">
        <div class="ui stackable inverted divided grid">
          <div class="three wide column">
            <h4 class="ui inverted header">Made by</h4>
            <p>HaNguyenQuocTrung_GCS220148</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
};
</script>

<style>
/* Main App Styles */
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Navbar Improvements */
#app > div.navbar {
  margin-bottom: 1.5em;
  background-color: #2c3e50 !important;
}

.navbar .menu {
  background-color: transparent !important;
}

.navbar .item {
  color: #3498db !important;
  transition: color 0.3s ease;
}

.navbar .item:hover {
  color: #2980b9 !important;
}

.navbar .item i.icon {
  margin-right: 0.5em;
  color: #3498db !important;
}

/* Content Area */
.ui.text.container {
  flex: 1;
  padding-bottom: 3em;
}

/* Footer Styles */
.ui.vertical.footer.segment {
  margin-top: auto;
  padding: 2em 0em;
  background-color: #2c3e50 !important;
  color: #ecf0f1 !important;
}

.ui.vertical.footer.segment .header {
  color: #3498db !important;
}

/* Flash Message */
.myFlash {
  width: 250px;
  margin: 10px;
  position: absolute;
  top: 50;
  right: 0;
  z-index: 1000;
}

/* Input Styles */
input {
  width: 300px;
  border-radius: 4px;
  border: 1px solid #bdc3c7;
  padding: 0.7em;
  transition: all 0.3s ease;
}

input:focus {
  border-color: #3498db;
  box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
}

/* Label Styles */
div.label {
  font-weight: 500;
  color: #2c3e50;
  margin-bottom: 0.5em;
  display: block;
}
</style>
