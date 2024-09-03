<script setup>
import { ref, onMounted } from "vue";
import Header from "@/components/ui/Header.vue";

const rates = ref({});
const currencies = ref(['usd', 'eur', 'rub']);
const selectedCurrency = ref('rub');

const changeCurrency = (currency) => {
  selectedCurrency.value = currency;
  getCurrencies();
};

const getCurrencies = () => {
  fetch("https://status.neuralgeneration.com/api/currency")
    .then(response => response.json())
    .then(data => {
      rates.value = {};
      for (const pair in data) {
        const [from, to] = pair.split('-');
        if (from === selectedCurrency.value) {
          rates.value[to] = data[pair].toFixed(2);
        } else if (to === selectedCurrency.value) {
          rates.value[from] = (1 / data[pair]).toFixed(2);
        }
      }
      // Добавляем RUB в список валют
      if (!rates.value['rub']) {
        rates.value['rub'] = 1
      }
    });
}

onMounted(() => {
  getCurrencies();
})
</script>

<template>
  <div class="main-wrap">
    <Header @change-currency="changeCurrency" />
    <main>
      <router-view :rates="rates" :currencies="currencies" />
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