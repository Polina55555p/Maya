<template>
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
            <img src="@/assets/img/mainSlider/greySlide.jpg" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
                <img src="@/assets/img/mainSlider/logo.png" alt="">
                <h5>Бандаж ДО и ПОСЛЕ родов</h5>
            </div>
            </div>
            <div class="carousel-item">
                <img src="@/assets/img/mainSlider/pinkSlide.jpg" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <img src="@/assets/img/mainSlider/logo.png" alt="">
                    <h5>Бельё для беременных и кормящих</h5>
                </div>
            </div>
            <div class="carousel-item">
                <img src="@/assets/img/mainSlider/2pinkSlide.jpg" class="d-block w-100" alt="...">
                <div class="carousel-caption _right d-none d-md-block">
                    <h1 class="d-block">maya base</h1>
                    <h2 class="text-end">1+1 = 1390₽</h2>
                    <h5>*подарочая упаковка</h5>
                </div>
            </div>
        </div>
        <div class="button-container">
            <my-button class="btn-border carousel-button">Ru/En</my-button>
        </div>
        
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped lang="scss">
.carousel {
    .carousel-caption {
        top: 40%;
        h5 {
            padding-top: 25%;
        }
        &._right {
            text-align: right;
            top: 50%;
            text-transform: uppercase;
            h5 {
            padding-top: 0;
            }
            h1 {
                font-size: 96px;
            }
        }
    }
    .carousel-indicators [data-bs-target] {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    margin-right: 1rem;
    margin-left: 1rem;
    }
    .carousel-indicators {
        margin-bottom: 4.1875rem;

    }
    .carousel-control-next {
        align-items: flex-end;
        margin-bottom: 4.1875rem;
    }
    .button-container {
        width: 15%;
        position: absolute;
        bottom: 0;
        text-align: end;
    }
    .carousel-button {
        z-index: 1;
        margin-bottom: 4.1875rem;
        left: 0;

    }

}

</style>