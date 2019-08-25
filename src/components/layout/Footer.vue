<template>
  <footer class="footer-wrap">
    <div class="container">
      <div class="footer">
        <div class="footer__top">
          <router-link :to="{name: 'home'}" class="footer__logo" href="/">
            <svg width="134" height="25">
              <use :xlink:href="`${publicPath}img/logo.svg#logo`"></use>
            </svg>
          </router-link>
          <nav class="footer__menu menu">
            <a v-for="link in menu"
               class="menu__item"
               :href="link.href"
            >
              {{link.title}}
            </a>
          </nav>
        </div>
        <div class="footer__main">
          <div class="footer__contacts">
            <a v-for="contact in contacts"
               class="footer__contact link--white"
               :href="contact.href"
            >
              <span class="footer__contact-icon">
                <i :class="contact.icon"></i>
              </span>
              <span>{{contact.title}}</span>
            </a>
          </div>
          <div class="footer__links">
            <div v-for="column in links" class="footer__links-column">
              <div v-for="link in column" class="footer__link">
                <a class="link--white" href="#">{{link.title}}</a>
              </div>
            </div>
          </div>
        </div>
        <div class="footer__bottom">
          <span class="footer__copyright">© abz.agency specially for the test task</span>
          <div class="footer__social">
            <a v-for="link in social" href="#" class="footer__social-item link--white">
              <i :class="link.icon"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  import menuMixin from '../../assets/js/mixins/menuMixin';

  export default {
    name: "Footer",
    data() {
      return {
        contacts: [
          {
            title: 'work.of.future@gmail.com',
            icon: 'icon-mail fz24',
            href: 'mailto:work.of.future@gmail.com'
          },
          {
            title: '+38 (050) 789 24 98',
            icon: 'icon-phone fz21',
            href: 'tel:+380507892498'
          },
          {
            title: '+38 (095) 556 08 45',
            icon: 'icon-cellphone fz25',
            href: 'tel:+380955560845'
          }
        ],
        links: [
          [
            {
              title: 'News'
            },
            {
              title: 'Blog'
            },
            {
              title: 'Partners'
            },
            {
              title: 'Shop'
            }
          ],
          [
            {
              title: 'Overview'
            },
            {
              title: 'Design'
            },
            {
              title: 'Code'
            },
            {
              title: 'Collaborate'
            }
          ],
          [
            {
              title: 'Tutorials'
            },
            {
              title: 'Resources'
            },
            {
              title: 'Guides'
            },
            {
              title: 'Examples'
            }
          ],
          [
            {
              title: 'FAQ'
            },
            {
              title: 'Terms'
            },
            {
              title: 'Conditions'
            },
            {
              title: 'Help'
            }
          ]
        ],
        social: [
          {
            icon: 'icon-facebook'
          },
          {
            icon: 'icon-linkedin'
          },
          {
            icon: 'icon-instagram'
          },
          {
            icon: 'icon-twitter'
          },
          {
            icon: 'icon-pinterest'
          }
        ]
      }
    },
    mixins: [menuMixin]
  }
</script>

<style lang="scss">
  .footer {
    padding: 25px 0;
    color: #fff;
    @media (max-width: $lg) {
      padding-bottom: 26px;
    }
    &-wrap {
      background-color: $secondary;
      overflow: hidden;
    }
    &__top {
      display: flex;
      padding-bottom: 27px;
      align-items: center;
      border-bottom: 1px solid #5674b9;
      @media (max-width: $lg) {
        $padding: 20px;
        width: calc(100% + #{$padding} * 2);
        margin-left: -$padding;
        padding: 0 $padding;
        padding-bottom: 26px;
      }
      @media (max-width: $md) {
        flex-direction: column;
        padding-bottom: 25px;
      }
    }
    &__logo {
      padding-top: 1px;
      fill: #fff;
      @media (max-width: $lg) {
        padding-top: 5px;
      }
    }
    &__menu {
      margin-left: auto;
      padding-right: 2px;
      @media (max-width: $md) {
        flex-direction: column;
        margin-top: 12px;
        margin-right: auto;
        text-align: center;
      }
      .menu__item {
        @media (max-width: $md) {
          margin-bottom: 6px;
        }
        &:last-of-type {
          margin-right: 0;
          @media (max-width: $md) {
            margin-right: $marginMenuItemX;
          }
        }
      }
    }
    &__main {
      display: flex;
      padding-top: 25px;
      @media (max-width: $md) {
        padding-top: 20px;
      }
    }
    &__contacts {
      display: flex;
      flex-direction: column;
      padding-top: 3px;
      @media (max-width: $md) {
        width: 100%;
        align-items: center;
        text-align: center;
      }
    }
    &__contact {
      display: flex;
      align-items: center;
      margin-bottom: 15px;
      font-size: 20px;
      @media (max-width: $lg) {
        margin-bottom: 20px;
        font-size: 18px;
      }
      @media (max-width: $md) {
        margin-bottom: 12px;
      }
      &-icon {
        display: flex;
        justify-content: center;
        width: 34px;
        padding-right: 7px;
        @media (max-width: $lg) {
          display: none;
        }
      }
    }
    &__links {
      display: flex;
      justify-content: flex-end;
      flex-grow: 1;
      margin-left: auto;
      text-align: right;
      @media (max-width: $md) {
        display: none;
      }
      &-column {
        display: flex;
        flex-direction: column;
        width: 22%;
        @media (max-width: $lg) {
          width: 24%;
        }
      }
    }
    &__link {
      margin-bottom: 10px;
    }
    &__bottom {
      display: flex;
      align-items: center;
      padding-top: 20px;
      @media (max-width: $lg) {
        padding-top: 13px;
      }
      @media (max-width: $md) {
        flex-direction: column-reverse;
      }
    }
    &__copyright {
      padding-bottom: 8px;
      font-size: 12px;
    }
    &__social {
      margin-left: auto;
      @media (max-width: $md) {
        margin-right: auto;
        margin-bottom: 12px;
      }
      &-item {
        margin-left: 22px;
        font-size: 26px;
        &:first-of-type {
          @media (max-width: $md) {
            margin-left: 0;
          }
        }
      }
    }
  }
</style>