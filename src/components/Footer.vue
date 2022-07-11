<template>
  <div id="contacts">
    <div class="formWrapper">
      <h1 class="contactTitle">Contacts</h1>
      <div class="formInner">
        <form @submit="submit">
          <!-- Execute -->
          <h1>Order</h1>
          <!-- 66 -->
          <p>You can order your ad here!</p>
          <input
            type="text"
            placeholder="Full name"
            v-model="fullName"
            :class="getStyle('fullName')"
          />
          <input
            type="text"
            placeholder="Position"
            v-model="position"
            :class="getStyle('position')"
          />
          <input
            type="text"
            placeholder="Email"
            v-model="userEmail"
            :class="getStyle('userEmail')"
          />
          <input
            type="text"
            placeholder="Company link (www, facebook...)"
            v-model="companyLink"
            :class="getStyle('companyLink')"
          />
          <textarea
            placeholder="Message"
            v-model="message"
            :class="getStyle('message')"
          ></textarea>
          <p :class="[allError && 'error']">*Please fill all the fields</p>
          <button :disabled="sendDisabled" type="submit" class="send">
            SEND
          </button>
        </form>
        <div class="socialWrapper">
          <h1 class="social"><span>We</span> On Social Media</h1>
          <div class="icons">
            <font-awesome-icon
              @click="open('https://www.facebook.com/boost.it.smm')"
              :icon="{ prefix: 'fab', iconName: 'facebook' }"
            />
            <font-awesome-icon
              @click="open('http://t.me/Boost_iT_Marketing')"
              :icon="{ prefix: 'fab', iconName: 'telegram' }"
            />
            <font-awesome-icon
              @click="
                open('https://www.instagram.com/boost.it_marketing_agency/')
              "
              :icon="{ prefix: 'fab', iconName: 'instagram' }"
            />
            <font-awesome-icon
              @click="open('https://www.linkedin.com/company/80361291/admin/')"
              :icon="{ prefix: 'fab', iconName: 'linkedin' }"
            />
          </div>
          <a class="phone" href="tel:+37499680001">
            <font-awesome-icon :icon="{ prefix: 'fa', iconName: 'phone' }" />
            +374 99 68 00 01
          </a>
          <a class="envelope" href="mailto:info@boost-that.com">
            <font-awesome-icon :icon="{ prefix: 'fa', iconName: 'envelope' }" />
            info@boost-that.com
          </a>
        </div>
      </div>
    </div>
    <div class="cr">
      Copyright &copy; Boost-iT LLC Armenia 2022<br />Created by Boost-iT LLC
    </div>
  </div>
</template>

<script>
import {
  required,
  email,
  minLength,
  maxLength,
  url,
} from 'vuelidate/lib/validators'
export default {
  data() {
    return {
      allError: false,
      sendDisabled: false,
      fullName: '',
      position: '',
      userEmail: '',
      companyLink: '',
      message: '',
    }
  },
  validations: {
    fullName: {
      required,
      maxLength: maxLength(200),
      minLength: minLength(2),
    },
    position: {
      required,
      maxLength: maxLength(200),
      minLength: minLength(2),
    },
    userEmail: {
      required,
      email,
    },
    companyLink: {
      required,
      url,
    },
    message: {
      required,
      maxLength: maxLength(200),
      minLength: minLength(2),
    },
  },
  computed: {
    getStyle() {
      return (name) =>
        this.$data[name] ? (this.$v[name].$invalid ? 'error' : 'success') : ''
    },
  },
  methods: {
    open(link) {
      window.open(link, '_blank')
    },
    async submit(e) {
      e.preventDefault()
      this.$v
      if (!this.$v.$invalid) {
        this.sendDisabled = true
        let res = await fetch('https://boost-that.com/api/user/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            fullName: this.fullName,
            position: this.position,
            email: this.userEmail,
            companyLink: this.companyLink,
            message: this.message,
          }),
        })
        // console.log(res)
        this.sendDisabled = false
        this.allError = false
        this.message = ''
        this.fullName = ''
        this.position = ''
        this.userEmail = ''
        this.companyLink = ''
      } else {
        this.allError = true
      }
    },
  },
}
</script>

<style lang="scss" scoped>
#contacts {
  .formWrapper {
    .phone,
    .envelope {
      border-radius: 20px;
      // border: 1px solid black;
      padding: 20px 0;
      max-width: 330px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 25px;
      text-align: center;
      margin-top: 20px;
      color: white;
      font-weight: bold;

      width: auto;
      background-color: black;
      color: white;
      font-weight: bolder;
      cursor: pointer;
      text-decoration: none;
      transition: all 0.3s;
      &:hover {
        scale: 1.01;
        box-shadow: -5px -5px 0 #ffc145;
        translate: 5px 5px;
      }
      svg {
        font-size: 40px;
        &:first-child {
          margin-right: 10px;
        }
      }
    }
    .contactTitle {
      text-align: center;
      font-size: 45px;
    }
    .formInner {
      display: flex;
      justify-content: space-around;
      max-width: 1300px;
      margin: 40px auto 0;
      form {
        width: 60%;
        max-width: 422px;
        // border: 1px solid gray;
        box-shadow: -8px -8px 0 #ffc145, 8px 8px 0 #000;
        border-radius: 20px;
        padding: 50px;
        margin: 20px 0 40px;
        button.send {
          margin-top: 10px;
          border-radius: 5px;
          border: none;
          padding: 15px 60px;
          background-color: black;
          color: white;
          font-weight: bolder;
          font-size: 20px;
          width: auto;
          transition: all 0.3s;
          &:disabled {
            background-color: gray;
          }
          &:hover:not(:disabled) {
            cursor: pointer;
            scale: 1.01;
            box-shadow: -5px -5px 0 #ffc145;
            translate: 5px 5px;
          }
        }
        h1 {
          margin-bottom: 20px;
        }
        p {
          &.error {
            color: red;
          }
          font-size: 20px;
        }
        input,
        textarea {
          display: block;
          // max-width: 400px;
          min-height: 33px;
          width: calc(100% - 20px);
          font-size: 22px;
          margin: 15px 0;
          padding: 10px;
          resize: vertical;
          max-height: 180px;
          border-radius: 5px;
          border: 1px solid #000;
          &.error {
            border-color: red;
          }
          &.success {
            border-color: #ffc145;
          }
        }
      }
    }
  }
  .socialWrapper {
    margin-top: 70px;
    h1.social {
      text-align: center;
      span {
        color: #ffc145;
      }
    }
  }
  .icons {
    display: flex;
    justify-content: center;
    font-size: 45px;
    > * {
      margin: 20px;
      cursor: pointer;
      transition: all 0.3s;
      &:hover {
        color: #ffc145;
      }
    }
  }
  .cr {
    text-align: center;
    font-size: 18px;
    padding-bottom: 20px;
  }
}
@media screen and (max-width: 1180px) {
  .formInner {
    // flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .socialWrapper {
      margin: 20px 0 20px !important;
    }
  }
}
@media screen and (max-width: 600px) {
  .contactTitle {
    font-size: 40px !important;
  }
  .formInner {
    margin-top: 10px !important;
    form {
      width: 100%;
      padding: 40px !important;
      h1 {
        margin-bottom: 10px !important;
      }
      input,
      textarea {
        font-size: 18px !important;
      }
    }
  }
  .phone,
  .envelope {
    font-size: 20px !important;
    svg {
      font-size: 20px !important;
    }
  }
  .cr {
    padding-bottom: 20px !important;
  }
}
</style>
