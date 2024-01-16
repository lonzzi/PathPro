<template>
  <div class="mt-2 mb-2 flex" :style="{ width }">
    <!-- 图片封面 -->
    <img
      :src="collection.cover"
      alt=""
      class="rounded-xl object-cover mr-3"
      :style="{
        width: widthimg,
        height: widthimg,
      }"
    />
    <!-- 信息块 -->
    <div class="flex flex-col justify-center">
      <!-- 优惠信息标题 -->
      <span class="text-sm font-semibold w-full overflow-hidden text-ellipsis" v-if="collection.title">
        {{ collection.title }}
      </span>
      <!-- 评分与参与情况 -->
      <div class="text-sm flex-nowrap flex">
        <span class="text-[#f09b0a]"><van-icon name="star" />{{ collection.rating }}</span>
        <span
          class="text-[#9a9a9a] w-3/4 whitespace-nowrap overflow-hidden text-ellipsis"
          v-if="collection.evaluate && collection.participants"
        >
          <span v-if="collection.evaluate">({{ collection.evaluate }})</span
          ><span v-if="collection.evaluate || collection.participants">·</span
          ><span v-if="collection.participants"> {{ collection.participants }}+人参与 </span>
        </span>
      </div>
      <!-- 标签 -->
      <div class="flex mt-1 overflow-hidden flex-nowrap">
        <div
          class="mr-2 bg-[#f5f5f5] text-[#7d7d7d] pl-2 pr-2 rounded-xl text-xs flex items-center"
          v-for="(tag, index) in collection.tags"
          :key="index"
        >
          {{ tag }}
        </div>
      </div>
      <div>
        <!-- 价格 -->
        <span>￥{{ collection.price }}</span>
        <span class="text-sm ml-1">起</span>
      </div>
      <div class="overflew-hidden flex-nowrap whitespace-nowrap w-1/2">
        <!-- 打折信息 -->
        <span
          class="text-[#ff5b00] bg-[#fff0e5] text-xs text-center font-semibold rounded-lg mr-2 pl-2 pr-2 pt-1 pb-1"
          v-for="(discountMsg, index) in collection.discounts"
          :key="index"
        >
          {{ discountMsg }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface CollectMsgItem {
  /** 优惠信息标题 */
  title?: string
  /** 封面 */
  cover?: string
  /** 评价人数 */
  evaluate?: number
  /** 评分 */
  rating?: number
  /** 参与人数 */
  participants?: string
  /** 价格 */
  price?: number
  /** 打折信息 */
  discounts?: string[]
  /** 标签 */
  tags?: string[]
}

withDefaults(
  defineProps<{
    // 多行省略
    lines?: number
    // 数据元
    collection: CollectMsgItem
    // 整体宽度
    width?: string
    // 图片宽度
    widthimg?: string
  }>(),
  {
    lines: 1,
    width: "48%",
    widthimg: "98px",
  },
)
</script>

<style scoped></style>
