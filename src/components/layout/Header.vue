<template>
  <header class="header-wrap" :class="{'header-shadow': scrollBottom}">

    <div class="container">
      <div class="header">
        <router-link :to="{name: 'home'}" class="header__logo">
          <img width="134" :src="`${publicPath}img/logo.svg`" onError="this.src=`${publicPath}/img/no-img.jpg`" alt="">
        </router-link>
        <nav class="header__menu menu">
          <a v-for="link in menu"
             class="menu__item"
             :href="link.href"
          >
            {{link.title}}
          </a>
        </nav>
        <div class="header__profile">
          <div class="header__profile-text">
            <span class="header__profile-name">{{user.name}}</span>
            <span class="header__profile-email">{{user.email}}</span>
          </div>
          <div class="header__avatar avatar">
            <img :src="user.photo" alt="">
          </div>
        </div>
        <a class="header__sign-out" href="#">
          <i class="icon-sign-out"></i>
        </a>
        <button class="header__menu-btn" @click="mobileMenuOpen = true">
          <i class="icon-line-menu"></i>
        </button>
      </div>
    </div>

    <div class="header-mobile-wrap" :class="{'header-mobile--active': mobileMenuOpen}">
      <div class="header-mobile">
        <div class="header-mobile__profile">
          <div class="header-mobile__avatar avatar">
            <img :src="user.photo" onError="this.src='/img/no-img.jpg'" alt="">
          </div>
          <div class="header-mobile__profile-text">
            <span class="header-mobile__profile-name">{{user.name}}</span>
            <span class="header-mobile__profile-email">{{user.email}}</span>
          </div>
        </div>
        <nav class="header-mobile__menu menu">
          <a v-for="link in menu"
             class="menu__item"
             :href="link.href"
          >
            {{link.title}}
          </a>
          <a href="#"class="menu__item">
            Sign out
          </a>
        </nav>
      </div>
    </div>
    <div class="overlay"
         :class="{'overlay--active': mobileMenuOpen}"
         @click="mobileMenuOpen = false"
    >
    </div>

  </header>
</template>

<script>
  import menuMixin from '../../assets/js/mixins/menuMixin';

  export default {
    name: "Header",
    data() {
      return {
        user: {},
        mobileMenuOpen: false,
        scrollBottom: false
      }
    },
    methods: {
      getUser() {
        this.$store.dispatch('users/USER', {id: 1})
          .then(res => {
            this.user = res.body.user;
          })
      },
      scroll() {
        this.scrollBottom = window.pageYOffset > 100;
      }
    },
    created() {
      this.getUser();
      this.scroll();
      window.addEventListener('scroll', this.scroll);
    },
    mixins: [menuMixin]
  }
</script>

<style lang="scss">
  .header {
    display: flex;
    align-items: center;
    min-height: 64px;
    padding: 12px 0;
    @media (max-width: $md) {
      min-height: 59px;
    }
    &-wrap {
      position: sticky;
      z-index: 30;
      top: 0;
      background-color: #fff;
      .overlay {
        display: none;
        @media (max-width: $lg) {
          display: block;
        }
      }
    }
    &-shadow {
      box-shadow: $shadow;
    }
    &-mobile {
      $paddingX: 25px;
      $paddingXmd: 15px;
      $width: 260px;
      &-wrap {
        position: fixed;
        z-index: 101;
        top: 0;
        left: -$width;
        height: 100vh;
        width: $width;
        display: none;
        background-color: #fff;
        transition: $transition;
        @media (max-width: $lg) {
          display: block;
        }
        @media (max-width: $md) {
          width: 250px;
        }
      }
      &--active {
        left: 0;
      }
      &__profile {
        padding: 30px $paddingX 23px;
        border-bottom: 1px solid #e1e1e1;
        @media (max-width: $md) {
          padding-left: $paddingXmd;
        }
        &-text {
          display: flex;
          flex-direction: column;
          margin-top: 13px;
        }
        &-name {
          margin-bottom: 4px;
          font-size: 20px;
        }
        &-email {
          color: $lightGray;
          font-size: 13px;
        }
      }
      &__avatar {
        @include rect(67px);
      }
      &__menu {
        flex-direction: column;
        padding: 30px $paddingX;
        @media (max-width: $md) {
          padding-left: $paddingXmd;
        }
        .menu__item {
          margin: 0 0 23px;
        }
      }
    }
    &__logo {
      margin-top: 5px;
      @media (max-width: $md) {
        margin-top: 0;
      }
    }
    &__menu {
      margin: 0 auto;
      padding-left: 85px;
      @media (max-width: $lg) {
        display: none;
      }
      &-btn {
        display: none;
        margin-right: -8px;
        margin-left: auto;
        font-size: 23px;
        background-color: transparent;
        border: none;
        @media (max-width: $lg) {
          display: flex;
        }
        @media (max-width: $md) {
          margin-top: -7px;
          margin-right: -5px;
        }
      }
    }
    &__avatar {
      @include rect(40px);
    }
    &__profile {
      display: flex;
      margin-right: 17px;
      @media (max-width: $lg) {
        display: none;
      }
      &-text {
        display: flex;
        flex-direction: column;
        width: 200px;
        padding-top: 2px;
        margin-right: 11px;
        text-align: right;
      }
      &-name {
        @include ellipsis;
        font-size: 14px;
      }
      &-email {
        @include ellipsis;
        margin-right: 2px;
        color: $lightGray;
        font-size: 12px;
      }
    }
    &__sign-out {
      margin-top: 5px;
      font-size: 23px;
      @media (max-width: $lg) {
        display: none;
      }
      .icon-sign-out {
        &:before {
          transition: $transition;
        }
        &:hover:before {
          color: #2f58bb;
        }
      }
    }
  }
</style>