<template>
  <div class="counter-warp">
    <p>Vuex counter：{{ count }}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>
  </div>
</template>

<script>
// Use Vuex
import store from './store';

export default {
    computed: {
        count () {
            return store.getters.count;
        }
    },
    methods: {
        increment () {
            store.commit('increment', 5);
        },
        decrement () {
            store.commit('decrement', 3);
        }
    }
};
</script>

<style>
.counter-warp {
  text-align: center;
  margin-top: 100px;
}
.home {
  display: inline-block;
  margin: 100px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
</style>
