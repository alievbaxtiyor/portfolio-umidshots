<template>
    <section class="relative w-full h-screen overflow-hidden">
      <!-- Video background -->
      <video autoplay muted loop playsinline class="absolute top-0 left-0 w-full h-full object-cover z-10">
      <source :src=BackVideo type="video/mp4" />
        Sizning brauzeringiz videoni qo‘llab-quvvatlamaydi.
      </video>
  
      <!-- Overlay -->
      <div class="absolute inset-0 bg-black bg-opacity-50 z-9"></div>
  
      <!-- Hero Content -->
      <div class="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 class="text-4xl md:text-6xl font-bold mb-4">Salom, Men <span class="bg-[#6F00A9]">Umidshots!</span></h1>
        <p class="text-lg md:text-xl mb-6 max-w-xl">Videograf, mobilograf va ijodiy lahzalarni ushlovchi!</p>
        <div class="space-x-4">
          
        </div>
      </div>
    </section>
</template>

<script setup lang="ts">
import BackVideo from "../assets/background-video.mp4"
</script>
  