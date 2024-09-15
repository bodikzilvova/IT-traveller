<script setup>
import { computed, reactive } from 'vue'
import IButton from '../IButton/IButton.vue'
import MarkerIcon from '../icons/MarkerIcon.vue'
import IInput from '../IInput/IInput.vue'
import IModal from '../IModal/IModal.vue'
import InputImage from '../InputImage/InputImage.vue'

const props = defineProps({
  isOpen: {
    default: false,
    type: Boolean
  },
  isLoading: {
    default: false,
    type: Boolean
  },
  hasError: {
    default: false,
    type: Boolean
  }
})

const emit = defineEmits(['close', 'submit'])
const formData = reactive({
  title: '',
  description: '',
  img: ''
})

const uploadText = computed(() => {
  return formData.img ? 'Натисніть тут, щоб змінити фото' : 'Натисніть тут, щоб додати фото'
})

const handleUpload = (url) => {
  formData.img = url
}

const resetForm = () => {
  formData.title = ''
  formData.description = ''
  formData.img = ''
}
</script>

<template>
  <IModal v-if="props.isOpen" @close="emit('close')">
    <form
      @submit.prevent="emit('submit', formData, resetForm)"
      class="w-full max-w-[420px] mx-auto p-4 sm:p-6"
    >
      <div class="flex gap-1 justify-center font-bold text-center mb-6">
        <MarkerIcon /> Додати маркери
      </div>
      <IInput label="Локація" class="mb-4" v-model="formData.title" />
      <IInput type="textarea" label="Опис" class="mb-4" v-model="formData.description" />
      <div class="flex gap-2 items-center mb-6">
        <img
          v-if="formData.img"
          :src="formData.img"
          alt="avatar"
          class="w-12 h-12 object-cover rounded"
        />
        <InputImage @uploaded="handleUpload">{{ uploadText }}</InputImage>
      </div>

      <IButton class="w-full" variant="gradient" :is-loading="props.isLoading">Додати</IButton>
      <div v-if="props.hasError" class="text-red-500 mt-2">Щось пішло не так</div>
    </form>
  </IModal>
</template>
