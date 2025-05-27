<template>
  <nav class="border-b">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16 items-center">
      <div class="flex aspect-square size-16 items-center justify-center rounded-md  text-sidebar-primary-foreground">
          <AppLogoIcon class="size-5 text-white dark:text-black " />
      </div>
        <!-- Hamburger Button -->
        <button
          class="md:hidden text-gray-700 focus:outline-none"
          @click="isMobileMenuOpen = !isMobileMenuOpen"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round"
              stroke-width="2"
              :d="isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'" />
          </svg>
        </button>

        <!-- Desktop Menu -->
        <ul class="hidden md:flex space-x-6 h-full">
          <MenuItem v-for="item in menus" :key="item.id" :item="item" />
        </ul>
      </div>

      <!-- Mobile Menu -->
      <ul v-show="isMobileMenuOpen" class="md:hidden mt-4 space-y-2">
        <MenuItem
          v-for="item in menus"
          :key="item.id"
          :item="item"
          mobile
        />
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import MenuItem from './MenuItem.vue'
import AppLogoIcon from '@/components/AppLogoIcon.vue';

const props = defineProps({
  menus: {
    type: Array,
    required: true,
  },
})

const isMobileMenuOpen = ref(false)
</script>
