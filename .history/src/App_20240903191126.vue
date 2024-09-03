<script setup>
import { onMounted } from "vue";
import Header from "@/components/ui/Header.vue";

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
      <router-view />
    </main>
  </div>
</template>

<style scoped></style>
