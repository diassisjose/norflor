<template>
    <div class="col-md pt-5"
        data-aos="fade-in"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
    >
        <div class="justify-content-left align-items-left pt-3">
            <h2 class="font-weight-bold pb-3">{{titleSec}}</h2>
            <p class="text-left">{{txtSec}}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        'titleSec',
        'txtSec'
    ]
}
</script>