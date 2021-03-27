<template>
  <div class="container">
    <div v-if="this.isLoading" class="loading-container">
      <font-awesome-icon icon="user-secret" />
    </div>
    <button v-on:click="doAjax">JE SUIS UN GROS BOUTON</button>
  </div>
</template>

<script src="./script.js"></script>
