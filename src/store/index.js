
import { useCurrenciesStore } from "@/store/currencies";
import { storeToRefs } from "pinia";

const currenciesStore = useCurrenciesStore();
// `name` and `doubleCount` are reactive refs
// This will also extract refs for properties added by plugins
// but skip any action or non reactive (non ref/reactive) property
const { name, doubleCount } = storeToRefs(currenciesStore)
// the increment action can just be destructured
const { increment } = currenciesStore