<template>
  <button :class="btnClass" class="transition duration-300 ease-in-out">{{ label }}</button>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
    },
    btnClass: {
      type: String,
      default: "button-default"
    }
  }
};
</script>

<style scoped>
.button-default {
  @apply py-4;
  @apply px-10;
  @apply rounded-lg;
  @apply text-white;
  @apply bg-gradient-to-r from-primary-0 to-primary-100;
  @apply hover:from-red-600;
  @apply hover:to-red-600;
}
.button-text {
  @apply text-red-600;
  @apply hover:text-red-400;
  @apply active:text-red-600;
}
.button-text-outline {
  @apply border-2;
  @apply py-4;
  @apply px-10;
  @apply rounded-lg;
  @apply text-white;
  @apply hover:bg-white;
  @apply hover:text-black
}
button:focus {
  outline: none
}
</style>
