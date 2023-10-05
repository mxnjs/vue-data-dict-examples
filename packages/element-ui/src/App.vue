<template>
  <div id="app">
    <div>
      <h2>label dict</h2>
      <mxn-select />
      <mxn-table-column />
    </div>
    <br/>
  </div>
</template>

<script>
import Select from './components/select'
import TableColumn from './components/table-column'

export default {
  name: 'App',
  components: {
    'mxn-select': Select,
    'mxn-table-column': TableColumn,
  },
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
