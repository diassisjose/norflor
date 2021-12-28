<template>
    <a type="button" class="btn btn-prib rounded-pill" :target="option" :href="href"
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="false"
    >{{btnTxt}}
        <i class="fa fa-eye" aria-hidden="true"></i>
    </a>
</template>

<script>
export default {
    props: [
        'btnTxt',
        'href',
        "option"
    ]

}
</script>
