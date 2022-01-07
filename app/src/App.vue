<template>
  <div class="tracking-wider">
    <TheHeader />
    <BottomHeader />
    <div
      class="container grid grid-cols-[3fr,9fr] grid-rows-auto w-full mx-auto gap-6"
    >
      <LeftSidebar class="row-span-4 col-span-1" />
      <Slider class="" />
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
      <Block3/>
    </div>
  </div>
</template>

<script>
import TheHeader from './components/UX/TheHeader.vue'
import BottomHeader from './components/UX/BottomHeader.vue'
import LeftSidebar from './components/UX/LeftSidebar.vue'
import Slider from './components/Slider.vue'
import Block1 from './components/Block-1.vue'
import Block2 from './components/Block-2.vue'
import LogosPart from './components/LogosPart.vue'
import Block3 from './components/UX/Block-3.vue'

export default {
  components: {
    TheHeader,
    BottomHeader,
    LeftSidebar,
    Slider,
    Block1,
    Block2,
    LogosPart,
    Block3
}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;800&display=swap');

html {
  background-color: #f0f0f3;
}

#app {
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 0.05em;
}
</style>
