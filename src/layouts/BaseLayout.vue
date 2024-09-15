<script setup></script>

<template>
  <main class="flex flex-col-reverse sm:flex-row h-full sm:h-screen">
    <section class="flex-1 flex justify-center items-center px-5 bg-primary">
      <div class="text-white max-w-[500px] w-full">
        <slot></slot>
      </div>
    </section>

    <section class="flex-1 h-64 sm:h-full">
      <img class="h-full w-full object-cover" src="../assets/img/static-map.png" alt="Map" />
    </section>
  </main>
</template>
