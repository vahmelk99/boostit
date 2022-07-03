<template>
  <div id="app">
    <Header />
    <Home />
    <Services />
    <Details />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Home from './components/Home.vue'
import Details from './components/Details.vue'
import Services from './components/Services.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Home,
    Details,
    Footer,
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
  user-select: none;

  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
