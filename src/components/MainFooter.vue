<template>
  <footer class="footer">
    <div class="container-xxl">
      <h2>Следите за нашими новинками</h2>
      <ul class="mx-auto pt-5 mb-2 mb-lg-0 w-100 d-flex justify-content-center">
        <li class="footer-item px-5" aria-current="page" v-for="(menu, index) in footerMenu" :key="index">
            <router-link class='footer-link' :to="menu.path">
              {{ menu.name }}
            </router-link>
          </li>
      </ul>
      <div class="row d-flex justify-content-center pt-5">
        <div class="col-4">
          <ul class="d-flex justify-content-between">
            <li>
              <a href="#">
                <img src="@/assets/img/footer/insta.svg" alt="">
              </a>
            </li>
            <li>
              <a href="#">
                <img src="@/assets/img/footer/youtube.svg" alt="">
              </a>
            </li>
            <li>
              <a href="#">
                <img src="@/assets/img/footer/telegram.svg" alt="">
              </a>
            </li>
          </ul>
        </div>
      </div>
      <figure class="text-center footer-text pt-5">
      <blockquote class="blockquote">
        <p>Оставьте адрес своей электронной почты</p>
        </blockquote>
      </figure>
      <div class="row justify-content-center mb-5">
        <form action="send" class="col-8 d-flex align-items-center justify-content-between">
            <my-input class='' placeholder="Ivanovivan@mail.ru" id="mailCallback" required/>
           <my-button class='btn-pink' type="submit">Получать новости на email</my-button>
        </form>
      </div>
      <div class="row justify-content-between footer-text align-items-center py-5">
        <div class="col-2">
          <div class="inn">ИНН 458475835656</div>
          <div class="ogrn">ОГРН 34894589345</div>
        </div>
        <div class="col-3">Maya store (C) 2023 Все права защищены</div>
        <div class="col-3 text-end">
          <a class="number">8 (800) 233-44-55</a> <br>
          <a href="#">Политика конфиденциальности</a>
        </div>
      </div>
    </div>
       
  </footer>
</template>
  
<script>
import {menuList} from '@/GlobalData/MenuLinks';
  
  export default {
    name: "main-footer",
    props: {},
    data() {
        return {
            footerMenu: menuList,
        };
    },
}
</script>
  
<style scoped lang="scss">
.footer {
  .footer-link {
    color: $dark-text;
  }
  .footer-text {
    color: rgba(77, 77, 77, 0.5);
    font-size: 14px;
  }
}

  
  
  
</style>