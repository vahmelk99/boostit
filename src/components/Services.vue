<template>
  <div id="service">
    <h1 class="titleing">Provided <span>Services</span></h1>
    <vueper-slides
      class="no-shadow"
      :slideMultiple="false"
      :infinite="true"
      :autoplay="true"
      :duration="4000"
      :arrows="false"
      :bullets="false"
      :slide-ratio="$mq != 'sm' ? 1 / 5 : 1 / 2"
      :visible-slides="$mq != 'sm' ? 4 : 2"
      :dragging-distance="100"
      :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }"
    >
      <vueper-slide
        v-for="service in services"
        :key="service"
        :title="service"
        :image="
          require(`@/assets/${service}.${
            service.includes('Brand') ? 'png' : 'svg'
          }`)
        "
      >
      </vueper-slide>
    </vueper-slides>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
export default {
  components: { VueperSlides, VueperSlide },
  data() {
    return {
      services: [
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
.titleing {
  text-align: center;
  font-weight: bold;
  font-size: 35px;
  span {
    color: #ffc145;
  }
}
::v-deep {
  .vueperslide__content-wrapper {
    justify-content: flex-end !important;
    .vueperslide__title {
      margin-bottom: 10%;
      font-size: 20px;
      font-weight: bold;
    }
  }
}
</style>
