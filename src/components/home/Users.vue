<template>
  <section class="users-wrap" id="users">
    <div class="container">
      <div class="users">
        <h2 class="h2">Our cheerful users</h2>
        <h5 class="h5">Attention! Sorting users by registration date</h5>
        <div v-if="firstLoad" class="users__items">
          <div v-for="item in users" class="users__item">
            <div class="users__avatar avatar">
              <img :src="item.photo" alt="">
            </div>
            <div class="users__item-text">
              <h4 class="h4">{{item.name}}</h4>
              <div class="users__item-info">
                <span>{{item.position}}</span>
                <span>{{item.email}}</span>
                <span>{{item.phone}}</span>
              </div>
            </div>
          </div>
        </div>
        <Loader v-if="!firstLoad || !load"/>
        <div class="users__btn">
          <button v-if="page !== totalPages" class="btn btn--secondary" @click="getUsers">
            Show more
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import Loader from "../Loader";
  import store from '../../store/store';

  export default {
    name: "Users",
    components: {Loader},
    data() {
      return {
        users: [],
        page: 1,
        firstLoad: false,
        load: true,
        windowSize: 0,
        countUsers: 0,
        totalPages: 0
      }
    },
    methods: {
      getUsers() {
        this.load = false;
        let params = {
          page: this.page,
          count: this.countUsers
        };
        this.$store.dispatch('users/USERS', params)
          .then(res => {
            this.users = this.users.concat(res.body.users);
            this.totalPages = res.body.total_pages;
            this.page++;
            this.firstLoad = true;
            this.load = true;
          });
      },
      getBodyWidth() {
        this.windowSize = document.body.clientWidth;
        if (this.windowSize < 768) {
          this.countUsers = 3;
        }
        else {
          this.countUsers = 6;
        }
      }
    },
    created() {
      this.getBodyWidth();
      window.onresize = this.getBodyWidth;
      this.getUsers();
      store.watch(
        state => state.users.newUser,
        () => {
          if (this.$store.state.users.newUser) {
            this.page = 1;
            this.firstLoad = false;
            this.users = [];
            this.getUsers();
            this.$store.commit('users/NEW_USER', false);
          }
        }
      );
    }
  }
</script>

<style lang="scss">
  $avatarSize: 70px;
  $avatarMarginRight: 9px;
  .users {
    padding: 100px 0 80px;
    @media (max-width: $lg) {
      padding: 80px 0 60px;
    }
    @media (max-width: $md) {
      padding: 46px 0 26px;
    }
    .h2 {
      margin-bottom: 0;
    }
    .h5 {
      margin-top: 13px;
      @media (max-width: $md) {
        width: 175px;
        margin-right: auto;
        margin-bottom: 21px;
        margin-left: auto;
      }
    }
    &__avatar {
      @include rect($avatarSize);
      margin-right: $avatarMarginRight;
      @media (max-width: $lg) {
        margin-right: 0;
      }
    }
    &__items {
      display: flex;
      flex-wrap: wrap;
      @media (max-width: $md) {
        flex-direction: column
      }
    }
    &__item {
      $margin: 30px;
      display: flex;
      width: calc((100% - #{$margin} * 2) / 3);
      margin-right: $margin;
      padding-top: 30px;
      padding-right: 40px;
      padding-bottom: 27px;
      word-break: break-word;
      @media (max-width: $xl) {
        padding-right: 15px;
      }
      @media (max-width: $lg) {
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding-top: 8px;
        padding-right: 0;
      }
      @media (max-width: $md) {
        width: 100%;
        padding-bottom: 22px;
      }
      &:nth-of-type(3n) {
        margin-right: 0;
      }
      .h4 {
        margin-top: 24px;
        margin-bottom: 7px;
        @media (max-width: $lg) {
          margin-top: 14px;
          margin-bottom: 4px;
        }
        @media (max-width: $md) {
          margin-right: auto;
          margin-left: auto;
        }
      }
      &-text {
        max-width: calc(100% - #{$avatarSize} - #{$avatarMarginRight});
        @media (max-width: $lg) {
          max-width: 100%;
        }
      }
      &-info {
        display: flex;
        flex-direction: column;
        font-size: 14px;
        line-height: 19px;
        @media (max-width: $lg) {
          line-height: 18px;
        }
        span {
          @include ellipsis;
          color: inherit;
          &:first-of-type {
            white-space: normal;
          }
        }
      }
    }
    &__btn {
      display: flex;
      justify-content: center;
      margin-top: 25px;
      @media (max-width: $lg) {
        margin-top: 33px;
      }
      @media (max-width: $md) {
        margin-top: 7px;
      }
    }
  }
</style>