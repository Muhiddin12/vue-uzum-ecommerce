<template>
  <h2>This is a DevDetails Component</h2>
  <br />
  <div v-if="devs">
    <h3>User id : {{ devs.id }}</h3>
    <h3>User name : {{ devs.name }}</h3>
    <h3>User job : {{ devs.job }}</h3>
  </div>
  <div v-else><h3>Loading....</h3></div>
</template>

<script>
import axios from "axios";
export default {
  // bu projectda axios, try catch va local data ko'rsatilgan
  name: "DevDetails",
  props: ["id"],
  data() {
    return {
      devs: null,
    };
  },
  async mounted() {
    // let response = await axios.get("http://localhost:3000/users/" + this.id);
    // let users = response.data;
    // this.devs = users;

    // 2 chi usul
    try {
      let response = await axios.get("http://localhost:3000/users/" + this.id);
      let users = response.data;
      this.devs = users;
    } catch (error) {
      console.log(error + "");
    }
  },
};
</script>
