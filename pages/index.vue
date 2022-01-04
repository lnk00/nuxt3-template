<script setup lang="ts"></script>

<template>
  <div class="h-screen w-screen p-8">
    <div class="h-full w-full">
      <div class="h-1/2 flex items-center justify-center flex-col relative">
        <h1 class="text-6xl font-black">Where do you</h1>
        <h1 class="text-sky-400 text-6xl font-black">want to go ?</h1>
        <div class="h-20 absolute bg-white -bottom-10 z-10 shadow rounded-sm flex items-center p-4">
          <div class="flex item-center justify-center flex-col h-full border-r pr-6 ml-4">
            <label for="destination" class="font-semibold">Destination</label>
            <input type="text" name="destination" id="destination" placeholder="Where are you going ?" class="h-full placeholder:text-gray-300 focus:outline-none w-42" />
          </div>
          <div class="flex item-center justify-center flex-col h-full border-r pr-6 ml-8">
            <label for="checkin" class="font-semibold">Checkin</label>
            <input datepicker="" type="text" name="checkin" id="checkin" placeholder="When ?" class="h-full placeholder:text-gray-300 focus:outline-none w-36" />
          </div>
          <div class="flex item-center justify-center flex-col h-full border-r pr-6 ml-8">
            <label for="checkout" class="font-semibold">Checkout</label>
            <input type="text" name="checkout" id="checkout" placeholder="When ?" class="h-full placeholder:text-gray-300 focus:outline-none w-36" />
          </div>
          <div class="flex item-center justify-center flex-col h-full pr-6 ml-8 mr-2">
            <label for="guest" class="font-semibold">Guests</label>
            <input type="text" name="guest" id="guest" placeholder="Who ?" class="h-full placeholder:text-gray-300 focus:outline-none w-36" />
          </div>
          <div class="h-14 w-14 bg-sky-400 rounded-sm ml-auto flex items-center justify-center hover:bg-sky-500 cursor-pointer transition duration-300">
            <i class="im im-arrow-right text-white"></i>
          </div>
        </div>
      </div>
      <div class="h-1/2 bg-sky-400 relative rounded-sm">
        <img src="/assets/images/cloud.jpg" alt="" class="h-full w-full object-cover object-left-bottom" />
      </div>
    </div>
  </div>
</template>
