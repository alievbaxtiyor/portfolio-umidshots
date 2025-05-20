<template>
  <header class="bg-[var(--superDark)] shadow-md overflow-hidden">
    <div class="container mx-auto px-4 py-6 flex justify-evenly items-center ">
      <!-- Logo -->
    <div>
      <h1 class="text-3xl  text-white mb-3 uppercase font-medium cursor-pointer">Umidshots</h1>

    </div>
      <!-- Desktop Menu -->
    <div>
      <nav class="hidden md:flex space-x-20 text-white font-medium ">
        <a href="#" class="relative font-medium text-white hover:font-semibold transition-all duration-300 
          after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] 
          after:w-0 after:bg-[#6F00A9] hover:after:w-full after:transition-all after:duration-300">Bosh sahifa</a>
          <a href="#" class="relative font-medium text-white hover:font-semibold transition-all duration-300 
          after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] 
          after:w-0 after:bg-[#6F00A9] hover:after:w-full after:transition-all after:duration-300">Men haqimda</a>
        <a href="#" class="relative font-medium text-white hover:font-semibold transition-all duration-300 
          after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] 
          after:w-0 after:bg-[#6F00A9] hover:after:w-full after:transition-all after:duration-300">Ishlarim </a>  
        <a href="#" class="relative font-medium text-white hover:font-semibold transition-all duration-300 
          after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] 
          after:w-0 after:bg-[#6F00A9] hover:after:w-full after:transition-all after:duration-300">Mijozlar fikri</a>
        <a href="#" class="relative font-medium text-white hover:font-semibold transition-all duration-300 
          after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] 
          after:w-0 after:bg-[#6F00A9] hover:after:w-full after:transition-all after:duration-300">Xizmatlar</a>
        <a href="#" class="relative font-medium text-white hover:font-semibold transition-all duration-300 
          after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] 
          after:w-0 after:bg-[#6F00A9] hover:after:w-full after:transition-all after:duration-300">Aloqa</a>

      </nav>
    </div>

      <!-- Mobile Button -->
      <button class="md:hidden mt-3 text-gray-700" @click="toggleMenu">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2"
             viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
          <path d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div v-if="isOpen" class="md:hidden px-4 pb-4 text-center space-y-2">
      <a href="#" class="block text-gray-700 hover:text-blue-500">Home</a>
      <a href="#" class="block text-gray-700 hover:text-blue-500">About</a>
      <a href="#" class="block text-gray-700 hover:text-blue-500">Projects</a>
      <a href="#" class="block text-gray-700 hover:text-blue-500">Contact</a>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)

function toggleMenu() {
  isOpen.value = !isOpen.value
}
</script>
