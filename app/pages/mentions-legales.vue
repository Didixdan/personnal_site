<template>
  <div class="legal-page">
    <header class="legal-header">
      <NuxtLink to="/" class="legal-back">
        ← Retour à l'accueil
      </NuxtLink>
      <h1 class="legal-title">Mentions légales</h1>
      <p class="legal-updated">Dernière mise à jour : {{ lastUpdated }}</p>
    </header>

    <article class="legal-content box">
      <section>
        <h2>1. Éditeur du site</h2>
        <p>
          Le présent site est édité par&nbsp;:
        </p>
        <ul>
          <li><strong>Nom :</strong> {{ legal.editor.fullName }}</li>
          <li><strong>Statut :</strong> {{ legal.editor.status }}</li>
          <li><strong>Adresse :</strong> {{ legal.editor.address }}</li>
          <li><strong>E-mail :</strong> <a :href="`mailto:${legal.editor.email}`">{{ legal.editor.email }}</a></li>
          <li v-if="legal.editor.phone">
            <strong>Téléphone :</strong> {{ legal.editor.phone }}
          </li>
          <li v-if="legal.editor.siret">
            <strong>SIRET :</strong> {{ legal.editor.siret }}
          </li>
        </ul>
      </section>

      <section>
        <h2>2. Directeur de la publication</h2>
        <p>{{ legal.publicationDirector }}</p>
      </section>

      <section>
        <h2>3. Hébergement</h2>
        <p>Le site est hébergé par&nbsp;:</p>
        <ul>
          <li><strong>Raison sociale :</strong> {{ legal.host.name }}</li>
          <li><strong>Adresse :</strong> {{ legal.host.address }}</li>
          <li>
            <strong>Site web :</strong>
            <a :href="legal.host.website" target="_blank" rel="noopener noreferrer"> {{ legal.host.website }}</a>
          </li>
        </ul>
      </section>

      <section>
        <h2>4. Propriété intellectuelle</h2>
        <p>
          L'ensemble des éléments composant ce site (textes, graphismes, logos, images, code source)
          est la propriété exclusive de {{ legal.editor.fullName }}, sauf mention contraire.
          Toute reproduction, représentation, modification ou exploitation, totale ou partielle,
          sans autorisation écrite préalable, est interdite et constitue une contrefaçon
          sanctionnée par le Code de la propriété intellectuelle.
        </p>
      </section>

      <section>
        <h2>5. Vercel Analytics</h2>
        <p>
          Nous mesurons l'audience de ce site de manière totalement anonyme
          grâce à l'outil Vercel Analytics (Vercel Inc., États-Unis).
          Cet outil est conçu pour respecter votre vie privée : il fonctionne sans aucun cookie et ne
          récolte aucune donnée personnelle.
        </p>
        <p>
          Les statistiques d'utilisation sont gérées et traitées directement
          depuis notre propre nom de domaine. Cette démarche repose sur notre intérêt
          légitime à analyser et améliorer notre site web (Article 6.1.f du RGPD).
          Enfin, la société Vercel est certifiée conforme à l'accord de protection des données
          entre l'Union européenne et les États-Unis (Data Privacy Framework).
        </p>
        <p>
          Ce site ne collecte des données personnelles que si vous nous contactez volontairement
          (e-mail). Aucune donnée n'est cédée à des tiers à des fins commerciales.
        </p>
      </section>

      <section>
        <h2>6. Cookies</h2>
        <p>
          Ce site peut utiliser des cookies strictement nécessaires à son bon fonctionnement.
          Si des cookies de mesure d'audience ou de tiers sont utilisés, un bandeau d'information
          et de consentement vous sera présenté conformément aux recommandations de la CNIL.
        </p>
      </section>

      <section>
        <h2>7. Limitation de responsabilité</h2>
        <p>
          L'éditeur s'efforce d'assurer l'exactitude des informations diffusées sur ce site.
          Toutefois, il ne saurait être tenu responsable des omissions, inexactitudes ou
          indisponibilités du service. L'utilisateur est seul responsable de l'usage qu'il fait
          des informations présentes sur le site.
        </p>
      </section>

      <section>
        <h2>8. Droit applicable</h2>
        <p>
          Les présentes mentions légales sont régies par le droit français.
          En cas de litige, et à défaut de résolution amiable, les tribunaux français seront seuls compétents.
        </p>
      </section>
    </article>
  </div>
</template>

<script setup lang="ts">
import { legal, site } from '~/config/site';

const lastUpdated = '11 juin 2026';

useSiteSeo({
  title: `Mentions légales — ${site.name}`,
  description: `Mentions légales du site de ${site.name}, ${site.title}.`,
  path: '/mentions-legales',
  noindex: true,
});
</script>

<style lang="scss" scoped>
.legal-page {
  @apply relative z-10 min-h-screen px-5 py-16 md:py-24;
}

.legal-header {
  @apply max-w-3xl mx-auto mb-10;
}

.legal-back {
  @apply inline-block text-sm font-medium text-gray-700 hover:text-gray-900 hover:underline mb-6;
  font-family: 'Montserrat', sans-serif;
}

.legal-title {
  @apply text-4xl md:text-5xl font-semibold text-gray-800 mb-2;
  font-family: 'Montserrat', sans-serif;
}

.legal-updated {
  @apply text-sm text-gray-500;
}

.legal-content {
  @apply max-w-3xl mx-auto p-8 md:p-12 flex flex-col gap-8;
  backdrop-filter: blur(8px);

  section {
    @apply flex flex-col gap-3;

    h2 {
      @apply text-xl font-semibold text-gray-800;
      font-family: 'Montserrat', sans-serif;
    }

    p,
    li {
      @apply text-gray-600 leading-relaxed;
    }

    ul {
      @apply list-none space-y-2 pl-0;

      li strong {
        @apply text-gray-700;
      }
    }

    a {
      @apply text-[#6e8b7b] hover:underline;
    }
  }
}

.box {
  @apply bg-white/80 rounded-xl shadow-xl;
}
</style>
