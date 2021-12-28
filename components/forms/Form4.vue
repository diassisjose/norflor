<template>
  <div>
    <form method="POST">
      <div class="row">
        <div class="col-lg form-group m-0 field">
          <label for="nameContact">Nome</label>
          <input
            type="text"
            v-model="nameContact"
            name="nameContact"
            id="nameContact"
            class="form-control"
            placeholder="Seu nome"
          />
        </div>
        <div class="col-lg form-group m-0 field">
          <label for="telefone">Telefone</label>
          <vue-tel-input
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
          <input
            type="text"
            v-model="email"
            name="email"
            id="email"
            class="form-control"
            placeholder="Seu melhor email"
          />
        </div>
        <div class="col-lg form-group m-0 field">
          <label for="empresa">Empresa</label>
          <input
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
      <button type="submit" @submit.prevent="onSubmit" class="btn mt-3 btn-block btn-pri">Enviar</button>
    </form>
  </div>
</template>
<script>
import { VueTelInput } from "vue-tel-input";
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
    };
  },
  methods: {
    onSubmit() {
      axios.post("https://formspree.io/f/xpzojnka", {
        nameContact: this.nameContact,
        cel: this.cel,
        email: this.email,
        company: this.company,
        message: this.message,
      })
      
    }
  },
};
</script>
