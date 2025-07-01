<template>
  <Draggable
    v-model="localItems"
    handle=".drag-handle"
    item-key="id"
    @end="emitSorted"
    class="draggable-wrapper"
  >
    <template #item="{ element, index }">
      <div class="card">
        <div class="card-header">
          <i class="pi pi-ellipsis-v drag-handle" />
          <span class="card-index">#{{ index + 1 }}</span>
          <span class="card-title">{{ element.title }}</span>
        </div>
        <div class="card-body">{{ element.content }}</div>
      </div>
    </template>
  </Draggable>
</template>

<script setup lang="ts">
import { ref, watch, toRefs } from 'vue'
import { VueDraggableNext as Draggable } from 'vue-draggable-next'

interface CardItem {
  id: number
  title: string
  content: string
}

const props = defineProps<{
  items: CardItem[]
}>()

const emit = defineEmits<{
  (e: 'update', value: CardItem[]): void
}>()

const { items } = toRefs(props)
const localItems = ref<CardItem[]>([...items.value])

watch(items, (newVal) => {
  localItems.value = [...newVal]
})

const emitSorted = () => {
  emit('update', localItems.value)
}
</script>

<style scoped>
.draggable-wrapper {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.card {
  background: #ffffff;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
}

.card-header {
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 600;
  margin-bottom: 8px;
}

.drag-handle {
  cursor: grab;
  font-size: 18px;
  display: flex;
  align-items: center;
}

.card-index {
  background-color: #f0f2f5;
  padding: 0 8px;
  border-radius: 4px;
  font-size: 14px;
}

.card-title {
  flex: 1;
}

.card-body {
  font-size: 14px;
  color: #444;
}
</style>
