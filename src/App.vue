<script setup>
import { onMounted } from "vue";
import { getCurrencies } from "@/api";
import Header from "@/components/ui/Header.vue";
import { currenciesStore } from "@/store";

const store = currenciesStore();

const { updateRates } = store;

const getCurrenciesRequest = async () => {
  try {
    const currenciesData = await getCurrencies();
    updateRates(currenciesData);
  } catch (error) {
    console.error(error);
  }
};

onMounted(() => {
  getCurrenciesRequest();
})
</script>

<template>
  <div class="main-wrap">
    <Header />
    <main>
      <router-view />
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