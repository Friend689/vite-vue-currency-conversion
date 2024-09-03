<script setup>
import { ref, onMounted } from "vue";
import Header from "@/components/ui/Header.vue";

const rates = ref({});
const currencies = ref(['USD', 'EUR', 'RUB']);
const selectedCurrency = ref('RUB');

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
        console.log(data, from, to);
        if (from === selectedCurrency.value.toLowerCase()) {
          rates.value[to] = data[pair];
        } else if (to === selectedCurrency.value.toLowerCase()) {
          rates.value[from] = 1 / data[pair];
        }
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
  display: flex;
  flex-direction: column;
}

main {
  flex-grow: 1;
}
</style>