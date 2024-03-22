<template>
    <div class="t-5 bg-light">
        <section class="container py-5">
            <div class="row text-center pt-3">
                <div class="col-lg-6 m-auto">
                    <h1 class="h1">Categorías</h1>
                </div>
            </div>
            <div class="row">
                <div class="col-12 col-md-4 p-5 mt-3">
                    <a><img src="../assets/img/carcasa.webp" class="rounded-circle img-fluid border"></a>
                    <h5 class="text-center mt-3 mb-3">Smartphones</h5>
                    <p class="text-center"><router-link class="btn btn-primary" :to="{ name: 'Categoric', params: { category: 'smartphones' } }">Ver productos</router-link></p>
                </div>
                
                <div class="col-12 col-md-4 p-5 mt-3">
                    <a><img src="../assets/img/ropamujer.svg" class="rounded-circle img-fluid border">
                    </a>
                    <h2 class="h5 text-center mt-3 mb-3">Ropa para mujeres</h2>
                    <p class="text-center"><router-link class="btn btn-primary" :to="{ name: 'Categoric', params: { category: 'womens-dresses' } }">Ver productos</router-link></p>
                </div>
                <div class="col-12 col-md-4 p-5 mt-3">
                    <a ><img src="../assets/img/mobiliario.svg" class="rounded-circle img-fluid border"></a>
                    <h2 class="h5 text-center mt-3 mb-3">Mobiliario</h2>
                    <p class="text-center"><router-link class="btn btn-primary" :to="{ name: 'Categoric', params: { category: 'furniture' } }">Ver productos</router-link></p>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        data() {
            return {
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>