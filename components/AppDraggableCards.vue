<template>
  <Draggable
    v-model="localItems"
    handle=".drag-handle"
    item-key="id"
    @end="emitSorted"
    class="draggable-wrapper"
  >
    <template #item="{ element, index }">
      <AppCard class="draggable-card">
        <template #content>
          <div class="card-header">
            <i class="pi pi-ellipsis-v drag-handle" />
            <span class="card-index">#{{ index + 1 }}</span>
            <span class="card-title">{{ element.title }}</span>
          </div>
          <div class="card-body">{{ element.content }}</div>
        </template>
      </AppCard>
    </template>
  </Draggable>
</template>

<script setup lang="ts">
import { ref, watch, toRefs } from 'vue'
import { Draggable } from 'vuedraggable'

import type { PropType } from 'vue'

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

watch(items, (newItems) => {
  localItems.value = [...newItems]
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

.draggable-card {
  background: white;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.08);
  padding: 1rem;
  border-radius: 8px;
}

.card-header {
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: bold;
}

.drag-handle {
  cursor: grab;
  font-size: 18px;
  display: flex;
  align-items: center;
}

.card-index {
  background-color: #eef1f6;
  padding: 0 8px;
  border-radius: 4px;
  font-size: 14px;
}

.card-body {
  margin-top: 8px;
}
</style>
