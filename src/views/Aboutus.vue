<template>
    <div>
        <section class="bg-primary py-5">
            <div class="container">
                <div class="row align-items-center py-5">
                    <div class="col-md-8 text-white">
                        <h1>Nosotros</h1>
                        <p>
                            Somos una tienda virtual.
                        </p>
                    </div>
                    <div class="col-md-4">
                        <img src="#" alt="About Hero">
                    </div>
                </div>
            </div>
        </section>

        <section class="container py-5">
        <div class="row text-center pt-5 pb-3">
            <div class="col-lg-6 m-auto">
                <h1 class="h1">Nuestros Servicios</h1>
                <p>
                    Estamos para ti.
                </p>
            </div>
        </div>
        <div class="row">

            <div class="col-md-6 col-lg-3 pb-5">
                <div class="h-100 py-5 services-icon-wap shadow">
                    <div class="h1 text-primary text-center"><i class="fa fa-truck fa-lg"></i></div>
                    <h2 class="h5 mt-4 text-center">Envíos a todo Colombia</h2>
                </div>
            </div>

            <div class="col-md-6 col-lg-3 pb-5">
                <div class="h-100 py-5 services-icon-wap shadow">
                    <div class="h1 text-primary text-center"><i class="fas fa-exchange-alt"></i></div>
                    <h2 class="h5 mt-4 text-center">Pago contra entrega</h2>
                </div>
            </div>

            <div class="col-md-6 col-lg-3 pb-5">
                <div class="h-100 py-5 services-icon-wap shadow">
                    <div class="h1 text-primary text-center"><i class="fa fa-percent"></i></div>
                    <h2 class="h5 mt-4 text-center">Promociones</h2>
                </div>
            </div>

            <div class="col-md-6 col-lg-3 pb-5">
                <div class="h-100 py-5 services-icon-wap shadow">
                    <div class="h1 text-primary text-center"><i class="fa fa-user"></i></div>
                    <h2 class="h5 mt-4 text-center">Servicio personalizado</h2>
                </div>
            </div>
            
        </div>
    </section>

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.services-icon-wap:hover {
    background-color: #007bff;
}
.services-icon-wap:hover .fa,
.services-icon-wap:hover .fas {
    color: #fff; 
}
.services-icon-wap:hover h1, .services-icon-wap:hover h2 {
    color: #fff; 
}
</style>
