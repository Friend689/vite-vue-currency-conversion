<script setup>
import { ref } from "vue";

const props = defineProps([
  "currencies",
  "rates"
]);

const fromCurrency = ref("rub");
const toCurrency = ref('usd');
const fromValue = ref(0);
const toValue = ref(0);
const error = ref('');

const convert = () => {
  if (isNaN(fromValue.value) && isNaN(toValue.value)) {
    error.value = "Пожалуйста, введите числовое значение"
    return
  }
  const fromRate = rates.value[fromCurrency.value]
  const toRate = rates.value[toCurrency.value]
  if (fromValue.value && !isNaN(fromValue.value)) {
    if (fromCurrency.value === "rub") {
      toValue.value = fromValue.value * toRate
    } else if (toCurrency.value === "rub") {
      toValue.value = fromValue.value / fromRate
    } else {
      toValue.value = fromValue.value * fromRate / toRate
    }
  } else if (toValue.value && !isNaN(toValue.value)) {
    if (fromCurrency.value === "rub") {
      fromValue.value = toValue.value / toRate
    } else if (toCurrency.value === "rub") {
      fromValue.value = toValue.value * fromRate
    } else {
      fromValue.value = toValue.value * toRate / fromRate
    }
  }
  if (fromValue.value) {
    fromValue.value = Number(fromValue.value.toFixed(2))
  }
  if (toValue.value) {
    toValue.value = Number(toValue.value.toFixed(2))
  }
  error.value = ""
}
</script>

<template>
  <div class="page-convert">
    <form>
      <div>
        <select v-model="fromCurrency">
          <option v-for="currency in currencies" :key="currency" :value="currency">{{ currency.toUpperCase() }}</option>
        </select>
        <input type="number" v-model.number="fromValue" @input="convert" />
      </div>
      <div>
        <select v-model="toCurrency">
          <option v-for="currency in currencies" :key="currency" :value="currency">{{ currency.toUpperCase() }}</option>
        </select>
        <input type="number" v-model.number="toValue" @input="convert" />
      </div>
    </form>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<style scoped>
.page-convert {
  padding-top: 40px;
  text-align: center;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

form div {
  margin: 7px;
}
</style>