<template>
  <div class="overflow-x-hidden bg-black text-white">
    <!-- Navbar -->
    <header
      class="fixed top-0 left-0 w-full bg-[var(--superDark)] shadow-md z-50"
    >
      <div
        class="container mx-auto px-4 py-4 flex justify-between items-center"
      >
        <div>
          <h1
            class="text-2xl sm:text-3xl text-white uppercase font-medium cursor-pointer"
          >
            Umidshots
          </h1>
        </div>
        <div>
          <nav
            class="hidden md:flex space-x-4 sm:space-x-8 text-white font-medium"
          >
            <a href="#main" class="nav-link">Bosh sahifa</a>
            <a href="#about" class="nav-link">Men haqimda</a>
            <a href="#works" class="nav-link">Ishlarim</a>
            <a href="#testimonials" class="nav-link">Mijozlar fikri</a>
            <a href="#services" class="nav-link">Xizmatlar</a>
            <a href="#contact" class="nav-link">Aloqa</a>
          </nav>
        </div>
        <button
          class="md:hidden text-gray-700"
          @click="toggleMenu"
          aria-label="Toggle navigation menu"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      <div v-if="isOpen" class="md:hidden px-4 pb-4 text-center space-y-2">
        <a href="#main" class="block text-gray-300 hover:text-blue-500"
          >Bosh sahifa</a
        >
        <a href="#about" class="block text-gray-300 hover:text-blue-500"
          >Men haqimda</a
        >
        <a href="#works" class="block text-gray-300 hover:text-blue-500"
          >Ishlarim</a
        >
        <a href="#testimonials" class="block text-gray-300 hover:text-blue-500"
          >Mijozlar fikri</a
        >
        <a href="#services" class="block text-gray-300 hover:text-blue-500"
          >Xizmatlar</a
        >
        <a href="#contact" class="block text-gray-300 hover:text-blue-500"
          >Aloqa</a
        >
      </div>
    </header>

    <!-- Hero Section -->
    <section
      class="relative w-full h-screen container mx-auto bg-black"
      id="main"
    >
      <video
        autoplay
        muted
        loop
        playsinline
        class="absolute inset-0 w-full h-full object-cover z-10"
      >
        <source :src="BackVideo" type="video/mp4" />
        Sizning brauzeringiz videoni qo‘llab-quvvatlamaydi.
      </video>
      <div class="relative z-30 h-full flex items-center justify-center px-4">
        <div class="text-center text-white">
          <h1 class="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">
            Salom, Men
            <span class="bg-[#6F00A9] px-2 py-1 rounded">Umidshots!</span>
          </h1>
          <p class="text-base sm:text-lg md:text-xl mb-6 max-w-xl mx-auto">
            {{ t('description') }}
          </p>
          <div class="absolute top-4 right-4 z-40">
            <select
              v-model="currentLocale"
              @change="onLanguageChange"
              class="bg-black bg-opacity-70 text-white border border-gray-500 px-3 py-1 rounded focus:outline-none"
              aria-label="Select language"
            >
              <option value="uz">UZ</option>
              <option value="en">EN</option>
            </select>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section
      id="about"
      class="bg-[var(--superDark)] text-white py-16 min-h-screen flex items-center"
    >
      <div
        class="container mx-auto px-4 sm:px-8 md:px-24 flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-20"
      >
        <!-- Text Part -->
        <div class="w-full md:w-1/2 text-center md:text-left">
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
            Men haqimda
          </h2>
          <p class="text-base sm:text-lg text-gray-200 leading-relaxed mb-4">
            Men <span class="text-[#9f67ff] font-semibold">Umidshots</span> —
            videograf va mobilografman. Yillar davomida mijozlarga professional
            video va foto xizmatlar ko‘rsatib kelmoqdaman.
          </p>
          <p class="text-sm sm:text-md text-gray-400 leading-loose">
            Asosiy yo‘nalishlarim: reklama roliklari, to‘y/festivallar, mahsulot
            promo videolari va kontent ishlab chiqarish. Har bir kadrda —
            hikoya, har bir loyiha ortida — ijod bor.
          </p>
        </div>

        <!-- Image Part -->
        <div
          class="w-48 h-48 sm:w-60 sm:h-60 md:w-96 md:h-[26rem] rounded-2xl overflow-hidden shadow-lg border-4 border-white"
        >
          <img
            :src="HeroPicture"
            alt="Umidshots image"
            class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            onerror="this.src='fallback-image.png'"
          />
        </div>
      </div>
    </section>

    <!-- Works Section -->
    <section id="works" class="bg-black text-white py-16">
      <div class="container mx-auto px-24">
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
          Ishlarim
        </h2>
      </div>
      <div
        class="relative w-full max-w-5xl mx-auto flex items-center justify-center overflow-hidden px-4"
      >
        <div
          class="carousel-track flex transition-transform duration-700 ease-in-out"
          :style="{ transform: `translateX(-${currentVideoIndex * 100}%)` }"
        >
          <div
            v-for="(video, index) in videos"
            :key="index"
            class="carousel-item w-full flex-shrink-0 px-2 sm:px-4 relative"
            :class="{
              'opacity-100 scale-100 z-10': index === currentVideoIndex,
              'opacity-50 scale-90 z-0': index !== currentVideoIndex,
            }"
          >
            <!-- Agar YouTube bo‘lsa -->
            <iframe
              v-if="video.type === 'youtube'"
              class="aspect-[9/16] h-[300px] sm:h-[400px] md:h-[600px] rounded-lg mx-auto"
              :src="`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1`"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>

        <!-- Left Button -->
        <button
          @click="prevVideo"
          class="nav-button left-2 sm:left-4"
          aria-label="Previous video"
        >
          <font-awesome-icon icon="fa-arrow-left" />
        </button>

        <!-- Right Button -->
        <button
          @click="nextVideo"
          class="nav-button right-2 sm:right-4"
          aria-label="Next video"
        >
          <font-awesome-icon icon="fa-arrow-right" />
        </button>
      </div>
    </section>

    <!-- Reviews -->
    <section
      id="testimonials"
      class="bg-[var(--superDark)] text-white min-h-screen flex items-center"
    >
      <div class="container mx-auto px-4 sm:px-8 md:px-24 text-center">
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-10">
          Mijozlar fikri
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-black bg-opacity-60 p-6 rounded-xl shadow-md">
            <p class="text-gray-300 mb-4">
              "Umidshots bilan ishlash juda qulay bo‘ldi. Video sifati ajoyib!"
            </p>
            <p class="text-[#9f67ff] font-semibold">— Jasur T.</p>
          </div>
          <div class="bg-black bg-opacity-60 p-6 rounded-xl shadow-md">
            <p class="text-gray-300 mb-4">
              "Ustalik, ijodkorlik va tez yetkazib berish — barchasi mukammal!"
            </p>
            <p class="text-[#9f67ff] font-semibold">— Zilola M.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Services -->
    <section
      id="services"
      class="bg-black text-white min-h-screen flex items-center"
    >
      <div class="container mx-auto px-4 sm:px-8 md:px-24 text-center">
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-10">
          Xizmatlar
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div
            class="bg-[var(--superDark)] p-6 rounded-xl shadow-md hover:shadow-xl transition"
          >
            <h3 class="text-xl font-semibold text-[#9f67ff] mb-2">
              Reklama roliklari
            </h3>
            <p class="text-gray-300 text-sm">
              Mahsulotingizni taqdim etishda professional yondashuv.
            </p>
          </div>
          <div
            class="bg-[var(--superDark)] p-6 rounded-xl shadow-md hover:shadow-xl transition"
          >
            <h3 class="text-xl font-semibold text-[#9f67ff] mb-2">
              To‘y & Tadbirlar
            </h3>
            <p class="text-gray-300 text-sm">
              Unutilmas onlarni sifatli videoga aylantirish.
            </p>
          </div>
          <div
            class="bg-[var(--superDark)] p-6 rounded-xl shadow-md hover:shadow-xl transition"
          >
            <h3 class="text-xl font-semibold text-[#9f67ff] mb-2">
              Kontent ishlab chiqarish
            </h3>
            <p class="text-gray-300 text-sm">
              Ijtimoiy tarmoqlar uchun doimiy kontent yaratish xizmati.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section
      id="contact"
      class="bg-[var(--superDark)] text-white min-h-screen flex items-center"
    >
      <div class="container mx-auto px-4 sm:px-8 md:px-24 text-center">
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-10">Aloqa</h2>
        <p class="text-gray-400 mb-8 max-w-2xl mx-auto">
          Savollaringiz bo‘lsa yoki loyiha haqida gaplashmoqchi bo‘lsangiz,
          quyidagi manzillar orqali bog‘laning:
        </p>
        <div class="space-y-4 text-sm text-gray-300">
          <p><strong>Email:</strong> umidshots@gmail.com</p>
          <p><strong>Telefon:</strong> +998 90 123 45 67</p>
          <p><strong>Telegram:</strong> @umidshots</p>
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
const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const { t, locale } = useI18n()
const currentLocale = ref(locale.value)

function onLanguageChange() {
  locale.value = currentLocale.value
  localStorage.setItem('locale', currentLocale.value)
}

const currentVideoIndex = ref(0)

function nextVideo() {
  currentVideoIndex.value = (currentVideoIndex.value + 1) % videos.length
}

function prevVideo() {
  currentVideoIndex.value =
    (currentVideoIndex.value - 1 + videos.length) % videos.length
}

const videos = [
  {
    type: 'youtube',
    id: '3I6gwFPhCNA',
  },
  {
    type: 'youtube',
    id: '3I6gwFPhCNA',
  },
  {
    type: 'youtube',
    id: '3I6gwFPhCNA',
  },
]
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
  background-color: #6f00a9;
  transition: all 0.3s ease-in-out;
}
.nav-link:hover::after {
  width: 100%;
}

.nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: #6f00a9;
  color: white;
  font-size: 1rem;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition:
    background-color 0.3s ease,
    transform 0.3s ease;
  z-index: 20;
}

.nav-button:hover {
  background-color: #7c1ab8;
  transform: translateY(-50%) scale(1.1);
}

.carousel-track {
  width: 100%;
  display: flex;
}

.carousel-item {
  transition: all 0.7s ease;
  transform-origin: center;
}

.carousel-item.scale-90 {
  transform: scale(0.9);
  filter: blur(2px);
}
</style>
