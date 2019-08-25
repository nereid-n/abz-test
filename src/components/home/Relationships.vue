<template>
  <section class="relationships-wrap" id="relationships">
    <div class="container">
      <div class="relationships">
        <h2 class="h2">About my relationships with web-development</h2>
        <div class="relationships__items">
          <div class="relationships__item" v-for="item in items">
            <img :src="`${publicPath}img/${item.img}`" alt="">
            <div>
              <h3 class="h3">{{item.title}}</h3>
              <p class="paragraph2 c-gray">{{item.desc}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "Relationships",
    data() {
      return {
        items: [
          {
            img: 'html.svg',
            title: 'I\'m in love with HTML',
            desc: 'Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications.'
          },
          {
            img: 'css.svg',
            title: 'CSS is my best friend',
            desc: 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML.'
          },
          {
            img: 'javascript.svg',
            title: 'JavaScript is my passion',
            desc: 'JavaScript is a high-level, interpreted programming language. It is a language which is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm.'
          }
        ]
      }
    }
  }
</script>

<style lang="scss">
  .relationships {
    padding: 40px 0 117px;
    @media (max-width: $lg) {
      padding: 99px 0 77px;
    }
    @media (max-width: $md) {
      padding: 45px 0 49px;
    }
    .h2 {
      width: 55%;
      margin-right: auto;
      margin-left: auto;
      @media (max-width: $xl) {
        width: 80%;
      }
      @media (max-width: $lg) {
        width: 75%;
      }
      @media (max-width: $md) {
        width: 100%;
      }
    }
    &__items {
      display: flex;
      padding-top: 10px;
      @media (max-width: $lg) {
        flex-direction: column;
        padding-top: 5px;
      }
      @media (max-width: $md) {
        padding-top: 4px;
      }
    }
    &__item {
      $margin: 29px;
      width: calc((100% - #{$margin} * 2) / 3);
      margin-right: $margin;
      @media (max-width: $lg) {
        display: flex;
        align-items: flex-start;
        width: 82%;
        margin: 0 auto 45px;
      }
      @media (max-width: $md) {
        flex-direction: column;
        align-items: center;
        width: 100%;
        margin-bottom: 25px;
        text-align: center;
      }
      &:nth-of-type(2) {
        .paragraph2 {
          width: 88%;
          @media (max-width: $lg) {
            width: 100%;
          }
        }
      }
      &:last-of-type {
        margin-right: 0;
        @media (max-width: $lg) {
          margin-right: auto;
        }
      }
      img {
        @media (max-width: $lg) {
          width: 88px;
          margin-top: 5px;
          margin-right: 35px;
        }
        @media (max-width: $md) {
          margin-right: 0;
          margin-bottom: 11px;
        }
      }
      .h3 {
        margin: 19px 0 0;
        @media (max-width: $lg) {
          margin: 0;
        }
      }
      .paragraph2 {
        margin-top: 8px;
        @media (max-width: $lg) {
          margin-top: 5px;
          margin-bottom: 0;
        }
        @media (max-width: $md) {
          margin-top: 1px;
        }
      }
    }
  }
</style>