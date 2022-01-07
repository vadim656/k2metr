<template>
  <div>
    <div
      class="container grid grid-cols-[3fr,9fr] grid-rows-auto w-full mx-auto gap-6"
    >
      <div
        class="w-full h-full bg-white box-1 rounded-md flex flex-col row-span-4 col-span-1"
      >
        <div>Акции</div>
        <div>Категории</div>
      </div>
      <div>
        <img
          class="w-full h-auto object-cover"
          src="../assets/img/slider.png"
          alt=""
        />
      </div>
      <Block1 class="" />
      <Block2 class=" row-span-3" />
    </div>
    <div class="flex gap-4 my-6 justify-between container mx-auto w-full">
      <LogosPart />
      <LogosPart />
      <LogosPart />
      <LogosPart />
      <LogosPart />
      <LogosPart />
      <LogosPart />
    </div>
    <div class="container mx-auto w-full my-6">
      <Block3 />
    </div>
  </div>
</template>

<script>
import LeftSidebar from '../components/UX/LeftSidebar.vue'
import Slider from '../components/Slider.vue'
import Block1 from '../components/Block-1.vue'
import Block2 from '../components/Block-2.vue'
import LogosPart from '../components/LogosPart.vue'
import Block3 from '../components/UX/Block-3.vue'

export default {
  components: {
    LeftSidebar,
    Slider,
    Block1,
    Block2,
    LogosPart,
    Block3
  }
}
</script>
