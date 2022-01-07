<template>
  <div class="h-[130px] w-full flex gap-6">
    <div class="w-2/3 bg-white drop-shadow-xl rounded-md">
      <div class="w-full h-full grid grid-cols-4">
        <div class="flex flex-col gap-1 justify-center items-center">
          <img src="../assets/icons/bl2.png" alt="" />
          <span class="font-bold">4 магазина</span>
          <span>в Крыму</span>
        </div>
        <div class="flex flex-col gap-1 justify-center items-center">
          <img src="../assets/icons/bl3.png" alt="" />
          <span class="font-bold">Гарантия </span>
          <span>до 10 лет</span>
        </div>
        <div class="flex flex-col gap-1 justify-center items-center">
          <img src="../assets/icons/bl4.png" alt="" />
          <span class="font-bold">Более 1000 </span>
          <span>моделей товара</span>
        </div>
        <div class="flex flex-col gap-1 justify-center items-center">
          <img src="../assets/icons/bl5.png" alt="" />
          <span class="font-bold">Оплата </span>
          <span>Любые способы</span>
        </div>
      </div>
    </div>
    <div class="w-1/3 bg-white drop-shadow-xl rounded-md overflow-hidden">
    <div class="flex flex-col h-full">
      <div class="h-1/2 gradient flex justify-center items-center text-white font-bold cursor-pointer">Подобрать покрытие</div>
      <div class="h-1/2 flex justify-center items-center font-bold">Нужна консультация</div>
    </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'

// const key = 'ck_367a72a30c729f212068b96d8150b45d036e170e'
// const secret = 'cs_b1f8dceeb3a54561179c89d6ab98296b5fd83598'

export default {
  data () {
    return {
      info: ''
    }
  }
}
</script>
