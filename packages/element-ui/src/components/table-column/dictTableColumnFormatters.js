function formLabel(label) {
  return function (row, column, cellValue) {
    return label[cellValue] || "-";
  }
}

function formDict(dict) {
  return function (row, column, cellValue) {
    return dict.label[cellValue] || "-";
  }
}

export default {
  formLabel,
  formDict,
}