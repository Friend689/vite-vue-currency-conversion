import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const currenciesStore = defineStore("currencies", () => {
  const currencies = ref(["usd", "eur", "rub"]);
  const selected = ref(localStorage.getItem("currency") || "rub");
  const rates = ref([]);

  const currenciesArr = computed(() => {
    const uniqueCurrencies = new Set();
    for (const key in rates.value) {
      const [from, to] = key.split("-");
      uniqueCurrencies.add(from);
      uniqueCurrencies.add(to);
    }
    const res = Array.from(uniqueCurrencies);
    return res;
  });

  function updateRates(rates) {
    this.rates = rates;
  }
  function updateSelected(selected) {
    this.selected = selected;
  }

  return {
    currencies,
    selected,
    rates,
    currenciesArr,
    updateRates,
    updateSelected,
  };
});
