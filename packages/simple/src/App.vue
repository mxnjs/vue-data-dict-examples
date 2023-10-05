<template>
  <div id="app">
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
  </div>
</template>

<script>

export default {
  name: 'App',
  dicts: ['lang'],
  data() {
    return {
      langVal: 1,
    }
  }
}
</script>

<style>
#app {
  text-align: center;
}
</style>
