<template>
  <div id="details" class="details">
    <h1 class="titleing">Details</h1>
    <div class="con">
      <div class="btnCon">
        <button type="button" v-for="button in buttons" :key="button">
          {{ button }}
        </button>
      </div>
      <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit
        dignissimos natus obcaecati minima impedit vitae asperiores, sed aliquam
        distinctio, voluptatum aperiam, cum non modi? Quae non illum quis
        commodi maiores?
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buttons: [
        'Display Ads',
        'Search Ads',
        'Social Media Ads',
        'Video Ads',
        'Mobile Ads',
        'Branding',
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.details {
  padding: 70px 100px 0;
  .con {
    display: flex;
    justify-content: space-between;
    .btnCon {
      display: flex;
      flex-direction: column;
      button {
        margin: 10px;
        padding: 10px;
        font-size: 20px;
        border: 5px solid #ffc145;
        background-color: transparent;
        width: 300px;
        transition: all 0.3s;
        font-weight: bold;
        cursor: pointer;
        &:hover {
          background-color: rgb(233, 233, 233);
        }
      }
    }
  }
  .titleing {
    text-align: center !important;
    font-weight: bold;
    font-size: 35px;
    margin-bottom: 20px;
  }
}
</style>
