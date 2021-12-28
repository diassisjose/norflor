<template>
    <div class="footer text-dark">
        <div class="row">
            <div class="col-auto pr-5 mr-5">
                <img data-src="/logo-norflor-color-h.png" height="55px" alt="" v-lazy-load>
                <p class="letter-footer">Planting, Harvesting and Transforming.</p>
            </div>
            <div class="col-md-5 pr-5 mr-5 mt-md-3">
                <h6 class="h6-footer">Main Office</h6>
                <p class="p-footer">Av. Dr. José Corrêa Machado, 1380 - 1º floor<br> Jardim
                  São Luiz - Montes Claros - MG<br> CEP: 39.401-856 <br>Phone: +55 38 2101-3000</p>
            </div>
            <div class="col-auto mt-3">
                <CTA btnTxt="Alô, Norflor!"/>
            </div>
        </div>

    </div>
</template>

<script>
import CTA from '@/components/buttons/CTA'
export default {
    components: {
        CTA,
    }
}
</script>
