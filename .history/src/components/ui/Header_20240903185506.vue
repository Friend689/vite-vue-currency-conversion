<script setup>
import { ref, onMounted } from "vue";

const arrCurrency = ref([]);

const getCurrency = () => {
  fetch("https://status.neuralgeneration.com/api/currency")
    .then(response => response.json())
    .then(data => arrCurrency.value = data);
}

onMounted(() => {
  getCurrency();
})

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