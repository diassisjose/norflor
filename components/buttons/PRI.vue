<template>
  <a type="button" class="btn btn-pri rounded-pill" :target="option" :href="href">
    {{btnTxt}}</a>
</template>

<script>
export default {
  props: ["btnTxt", "href", "option"]
};
</script>
