<template>
  <input type="checkbox" :value="value" @change="co" :checked="checked" class="custom-checkbox"/>
</template>

<script>
export default {
  emits: ['update:modelValue'],
  props: {
    value: {
      type: String
    },
    modelValue: {
      type: Array
    }
  },
  data() {
    return {
      checked: false
    }
  },
  methods: {
    co() {
      this.checked = !this.checked
      if(this.checked) {
        this.$emit('update:modelValue', [this.value, ...this.modelValue])
      } else {
        this.$emit('update:modelValue', this.modelValue.filter(itm => itm !== this.value))
      }
      console.log('chenge', this.checked)
    }
  }
};
</script>

<style scoped>
.custom-checkbox {
	appearance: none;
  padding: 9px;
	border-radius: 5px;
  @apply border;
  @apply border-gray-300;
	@apply inline-block;
	@apply relative;
  @apply cursor-pointer;
}

.custom-checkbox:checked {
	@apply bg-gradient-to-r;
  @apply from-primary-0;
  @apply to-primary-100;
	border: 1px solid red;
}
.custom-checkbox:checked:after {
	content: '\2714';
	font-size: 19px;
	position: absolute;
	top: -6px;
	left: 2px;
	@apply text-white;
}
</style>
