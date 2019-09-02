<template>
  <section class="requirements-wrap" id="requirements">
    <div class="container">
      <div class="requirements">
        <h2 class="h2" ref="title">General requirements for the test task</h2>
        <div class="requirements__content" ref="text">
          <div class="requirements__text">
            <p v-for="item in text" class="paragraph2">{{item}}</p>
          </div>
          <div class="requirements__img">
            <img :src="`${publicPath}img/man-laptop-v1.svg`" alt="">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "Requirements",
    data() {
      return {
        text: [
          'Users want to find answers to their questions quickly and data shows that people really care about how quickly their pages load. The Search team announced speed would be a ranking signal for desktop searches in 2010 and as of this month (July 2018), page speed will be a ranking factor for mobile searches too.',
          'If you\'re a developer working on a site, now is a good time to evaluate your performance using our speed tools. Think about how performance affects the user experience of your pages and consider measuring a variety of real-world user-centric performance metrics.',
          'Are you shipping too much JavaScript? Too many images? Images and JavaScript are the most significant contributors to the page weight that affect page load time based on data from HTTP Archive and the Chrome User Experience Report - our public dataset for key UX metrics as experienced by Chrome users under real-world conditions.'
        ]
      }
    },
    mounted() {
      this.dots(this.$refs.text, 1500);
      this.dots(this.$refs.title, 80);
    }
  }
</script>

<style lang="scss">
  .requirements {
    padding: 100px 0 97px;
    color: #fff;
    @media (max-width: $lg) {
      padding: 80px 0 97px;
    }
    @media (max-width: $md) {
      padding: 32px 0 43px;
    }
    .h2 {
      @media (max-width: $lg) {
        width: 60%;
        margin: 34px auto;
      }
      @media (max-width: $md) {
        width: 100%;
      }
      @media (max-width: $md) {
        margin-bottom: 20px;
      }
    }
    &-wrap {
      background-color: $secondary;
      background-image: url('../../assets/img/bg-2/bg-2.jpg');
      background-size: cover;
      background-repeat: no-repeat;
      @media (max-width: $md) {
        background-image: url('../../assets/img/bg-2/bg-2_768.jpg');
        @media (-webkit-min-device-pixel-ratio:2),
        (min-resolution:192dpi) {
          background-image: url('../../assets/img/bg-2/bg-2_768-2.jpg');
        }
      }
      @media (max-width: 320px) {
        background-image: url('../../assets/img/bg-2/bg-2_320.jpg');
        @media (-webkit-min-device-pixel-ratio:2),
        (min-resolution:192dpi) {
          background-image: url('../../assets/img/bg-2/bg-2_320-2.jpg');
        }
      }
    }
    &__content {
      display: flex;
      align-items: flex-start;
      padding-top: 3px;
      @media (max-width: $md) {
        flex-direction: column-reverse;
        align-items: center;
        text-align: center;
      }
    }
    &__text {
      width: 49%;
      margin-right: 30px;
      @media (max-width: $lg) {
        width: 48%;
      }
      @media (max-width: $md) {
        margin-top: 18px;
        margin-right: 0;
        width: 100%;
      }
    }
    &__img {
      margin-top: 5px;
      margin-right: 62px;
      margin-left: auto;
      background-image: url('../../assets/img/man-laptop-v1.svg');
      background-size: contain;
      background-repeat: no-repeat;
      img {
        opacity: 0;
        max-width: 100%;
      }
      @media (max-width: $xl) {
        margin-right: 0;
      }
      @media (max-width: $lg) {
        width: 343px;
        height: 407px;
        margin-top: 3px;
        background-image: url('../../assets/img/man-laptop-v2.svg');
      }
      @media (max-width: $md) {
        width: 89%;
        height: unset;
        margin-left: 0;
        background-image: url('../../assets/img/man-laptop-v1.svg');
      }
    }
  }
</style>