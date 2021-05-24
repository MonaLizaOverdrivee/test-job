<template>
<div class="bg-gradient-to-r from-primary-0 to-primary-100 h-screen">
  <div class="container flex justify-center items-center h-full">
  <div>
    <Button label="Налоговый вычет" btnClass="button-text-outline" @click="visibleModal=true"/>
    </div>
  </div>
  <Modal v-model:visible="visibleModal" header="Налоговый вычет">
    <TaxDeduction :totalCoast="mockCoast"/>
  </Modal>
</div>
</template>

<script>
import Button from './components/UI/Button'
import Modal from "./components/Modal"
import TaxDeduction from "./components/Modal/ModalContent/TaxDeduction"

export default {
  components: {
    Button,
    Modal,
    TaxDeduction
  },
  data() {
    return {
      visibleModal: false,
      mockCoast: 2900000
    }
  }
};
</script>

<style></style>
