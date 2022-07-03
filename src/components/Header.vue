<template>
  <div id="header" class="header flex">
    <img v-scroll-to="{ el: 'body', offset: -115 }" src="../assets/logob.png" />
    <nav v-if="$mq != 'sm'">
      <div v-scroll-to="{ el: 'body', offset: -115 }">Home</div>
      <div v-scroll-to="{ el: '#service', offset: -115 }">Service</div>
      <div v-scroll-to="{ el: '#details', offset: -115 }">Details</div>
      <div v-scroll-to="{ el: '#contacts', offset: -115 }">Contacts</div>
    </nav>
    <Slide v-else right :closeOnNavigation="true">
      <div class="menu">
        <div v-scroll-to="{ el: 'body', offset: -115 }">Home</div>
        <div v-scroll-to="{ el: '#service', offset: -115 }">Service</div>
        <div v-scroll-to="{ el: '#details', offset: -115 }">Details</div>
        <div v-scroll-to="{ el: '#contacts', offset: -115 }">Contacts</div>
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
  background-image: url('../assets/boost-kayq.png');
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
    > div {
      width: 100%;
      text-align: left;
      padding: 10px 0;
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
    > div {
      padding: 10px;
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
