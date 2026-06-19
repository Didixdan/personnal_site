<template>
  <div class="wave-wrapper">
    <svg viewBox="0 0 900 600" preserveAspectRatio="none" class="svg-container">
      <path id="wave-top" fill="#6e8b7b" d="M 0 0 L 420 0 C 320 150, 120 150, 0 420 Z" />
      <path id="wave-bottom" fill="#6e8b7b" d="M 900 600 L 480 600 C 580 450, 780 450, 900 180 Z" />
    </svg>
  </div>

  <div class="main-wrapper">
    <NuxtPage />
    <SiteFooter />
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import gsap from 'gsap';

onMounted(() => {
  const pathTop = document.querySelector('#wave-top');
  const pathBottom = document.querySelector('#wave-bottom');
  if (!pathTop || !pathBottom) return;

  const ticker = { time: 0 };

  gsap.to(ticker, {
    time: Math.PI * 2,
    duration: 10,
    repeat: -1,
    ease: 'none',
    onUpdate: () => {
      const t = ticker.time;
      const y1t = 150 + Math.sin(t) * 55;
      const y2t = 150 + Math.sin(t + 1.8) * 55;
      const x1t = 320 + Math.cos(t + 0.5) * 40;
      const x2t = 120 + Math.cos(t + 2) * 40;
      pathTop.setAttribute('d', `M 0 0 L 420 0 C ${x1t} ${y1t}, ${x2t} ${y2t}, 0 420 Z`);

      const y1b = 450 + Math.sin(t + 2.5) * 55;
      const y2b = 450 + Math.sin(t + 4.3) * 55;
      const x1b = 580 + Math.cos(t + 3) * 40;
      const x2b = 780 + Math.cos(t + 1) * 40;
      pathBottom.setAttribute('d', `M 900 600 L 480 600 C ${x1b} ${y1b}, ${x2b} ${y2b}, 900 180 Z`);
    },
  });
});
</script>

<style lang="scss">
.main-wrapper {
  position: relative;
  z-index: 1;
}

.wave-wrapper {
  position: fixed;
  inset: 0;
  z-index: 0;
  background-color: #eeeeee;
  pointer-events: none;

  .svg-container {
    display: block;
    width: 100%;
    height: 100%;
  }
}
</style>
