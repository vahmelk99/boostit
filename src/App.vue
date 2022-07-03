<template>
  <div id="app">
    <Header />
    <Home />
    <Services />
    <Details />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Home from './components/Home.vue'
import Details from './components/Details.vue'
import Services from './components/Services.vue'

export default {
  name: 'App',
  components: {
    Header,
    Home,
    Details,
    Services,
  },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
