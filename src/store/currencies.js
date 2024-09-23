export const useCurrenciesStore = defineStore("currencies", () => {
  const defaultArr = ref(["usd", "eur", "rub"]);
  const selected = ref(localStorage.getItem("currency") || "rub");
  const rates = ref([]);

  const setSelectedCurrencies = (currency) => {
    selected.value = currency;
    localStorage.setItem("currency", currency);
  }

  return { defaultArr, selected, rates, setSelectedCurrencies };
});