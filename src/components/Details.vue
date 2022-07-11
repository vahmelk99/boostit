<template>
  <div id="details" class="details">
    <h1 class="titleing">Details</h1>
    <div class="con">
      <div class="btnCon">
        <button
          type="button"
          v-for="button in buttons"
          :key="button"
          @click="btnClick(button)"
          :style="{
            backgroundColor: button === selected ? '#ffc145' : 'transparent',
          }"
        >
          {{ button }}
        </button>
      </div>
      <div class="detCon" id="detCon">
        <transition name="bounce" mode="out-in">
          <div
            v-if="selected === 'Display Ads'"
            :key="selected"
            class="display"
          >
            <div class="blacker" />
            <h2>Display Ads</h2>
            <p>
              A type of online advertisement that combines text, images, and a
              URL that links to a website where a customer can learn more about
              or buy products.
            </p>
          </div>
          <div
            v-else-if="selected === 'Search Ads'"
            :key="selected"
            class="search"
          >
            <div class="blacker" />
            <h2>Search Ads</h2>
            <p>
              Search advertising is a marketing technique that involves placing
              digital advertisements inside search engine results. Companies
              that run search advertising campaigns pay a small fee each time
              someone clicks on one of their ads.
            </p>
          </div>
          <div
            v-else-if="selected === 'Social Media Ads'"
            :key="selected"
            class="social"
          >
            <div class="blacker" />
            <h2>Social Ads</h2>
            <p>
              Social media advertising is defined as a form of digital
              advertising that serves paid ads to your target audience using
              social media platforms such as Facebook, Twitter, Instagram,
              LinkedIn, Pinterest and more.
            </p>
          </div>
          <div
            v-else-if="selected === 'Video Ads'"
            :key="selected"
            class="video"
          >
            <div class="blacker" />
            <h2>Video Ads</h2>
            <p>
              Video advertising is a marketing strategy that implies using a
              short and informative video that promotes a product and occurs
              before, during, or after the main video. It helps tell the story,
              improve sales volume, create buzz, convey information in a short
              and interesting manner, and reach a wide audience.
            </p>
          </div>
          <div
            v-else-if="selected === 'Mobile Ads'"
            :key="selected"
            class="mobile"
          >
            <div class="blacker" />
            <h2>Mobile Ads</h2>
            <p>
              Mobile advertising refers to any form of advertising that appears
              on smartphones and mobile devices such as tablets and e-readers.
              It includes all the interactive channels that are used by the
              advertisers to communicate or promote brand information, news or
              offers, through mobile devices or networks.
            </p>
          </div>
          <div
            v-else-if="selected === 'Branding'"
            :key="selected"
            class="branding"
          >
            <div class="blacker" />
            <h2>Branding</h2>
            <p>
              Branding is the process of giving a meaning to specific
              organization, company, products or services by creating and
              shaping a brand in consumers’ minds. It is a strategy designed by
              organizations to help people to quickly identify and experience
              their brand, and give them a reason to choose their products over
              the competition’s, by clarifying what this particular brand is and
              is not.
            </p>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: 'Display Ads',
      buttons: [
        'Display Ads',
        'Search Ads',
        'Social Media Ads',
        'Video Ads',
        'Mobile Ads',
        'Branding',
      ],
      details: [
        { image: '', title: 'Display Ads', text: '' },
        { image: '', title: 'Search Ads', text: '' },
        { image: '', title: 'Social Media Ads', text: '' },
        { image: '', title: 'Video Ads', text: '' },
        { image: '', title: 'Mobile Ads', text: '' },
        { image: '', title: 'Branding', text: '' },
      ],
    }
  },
  methods: {
    btnClick(button) {
      ;(this.selected = button) &&
        this.$mq != 'lg' &&
        setTimeout(() => {
          this.$scrollTo('#detCon', 300, { easing: 'ease-in', offset: -115 })
        }, 100)
    },
  },
}
</script>

<style lang="scss" scoped>
.details {
  padding: 0px 100px 100px;
  .con {
    display: flex;
    justify-content: center;
    .detCon {
      display: flex;
      justify-content: flex-start;
      margin-left: 100px;
      // flex: 1;
      > div {
        max-width: 900px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
        color: white;
        padding: 50px;
        > h2 {
          text-align: center;
          font-size: 30px;
          margin-bottom: 30px;
          position: relative;
          color: #ffc145;
        }
        p {
          position: relative;
          font-size: 25px;
        }
        .blacker {
          z-index: 0;
          position: absolute;
          left: 0;
          top: 0;
          right: 0;
          bottom: 0;
          background-color: rgba($color: #000000, $alpha: 0.7);
        }
        &.display {
          background-image: url('@/assets/display.jpg');
        }
        &.search {
          background-image: url('@/assets/serach.jpg');
        }
        &.social {
          background-image: url('@/assets/social.jpg');
        }
        &.video {
          background-image: url('@/assets/video.jpg');
        }
        &.mobile {
          background-image: url('@/assets/mobile.jpg');
        }
        &.branding {
          background-image: url('@/assets/brand.jpg');
          background-position: top center;
        }
      }
    }
    .btnCon {
      display: flex;
      flex-direction: column;
      button {
        margin: 10px;
        padding: 10px;
        font-size: 20px;
        border: 5px solid #ffc145;
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
    font-size: 45px;
    margin-bottom: 20px;
  }
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

@media screen and (max-width: 1180px) {
  .details {
    padding: 0 50px 50px;
    .con {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .detCon {
        margin-left: 0 !important;
        margin-top: 50px;
      }
    }
  }
}

@media screen and (max-width: 530px) {
  .details {
    padding: 0 30px 30px !important;
    .titleing {
      font-size: 40px !important;
    }
    .detCon > div {
      padding: 20px !important;
      h2 {
        margin-bottom: 10px !important;
      }
      p {
        font-size: 20px !important;
      }
    }
  }
}
</style>
