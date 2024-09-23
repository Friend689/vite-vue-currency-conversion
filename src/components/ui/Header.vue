<script setup>
import { ref } from "vue";
import { useCurrenciesStore } from "@/store/currencies";
// const props = defineProps([
//   "selected",
// ]);

const currenciesStore = useCurrenciesStore();

const emit = defineEmits(["change-currency"]);

const currencies = currenciesStore.defaultArr;
const selectedCurrency = currenciesStore.selected;

// const changeCurrency = () => {
//   emit("change-currency", selectedCurrency.value)
// }

</script>

<template>
  <header>
    <router-link to="/">Главная</router-link>
    <router-link to="/convert">Конвертация</router-link>
    <select v-model="selectedCurrency" @change="changeCurrency">
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