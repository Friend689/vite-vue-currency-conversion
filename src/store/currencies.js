export const currenciesStore = defineStore("currencies", () => {
  const defaultArr = ref(["usd", "eur", "rub"]);
  const selected = ref(localStorage.getItem("currency") || "rub");
  const rates = ref([]);

  return { defaultArr, selected, rates };
})