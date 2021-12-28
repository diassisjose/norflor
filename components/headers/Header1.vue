<template>
    <div class="row no-gutters bg-side pb-5">
        <div class="col-md-6 px-md-5 no-gutters">
            <div class="left-side pl-md-5 px-4">
                <h1 class="header1 font-weight-bold text-section-sup"
                    data-aos="fade-right"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                >{{titleHeader}}</h1>
                <p class="py-3 p-head"
                    data-aos="fade-right"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                >{{txtHeader}}</p>
                <PRI :class="'mr-2 '+classBtn1" :btnTxt="txtBtn1" :option="option" :href="linkBtn1"/>
                <SEC :class="'mr-2 '+classBtn2" :btnTxt="txtBtn2" :href="linkBtn2"/>
            </div>
        </div>
        <div class="col-md-6 no-gutters">
            <div class="justify-content-right d-sm-block d-none"
                data-aos="fade-in"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                >
                <img class="right-side img-responsive img-header-shadow" :data-src="'/'+imgHeader" :alt="altImg" height="100%" width="100%" align="right" v-lazy-load>
            </div>
        </div>
    </div>
</template>

<script>
import PRI from '@/components/buttons/PRI'
import SEC from '@/components/buttons/SEC'
export default {
    components: {
        PRI, SEC
    },
    props: [
        'imgHeader',
        'altImg',
        'titleHeader',
        'txtHeader',
        'txtBtn1',
        'linkBtn1',
        'classBtn1',
        'txtBtn2',
        'linkBtn2',
        'classBtn2',
        "option"
    ]
}
</script>

