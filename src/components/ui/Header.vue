<script setup>
import { currenciesStore } from "@/store";
import { storeToRefs } from 'pinia'

const store = currenciesStore();

const { selected, currencies } = storeToRefs(store);
const { updateSelected } = store;

const changeCurrency = () => {
  updateSelected(selected.value);
}

</script>

<template>
  <header>
    <router-link to="/">Главная</router-link>
    <router-link to="/convert">Конвертация</router-link>
    <select v-model="selected" @change="changeCurrency">
      <option v-for="currency in currencies" :key="currency" :value="currency">{{ currency.toUpperCase() }}</option>
    </select>
  </header>
</template>

<style scoped>
header {
  height: 50px;
  background-color: #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
}
header a {
  margin: 0 10px;
}
</style>