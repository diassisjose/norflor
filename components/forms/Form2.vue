<template>
  <div>
    <b-alert
      class="notifications-list"
      :show="dismissCountDown"
      dismissible
      variant="success"
      @dismissed="dismissCountDown = 0"
      @dismiss-count-down="countDownChanged"
    >
      Seu email foi enviado com Sucesso!
    </b-alert>
    <form @submit.stop.prevent="onSubmit" method="POST">
      <div class="row">
        <div class="col-lg form-group m-0 field">
          <label for="nameContact">Nome</label>
          <b-form-input
            required
            type="text"
            v-model="nameContact"
            name="nameContact"
            id="nameContact"
            class="form-control"
            placeholder="Seu nome"
          ></b-form-input>
        </div>
        <div class="col-lg form-group m-0 field">
          <label for="telefone">Telefone</label>
          <vue-tel-input
            required
            type="text"
            v-model="cel"
            name="cel"
            id="cel"
            class="form-control"
            placeholder="Seu telefone"
          ></vue-tel-input>
        </div>
      </div>
      <div class="row">
        <div class="col-lg form-group m-0 field">
          <label for="email">Email</label>
          <b-form-input
            required
            type="text"
            v-model="$v.email.$model"
            :state="validateState('email')"
            name="email"
            id="email"
            class="form-control"
            placeholder="Seu melhor email"
            aria-describedby="input-2-live-feedback"
          ></b-form-input>
          <b-form-invalid-feedback id="input-2-live-feedback">
            Entre com um email válido.
          </b-form-invalid-feedback>
        </div>
        <div class="col-lg form-group m-0 field">
          <label for="empresa">Empresa</label>
          <input
            required
            type="text"
            v-model="company"
            name="company"
            id="company"
            class="form-control"
            placeholder="Nome da sua empresa"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-lg form-group m-0 field">
          <label for="mensagem">Mensagem</label>
          <textarea
            required
            type="text"
            v-model="message"
            name="message"
            id="message"
            class="form-control"
            placeholder="Sua mensagem..."
            rows="4"
          ></textarea>
        </div>
      </div>
      <button
        @submit.prevent="onSubmit"
        type="submit"
        class="btn mt-3 btn-block btn-pri"
      >
        Enviar
      </button>
    </form>
  </div>
</template>
<script>
import { VueTelInput } from "vue-tel-input";
import { validationMixin } from "vuelidate";
import { required, minLength, email } from "vuelidate/lib/validators";
import axios from "axios";

export default {
  components: {
    VueTelInput,
  },
  data() {
    return {
      nameContact: "",
      cel: "",
      email: "",
      company: "",
      message: "",
      foobar: "",
      dismissSecs: 3,
      dismissCountDown: 0
    };
  },
  methods: {
    onSubmit() {
      axios.post("https://formspree.io/f/mqkgyaen", {
        Nome: this.nameContact,
        Celular: this.cel,
        Email: this.email,
        Empresa: this.company,
        Mensagem: this.message,
      });
      this.$v.$touch();
      if (this.$v.$anyError) {
        return;
      } else {
        this.showAlert()
      }
    },
    validateState(email) {
      const { $dirty, $error } = this.$v.email;
      return $dirty ? !$error : null;
    },
    countDownChanged(dismissCountDown) {
        this.dismissCountDown = dismissCountDown
        if (dismissCountDown === 0) {
          location.reload()
        }
      },
    showAlert() {
      this.dismissCountDown = this.dismissSecs
    }
  },
  validations: {
    email: {
      required,
      email,
    },
  },
};
</script>
<style>
.notifications-list {
  position: relative;
  width: 320px;
  z-index: 100000000;

}
</style>
