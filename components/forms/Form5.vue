<template>
  <div>
    <form method="POST" @submit.prevent="onSubmit">
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
      <button type="submit" class="btn mt-3 btn-block btn-pri">Enviar</button>
    </form>
  </div>
</template>
<script>
import { VueTelInput } from "vue-tel-input"
import axios from 'axios'

export default {
  components: {
    VueTelInput,
  },
  data() {
    return {
      nameContact: '',
      cel: '',
      email: '',
      company: '',
      message: '',
    };
  },
  methods: {
    async onSubmit(event) {
      event.preventDefault();
      try {
        const data = new FormData();

        data.append("nameContact", nameContact);
        data.append("cel", cel);
        data.append("email", email);
        data.append("company", company);
        data.append("message", message);

        const response = await axios.post("https://norflor.com.br/news/wp-json/contact-form-7/v1/contact-forms/78/feedback", data);

        alert(data);

        console.log(response)
      } catch (error) {
        console.log(error);
      }
    }
  }
}
</script>
