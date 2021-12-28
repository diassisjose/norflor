<template>
    <div class="">
        <div class="container pt-5 pb-2 ">
            <div class="col-md-6 row mx-auto justify-content-center align-items-center flex-column pt-5">
                <h2 class="font-weight-bold pb-3 text-center justify-content-center"
                    data-aos="fade-in"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                >{{titleSec}}</h2>
                <p class="text-center p-title"
                    data-aos="fade-in"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                >{{txtSec}}</p>
            </div>
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
