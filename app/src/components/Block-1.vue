<template>
  <div>
      <span class="font-bold text-[24px]">Актуальные предложения</span>
      <div class="flex flex-col justify-between bg-white w-full  rounded-md mt-6 drop-shadow-xl gap-6 p-6">
          <div class="flex gap-4">
              <SmallButtonLink>Аксессуары</SmallButtonLink>
              <SmallButtonLink>Паркет</SmallButtonLink>
              <SmallButtonLink>Ламинат</SmallButtonLink>
              <SmallButtonLink>Сезонные товары</SmallButtonLink>
              <SmallButtonLink>Светотехника</SmallButtonLink>
              <SmallButtonLink>Модульные покрытия</SmallButtonLink>
          </div>
          <div class="flex gap-8 justify-between">
              <Block1Product/>
              <Block1Product/>
              <Block1Product/>
          </div>
      </div>
  </div>
</template>

<script>
import SmallButtonLink from "./UI/SmallButtonLink.vue";
import Block1Product from "./UI/Block-1-Product.vue";
export default {
    components: { SmallButtonLink, Block1Product }
}
</script>

<style>

</style>