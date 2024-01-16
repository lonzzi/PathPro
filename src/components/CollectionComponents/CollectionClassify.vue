<template>
  <div>
    <div class="text-2xl mt-8 font-semibold">全部收藏</div>
  </div>
  <div class="cleanScroll cs flex overflow-hidden overflow-x-auto">
    <div
      v-for="(type, index) in collectionInfo"
      :key="index"
      :class="{ active: checked === index }"
      @click="checkedCity(index)"
      class="text-nowrap p-1 pl-3 pr-3 m-1 border rounded-3xl"
    >
      {{ type.category }}
    </div>
  </div>
  <CollectionContent :collections="collectionInfo[checked].collections" />
</template>

<script setup lang="ts">
import { ref } from "vue"
import { useCollectionStore } from "@/stores/collectionStore"

const collections = useCollectionStore()
const collectionInfo = ref(collections.collectionInfo)

let checked = ref(0)
const checkedCity = (index: number) => {
  checked.value = index
}
</script>

<style scoped>
.active {
  @apply bg-[#ff5303] text-white font-semibold;
}
.cleanScroll::-webkit-scrollbar {
  width: 0;
  height: 0;
}
</style>
