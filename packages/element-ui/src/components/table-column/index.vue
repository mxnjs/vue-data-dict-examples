<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="name" label="姓名"></el-table-column>
    <el-table-column label="启蒙的语言">
        <el-table-column label="A">
        <template slot-scope="scope">
          {{ dict.label.lang[scope.row.lang1] }}
        </template>
        </el-table-column>
        <el-table-column label="B">
        <template slot-scope="scope">
          {{ dict.langDict.label[scope.row.lang1] }}
        </template>
        </el-table-column>
    </el-table-column>
    <el-table-column label="常用的语言" align="center">
      <el-table-column prop="lang2" label="A" :formatter="langDictFormatter" />
      <el-table-column
        prop="lang2"
        label="B"
        :formatter="dictTableColumnFormatters.formLabel(this.dict.label.lang)"
      />
      <el-table-column
        prop="lang2"
        label="C"
        :formatter="dictTableColumnFormatters.formDict(this.dict.langDict)"
      />
    </el-table-column>
  </el-table>
</template>

<script>
import dictTableColumnFormatters from "./dictTableColumnFormatters";

export default {
  name: "mxn-select",
  dicts: ["lang"],
  data() {
    return {
      tableData: [
        {
          name: "小明",
          lang1: 3,
          lang2: 1,
        },
        {
          name: "小红",
          lang1: 1,
          lang2: 2,
        },
      ],
      dictTableColumnFormatters,
    };
  },
  methods: {
    langDictFormatter(row, column, cellValue) {
      return this.dict.label.lang[cellValue] || "-";
    },
  },
};
</script>

<style></style>