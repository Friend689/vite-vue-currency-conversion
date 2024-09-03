<script setup>
import { ref, onMounted } from "vue";
import Header from "@/components/ui/Header.vue";

const rates = ref({});
const currencies = ref(['USD', 'EUR', 'RUB']);
const selectedCurrency = ref('RUB');

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
  <div>
    <Header />
    <main>
      <router-view :rates="rates" :currencies="currencies" />
    </main>
  </div>
</template>

<style scoped></style>
