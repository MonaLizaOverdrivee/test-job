<template>
  <teleport to="body" v-if="visible">
  <div class="absolute w-screen h-screen inset-0 flex justify-center items-center" style="background-color:rgb(0, 0, 0, 0.6)">
    <div class="bg-white opacity-100 p-4 sm:rounded-lg sm:w-96 lg:w-100 h-full sm:h-auto max-h-screen overflow-y-auto">
      <div class="flex flex-col gap-7 h-full">
      <div class="flex justify-between">
        <span class="text-xl font-bold">{{ header }}</span>
        <span class="text-3xl leading-7 cursor-pointer text-red-600 font-bold" @click="$emit('update:visible', false)">&times;</span>
      </div>
      <slot />
      </div>
    </div>
  </div>
  </teleport>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    header: {
      type: String,
      default: ''
    }
  }
};
</script>

<style></style>
