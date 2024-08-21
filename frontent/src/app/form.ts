const formJSON = {
    "components": [
      {
        "label": "Number",
        "applyMaskOn": "change",
        "mask": false,
        "tableView": false,
        "delimiter": false,
        "requireDecimal": false,
        "inputFormat": "plain",
        "truncateMultipleSpaces": false,
        "key": "number",
        "type": "number",
        "input": true,
        "decimalLimit": 2
      }
    ]
}

const data = {};

export { formJSON, data };
