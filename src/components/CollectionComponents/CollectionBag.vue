<template>
  <div class="cleanScroll overflow-hidden overflow-x-scroll">
    <div class="flex">
      <div class="w-48 h-40 mr-5 rounded-2xl shrink-0 border-solid border-2 border-slate-300 overflow-hidden">
        <div>
          <img
            src="https://res.klook.com/image/upload/fl_lossy.progressive,w_2160,h_1440,c_fill,q_85/activities/wtxexj7k3jr5pz0xs9o2.webp"
            class="h-28 w-48"
          />
        </div>
        <div class="font-bold text-xl ml-2">泰国</div>
        <div class="ml-2 text-xs text-gray-400">已收藏1个</div>
      </div>
      <div class="w-48 h-40 mr-5 rounded-2xl shrink-0 border-solid border-2 border-slate-300 overflow-hidden">
        <div class="flex">
          <div>
            <img
              src="https://res.klook.com/image/upload/fl_lossy.progressive,w_2160,h_1440,c_fill,q_85/activities/yvp0rpmm4xgmye4cshb3.webp"
              class="h-28 object-cover"
            />
          </div>
          <div class="w-1"></div>
          <div>
            <img
              src="https://res.klook.com/image/upload/fl_lossy.progressive,w_2160,h_1440,c_fill,q_85/activities/s3cnpljwj3ajnmr9emwy.webp"
              class="h-28 object-cover"
            />
          </div>
        </div>
        <div class="font-bold text-xl ml-2">台湾</div>
        <div class="ml-2 text-xs text-gray-400">已收藏2个</div>
      </div>
      <div class="w-48 h-40 mr-5 rounded-2xl shrink-0 border-solid border-2 border-slate-300 overflow-hidden">
        <div class="flex">
          <div>
            <img
              src="https://res.klook.com/image/upload/fl_lossy.progressive,w_2160,h_1440,c_fill,q_85/activities/s3cnpljwj3ajnmr9emwy.webp"
              class="w-full h-28 object-cover"
            />
          </div>
          <div class="w-1"></div>
          <div>
            <div>
              <img
                src="https://res.klook.com/image/upload/fl_lossy.progressive,w_2160,h_1440,c_fill,q_85/activities/yvp0rpmm4xgmye4cshb3.webp"
                class="w-full h-14 object-cover pb-1"
              />
            </div>
            <div>
              <img
                src="https://res.klook.com/image/upload/fl_lossy.progressive,w_2160,h_1440,c_fill,q_85/activities/wtxexj7k3jr5pz0xs9o2.webp"
                class="w-full h-14 object-cover"
              />
            </div>
          </div>
        </div>
        <div class="font-bold text-xl ml-2">日本</div>
        <div class="ml-2 text-xs text-gray-400">已收藏5个</div>
      </div>
      <div
        class="w-20 h-40 rounded-2xl shrink-0 border-solid border-2 border-slate-300 flex justify-center items-center"
      >
        <div class="text-center">
          <div class="border-solid border-2 border-black rounded-full w-7 h-7">
            <van-icon name="arrow" />
          </div>
          <div class="text-xs mt-1">更多</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.cleanScroll::-webkit-scrollbar {
  width: 0;
  height: 0;
}
</style>
