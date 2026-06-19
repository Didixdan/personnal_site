<template>
  <div class="page-home">
    <header class="header-hero">
      <div class="header-content">
        <h1 class="title">Alexandre</h1>
        <p class="subtitle">Développeur Full Stack</p>
      </div>
    </header>

    <main class="content-section">
      <div class="experience-wrapper">
        <div class="logo-column">
          <div class="logo-sticky">
            <Logo
              id="logo-draw"
              class="logo-graph"
              :fontControlled="false"
              :filled="true"
            />
          </div>
        </div>

        <div class="content-column">
          <div class="intro-spacer" aria-hidden="true" />

          <section
            v-for="(service, index) in services"
            :id="`service-${service.id}`"
            :key="service.id"
            class="service-section"
            :data-service="service.id"
          >
            <article class="service-card box">
              <span class="service-index" :style="{ color: service.accent }">0{{ index + 1 }}</span>
              <h2 class="service-title">{{ service.title }}</h2>
              <p class="service-lead">{{ service.lead }}</p>
              <p class="service-description">{{ service.description }}</p>
              <div class="service-offering">
                <h3 class="service-offering-title">Ce que j'apporte</h3>
                <ul>
                  <li v-for="item in service.offering" :key="item">{{ item }}</li>
                </ul>
              </div>
            </article>
          </section>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { nextTick, onMounted, onUnmounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Logo from '~/assets/file.svg';

gsap.registerPlugin(ScrollTrigger);

useSiteSeo();
usePersonJsonLd();

const services = [
  {
    id: 'strategie',
    title: 'Stratégie digitale',
    accent: '#444444',
    lead: 'Comprendre vos besoins et définir les solutions numériques adaptées.',
    description:
      'Avant d\'écrire une ligne de code, je prends le temps de comprendre votre contexte, vos utilisateurs et vos contraintes. L\'objectif : définir une feuille de route claire, réaliste et évolutive.',
    offering: [
      'Audit de l\'existant et identification des leviers de croissance',
      'Choix des technologies adaptées à vos enjeux',
      'Architecture applicative solide et scalable',
      'Priorisation des fonctionnalités et estimation des délais',
    ],
  },
  {
    id: 'automatisation',
    title: 'Automatisation & optimisation',
    accent: '#444444',
    lead: 'Gagner du temps en éliminant les tâches répétitives.',
    description:
      'Les processus manuels ralentissent votre activité et multiplient les erreurs. J\'identifie les flux à automatiser pour vous faire gagner en efficacité, en fiabilité et en sérénité au quotidien.',
    offering: [
      'Automatisation de workflows et de tâches récurrentes',
      'Intégrations API entre vos outils métier',
      'Optimisation des performances et des temps de chargement',
      'Tableaux de bord et reporting automatisés',
    ],
  },
  {
    id: 'solutions',
    title: 'Solutions web sur mesure',
    accent: '#6e8b7b',
    lead: 'Des applications pensées pour vos besoins réels.',
    description:
      'Pas de template générique : je conçois des solutions web adaptées à votre métier, vos utilisateurs et votre identité. Du prototype au produit final, chaque détail est pensé pour durer.',
    offering: [
      'Développement front-end et back-end complet',
      'Interfaces soignées, accessibles et responsives',
      'Bases de code maintenables et documentées',
      'Déploiement, suivi et évolutions dans le temps',
    ],
  },
  {
    id: 'accompagnement',
    title: 'Accompagnement personnalisé',
    accent: '#444444',
    lead: 'Un partenaire technique qui comprend votre langage.',
    description:
      'Je ne me contente pas de livrer du code : je vous accompagne à chaque étape, en vulgarisant les choix techniques et en restant disponible pour faire avancer votre projet sereinement.',
    offering: [
      'Écoute active et compréhension de votre secteur',
      'Pédagogie et transparence sur les décisions techniques',
      'Suivi de projet régulier et points d\'étape clairs',
      'Support réactif et formation de vos équipes',
    ],
  },
];

function getSvgRoot() {
  const el = document.querySelector('#logo-draw');
  return el?.tagName === 'svg' ? el : el?.querySelector('svg');
}

function highlightService(serviceId) {
  const svg = getSvgRoot();
  if (!svg) return;

  svg.querySelectorAll('.graph-part').forEach((part) => {
    const isActive = part.dataset.service === serviceId;
    gsap.to(part, {
      opacity: isActive ? 1 : 0.12,
      scale: isActive ? 1.04 : 1,
      transformOrigin: 'center center',
      duration: 0.5,
      ease: 'power2.out',
    });
  });
}

function resetGraphHighlight() {
  const svg = getSvgRoot();
  if (!svg) return;

  gsap.to(svg.querySelectorAll('.graph-part'), {
    opacity: 1,
    scale: 1,
    duration: 0.5,
    ease: 'power2.out',
  });
}

let mm;

onMounted(async () => {
  await nextTick();

  ScrollTrigger.create({
    trigger: '.header-hero',
    start: 'top top',
    endTrigger: '#footer',
    end: 'top top',
    pin: true,
    pinSpacing: false,
  });

  gsap.to('.header-content', {
    scale: 0.5,
    y: '-43vh',
    duration: 1,
    scrollTrigger: {
      trigger: 'body',
      start: 'top top',
      end: '+=800',
      scrub: true,
    },
  });

  const logoSvg = getSvgRoot();
  const paths = logoSvg?.querySelectorAll('path') ?? [];
  const labels = logoSvg?.querySelectorAll('text') ?? [];
  const drawAnimation = {
    opacity: 0,
    y: 50,
    scale: 0.8,
    transformOrigin: 'center center',
    stagger: 0.3,
    duration: 1,
    ease: 'power2.out',
  };

  mm = gsap.matchMedia();

  mm.add('(max-width: 767px)', () => {
    gsap.from([...paths, ...labels], {
      ...drawAnimation,
      scrollTrigger: {
        trigger: '.logo-column',
        start: 'top 80%',
        end: 'bottom 100%',
        scrub: 1.5,
      },
    });
  });

  mm.add('(min-width: 768px)', () => {
    gsap.set('.logo-sticky', { x: () => window.innerWidth * 0.25 });

    gsap.from([...paths, ...labels], {
      ...drawAnimation,
      scrollTrigger: {
        trigger: '.intro-spacer',
        start: 'top 80%',
        end: 'top top',
        scrub: 1.5,
      },
    });

    gsap.to('.logo-sticky', {
      x: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: '.intro-spacer',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });
  });

  services.forEach((service) => {
    const section = document.querySelector(`#service-${service.id}`);
    const card = section?.querySelector('.service-card');

    gsap.from(card, {
      scrollTrigger: {
        trigger: section,
        start: 'top 75%',
        end: 'top 35%',
        scrub: 1,
      },
      opacity: 0,
      x: 60,
      ease: 'power2.out',
    });

    ScrollTrigger.matchMedia({
      '(min-width: 768px)': () => {
        ScrollTrigger.create({
          trigger: section,
          start: 'top center',
          end: 'bottom center',
          onEnter: () => highlightService(service.id),
          onEnterBack: () => highlightService(service.id),
        });
      },
    });
  });

  ScrollTrigger.matchMedia({
    '(min-width: 768px)': () => {
      ScrollTrigger.create({
        trigger: '.intro-spacer',
        start: 'bottom top',
        end: 'bottom top',
        onEnter: resetGraphHighlight,
        onLeaveBack: resetGraphHighlight,
      });
    },
  });
});

onUnmounted(() => {
  mm?.revert();
});
</script>

<style lang="scss" scoped>
.page-home {
  @apply relative;
}

.content-section {
  @apply relative z-10;
}

.experience-wrapper {
  @apply md:grid md:grid-cols-2 md:relative;
}

.logo-column {
  @apply min-h-screen flex items-center justify-center pointer-events-none m-5 -mt-40 scale-110;

  @media (min-width: 768px) {
    @apply sticky top-0 h-screen m-0 bg-transparent rounded-none shadow-none p-0;
  }
}

.logo-sticky {
  @apply flex items-center justify-center will-change-transform;
}

.content-column {
  @apply md:col-start-2 -mt-40 lg:mt-0;
}

.intro-spacer {
  @apply hidden md:block h-[200vh];
}

.service-section {
  @apply min-h-screen flex items-center px-5 md:px-4 py-12;
}

.service-card {
  @apply w-full flex flex-col gap-4 p-8 md:p-10 m-5 md:m-0;
  backdrop-filter: blur(8px);
}

.service-index {
  @apply text-5xl font-bold leading-none;
  font-family: 'Montserrat', sans-serif;
}

.service-title {
  @apply text-3xl md:text-4xl font-semibold text-gray-800;
  font-family: 'Montserrat', sans-serif;
}

.service-lead {
  @apply text-lg md:text-xl text-[#6e8b7b] font-medium italic;
}

.service-description {
  @apply text-gray-600 leading-relaxed;
}

.service-offering {
  @apply mt-2 pt-6 border-t border-gray-200;

  &-title {
    @apply text-sm uppercase tracking-wider text-gray-500 font-semibold mb-3;
    font-family: 'Montserrat', sans-serif;
  }

  ul {
    @apply space-y-2;

    li {
      @apply text-gray-700 leading-relaxed pl-4 relative;

      &::before {
        content: '';
        @apply absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-[#6e8b7b];
      }
    }
  }
}

.box {
  @apply bg-white/80 rounded-xl shadow-xl;
}

.logo-graph {
  @apply w-56 sm:w-72 md:w-80 lg:w-96 max-w-full;
  overflow: visible;
  height: auto;
}
</style>
