<template>
<div class="flex flex-col">
  <label for="id" class="pb-2 font-bold" v-if="label">{{ label }}</label>
  <input 
    class="p-2" 
    :class="inputClass"
    type="number" 
    :value="modelValue" 
    :placeholder="placeholder"
    @input="$emit('update:modelValue', $event.target.value)"
    :id="id" 
    >
</div>
</template>

<script>
export default {
props: {
  modelValue: {
    type: Number,
    default: null
  },
  label: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  },
  id: {
    type: String,
    required: true
  },
  inputClass: {
    type: String
  }
}
}
</script>

<style scoped>
input {
  box-shadow: inset 0 0 0 50px #fff;
  @apply border;
  @apply border-gray-200;
  @apply rounded-sm;
  @apply hover:border-black;
  @apply focus:outline-none;
  @apply focus:border-gray-200;
}
input.error {
  @apply border-red-600;
  @apply text-red-600;
}
</style>