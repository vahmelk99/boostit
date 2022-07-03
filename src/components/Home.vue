<template>
  <div class="home">
    <div class="leftDiv">
      <p class="heading">
        Proffessional Digital Marketing Company For <span>Your Business!</span>
      </p>
      <button type="button">Order Ad</button>
    </div>
    <div class="rightImg">
      <img src="../assets/herok.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.home {
  padding: 0 300px 100px;
  margin-top: 150px;
  display: flex;
  justify-content: space-between;
  background-image: url('../assets/dzax-kox.png');
  background-repeat: no-repeat;
  background-position: left bottom;
  transition: all 0.3s;
  background-size: contain;
  > div {
    flex: 1;
    &.leftDiv {
      .heading {
        font-size: 65px;
        transition: all 0.3s;
        margin-bottom: 20px;
        span {
          color: #ffc145;
        }
      }
      > button {
        border-radius: 5px;
        border: none;
        padding: 15px 60px;
        background-color: black;
        color: white;
        font-weight: bolder;
        cursor: pointer;
        font-size: 20px;
        width: auto;
        transition: all 0.3s;
        &:hover {
          scale: 1.01;
          box-shadow: -5px -5px 0 #ffc145;
          translate: 5px 5px;
        }
      }
    }
    &.rightImg {
      display: flex;
      justify-content: flex-end;
      > img {
        max-width: 450px;
        transition: all 0.3s;
      }
    }
  }
}

@media screen and (max-width: 1600px) {
  .home {
    padding: 0 100px 100px;
  }
}
@media screen and (max-width: 1200px) {
  .home {
    .heading {
      font-size: 45px !important;
    }
    img {
      max-width: 350px !important;
    }
  }
}
@media screen and (max-width: 800px) {
  .home {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    img {
      max-width: 450px !important;
    }
  }
}
</style>
