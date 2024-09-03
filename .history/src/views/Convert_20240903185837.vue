<script setup>
import { ref } from "vue";



const convert = () => {
  if (isNaN(this.fromValue) || isNaN(this.toValue)) {
    this.error = 'Пожалуйста, введите числовое значение'
    return
  }
  const fromRate = this.rates[this.fromCurrency]
  const toRate = this.rates[this.toCurrency]
  if (this.fromValue) {
    this.toValue = (this.fromValue / fromRate) * toRate
  } else {
    this.fromValue = (this.toValue / toRate) * fromRate
  }
  this.toValue = Number(this.toValue.toFixed(2))
  this.fromValue = Number(this.fromValue.toFixed(2))
  this.error = ''
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