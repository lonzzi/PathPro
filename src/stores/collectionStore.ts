import { defineStore } from "pinia"
import { ref } from "vue"
import type { Collection } from "@/types/collection"

export const useCollectionStore = defineStore("collection", () => {
  const collectionInfo = ref<Collection[]>([
    {
      category: "全部",
      collections: [
        {
          title: "东京三丽鸥彩虹乐园门票",
          cover:
            "https://res.klook.com/image/upload/fl_lossy.progressive,w_640,h_640,c_fill,q_85/activities/z5oxfvdbejb5s78qjwge.webp",
          evaluate: 4273,
          rating: 4.7,
          participants: "200k",
          price: 165,
          discounts: ["价格保证", "年终大促"],
          tags: ["热卖", "轻松退款"],
        },
        {
          title: "东京丰洲 teamLab Planets TOKYO 展览门票",
          cover:
            "https://res.klook.com/image/upload/fl_lossy.progressive,w_2160,h_1440,c_fill,q_85/activities/wtxexj7k3jr5pz0xs9o2.webp",
          evaluate: 6077,
          rating: 4.8,
          participants: "200k",
          price: 190,
          discounts: ["年终大促", "B1G1"],
          tags: ["热卖", "立即确认"],
        },
        {
          title: "大阪长居植物园 teamLab Botanical Garden Osaka 门票",
          cover:
            "https://res.klook.com/image/upload/fl_lossy.progressive,w_2160,h_1440,c_fill,q_85/activities/yvp0rpmm4xgmye4cshb3.webp",
          evaluate: 2779,
          rating: 4.5,
          participants: "100k",
          price: 90,
          discounts: ["年终大促"],
          tags: ["热卖", "立即确认"],
        },
        {
          title: "东京Mega Ilumi 灯光秀2023 - 2024门票（大井赛马场）",
          cover:
            "https://res.klook.com/image/upload/fl_lossy.progressive,w_2160,h_1440,c_fill,q_85/activities/s3cnpljwj3ajnmr9emwy.webp",
          evaluate: 72,
          rating: 4.3,
          participants: "4k",
          price: 25,
          discounts: ["年终大促", "价格保证"],
          tags: ["立即确认"],
        },
        {
          title: "东京三丽鸥彩虹乐园门票",
          cover:
            "https://res.klook.com/image/upload/fl_lossy.progressive,w_640,h_640,c_fill,q_85/activities/z5oxfvdbejb5s78qjwge.webp",
          evaluate: 4273,
          rating: 4.7,
          participants: "200k",
          price: 165,
          discounts: ["价格保证", "年终大促"],
          tags: ["热卖", "轻松退款"],
        },
        {
          title: "东京丰洲 teamLab Planets TOKYO 展览门票",
          cover:
            "https://res.klook.com/image/upload/fl_lossy.progressive,w_2160,h_1440,c_fill,q_85/activities/wtxexj7k3jr5pz0xs9o2.webp",
          evaluate: 6077,
          rating: 4.8,
          participants: "200k",
          price: 190,
          discounts: ["年终大促", "B1G1"],
          tags: ["热卖", "立即确认"],
        },
        {
          title: "大阪长居植物园 teamLab Botanical Garden Osaka 门票",
          cover:
            "https://res.klook.com/image/upload/fl_lossy.progressive,w_2160,h_1440,c_fill,q_85/activities/yvp0rpmm4xgmye4cshb3.webp",
          evaluate: 2779,
          rating: 4.5,
          participants: "100k",
          price: 90,
          discounts: ["年终大促"],
          tags: ["热卖", "立即确认"],
        },
        {
          title: "东京Mega Ilumi 灯光秀2023 - 2024门票（大井赛马场）",
          cover:
            "https://res.klook.com/image/upload/fl_lossy.progressive,w_2160,h_1440,c_fill,q_85/activities/s3cnpljwj3ajnmr9emwy.webp",
          evaluate: 72,
          rating: 4.3,
          participants: "4k",
          price: 25,
          discounts: ["年终大促", "价格保证"],
          tags: ["立即确认"],
        },
        {
          title: "东京三丽鸥彩虹乐园门票",
          cover:
            "https://res.klook.com/image/upload/fl_lossy.progressive,w_640,h_640,c_fill,q_85/activities/z5oxfvdbejb5s78qjwge.webp",
          evaluate: 4273,
          rating: 4.7,
          participants: "200k",
          price: 165,
          discounts: ["价格保证", "年终大促"],
          tags: ["热卖", "轻松退款"],
        },
        {
          title: "东京丰洲 teamLab Planets TOKYO 展览门票",
          cover:
            "https://res.klook.com/image/upload/fl_lossy.progressive,w_2160,h_1440,c_fill,q_85/activities/wtxexj7k3jr5pz0xs9o2.webp",
          evaluate: 6077,
          rating: 4.8,
          participants: "200k",
          price: 190,
          discounts: ["年终大促", "B1G1"],
          tags: ["热卖", "立即确认"],
        },
        {
          title: "大阪长居植物园 teamLab Botanical Garden Osaka 门票",
          cover:
            "https://res.klook.com/image/upload/fl_lossy.progressive,w_2160,h_1440,c_fill,q_85/activities/yvp0rpmm4xgmye4cshb3.webp",
          evaluate: 2779,
          rating: 4.5,
          participants: "100k",
          price: 90,
          discounts: ["年终大促"],
          tags: ["热卖", "立即确认"],
        },
        {
          title: "东京Mega Ilumi 灯光秀2023 - 2024门票（大井赛马场）",
          cover:
            "https://res.klook.com/image/upload/fl_lossy.progressive,w_2160,h_1440,c_fill,q_85/activities/s3cnpljwj3ajnmr9emwy.webp",
          evaluate: 72,
          rating: 4.3,
          participants: "4k",
          price: 25,
          discounts: ["年终大促", "价格保证"],
          tags: ["立即确认"],
        },
      ],
    },
    {
      category: "游览&体验",
      collections: [
        {
          title: "东京丰洲 teamLab Planets TOKYO 展览门票",
          cover:
            "https://res.klook.com/image/upload/fl_lossy.progressive,w_2160,h_1440,c_fill,q_85/activities/wtxexj7k3jr5pz0xs9o2.webp",
          evaluate: 6077,
          rating: 4.8,
          participants: "200k",
          price: 190,
          discounts: ["年终大促", "B1G1"],
          tags: ["热卖", "立即确认"],
        },
        {
          title: "大阪长居植物园 teamLab Botanical Garden Osaka 门票",
          cover:
            "https://res.klook.com/image/upload/fl_lossy.progressive,w_2160,h_1440,c_fill,q_85/activities/yvp0rpmm4xgmye4cshb3.webp",
          evaluate: 2779,
          rating: 4.5,
          participants: "100k",
          price: 90,
          discounts: ["年终大促"],
          tags: ["热卖", "立即确认"],
        },
        {
          title: "东京Mega Ilumi 灯光秀2023 - 2024门票（大井赛马场）",
          cover:
            "https://res.klook.com/image/upload/fl_lossy.progressive,w_2160,h_1440,c_fill,q_85/activities/s3cnpljwj3ajnmr9emwy.webp",
          evaluate: 72,
          rating: 4.3,
          participants: "4k",
          price: 25,
          discounts: ["年终大促", "价格保证"],
          tags: ["立即确认"],
        },
      ],
    },
    {
      category: "景点门票",
      collections: [
        {
          title: "东京Mega Ilumi 灯光秀2023 - 2024门票（大井赛马场）",
          cover:
            "https://res.klook.com/image/upload/fl_lossy.progressive,w_2160,h_1440,c_fill,q_85/activities/s3cnpljwj3ajnmr9emwy.webp",
          evaluate: 72,
          rating: 4.3,
          participants: "4k",
          price: 25,
          discounts: ["年终大促", "价格保证"],
          tags: ["立即确认"],
        },
        {
          title: "大阪长居植物园 teamLab Botanical Garden Osaka 门票",
          cover:
            "https://res.klook.com/image/upload/fl_lossy.progressive,w_2160,h_1440,c_fill,q_85/activities/yvp0rpmm4xgmye4cshb3.webp",
          evaluate: 2779,
          rating: 4.5,
          participants: "100k",
          price: 90,
          discounts: ["年终大促"],
          tags: ["热卖", "立即确认"],
        },
        {
          title: "东京Mega Ilumi 灯光秀2023 - 2024门票（大井赛马场）",
          cover:
            "https://res.klook.com/image/upload/fl_lossy.progressive,w_2160,h_1440,c_fill,q_85/activities/s3cnpljwj3ajnmr9emwy.webp",
          evaluate: 72,
          rating: 4.3,
          participants: "4k",
          price: 25,
          discounts: ["年终大促", "价格保证"],
          tags: ["立即确认"],
        },
      ],
    },
    {
      category: "交通",
      collections: [
        {
          title: "大阪长居植物园 teamLab Botanical Garden Osaka 门票",
          cover:
            "https://res.klook.com/image/upload/fl_lossy.progressive,w_2160,h_1440,c_fill,q_85/activities/yvp0rpmm4xgmye4cshb3.webp",
          evaluate: 2779,
          rating: 4.5,
          participants: "100k",
          price: 90,
          discounts: ["年终大促"],
          tags: ["热卖", "立即确认"],
        },
        {
          title: "东京Mega Ilumi 灯光秀2023 - 2024门票（大井赛马场）",
          cover:
            "https://res.klook.com/image/upload/fl_lossy.progressive,w_2160,h_1440,c_fill,q_85/activities/s3cnpljwj3ajnmr9emwy.webp",
          evaluate: 72,
          rating: 4.3,
          participants: "4k",
          price: 25,
          discounts: ["年终大促", "价格保证"],
          tags: ["立即确认"],
        },
        {
          title: "东京Mega Ilumi 灯光秀2023 - 2024门票（大井赛马场）",
          cover:
            "https://res.klook.com/image/upload/fl_lossy.progressive,w_2160,h_1440,c_fill,q_85/activities/s3cnpljwj3ajnmr9emwy.webp",
          evaluate: 72,
          rating: 4.3,
          participants: "4k",
          price: 25,
          discounts: ["年终大促", "价格保证"],
          tags: ["立即确认"],
        },
      ],
    },
    {
      category: "玩乐必备",
      collections: [
        {
          title: "东京Mega Ilumi 灯光秀2023 - 2024门票（大井赛马场）",
          cover:
            "https://res.klook.com/image/upload/fl_lossy.progressive,w_2160,h_1440,c_fill,q_85/activities/s3cnpljwj3ajnmr9emwy.webp",
          evaluate: 72,
          rating: 4.3,
          participants: "4k",
          price: 25,
          discounts: ["年终大促", "价格保证"],
          tags: ["立即确认"],
        },
      ],
    },
  ])

  return {
    collectionInfo,
  }
})
