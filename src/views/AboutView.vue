<template>
  <section class="about">
    <div class="container-xxl">
      <div class="row">
        <div class="col">
          <h2>О компании MAYA</h2>
        </div>
      </div>
      <div class="row d-flex align-items-center">
        <div class="col-5">
          <img src="../assets/img//about/photo.jpg" alt="">
        </div>
        <div class="col">
          <p><strong>Бренд MAYA создан мамой для мам.</strong> <br>
            Мы уверены - забота о будущем малыше начинается с заботы о себе. Поэтому наша продукция учитывает все потребности и желания женщины в период беременности и материнства. 
          </p>
          <p>Мы думаем о вашем комфорте, поэтому отбираем для пошива только качественные ткани.<br>
            Весь путь товара - от заказа ткани до отгрузки покупателю проходит под нашим контролем. <br>
            Мы создаем продукцию, которой хотим и можем гордиться. 
          </p>
          <p>
            <strong>Миссия MAYA</strong> - поддерживать женщин на пути беременности, рождения малыша и восстановления после родов. Наше белье для кормления создано, чтобы каждая мама чувствовала себя красивой, гармоничной и защищенной от чужих  взглядов. 
          </p>
          <p>
            Нежное, комфортное, бесшовное, поддерживающее и экологичное - наше белье подойдет и для свидания с мужем и для сна с малышом.
          </p>

          
        </div>
      </div>

      <div class="row d-flex justify-content-center about-block" >
        <div class="col-6 text-center about-block-text">
          <h3>Носите MAYА <br>
Наслаждайтесь материнством и своим отражением в зеркале</h3>
        </div>
      </div>
      
    </div>
  </section>
</template>

<script>
export default {
  props: {
    
  }
}
</script>

<style scoped lang="scss">
.about {
  h2 {
    padding-bottom: 5rem;
  }
  .about-block {
    margin-top: 5rem;
    border: 1px solid $pink;
    border-radius: 0.5rem;
    .about-block-text {
      padding: 2.5rem;
      
    }
  }
}
</style>
