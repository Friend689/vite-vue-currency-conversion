<script setup>
import { ref } from "vue";
import { currenciesStore } from "@/store";
import { storeToRefs } from 'pinia'

const store = currenciesStore();

const { rates, currenciesArr } = storeToRefs(store);

const fromCurrency = ref('rub');
const toCurrency = ref('usd');
const fromValue = ref(0);
const toValue = ref(0);
const error = ref('');

const convert = (inputType = "from") => {
  if (isNaN(fromValue.value) && isNaN(toValue.value)) {
    error.value = "Пожалуйста, введите числовое значение"
    return
  }

  if (fromCurrency.value !== toCurrency.value) {
    if (inputType === 'from') {
      toValue.value = fromValue.value * rates.value[fromCurrency.value + "-" + toCurrency.value];
    } else if (inputType === 'to') {
      fromValue.value = toValue.value * rates.value[toCurrency.value + "-" + fromCurrency.value];
    }
  } else {
    toValue.value = fromValue.value;
    fromValue.value = toValue.value;
  }

  fromValue.value = Number(fromValue.value.toFixed(2))
  toValue.value = Number(toValue.value.toFixed(2))
  error.value = ""
};
</script>

<template>
  <div class="page-convert">
    <form>
      <div>
        <select v-model="fromCurrency" @change="convert('from')">
          <option v-for="currency in currenciesArr" :key="currency" :value="currency">{{ currency.toUpperCase() }}
          </option>
        </select>
        <input type="number" v-model.number="fromValue" @input="convert('from')" />
      </div>
      <div>
        <select v-model="toCurrency" @change="convert('to')">
          <option v-for="currency in currenciesArr" :key="currency" :value="currency">{{ currency.toUpperCase() }}
          </option>
        </select>
        <input type="number" v-model.number="toValue" @input="convert('to')" />
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