<template>
  <div class="mainHeader  w-100">
    <nav class="navbar navbar-expand-lg">
      <div class="container-xxl">
        
        <router-link class="navbar-brand" to="/">
          <template v-if="!check">
            <img src="@/assets/img/header/logo-dark.svg" alt="">
          </template>
          <template v-else>
            <img src="@/assets/img/header/logo.svg" alt="">
          </template>    
        </router-link>
          <ul class="navbar-nav mx-auto mb-2 mb-lg-0 w-100 d-flex justify-content-around align-items-center">
            <li class="nav-item" aria-current="page" v-for="(menu, index) in headerMenuList" :key="index">
              <router-link :class='(check ? "" : "dark") + " nav-link"' :to="menu.path">
                {{ menu.name }}
              </router-link>
            </li >
            <li class="nav-item" aria-current="page">
              <a  class="cart-link position-relative" @click="$router.push('/cart')" > 
                <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="25pt" height="25pt" viewBox="0 0 1280.000000 1082.000000" preserveAspectRatio="xMidYMid meet">
                  <g  transform="translate(0.000000,1082.000000) scale(0.100000,-0.100000)" stroke="none" :fill='(check ? "#fff" : "#4D4D4D")'>
                  <path d="M11700 10810 c-337 -33 -629 -132 -869 -291 -102 -69 -149 -107 -260 -214 -126 -121 -215 -229 -324 -394 -51 -76 -96 -145 -102 -154 -8 -12 -76 -19 -350 -36 -187 -12 -475 -30 -640 -41 -165 -11 -438 -29 -607 -40 -170 -11 -445 -29 -613 -40 -168 -11 -442 -29 -610 -40 -168 -11 -442 -29 -610 -40 -168 -11 -441 -29 -607 -40 -167 -11 -1196 -78 -2288 -150 -2225 -146 -2327 -153 -2740 -180 -320 -22 -390 -34 -503 -92 -101 -50 -177 -106 -262 -192 -184 -185 -298 -426 -311 -656 -6 -91 -1 -118 95 -610 56 -283 124 -630 152 -770 56 -285 212 -1079 378 -1925 61 -308 121 -617 135 -687 38 -196 113 -341 248 -484 142 -149 319 -246 518 -284 35 -7 1337 -10 3797 -10 l3743 0 -5 -22 c-3 -13 -41 -239 -85 -502 -44 -264 -82 -482 -85 -484 -2 -3 -42 -11 -87 -19 -438 -75 -811 -405 -945 -835 l-28 -91 -470 7 c-258 3 -1166 9 -2017 12 l-1547 7 -26 86 c-95 306 -327 575 -621 720 -173 85 -336 122 -534 123 -202 0 -358 -36 -536 -122 -579 -281 -837 -972 -584 -1566 150 -352 449 -608 820 -704 287 -74 627 -30 885 115 156 87 324 240 417 381 65 97 133 242 163 348 14 50 27 92 29 94 3 2 757 -1 1678 -7 920 -6 1822 -11 2005 -11 l332 0 16 -58 c98 -355 323 -628 649 -788 589 -287 1290 -57 1605 527 49 91 93 214 117 329 25 117 25 353 0 470 -66 314 -236 575 -496 761 -79 57 -221 131 -275 145 -14 3 -25 8 -25 10 0 3 22 136 50 297 27 160 124 737 215 1282 91 545 210 1256 265 1580 55 325 155 925 224 1335 487 2899 444 2660 478 2715 112 182 315 405 455 498 158 105 340 172 548 202 188 27 530 17 779 -25 33 -5 61 -8 63 -6 3 3 81 509 78 513 -2 4 -140 24 -260 39 -146 18 -499 26 -615 14z m-1732 -2007 c-37 -225 -161 -959 -274 -1633 -112 -674 -227 -1355 -254 -1515 -27 -159 -101 -603 -165 -985 -64 -382 -118 -696 -119 -697 -1 -1 -1689 -5 -3751 -9 -3547 -7 -3753 -6 -3810 10 -33 10 -82 30 -108 44 -61 33 -142 120 -173 186 -17 36 -55 212 -129 586 -236 1210 -408 2085 -537 2733 -135 678 -136 687 -70 820 52 104 141 201 223 240 58 28 53 27 584 62 222 14 3886 255 4503 295 166 11 439 29 607 40 168 11 442 29 610 40 168 11 442 29 610 40 168 11 442 29 610 40 168 11 441 29 608 40 166 11 444 29 617 40 173 11 329 22 345 23 17 2 55 5 86 5 l56 2 -69 -407z m-7214 -6948 c246 -52 441 -252 492 -505 67 -336 -153 -670 -492 -746 -97 -21 -241 -15 -334 15 -184 59 -337 208 -408 399 -18 50 -26 93 -30 173 -6 131 13 227 66 332 48 98 179 229 274 275 138 68 289 87 432 57z m6456 -26 c111 -36 180 -79 265 -164 127 -127 185 -265 185 -447 0 -117 -14 -176 -66 -285 -35 -73 -60 -108 -117 -166 -125 -126 -278 -189 -461 -188 -178 1 -314 58 -441 186 -117 117 -178 246 -191 405 -27 319 209 622 528 679 79 15 223 5 298 -20z"/>
                  <path d="M8140 7940 c-289 -21 -544 -39 -1600 -110 -410 -28 -810 -55 -890 -60 -80 -5 -480 -32 -890 -60 -410 -28 -875 -59 -1035 -70 -159 -11 -495 -33 -745 -50 -584 -38 -618 -42 -681 -77 -127 -69 -186 -214 -145 -355 29 -102 135 -195 241 -212 22 -4 173 2 335 14 162 11 630 42 1040 70 410 28 810 55 890 60 80 5 480 32 890 60 410 28 810 55 890 60 80 5 413 28 740 50 1395 94 1338 90 1394 111 200 74 259 326 114 484 -97 106 -149 114 -548 85z"/>
                  <path d="M4747 5839 c-1733 -6 -2358 -11 -2385 -19 -96 -30 -186 -123 -212 -220 -36 -131 35 -280 165 -348 l50 -27 2680 4 c1474 2 2869 7 3100 10 410 6 421 7 466 29 131 64 199 207 164 343 -28 110 -105 193 -207 224 -59 17 119 17 -3821 4z"/>
                  </g>
                  </svg>
                  <span class="position-absolute top-20 start-100 translate-middle badge rounded-pill">
                    {{ CART.length }}
                  </span>
              </a>
            </li>
          </ul>
          <a href="#" class="phone d-flex align-items-center">
            <template v-if="!check">
            <img src="@/assets/img/header/phone-dark.svg" alt="">
          </template>
          <template v-else>
            <img src="@/assets/img/header/phone.svg" alt="">
          </template>  
            <div :class='(check ? "" : "dark")' class="text-nowrap ps-3"> 8 (800) 233-44-55</div>
         </a>
        </div>
    </nav>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';
import {menuList} from '@/GlobalData/MenuLinks';
import { mapGetters } from 'vuex';

export default {
    name: "main-header",
    data() {
        return {
            headerMenuList: menuList     
        }

    },
    computed: {
      check() {
        return this.$route.name === 'home';
      },
      ...mapGetters ([
        'CART'
      ])
    }       
}

</script>

<style scoped lang="scss">
.mainHeader {
  z-index: 10;
  padding-top: 100px;
  position: absolute;
  color: $lite-text;
  .navbar {
  background-color: transparent;
  .nav-link {
    color: $lite-text;
    }
    .dark {
    color: $dark-text;
    }
  }
  .navbar-nav {
        .router-link-exact-active {
            position: relative;
            &::after {
                position:absolute;
                content: '';
                width: 100%;
                height: 1px;
                background-color: $pink-transparent;
                bottom: 0.5rem;
                left: 0;
            }
        }

    }  

}
.cart-link {
  cursor: pointer;
}
.rounded-pill {
  background-color: $pink-transparent;
}
</style>
