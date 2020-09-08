<template>
  <div class="home">
    <homepageblock></homepageblock>
  </div>
</template>


<script>
import homepageblock from "../components/homepage-block"

export default {
  name: "Home",
  components: {
    homepageblock
  },
};
</script>
<style>
html {
  background: url(homepage.jpg) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>