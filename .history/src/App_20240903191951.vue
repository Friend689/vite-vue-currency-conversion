<script setup>
import { ref, onMounted } from "vue";
import Header from "@/components/ui/Header.vue";

const rates = ref({});
const currencies = ref(['USD', 'EUR', 'RUB']);
const selectedCurrency = ref('RUB');

const changeCurrency = (currency) => {
  selectedCurrency.value = currency
  getCurrencies()
},
    // async getCurrencies() {
    //   const response = await axios.get('https://status.neuralgeneration.com/api/currency')
    //   const rates = response.data
    //   this.rates = {}
    //   for (const currency in rates) {
    //     this.rates[currency] = rates[currency] / rates[this.selectedCurrency]
    //   }
    // }

const getCurrencies = () => {
  fetch("https://status.neuralgeneration.com/api/currency")
    .then(response => response.json())
    .then(data => {
      rates.value = {};
      for (const currency in data) {
        rates.value[currency] = rates.value[currency] / rates.value[selectedCurrency.value]
      }
    });
}

onMounted(() => {
  getCurrency();
})
</script>

<template>
  <div>
    <Header />
    <main>
      <router-view :rates="rates" :currencies="currencies" />
    </main>
  </div>
</template>

<style scoped></style>
