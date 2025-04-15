<script setup>
import { ref, onMounted, watch } from "vue";
import { currenciesStore } from "@/store";
import { storeToRefs } from "pinia"

const store = currenciesStore();

const { selected, rates } = storeToRefs(store);

const arrRates = ref({});

const collectRates = () => {
  arrRates.value = {};
  for (const pair in rates.value) {
    const [from, to] = pair.split('-');
    if (from === selected.value) {
      arrRates.value[to] = rates.value[pair].toFixed(2);
    } else if (to === selected) {
      arrRates.value[from] = (1 / rates.value[pair]).toFixed(2);
    }
  }
  if (!arrRates.value['rub']) {
    arrRates.value['rub'] = 1
  }
}

store.$subscribe((selected) => {
  collectRates();
}, { detached: true })

onMounted(() => {
  collectRates();
})

</script>

<template>
  <div class="page-main">
    <h1>Курсы валют</h1>
    <ul>
      <li v-for="(rate, currency) in arrRates" :key="currency">{{ currency }}: {{ rate }}</li>
    </ul>
  </div>
</template>

<style scoped>
.page-main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 10px;
  width: 100%;
  height: 100%;
  align-content: center;
}

h1 {
  font-size: 1.5em;
  margin-bottom: 10px;
}
ul {
  font-size: 1.3em;
}
ul li {
  margin: 5px;
}
</style>