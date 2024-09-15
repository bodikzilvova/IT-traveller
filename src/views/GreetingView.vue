<script setup>
import IButton from '../components/IButton/IButton.vue'
import BaseLayout from '@/layouts/BaseLayout.vue'
</script>

<template>
  <BaseLayout>
    <div class="text-center">
      <img class="inline mb-6 w-20 sm:w-28" src="../assets/img/map-pin.svg" alt="Map pin" />

      <h1 class="font-bold text-3xl sm:text-4xl mb-4">IT traveler</h1>

      <p class="leading-6 mb-8 text-sm sm:text-base">
        Простий і зручний веб додаток, який дозволить тобі відмічати твої улюблені місця, а також
        ті, в яких би ти дуже хотів побувати. Тож не зволікай і спробуй сам.
      </p>

      <IButton to="/auth/registration">Почати роботу</IButton>
    </div>
  </BaseLayout>
</template>
