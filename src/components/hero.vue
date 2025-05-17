<template>
    <section class="relative w-full h-screen overflow-hidden">
      <!-- Video background -->
      <video autoplay muted loop playsinline class="absolute top-0 left-0 w-full h-full object-cover z-0">
        <source src="@/assets/background_video.mp4" type="video/mp4" />
        Sizning brauzeringiz videoni qo‘llab-quvvatlamaydi.
      </video>
  
      <!-- Overlay -->
      <div class="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
  
      <!-- Hero Content -->
      <div class="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <img src="@/assets/hero-image.png" alt="Umidshots" class="w-40 h-40 mb-6 rounded-full shadow-lg" />
        <h1 class="text-4xl md:text-6xl font-bold mb-4">Salom, Men Umidshots!</h1>
        <p class="text-lg md:text-xl mb-6 max-w-xl">Videograf, mobilograf va ijodiy lahzalarni ushlovchi!</p>
        <div class="space-x-4">
          <button class="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg shadow-md transition">
            Ishlarimni Ko‘rish
          </button>
          <button class="bg-transparent border border-white hover:bg-white hover:text-black px-6 py-3 rounded-lg transition">
            Aloqa
          </button>
        </div>
      </div>
    </section>
</template>
  