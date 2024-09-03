<script setup>
import { ref, onMounted } from "vue";

const currencies = ref(['USD', 'EUR', 'RUB']);



</script>

<template>
  <header>
    <router-link to="/">Главная</router-link>
    <router-link to="/convert">Конвертация</router-link>
    <select name="currency" id="currency">
      <option value="rub">RUB</option>
      <option value="usd">USD</option>
      <option value="eur">EUR</option>
    </select>
  </header>
</template>

<style scoped>
header {
  height: 50px;
  background-color: #ccc;
  display: flex;
  align-items: center;
  padding: 0 10px;
}
header a {
  margin: 0 10px;
}
</style>