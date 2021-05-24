<template>
  
    <p class="text-gray-400">
      Используйте налоговый вычет чтобы погасить ипотеку досрочно. Размер
      нологового вычета состовляет не более 13% от своего официального годового
      дохода.
    </p>
    <div>
      <InputNumber
        label="Ваша зарплата"
        v-model.number="salary"
        placeholder="Введите данные"
        id="salary"
        :inputClass="{'error': errorText}"
      />
      <small class="text-red-600 block" v-if="errorText">Ошибка! {{ errorText }}</small>
      <Button label="Расчитать" btnClass="button-text" @click="calculate"/>
    </div>
    <div v-if="checkboxDisplay" class="flex flex-col gap-4">
      <div v-for="itm in payments" :key="itm" class="border-b-2 pb-4">
        <CheckBox :value="itm.checkboxValue" v-model="checkboxValue" class="mr-2 -mb-1"/> {{ numericalSpace(itm.value) }} <span class="text-gray-400">{{ itm.label }}</span>
      </div>
    </div>
      <div class="flex-col sm:flex-row flex justify-between">
        <span class="font-bold">Что уменьшаем?</span>
        <div class="mt-4 sm:mt-0">
          <span class="tag active mr-4">Платёж</span>
          <span class="tag">Срок</span>
        </div>
      </div>
    <div class="flex-auto flex flex-col justify-end">
      <Button label="Добавить" class="w-full" />
    </div>
</template>

<script>
import InputNumber from "@/components/UI/InputNumber";
import Button from "@/components/UI/Button";
import CheckBox from "@/components/UI/Checkbox"
import { computed, ref, watch } from "vue";
import dictionary from "@/utils/endingsDictionary"
export default {
  components: { InputNumber, Button, CheckBox },
  props: {
    totalCoast: Number,
  },
  setup(props) {
    const salary = ref(null);
    const errorText =ref('')
    const checkboxDisplay = ref(false)
    const checkboxValue = ref([])
    const payments = ref([])

    const maxDeduction = computed(() => props.totalCoast > 2000000 ? 260000 : props.totalCoast * 0.13)

    function error() {
      if(salary.value <= 0) {
        errorText.value = 'Введите корректное число'
        return false
      }
      if(!salary.value) {
        errorText.value = 'Введите число'
        return false
      }
      if(salary.value < 12000) {
        errorText.value = 'Число не должно быть меньше 12 000'
        return false
      }
      return true
    }
    function calculate() {
      if(!error()) return
      const deductionPerYear = salary.value * 12 * 0.13
      const yearWithFullDeduction = Math.floor(maxDeduction.value / deductionPerYear)
      const lastDeduction =  maxDeduction.value % deductionPerYear

      let i = 0
      while(i < yearWithFullDeduction) {
        i++
        payments.value.push({checkboxValue: i + ' год', value: deductionPerYear, label: `${dictionary[i]} год`})
      }
      if(lastDeduction) payments.value.push({checkboxValue: i + 1 + ' год',value: lastDeduction, label: `${dictionary[i + 1]} год`})

      checkboxDisplay.value = true
    }

    function numericalSpace (number) {
      const str = String(number)
      if(str.length === 4) return str.slice(0, 1) + ' ' + str.slice(1)
      if(str.length === 5) return str.slice(0, 2) + ' ' + str.slice(2)
      if(str.length === 6) return str.slice(0, 3) + ' ' + str.slice(3)
    }
    watch(salary, () => {
      checkboxDisplay.value = false
      payments.value = []
      errorText.value = ''
    })
    
    return {
      salary,
      calculate,
      checkboxDisplay,
      checkboxValue,
      payments,
      numericalSpace,
      errorText
    };
  },
};
</script>

<style></style>
