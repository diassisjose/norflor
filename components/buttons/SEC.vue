<template>
    <nuxt-link type="button" class="btn btn-sec rounded-pill " :to="href">{{btnTxt}} 
        <i :class="'fa '+ icon" aria-hidden="true"></i>
    </nuxt-link>
</template>

<script>
export default {
    props: [
        'btnTxt',
        'href',
        'icon'
    ]

}
</script>