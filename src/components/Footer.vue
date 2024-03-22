<template>
    <div class="mt-5">
        <footer class="bg-dark" id="tempaltemo_footer">
            <div class="container">
                <div class="row">

                    <div class="col-md-4 pt-2">
                        <h4 class="text-primary border-bottom border-light logo">Store+</h4>
                        <ul class="list-unstyled text-light footer-link-list">
                            <li>
                                <i class="fas fa-map-marker-alt fa-fw"></i>
                                Calle siempreviva 123
                            </li>
                            <li>
                                <i class="fa fa-phone fa-fw"></i>
                                <a class="text-decoration-none" href="tel:010-020-0340">010-020-0340</a>
                            </li>
                            <li>
                                <i class="fa fa-envelope fa-fw"></i>
                                <a class="text-decoration-none" href="mailto:info@company.com">info@company.com</a>
                            </li>
                        </ul>
                    </div>

                    <div class="col-md-4 pt-2">
                        <h4 class="text-light border-bottom border-light">Categorías</h4>
                        <ul class="list-unstyled text-light footer-link-list">
                            <li><router-link href="#" to="/Products/" class="text-decoration-none">Categorías</router-link></li>
                        </ul>
                    </div>

                    <div class="col-md-4 pt-2">
                        <h4 class="text-light border-bottom border-light">Información</h4>
                        <ul class="list-unstyled text-light footer-link-list">
                            <li><router-link href="#" to="/" class="text-decoration-none"   >Inicio</router-link></li>
                            <li><router-link href="#" to="/Aboutus/" class="text-decoration-none"   >Acerca de Nosotros</router-link></li>
                            <li><router-link href="#" to="/Products/" class="text-decoration-none">Productos</router-link></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="w-100 bg-black pb-0.5">
                <div class="container">
                    <div class="row p-2">
                        <div class="col-12 d-flex justify-content-between align-items-center">
                            <p class="text-left text-light mb-0">
                                Copyright &copy; 2024 Store+
                            </p>
                            <div class="col-auto">
                                <ul class="list-inline text-right footer-icons mb-0">
                                    <li class="list-inline-item border border-light rounded-circle text-center">
                                        <a class="text-light text-decoration-none" target="_blank" href="http://facebook.com/"><i class="fab fa-facebook-f fa-lg fa-fw"></i></a>
                                    </li>
                                    <li class="list-inline-item border border-light rounded-circle text-center">
                                        <a class="text-light text-decoration-none" target="_blank" href="https://www.instagram.com/"><i class="fab fa-instagram fa-lg fa-fw"></i></a>
                                    </li>
                                    <li class="list-inline-item border border-light rounded-circle text-center">
                                        <a class="text-light text-decoration-none" target="_blank" href="https://twitter.com/"><i class="fab fa-twitter fa-lg fa-fw"></i></a>
                                    </li>
                                    <li class="list-inline-item border border-light rounded-circle text-center">
                                        <a class="text-light text-decoration-none" target="_blank" href="https://www.linkedin.com/"><i class="fab fa-linkedin fa-lg fa-fw"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    li {
        font-size: 12px !important;
    }
</style>