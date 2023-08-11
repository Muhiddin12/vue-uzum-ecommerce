<template>
  <div class="wrapper">
    <header>
      <!-- <router-link to="/">Home</router-link> | -->
      <router-link to="/">Products</router-link> |
      <router-link to="/basket">Basket</router-link> |
      <router-link to="/devs">Devs</router-link>

      <div class="buttons">
        <button @click="redirect">Redirect</button>
      </div>
    </header>
    <footer>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam eaque,
        beatae quibusdam magni ut maiores similique iste impedit numquam
        repellendus veniam consequatur odit ad dolores quasi assumenda voluptas
        hic doloribus.
      </p>
    </footer>
  </div>
  <router-view />
</template>

<script>
// bu projectda axios, try catch va local data ko'rsatilgan

// webHistory API ishlatilishi
export default {
  name: "App",
  methods: {
    redirect() {
      this.$router.push({ name: "home" });
    },
    forward() {
      this.$router.go(1);
    },
    beck() {
      this.$router.go(-1);
    },
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
}

/* /////  Header  //////*/

header {
  color: black;
  background: #5612ca;
}

.buttons {
  display: flex;
  gap: 8px;
  justify-content: center;
  margin-top: 20px;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #ffffff;
}

/* /////  Footer  //////*/

footer {
  color: black;
  background: #5612ca;
}
</style>
