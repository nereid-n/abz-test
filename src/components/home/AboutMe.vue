<template>
  <section class="aboutMe-wrap" id="aboutMe">
    <div class="container">
      <div class="aboutMe">
        <h2 class="h2">Let's get ac quainted</h2>
        <div class="aboutMe__content">
          <img class="aboutMe__img" :src="`${publicPath}img/man-mobile.svg`" width="289" alt="">
          <div class="aboutMe__text">
            <h3 class="h3">I am cool frontend developer</h3>
            <p v-for="item in text" class="paragraph2">{{item}}</p>
            <a class="link--orange" href="#signUp">Sign Up</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "AboutMe",
    data() {
      return {
        text: [
          'When real users have a slow experience on mobile, they\'re much less likely to find what they are looking for or purchase from you in the future. For many sites this equates to a huge missed opportunity, especially when more than half of visits are abandoned if a mobile page takes over 3 seconds to load.',
          'Last week, Google Search and Ads teams announced two new speed initiatives to help improve user-experience on the web.'
        ]
      }
    }
  }
</script>

<style lang="scss">
  .aboutMe {
    padding-top: 100px;
    @media (max-width: $lg) {
      padding-top: 78px;
    }
    @media (max-width: $md) {
      padding-top: 46px;
      text-align: center;
    }
    .h3 {
      margin-top: 0;
      margin-bottom: 6px;
      @media (max-width: $lg) {
        margin-bottom: 12px;
      }
      @media (max-width: $md) {
        width: 80%;
        margin-right: auto;
        margin-left: auto;
      }
    }
    .paragraph2 {
      &:last-of-type {
        margin-bottom: 10px;
        @media (max-width: $lg) {
          margin-bottom: 19px;
        }
        @media (max-width: $md) {
          margin-bottom: 13px;
        }
      }
    }
    &__content {
      display: flex;
      align-items: flex-start;
      padding-top: 9px;
      @media (max-width: $lg) {
        padding-top: 5px;
      }
      @media (max-width: $md) {
        flex-direction: column;
        align-items: center;
        padding-top: 0;
      }
    }
    &__text {
      margin-left: 65px;
      @media (max-width: $lg) {
        margin-left: 30px;
      }
      @media (max-width: $md) {
        margin-left: 0;
        padding-top: 27px;
      }
    }
    &__img {
      margin-top: 3px;
      margin-left: 35px;
      @media (max-width: $lg) {
        width: 220px;
        margin-top: 4px;
        margin-left: 0;
      }
    }
  }
</style>