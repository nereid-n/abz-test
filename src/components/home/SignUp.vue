<template>
  <section class="signUp-wrap" id="signUp">
    <div class="container">
      <div class="signUp">
        <h2 class="h2">Register to get a work</h2>
        <h5 class="h5">
          Attention! After successful registration and alert, update the list of users in the block from the top
        </h5>
        <form>
          <div class="signUp__inputs">
            <div v-for="input in inputs" :class="input.className">
              <component :is="input.component"
                         :data="input.data"
                         :key="input.data.name"
                         :name="input.data.name"
                         :error="errors.has(input.data.name)"
                         v-model="value[input.data.name]"
                         v-validate="input.rules"
                         @input="onInput"
              />
            </div>
          </div>
          <div class="signUp__btn">
            <button @click.prevent="send"
                    class="btn btn--primary"
                    :class="{'disable': !valide}"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
    <Modal class="signUp__modal" :show="showModal" @close="showModal = false">
      <h4 class="h4">{{modalTitle}}</h4>
      <p class="paragraph2" v-html="modalMessage"></p>
      <button class="signUp__modal-btn link--orange" @click="showModal = false">OK</button>
    </Modal>
  </section>
</template>

<script>
  import InputText from "../inputs/InputText";
  import InputSelect from "../inputs/InputSelect";
  import InputFile from "../inputs/InputFile";
  import Modal from "../Modal";
  export default {
    name: "SignUp",
    components: {Modal, InputFile, InputSelect, InputText},
    data() {
      return {
        inputs: [
          {
            component: 'InputText',
            className: 'signUp-col-4',
            rules: {
              required: true,
              min: 2,
              max: 60
            },
            data: {
              name: 'name',
              label: 'Name'
            }
          },
          {
            component: 'InputText',
            className: 'signUp-col-4',
            rules: {
              required: true,
              min: 2,
              max: 100,
              regex: '^(?:[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])$'
            },
            data: {
              name: 'email',
              label: 'Email'
            }
          },
          {
            component: 'InputText',
            className: 'signUp-col-4',
            rules: {
              required: true,
              regex: '^[\\+]{0,1}380([0-9]{9})$'
            },
            data: {
              name: 'phone',
              label: 'Phone',
              placeholder: ''
            }
          },
          {
            component: 'InputSelect',
            className: 'signUp-col-6',
            rules: {
              required: true
            },
            data: {
              name: 'position_id',
              label: 'Select your position',
              options: []
            }
          },
          {
            component: 'InputFile',
            className: 'signUp-col-6',
            rules: {
              required: true,
              mimes: 'image/jpeg',
              size: 5000,
              minDimensions: [70, 70]
            },
            data: {
              name: 'photo',
              label: 'Upload your photo',
              hint: 'File format jpg up to 5 MB, the minimum size of 70x70px'
            }
          }
        ],
        value: {},
        valide: false,
        showModal: false,
        modalTitle: 'Congratulations',
        modalMessage: 'You have successfully passed <br> the registration'
      }
    },
    methods: {
      getPositions() {
        this.$store.dispatch('positions/POSITIONS')
          .then(res => {
            for (let input of this.inputs) {
              if (input.data.name === 'position_id') {
                for (let value of res.body.positions) {
                  input.data.options.push({
                    name: value.name,
                    value: value.id
                  });
                }
                break;
              }
            }

          })
      },
      send() {
        let formData = new FormData();
        this.value.photo = this.value.photo[0];
        for (let key in this.value) {
          formData.append(key, this.value[key]);
        }
        this.$store.dispatch('users/TOKEN')
          .then(res => {
            let token = res.body.token;
            let headers = {
              Token: token
            };
            this.$store.dispatch('users/ADD_USER', {data: formData, headers: headers})
              .then(res => {
                this.showModal = true;
                if (res.ok) {
                  this.modalTitle = 'Congratulations';
                  this.modalMessage = 'You have successfully passed <br> the registration';
                  this.$store.commit('users/NEW_USER', true);
                }
                else {
                  this.modalTitle = 'Oops';
                  this.modalMessage = '';
                }
              });
          })
      },
      onInput() {
        this.$validator.validateAll()
          .then(answer => {
            if (answer) {
              this.valide = true;
            }
            else {
              this.valide = false;
            }
          });
      }
    },
    created() {
      this.getPositions();
    }
  }
</script>

<style lang="scss">
  $padding: 15px;
  .signUp {
    padding: 40px 0 150px;
    @media (max-width: $lg) {
      padding-bottom: 120px;
    }
    @media (max-width: $md) {
      padding-top: 19px;
      padding-bottom: 70px;
    }
    &__modal {
      .modal {
        display: flex;
        flex-direction: column;
      }
      .h4 {
        margin-top: 10px;
        margin-bottom: 5px;
      }
      &-btn {
        margin-top: 12px;
        margin-left: auto;
      }
    }
    .h2 {
      margin-bottom: 0;
    }
    .h5 {
      margin-top: 14px;
      @media (max-width: $lg) {
        width: 50%;
        margin: 20px auto 21px;
      }
      @media (max-width: $md) {
        width: 100%;
        margin-top: 10px;
      }
    }
    &__inputs {
      display: flex;
      flex-wrap: wrap;
      width: calc(100% + #{$padding} * 2);
      margin: 0 -$padding;
      padding-top: 48px;
      @media (max-width: $md) {
        padding-top: 26px;
      }
    }
    &__btn {
      display: flex;
      justify-content: center;
      padding-top: 36px;
      @media (max-width: $lg) {
        padding-top: 34px;
      }
      @media (max-width: $md) {
        padding-top: 29px;
      }
    }
    &-col-4 {
      width: calc(100% / 3);
    }
    &-col-6 {
      width: 50%;
    }
  }
  div[class*="-col-"] {
    padding: 0 $padding;
    margin-bottom: 19px;
    @media (max-width: $md) {
      width: 100%;
      margin-bottom: 14px;
    }
  }
</style>
