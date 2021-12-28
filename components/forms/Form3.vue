<template>
  <div>
    <form @submit="onSubmit" >
      <div class="row">
        <div class="col-lg form-group m-0 field">
          <label for="nameContact">Nome</label>
          <input
            type="text"
            v-model="form.nameContact"
            name="nameContact"
            id="nameContact"
            class="form-control"
            placeholder="Seu nome"
          />
        </div>
        <div class="col-lg form-group m-0 field">
          <label for="telefone">Telefone</label>
          <vue-tel-input
            type="tel"
            v-model="form.cel"
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
            v-model="form.email"
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
            v-model="form.company"
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
            v-model="form.message"
            name="message"
            id="message"
            class="form-control"
            placeholder="Sua mensagem..."
            rows="4"
          ></textarea>
        </div>
      </div>
      <b-card class="mt-3" header="Form Data Result">
        <pre class="m-0">{{ form }}</pre>
      </b-card>
      <button type="submit" class="btn mt-3 btn-block btn-pri">Enviar</button>
    </form>
  </div>
</template>
<script>
import { VueTelInput } from "vue-tel-input";
import axios from 'axios'

export default {
  components: {
    VueTelInput,
  },
  data() {
    return {
      form: {
        nameContact: "",
        cel: "",
        email: "",
        company: "",
        message: "",
      }
    };
  },
 methods: {

		/**
		 * Handler for submit
		 */
		async onSubmit(event) {

      event.preventDefault();
      // 358 e o id do form que tu vai mandar
      try {
        const response = await axios.post(
          "https://norflor.com.br/news/wp-json/contact-form-7/v1/contact-forms/75/feedback",
          this.form
        );
        console.log(response)
      } catch (error) {
        console.log(error);
      }
    },
	}
};
  </script>
