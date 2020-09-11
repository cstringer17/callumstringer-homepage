<template>
  <div id="box">
    <h1>Callum Stringer</h1>
    <router-link to="/">
      <font-awesome-icon icon="home" size="2x" />
    </router-link>
    <router-link to="/about">
      <font-awesome-icon icon="info-circle" size="2x" />
    </router-link>
    <a href="https://github.com/cstringer17">
      <font-awesome-icon :icon="[ 'fab', 'github' ]" size="2x" />
    </a>
  </div>
</template>

<script>
export default {};
</script>

<style>
#box {
  width: 50%;
  top: 50%;
  left:50%;
  align-items: center;
  background-color: red;
}
</style>>

