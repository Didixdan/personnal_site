<template>
  <footer id="footer" class="site-footer">
    <div class="site-footer__inner">
      <p class="site-footer__copy">
        © {{ year }} {{ site.name }} — {{ site.title }}
      </p>
      <nav class="site-footer__nav" aria-label="Liens légaux">
        <NuxtLink to="/mentions-legales" class="site-footer__link">
          Mentions légales
        </NuxtLink>
      </nav>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { site } from '~/config/site';

const year = new Date().getFullYear();
</script>

<style lang="scss" scoped>
.site-footer {
  @apply bg-gray-900 text-white py-10 px-5;

  &__inner {
    @apply max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4;
  }

  &__copy {
    @apply text-sm text-gray-400;
    font-family: 'Montserrat', sans-serif;
  }

  &__nav {
    @apply flex gap-6;
  }

  &__link {
    @apply text-sm text-gray-300 hover:text-white transition-colors underline-offset-4 hover:underline;
    font-family: 'Montserrat', sans-serif;
  }
}
</style>
