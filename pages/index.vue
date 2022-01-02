<script setup lang="ts"></script>

<template>
  <div class="h-screen w-screen p-8">
    <div class="h-full w-full">
      <div class="h-1/2 flex items-center justify-center flex-col relative">
        <h1 class="text-6xl font-black">Where do you</h1>
        <h1 class="text-sky-400 text-6xl font-black">want to go ?</h1>
        <div
          class="h-20 w-1/2 absolute bg-white -bottom-10 z-10 shadow rounded-full flex items-center pl-2 pr-2"
        >
          <div
            class="h-16 w-16 bg-sky-400 rounded-full ml-auto flex items-center justify-center hover:bg-sky-500 cursor-pointer transition duration-300"
          >
            <i class="im im-magnifier text-white"></i>
          </div>
        </div>
      </div>
      <div class="h-1/2 bg-sky-400 flex items-center justify-center relative">
        <img src="/assets/images/chair.png" class="h-64 invert" />
        <img src="/assets/images/sand.png" class="h-64 invert" />
        <img src="/assets/images/bikini.png" class="h-64 invert" />
        <img src="/assets/images/shoes.png" class="h-64 invert" />
      </div>
    </div>
  </div>
</template>
