<template>
  <div class="tracking-wider bg-[#F0F0F3]">
    <TheHeader />
    <BottomHeader />
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from './components/UX/TheHeader.vue'
import TheFooter from './components/UX/TheFooter.vue'
import BottomHeader from './components/UX/BottomHeader.vue'

export default {
  components: {
    TheHeader,
    TheFooter,
    BottomHeader
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

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}


.fade-enter-from,
.fade-leave-to {

  transform: opacity(0);
}

</style>
