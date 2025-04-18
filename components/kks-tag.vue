<template>
  <span 
    class="kks-tag"
    :style="{ backgroundColor: color, color: textColor }"
  >
    <slot></slot>
    <button 
      v-if="closable" 
      class="close-button"
      @click="$emit('close')"
    >
      ×
    </button>
  </span>
</template>

<script setup lang="ts">
defineProps({
  color: {
    type: String,
    default: '#666666'
  },
  textColor: {
    type: String,
    default: '#ffffff'
  },
  closable: {
    type: Boolean,
    default: false
  }
})

defineEmits(['close'])
</script>

<style scoped>
.kks-tag {
  display: inline-flex;
  align-items: center;
  padding: 2px 8px;
  font-size: 12px;
  line-height: 20px;
  border-radius: 4px;
  font-weight: 500;
}

.close-button {
  margin-left: 4px;
  background: transparent;
  border: none;
  color: inherit;
  cursor: pointer;
  font-size: 14px;
  line-height: 14px;
  padding: 0 2px;
}

.close-button:hover {
  opacity: 0.8;
}
</style>
