<script setup>
import IButton from '../IButton/IButton.vue'
import IInput from '../IInput/IInput.vue'
import IModal from '../IModal/IModal.vue'
import InputImage from '../InputImage/InputImage.vue'
import MarkerIcon from '../icons/MarkerIcon.vue'
import fallbackImage from '../../assets/img/ukraine.png'
import { ref, watch } from 'vue'

const props = defineProps({
  isOpen: {
    default: false,
    type: Boolean
  },
  isLoading: {
    default: false,
    type: Boolean
  },
  place: Object
})

const emit = defineEmits(['close', 'submit'])

const formData = ref({
  id: '',
  title: '',
  description: '',
  img: '',
  coordinates: null
})

watch(
  () => props.place,
  () => {
    formData.value = {
      ...props.place
    }
  }
)

const handleChangeImg = (url) => {
  formData.value.img = url
}
</script>

<template>
  <IModal v-if="props.isOpen" @close="emit('close')">
    <div class="w-full max-w-[750px] mx-auto p-4 sm:p-6">
      <div class="flex gap-2 items-center mb-6">
        <MarkerIcon height="18" width="18" />
        <span class="font-bold text-base">Редагувати маркер</span>
      </div>
      <form @submit.prevent="emit('submit', formData)">
        <div class="flex flex-col sm:flex-row gap-5">
          <div class="w-full sm:w-5/12">
            <img
              class="w-full h-[200px] sm:h-[276px] object-cover rounded-md"
              :src="formData.img || fallbackImage"
              alt="place img"
            />
          </div>

          <div class="w-full sm:w-7/12">
            <IInput label="Локація" v-model="formData.title" />
            <div class="mt-4">
              <IInput label="Опис" type="textarea" v-model="formData.description" />
            </div>
            <IButton class="mt-6 w-full" variant="gradient" :is-loading="isLoading">
              Зберегти
            </IButton>
          </div>
        </div>

        <InputImage class="mt-4" @uploaded="handleChangeImg">
          <span class="text-xs">Натисніть тут, щоб додати інше фото</span>
        </InputImage>
      </form>
    </div>
  </IModal>
</template>
