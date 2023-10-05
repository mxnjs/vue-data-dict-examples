<script setup lang="ts">
defineOptions({
  dicts: ['lang'],
})
const langVal = 1;
</script>

<template>
  <main>
    <div>
      <h2>label dict</h2>
      <div>{{ dict.label.lang[langVal] }}</div>
      <div>{{ dict.langDict.label[langVal] }}</div>
      <div>{{ dict.dict.lang.label[langVal] }}</div>
    </div>
    <br/>
    <div>
      <h2>list dict</h2>
      <div v-for="item in dict.values.lang" :key="item.value">
        {{ item.value }} : {{ item.label }}
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  text-align: center;
}
</style>
