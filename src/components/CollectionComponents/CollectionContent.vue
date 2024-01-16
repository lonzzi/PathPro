<template>
  <div class="flex flex-wrap justify-between mt-2">
    <!-- 循环生成所有Item -->
    <CItem v-for="(item, index) in collections" :key="index" :collection="item" :lines="1" width="100%" />
  </div>
</template>

<script setup lang="ts">
import type { CollectionItem } from "@/types/collection"
import CItem from "./CmsgItem.vue"

const { collections } = defineProps<{
  collections: CollectionItem[]
}>()
</script>

<style lang="scss" scoped></style>
