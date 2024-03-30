import { defineStore } from "pinia";
import { ref } from "vue";

// Option Stores
export const useCounter2Store = defineStore("counter2", {
  // 初期設定
  state: () => ({
    count: 0
  }),
  // 算出プロパティ
  getters: {
    doubleCount: (state) => state.count * 2
  },
  // state の値を更新する関数
  actions: {
    addCount(add: number) {
      this.count += add;
    }
  }
});
