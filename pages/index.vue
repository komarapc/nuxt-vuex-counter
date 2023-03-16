<template>
  <div class="flex flex-col w-full min-h-screen items-center justify-center">
    <div class="flex flex-col gap-4 items-center justify-center">
      <span class="text-4xl text-emerald-600 font-semibold">
        Nuxt<span class="text-orange-500">JS</span></span
      >
      <span class="font-light text-xl">Counter with Vuex</span>
      <Counter />
      <div class="flex flex-row items-center justify-center gap-2">
        <button
          class="w-10 h-10 bg-emerald-500 hover:bg-emerald-600 rounded text-white"
          @click="$store.dispatch('decrement', limitNumber)"
        >
          -
        </button>
        <button
          class="w-10 h-10 bg-emerald-500 hover:bg-emerald-600 rounded text-white"
          @click="$store.dispatch('increment', limitNumber)"
        >
          +
        </button>
      </div>
      <div class="flex flex-col gap-2 items-center">
        <span>Increment/Decrement by</span>
        <input
          type="number"
          v-model="limitNumber"
          class="w-20 h-10 border border-neutral-300 outline-none text-center rounded-lg focus:ring-4 focus:ring-blue-200"
        />
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState, mapMutations } from "vuex";

interface Data {
  limitNumber: number;
}

export default Vue.extend({
  name: "IndexPage",
  data(): Data {
    return {
      limitNumber: 1,
    };
  },
  computed: {
    ...mapState(["count"]),
  },
  methods: {
    ...mapMutations(["increment", "decrement"]),
  },
});
</script>
