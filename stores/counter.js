import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0,
    isChanged: false,
    array: [],
  }),
  actions: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
  },
  getters: {
    doubleCount: (state) => state.count * 2,
    doubleCountPlusOne() {
      return this.doubleCount + 1
    },
  },
  // 已添加@pinia-plugin-persistedstate/nuxt模組
  // persist屬性，用來配置store持久化，將狀態儲存在瀏覽器的localStorage
  persist: {
    key: 'counter',
    storage: persistedState.localStorage
  },
});

// 使用setup函數定義 Counter Store的寫法如下：
// export const useCounterStore = defineStore(
//   'counter',
//   () => {
//     const count = useState('count', () => 0)

//     const increment = () => {
//       count.value += 1
//     }
//     const decrement = () => {
//       count.value -= 1
//     }

//     const doubleCount = computed(() => count.value * 2)

//     return {
//       count,
//       increment,
//       decrement,
//       doubleCount
//     }
//   },
//   {
//     persist: {
//       key: 'counter',
//       storage: persistedState.localStorage
//     }
//   }
// )
