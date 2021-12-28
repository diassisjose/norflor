<template>
  <div>
    <select
      class="btn-category btn btn-secondary text-center"
      placeholder="Teste"
      >
      <option value="" class="" disabled selected>Select car:</option>
      <option value="1"></option>
      <option value="2">BMW</option>
      <option value="3">Citroen</option>
      <option value="4">Ford</option>
      <option value="5">Honda</option>
    </select>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.btn-category {
  border-radius: 40px;
  padding: 8px 15px;
  font-size: 8pt;
  text-transform: uppercase;
  border: 1px solid var(--v3);
  color: var(--v1);
  background: #63636300;
}

.btn-category:hover {
  padding: 8px 15px;
  color: #fff;
  background: var(--v3);
}

</style>
