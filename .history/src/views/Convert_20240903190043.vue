<script setup>
import { ref } from "vue";



const fromCurrency = ref('RUB')
const toCurrency = ref('USD')
const fromValue = ref(0)
const toValue = ref(0)
const error = ref('')

const convert = () => {
  if (isNaN(fromValue.value) || isNaN(toValue.value)) {
    error.value = 'Пожалуйста, введите числовое значение'
    return
  }
  const fromRate = rates[fromCurrency]
  const toRate = rates[toCurrency]
  if (fromValue) {
    toValue.value = (fromValue.value / fromRate) * toRate
  } else {
    fromValue.value = (toValue.value / toRate) * fromRate
  }
  toValue.value = Number(toValue.value.toFixed(2))
  fromValue.value = Number(fromValue.value.toFixed(2))
  error.value = ''
}
</script>

<template>
  <div>
    <form>
      <div>
        <select v-model="fromCurrency">
          <option v-for="currency in currencies" :key="currency" :value="currency">{{ currency }}</option>
        </select>
        <input type="number" v-model="fromValue" @input="convert" />
      </div>
      <div>
        <select v-model="toCurrency">
          <option v-for="currency in currencies" :key="currency" :value="currency">{{ currency }}</option>
        </select>
        <input type="number" v-model="toValue" @input="convert" />
      </div>
    </form>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<style></style>