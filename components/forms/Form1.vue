<template>
  <div class="p-4">
    <client-only>
    <b-form @submit.stop.prevent="onSubmit">
      <b-form-group label-size="sm"  id="example-input-group-1" label="Seu nome" label-for="example-input-1">
        <b-form-input
          name="example-input-1"
          v-model="$v.form.name.$model"
          :state="$v.form.name.$dirty ? !$v.form.name.$error : null"
          aria-describedby="input-1-live-feedback"
        ></b-form-input>

        <b-form-invalid-feedback
          id="input-1-live-feedback"
        >Este é um campo obrigatório e deve ter pelo menos 3 caracteres.</b-form-invalid-feedback>
      </b-form-group>
      <b-form-group label-size="sm"  id="example-input-group-2" label="Seu e-Mail" label-for="example-input-2">
        <b-form-input
          id="example-input-2"
          name="example-input-2"
          v-model="$v.form.email.$model"
          :state="$v.form.email.$dirty ? !$v.form.email.$error : null"
          aria-describedby="input-2-live-feedback"
        ></b-form-input>

        <b-form-invalid-feedback id="input-2-live-feedback">Digite um email válido.</b-form-invalid-feedback>
      </b-form-group>
      <b-form-group label-size="sm"  id="example-input-group-3" label="Telefone" label-for="example-input-3">
        <b-form-input
          id="example-input-3"
          name="example-input-3"
          v-model="$v.form.phone.$model"
          :state="$v.form.phone.$dirty ? !$v.form.phone.$error : null"
          aria-describedby="input-3-live-feedback"
        ></b-form-input>

        <b-form-invalid-feedback id="input-3-live-feedback">Digite um email válido.</b-form-invalid-feedback>
      </b-form-group>
      <b-form-group label-size="sm"  label="Telefone" label-for="textarea">
        <b-form-textarea
          id="textarea"
          v-model="$v.form.content.$model"
          :state="$v.form.content.$dirty ? !$v.form.content.$error : null"
          placeholder="Envie-nos sua mensagem..."
          rows="4"
        ></b-form-textarea>
        <b-form-invalid-feedback id="input-3-live-feedback">Entre com sua mensagem.</b-form-invalid-feedback>
      </b-form-group>

      <b-button type="submit" variant="primary" :disabled="$v.form.$invalid">Submit</b-button>
    </b-form>
    </client-only>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, minLength } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  data() {
    return {
      form: {
        name: null,
        email: null,
        phone: null,
        content: null
      }
    };
  },
  validations: {
    form: {
      name: {
        required,
        minLength: minLength(3)
      },
      email: {
        required,
        minLength: minLength(10)
      },
      phone: {
        required,
        minLength: minLength(8)
      },
      content: {
        required,
        minLength: minLength(15)
      }
    }
  },
  methods: {
    onSubmit() {
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }

      // Form submit logic
    }
  }
};
</script>
