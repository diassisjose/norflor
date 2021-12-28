<template>
    <a type="button" class="btn btn-play rounded-pill play" :target="option" :href="href">
        <i class="fa fa-play" aria-hidden="true"></i>{{btnTxt}}

    </a>
</template>

<script>
export default {
  props: ["btnTxt", "href", "option"]
};
</script>
