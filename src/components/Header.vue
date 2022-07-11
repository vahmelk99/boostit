<template>
  <div id="header" class="header flex">
    <a href="#home"><img src="@/assets/logob.png" /></a>
    <nav v-if="$mq != 'sm'">
      <a href="#home">Home</a>
      <a href="#service">Service</a>
      <a href="#details">Details</a>
      <a href="#contacts">Contacts</a>
    </nav>
    <Slide v-else right :closeOnNavigation="true">
      <div class="menu">
        <a href="#home">Home</a>
        <a href="#service">Service</a>
        <a href="#details">Details</a>
        <a href="#contacts">Contacts</a>
      </div>
    </Slide>
  </div>
</template>

<script>
import { Slide } from 'vue-burger-menu'
export default {
  name: 'Header',
  components: {
    Slide,
  },
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  position: sticky;
  top: 0;
  z-index: 999999;
  justify-content: space-between;
  align-items: center;
  padding: 30px 200px;
  background-image: url('@/assets/boost-kayq.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  transition: all 0.3s;
  .menu {
    display: flex;
    // justify-content: baseline;
    flex-direction: column;
    align-items: flex-start;
    padding: 0;
    > a {
      width: 100%;
      text-align: left;
      padding: 10px 0;
      display: block;
      text-decoration: none;

      color: white;
      cursor: pointer;
      transition: all 0.3s;
      &:hover {
        color: #ffc145;
        padding-left: 10px;
      }
    }
  }
  > nav {
    justify-content: center;
    display: flex;
    > a {
      padding: 10px;
      display: block;
      text-decoration: none;
      font-size: 20px;
      cursor: pointer;
      color: black;
      transition: all 0.3s;
      font-weight: bold;
      &:hover {
        text-shadow: 5px 0 4px rgb(255, 255, 255), 0 5px 4px rgb(255, 255, 255),
          -5px 0 4px rgb(255, 255, 255), 0 -5px 4px rgb(255, 255, 255);
      }
    }
  }
  img {
    width: 170px;
    cursor: pointer;
  }
}

@media screen and (max-width: 1180px) {
  .header {
    padding: 30px 100px;
  }
}
@media screen and (max-width: 800px) {
  .header {
    padding: 30px 50px;
  }
}
</style>
