<script setup>
import { ref, onMounted } from "vue";
import Header from "@/components/ui/Header.vue";

const rates = ref({});
const currencies = ref(['usd', 'eur', 'rub']);
const selectedCurrency = ref(localStorage.getItem("currency") || 'rub');

const changeCurrency = (currency) => {
  selectedCurrency.value = currency;
  localStorage.setItem("currency", currency)
  getCurrencies();
};

const getCurrencies = () => {
  fetch("https://status.neuralgeneration.com/api/currency")
    .then(response => response.json())
    .then(data => rates.value = data);
}

onMounted(() => {
  getCurrencies();
})
</script>

<template>
  <div class="main-wrap">
    <Header @change-currency="changeCurrency" :selected="selectedCurrency" />
    <main>
      <router-view :rates="rates" :currencies="currencies" :selected="selectedCurrency" />
    </main>
  </div>
</template>

<style scoped>
.main-wrap {
  /* height: 100%; */
  display: flex;
  flex-direction: column;
}

main {
  flex-grow: 1;
}
</style>