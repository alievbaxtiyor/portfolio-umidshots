<template>
  <div class="overflow-x-hidden bg-black text-white">
    <!-- Navbar -->
    <header class="bg-[var(--superDark)] shadow-md">
      <div class="container mx-auto px-4 py-6 flex justify-evenly items-center">
        <div>
          <h1 class="text-3xl text-white mb-3 uppercase font-medium cursor-pointer">Umidshots</h1>
        </div>
        <div>
          <nav class="hidden md:flex space-x-20 text-white font-medium">
            <a href="#main" class="nav-link">Bosh sahifa</a>
            <a href="#about" class="nav-link">Men haqimda</a>
            <a href="#" class="nav-link">Ishlarim</a>
            <a href="#" class="nav-link">Mijozlar fikri</a>
            <a href="#" class="nav-link">Xizmatlar</a>
            <a href="#" class="nav-link">Aloqa</a>
          </nav>
        </div>
        <button class="md:hidden mt-3 text-gray-700" @click="toggleMenu">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
      </div>
      <div v-if="isOpen" class="md:hidden px-4 pb-4 text-center space-y-2">
        <a href="#" class="block text-gray-700 hover:text-blue-500">Home</a>
        <a href="#" class="block text-gray-700 hover:text-blue-500">About</a>
        <a href="#" class="block text-gray-700 hover:text-blue-500">Projects</a>
        <a href="#" class="block text-gray-700 hover:text-blue-500">Contact</a>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="relative w-full h-screen container mx-auto bg-black" id="main">
      <video autoplay muted loop playsinline class="absolute inset-0 w-full h-full object-cover z-10">
        <source :src="BackVideo" type="video/mp4" />
        Sizning brauzeringiz videoni qo‘llab-quvvatlamaydi.
      </video>
      <div class="relative z-30 h-full flex items-center justify-center">
        <div class="text-center text-white">
          <h1 class="text-4xl md:text-6xl font-bold mb-4">
            Salom, Men <span class="bg-[#6F00A9] px-2 py-1 rounded">Umidshots!</span>
          </h1>
          <p class="text-lg md:text-xl mb-6 max-w-xl mx-auto">{{ t('description') }}</p>
          <div class="absolute top-4 right-4 z-40">
            <select v-model="currentLocale" @change="onLanguageChange" class="bg-black bg-opacity-70 text-white border border-gray-500 px-3 py-1 rounded focus:outline-none">
              <option value="uz">UZ</option>
              <option value="en">EN</option>
            </select>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="bg-[var(--superDark)] text-white py-16 h-full" id="about">
      <div class="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        <div class="px-4 md:px-36 text-center md:text-left">
          <h2 class="text-4xl font-bold mb-4">Men haqimda</h2>
          <p class="text-lg leading-relaxed mb-6">
            Men Umidshots — videograf va mobilografman. Yillar davomida mijozlarga professional video va foto xizmatlar
            ko‘rsatib kelmoqdaman. Har bir kadrda — hikoya, har bir loyiha ortida — ijod bor.
          </p>
          <p class="text-md text-gray-300 mb-6">
            Asosiy yo‘nalishlarim: reklama roliklari, to‘y/festivallar, mahsulot promo videolari va kontent ishlab chiqarish.
          </p>
        </div>
        <div class="w-64 h-64 rounded-full overflow-hidden border-4 border-white">
          <img :src="HeroPicture" alt="Umidshots image" class="object-cover w-full h-full" />
        </div>
      </div>
    </section>

    <!-- Works Section -->
<section id="works" class="bg-black text-white py-16">
  <div class="container mx-auto text-center">
    <h1 class="text-4xl font-bold mb-10">Ishlarim</h1>

    <div class="relative w-full max-w-3xl mx-auto flex items-center justify-center">
      <!-- Left Button -->
      <button
        @click="prevVideo"
        class="absolute left-0 bg-[#6F00A9] hover:bg-purple-800 text-white px-4 py-2 rounded-full z-10"
      >
        ←
      </button>

      <!-- Video Card -->
      <div class="w-full border-4 border-none rounded-lg overflow-hidden">

        <transition name="fade" mode="out-in">
          <video
          :src="videos[currentVideoIndex]"
          controls
          class="mx-auto aspect-[9/16] h-[500px] md:h-[600px] object-contain rounded-lg"
        ></video>
      </transition>
      </div>

      <!-- Right Button -->
      <button
        @click="nextVideo"
        class="absolute right-0 bg-[#6F00A9] hover:bg-purple-800 text-white px-4 py-2 rounded-full z-10"
      >
        →
      </button>
    </div>
  </div>
</section>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import BackVideo from '../assets/background-video.mp4'
import HeroPicture from '../assets/hero-picture.png'

const isOpen = ref(false)
const toggleMenu = () => { isOpen.value = !isOpen.value }

const { t, locale } = useI18n()
const currentLocale = ref(locale.value)

function onLanguageChange() {
  locale.value = currentLocale.value
  localStorage.setItem('locale', currentLocale.value)
}

const videos = [
  new URL('../assets/video1.mp4', import.meta.url).href,
  new URL('../assets/video2.mp4', import.meta.url).href,
  new URL('../assets/video3.mp4', import.meta.url).href,
]

const currentVideoIndex = ref(0)

function nextVideo() {
  currentVideoIndex.value =
    (currentVideoIndex.value + 1) % videos.length
}

function prevVideo() {
  currentVideoIndex.value =
    (currentVideoIndex.value - 1 + videos.length) % videos.length
}

</script>

<style scoped>
.nav-link {
  position: relative;
  transition: all 0.3s;
}
.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  height: 2px;
  width: 0;
  background-color: #6F00A9;
  transition: all 0.3s ease-in-out;
}
.nav-link:hover::after {
  width: 100%;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.6s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}


/* Slide-left (yangi video o'ngdan chiqadi) */
.slide-left-enter-active, .slide-left-leave-active {
  transition: all 0.5s ease;
  position: absolute;
  width: 100%;
}
.slide-left-enter-from {
  transform: translateX(100%);
  opacity: 0;
}
.slide-left-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

/* Slide-right (yangi video chapdan chiqadi) */
.slide-right-enter-active, .slide-right-leave-active {
  transition: all 0.5s ease;
  position: absolute;
  width: 100%;
}
.slide-right-enter-from {
  transform: translateX(-100%);
  opacity: 0;
}
.slide-right-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

</style>