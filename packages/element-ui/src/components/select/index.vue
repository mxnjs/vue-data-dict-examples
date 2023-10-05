<template>
  <div>
    <el-select v-model="value" placeholder="请选择语言">
      <el-option
        v-for="item in dict.values.lang"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  name: 'mxn-select',
  dicts: ['lang'],
  data() {
    return {
      value: null,
    }
  }
}
</script>

<style>

</style>