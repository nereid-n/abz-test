<template>
  <section class="banner-wrap">
    <div class="container">
      <div class="banner">
        <h1 class="h1" ref="title">Test assignment for Frontend Developer position</h1>
        <div ref="text">
          <p class="paragraph1">
            <span>We kindly remind you that your test assignment should be submitted as a link to github/bitbucket repository. </span>
            <span>Please be patient, we consider and respond to every application that meets minimum requirements. We look forward to your submission. Good luck!</span>
          </p>
        </div>
        <a href="#signUp" class="banner__btn btn btn--primary">Sign Up</a>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "Banner",
    mounted() {
      this.dots(this.$refs.text, 1000);
      this.dots(this.$refs.title, 80);
    }
  }
</script>

<style lang="scss">
  .banner {
    width: 40%;
    padding: 90px 0 142px;
    color: #fff;
    font-size: 20px;
    @media (max-width: $xl) {
      width: 55%;
      padding: 78px 0 119px;
    }
    @media (max-width: $md) {
      width: 100%;
      padding: 43px 0 70px;
      text-align: center;
    }
    &-wrap {
      background-color: $secondary;
      background-image: url('../../assets/img/bg-1.jpg');
      background-size: cover;
      background-repeat: no-repeat;
    }
    .h1 {
      margin-bottom: 0;
    }
    .paragraph1 {
      margin-bottom: 35px;
      @media (max-width: $md) {
        margin-top: 10px;
        margin-bottom: 38px;
        span {
          &:last-of-type {
            display: none;
          }
        }
      }
    }
    &__btn {
      @media (max-width: $md) {
        margin-left: auto;
        margin-right: auto;
      }
    }
  }
</style>