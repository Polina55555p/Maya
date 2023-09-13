<template>
    <div class="preHeader w-100">
        <router-link to="/">{{ msg }}</router-link>
    </div>
  </template>
  
  <script>
  
  export default {
      name: "PreHeader",
      props: {
        

      },
      data() {
          return {
            msg: "Познакомьтесь с акциями этого месяца от MAYA"  
          };
      },
  }
  </script>
  
  <style scoped lang="scss">
  .preHeader {
    text-align: center;
    color: $lite-text;
    position: absolute;
    z-index: 10;
    padding: 1.5rem;
    background-color: $pink-transparent;
    
    
  }
  
  
  </style>
  