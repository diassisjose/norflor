<template>
    <div>
      <a type="button" class=" btn-post-p " :target="option" :href="href">
      <p class="btn-pri-post btn-post-p rounded-pill"><i class="fa fa-circle white-icon" aria-hidden="true"></i>{{btnTxt}}</p></a>
    </div>
</template>

<script>
export default {
  props: ['btnTxt', 'href', 'option']
}
</script>
