import { Component } from '@angular/core';

import { Templates } from 'formiojs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public showPreview: any = 0;
  customForm: any = {
    "components": [
      {
        "label": "Table",
        "cellAlignment": "center align-middle h-auto",
        "customClass": "text-center",
        "bordered": true,
        "condensed": true,
        "hideLabel": true,
        "key": "table",
        "type": "table",
        "numRows": 15,
        "numCols": 13,
        "input": false,
        "tableView": false,
        "header": [
          "S. No",
          "Material Code",
          "Raw Material Name",
          "Lot",
          "Type",
          "Step No",
          "Ratio",
          "UOM",
          "Standard Qty.",
          "Round off Qty.",
          "Actual Qty",
          "IHB No.",
          "Performerd By"
        ],
        "rows": [
          [
            {
              "components": [
                {
                  "label": "HTML",
                  "attrs": [
                    {
                      "attr": "",
                      "value": ""
                    }
                  ],
                  "content": "6",
                  "refreshOnChange": false,
                  "key": "html",
                  "properties": {
                    "colSpan": "1",
                    "rowSpan": "15"
                  },
                  "type": "htmlelement",
                  "input": false,
                  "tableView": false
                }
              ]
            },
            {
              "components": [
                {
                  "label": "HTML",
                  "attrs": [
                    {
                      "attr": "",
                      "value": ""
                    }
                  ],
                  "content": "10038",
                  "refreshOnChange": false,
                  "key": "html15",
                  "properties": {
                    "rowSpan": "15"
                  },
                  "type": "htmlelement",
                  "input": false,
                  "tableView": false
                }
              ]
            },
            {
              "components": [
                {
                  "label": "HTML",
                  "attrs": [
                    {
                      "attr": "",
                      "value": ""
                    }
                  ],
                  "content": "MDC",
                  "refreshOnChange": false,
                  "key": "html30",
                  "properties": {
                    "rowSpan": "14"
                  },
                  "type": "htmlelement",
                  "input": false,
                  "tableView": false
                }
              ]
            },
            {
              "components": [
                {
                  "label": "HTML",
                  "attrs": [
                    {
                      "attr": "",
                      "value": ""
                    }
                  ],
                  "content": "Lot-1",
                  "refreshOnChange": false,
                  "key": "html2",
                  "properties": {
                    "rowSpan": "2"
                  },
                  "type": "htmlelement",
                  "input": false,
                  "tableView": false
                }
              ]
            },
            {
              "components": [
                {
                  "label": "HTML",
                  "attrs": [
                    {
                      "attr": "",
                      "value": ""
                    }
                  ],
                  "content": "Fresh",
                  "refreshOnChange": false,
                  "key": "html3",
                  "type": "htmlelement",
                  "input": false,
                  "tableView": false
                }
              ]
            },
            {
              "components": [
                {
                  "label": "HTML",
                  "attrs": [
                    {
                      "attr": "",
                      "value": ""
                    }
                  ],
                  "content": "16",
                  "refreshOnChange": false,
                  "key": "html4",
                  "properties": {
                    "rowSpan": "2"
                  },
                  "type": "htmlelement",
                  "input": false,
                  "tableView": false
                }
              ]
            },
            {
              "components": [
                {
                  "label": "HTML",
                  "attrs": [
                    {
                      "attr": "",
                      "value": ""
                    }
                  ],
                  "content": "W * 1.6",
                  "refreshOnChange": false,
                  "key": "html4",
                  "properties": {
                    "rowSpan": "2"
                  },
                  "type": "htmlelement",
                  "input": false,
                  "tableView": false
                }
              ]
            },
            {
              "components": [
                {
                  "label": "HTML",
                  "attrs": [
                    {
                      "attr": "",
                      "value": ""
                    }
                  ],
                  "content": "Lt",
                  "refreshOnChange": false,
                  "key": "html8",
                  "properties": {
                    "rowSpan": "2"
                  },
                  "type": "htmlelement",
                  "input": false,
                  "tableView": false
                }
              ]
            },
            {
              "components": [
                {
                  "label": "HTML",
                  "attrs": [
                    {
                      "attr": "",
                      "value": ""
                    }
                  ],
                  "content": "2400",
                  "refreshOnChange": false,
                  "key": "html17",
                  "properties": {
                    "rowSpan": "2"
                  },
                  "type": "htmlelement",
                  "input": false,
                  "tableView": false
                }
              ]
            },
            {
              "components": [
                {
                  "label": "Number",
                  "applyMaskOn": "change",
                  "hideLabel": true,
                  "mask": false,
                  "tableView": false,
                  "delimiter": false,
                  "requireDecimal": false,
                  "inputFormat": "plain",
                  "truncateMultipleSpaces": false,
                  "key": "number",
                  "properties": {
                    "rowSpan": "2"
                  },
                  "type": "number",
                  "input": true
                }
              ]
            },
            {
              "components": [
                {
                  "label": "Number",
                  "applyMaskOn": "change",
                  "hideLabel": true,
                  "mask": false,
                  "tableView": false,
                  "delimiter": false,
                  "requireDecimal": false,
                  "inputFormat": "plain",
                  "truncateMultipleSpaces": false,
                  "key": "number8",
                  "properties": {
                    "rowSpan": "1"
                  },
                  "type": "number",
                  "input": true
                }
              ]
            },
            {
              "components": [
                {
                  "label": "Number",
                  "applyMaskOn": "change",
                  "hideLabel": true,
                  "mask": false,
                  "tableView": false,
                  "delimiter": false,
                  "requireDecimal": false,
                  "inputFormat": "plain",
                  "truncateMultipleSpaces": false,
                  "key": "number23",
                  "properties": {
                    "rowSpan": "1"
                  },
                  "type": "number",
                  "input": true
                }
              ]
            },
            {
              "components": [
                {
                  "label": "Signature",
                  "tableView": false,
                  "key": "signature",
                  "properties": {
                    "rowSpan": "2"
                  },
                  "type": "signature",
                  "input": true
                }
              ]
            }
          ],
          [
            {
              "components": [
                {
                  "label": "HTML",
                  "attrs": [
                    {
                      "attr": "",
                      "value": ""
                    }
                  ],
                  "content": "Recovery",
                  "refreshOnChange": false,
                  "key": "html3",
                  "type": "htmlelement",
                  "input": false,
                  "tableView": false
                }
              ]
            },
            {
              "components": [
                {
                  "label": "Number",
                  "applyMaskOn": "change",
                  "hideLabel": true,
                  "mask": false,
                  "tableView": false,
                  "delimiter": false,
                  "requireDecimal": false,
                  "inputFormat": "plain",
                  "truncateMultipleSpaces": false,
                  "key": "number10",
                  "properties": {
                    "rowSpan": "1"
                  },
                  "type": "number",
                  "input": true
                }
              ]
            },
            {
              "components": [
                {
                  "label": "Number",
                  "applyMaskOn": "change",
                  "hideLabel": true,
                  "mask": false,
                  "tableView": false,
                  "delimiter": false,
                  "requireDecimal": false,
                  "inputFormat": "plain",
                  "truncateMultipleSpaces": false,
                  "key": "number24",
                  "properties": {
                    "rowSpan": "1"
                  },
                  "type": "number",
                  "input": true
                }
              ]
            },
            {
              "components": []
            },
            {
              "components": []
            },
            {
              "components": []
            },
            {
              "components": []
            },
            {
              "components": []
            },
            {
              "components": []
            },
            {
              "components": []
            },
            {
              "components": []
            },
            {
              "components": []
            },
            {
              "components": []
            }
          ],
          [
            {
              "components": [
                {
                  "label": "HTML",
                  "attrs": [
                    {
                      "attr": "",
                      "value": ""
                    }
                  ],
                  "content": "Lot-2",
                  "refreshOnChange": false,
                  "key": "html2",
                  "properties": {
                    "rowSpan": "2"
                  },
                  "type": "htmlelement",
                  "input": false,
                  "tableView": false
                }
              ]
            },
            {
              "components": [
                {
                  "label": "HTML",
                  "attrs": [
                    {
                      "attr": "",
                      "value": ""
                    }
                  ],
                  "content": "Fresh",
                  "refreshOnChange": false,
                  "key": "html3",
                  "type": "htmlelement",
                  "input": false,
                  "tableView": false
                }
              ]
            },
            {
              "components": [
                {
                  "label": "HTML",
                  "attrs": [
                    {
                      "attr": "",
                      "value": ""
                    }
                  ],
                  "content": "23",
                  "refreshOnChange": false,
                  "key": "html4",
                  "properties": {
                    "rowSpan": "2"
                  },
                  "type": "htmlelement",
                  "input": false,
                  "tableView": false
                }
              ]
            },
            {
              "components": [
                {
                  "label": "HTML",
                  "attrs": [
                    {
                      "attr": "",
                      "value": ""
                    }
                  ],
                  "content": "W * 0.9",
                  "refreshOnChange": false,
                  "key": "html4",
                  "properties": {
                    "rowSpan": "2"
                  },
                  "type": "htmlelement",
                  "input": false,
                  "tableView": false
                }
              ]
            },
            {
              "components": [
                {
                  "label": "HTML",
                  "attrs": [
                    {
                      "attr": "",
                      "value": ""
                    }
                  ],
                  "content": "Lt",
                  "refreshOnChange": false,
                  "key": "html9",
                  "properties": {
                    "rowSpan": "2"
                  },
                  "type": "htmlelement",
                  "input": false,
                  "tableView": false
                }
              ]
            },
            {
              "components": [
                {
                  "label": "HTML",
                  "attrs": [
                    {
                      "attr": "",
                      "value": ""
                    }
                  ],
                  "content": "1350",
                  "refreshOnChange": false,
                  "key": "html18",
                  "properties": {
                    "rowSpan": "2"
                  },
                  "type": "htmlelement",
                  "input": false,
                  "tableView": false
                }
              ]
            },
            {
              "components": [
                {
                  "label": "Number",
                  "applyMaskOn": "change",
                  "hideLabel": true,
                  "mask": false,
                  "tableView": false,
                  "delimiter": false,
                  "requireDecimal": false,
                  "inputFormat": "plain",
                  "truncateMultipleSpaces": false,
                  "key": "number1",
                  "properties": {
                    "rowSpan": "2"
                  },
                  "type": "number",
                  "input": true
                }
              ]
            },
            {
              "components": [
                {
                  "label": "Number",
                  "applyMaskOn": "change",
                  "hideLabel": true,
                  "mask": false,
                  "tableView": false,
                  "delimiter": false,
                  "requireDecimal": false,
                  "inputFormat": "plain",
                  "truncateMultipleSpaces": false,
                  "key": "number9",
                  "properties": {
                    "rowSpan": "1"
                  },
                  "type": "number",
                  "input": true
                }
              ]
            },
            {
              "components": [
                {
                  "label": "Number",
                  "applyMaskOn": "change",
                  "hideLabel": true,
                  "mask": false,
                  "tableView": false,
                  "delimiter": false,
                  "requireDecimal": false,
                  "inputFormat": "plain",
                  "truncateMultipleSpaces": false,
                  "key": "number26",
                  "properties": {
                    "rowSpan": "1"
                  },
                  "type": "number",
                  "input": true
                }
              ]
            },
            {
              "components": [
                {
                  "label": "Signature",
                  "tableView": false,
                  "key": "signature1",
                  "properties": {
                    "rowSpan": "2"
                  },
                  "type": "signature",
                  "input": true
                }
              ]
            },
            {
              "components": []
            },
            {
              "components": []
            },
            {
              "components": []
            }
          ],
          [
            {
              "components": [
                {
                  "label": "HTML",
                  "attrs": [
                    {
                      "attr": "",
                      "value": ""
                    }
                  ],
                  "content": "Recovery",
                  "refreshOnChange": false,
                  "key": "html3",
                  "type": "htmlelement",
                  "input": false,
                  "tableView": false
                }
              ]
            },
            {
              "components": [
                {
                  "label": "Number",
                  "applyMaskOn": "change",
                  "hideLabel": true,
                  "mask": false,
                  "tableView": false,
                  "delimiter": false,
                  "requireDecimal": false,
                  "inputFormat": "plain",
                  "truncateMultipleSpaces": false,
                  "key": "number11",
                  "properties": {
                    "rowSpan": "1"
                  },
                  "type": "number",
                  "input": true
                }
              ]
            },
            {
              "components": [
                {
                  "label": "Number",
                  "applyMaskOn": "change",
                  "hideLabel": true,
                  "mask": false,
                  "tableView": false,
                  "delimiter": false,
                  "requireDecimal": false,
                  "inputFormat": "plain",
                  "truncateMultipleSpaces": false,
                  "key": "number29",
                  "properties": {
                    "rowSpan": "1"
                  },
                  "type": "number",
                  "input": true
                }
              ]
            },
            {
              "components": []
            },
            {
              "components": []
            },
            {
              "components": []
            },
            {
              "components": []
            },
            {
              "components": []
            },
            {
              "components": []
            },
            {
              "components": []
            },
            {
              "components": []
            },
            {
              "components": []
            },
            {
              "components": []
            }
          ],
          [
            {
              "components": [
                {
                  "label": "HTML",
                  "attrs": [
                    {
                      "attr": "",
                      "value": ""
                    }
                  ],
                  "content": "Lot-3",
                  "refreshOnChange": false,
                  "key": "html2",
                  "properties": {
                    "rowSpan": "2"
                  },
                  "type": "htmlelement",
                  "input": false,
                  "tableView": false
                }
              ]
            },
            {
              "components": [
                {
                  "label": "HTML",
                  "attrs": [
                    {
                      "attr": "",
                      "value": ""
                    }
                  ],
                  "content": "Fresh",
                  "refreshOnChange": false,
                  "key": "html3",
                  "type": "htmlelement",
                  "input": false,
                  "tableView": false
                }
              ]
            },
            {
              "components": [
                {
                  "label": "HTML",
                  "attrs": [
                    {
                      "attr": "",
                      "value": ""
                    }
                  ],
                  "content": "27",
                  "refreshOnChange": false,
                  "key": "html4",
                  "properties": {
                    "rowSpan": "2"
                  },
                  "type": "htmlelement",
                  "input": false,
                  "tableView": false
                }
              ]
            },
            {
              "components": [
                {
                  "label": "HTML",
                  "attrs": [
                    {
                      "attr": "",
                      "value": ""
                    }
                  ],
                  "content": "W * 0.9",
                  "refreshOnChange": false,
                  "key": "html4",
                  "properties": {
                    "rowSpan": "2"
                  },
                  "type": "htmlelement",
                  "input": false,
                  "tableView": false
                }
              ]
            },
            {
              "components": [
                {
                  "label": "HTML",
                  "attrs": [
                    {
                      "attr": "",
                      "value": ""
                    }
                  ],
                  "content": "Lt",
                  "refreshOnChange": false,
                  "key": "html10",
                  "properties": {
                    "rowSpan": "2"
                  },
                  "type": "htmlelement",
                  "input": false,
                  "tableView": false
                }
              ]
            },
            {
              "components": [
                {
                  "label": "HTML",
                  "attrs": [
                    {
                      "attr": "",
                      "value": ""
                    }
                  ],
                  "content": "1350",
                  "refreshOnChange": false,
                  "key": "html19",
                  "properties": {
                    "rowSpan": "2"
                  },
                  "type": "htmlelement",
                  "input": false,
                  "tableView": false
                }
              ]
            },
            {
              "components": [
                {
                  "label": "Number",
                  "applyMaskOn": "change",
                  "hideLabel": true,
                  "mask": false,
                  "tableView": false,
                  "delimiter": false,
                  "requireDecimal": false,
                  "inputFormat": "plain",
                  "truncateMultipleSpaces": false,
                  "key": "number2",
                  "properties": {
                    "rowSpan": "2"
                  },
                  "type": "number",
                  "input": true
                }
              ]
            },
            {
              "components": [
                {
                  "label": "Number",
                  "applyMaskOn": "change",
                  "hideLabel": true,
                  "mask": false,
                  "tableView": false,
                  "delimiter": false,
                  "requireDecimal": false,
                  "inputFormat": "plain",
                  "truncateMultipleSpaces": false,
                  "key": "number12",
                  "properties": {
                    "rowSpan": "1"
                  },
                  "type": "number",
                  "input": true
                }
              ]
            },
            {
              "components": [
                {
                  "label": "Number",
                  "applyMaskOn": "change",
                  "hideLabel": true,
                  "mask": false,
                  "tableView": false,
                  "delimiter": false,
                  "requireDecimal": false,
                  "inputFormat": "plain",
                  "truncateMultipleSpaces": false,
                  "key": "number27",
                  "properties": {
                    "rowSpan": "1"
                  },
                  "type": "number",
                  "input": true
                }
              ]
            },
            {
              "components": [
                {
                  "label": "Signature",
                  "tableView": false,
                  "key": "signature2",
                  "properties": {
                    "rowSpan": "2"
                  },
                  "type": "signature",
                  "input": true
                }
              ]
            },
            {
              "components": []
            },
            {
              "components": []
            },
            {
              "components": []
            }
          ],
          [
            {
              "components": [
                {
                  "label": "HTML",
                  "attrs": [
                    {
                      "attr": "",
                      "value": ""
                    }
                  ],
                  "content": "Recovery",
                  "refreshOnChange": false,
                  "key": "html3",
                  "type": "htmlelement",
                  "input": false,
                  "tableView": false
                }
              ]
            },
            {
              "components": [
                {
                  "label": "Number",
                  "applyMaskOn": "change",
                  "hideLabel": true,
                  "mask": false,
                  "tableView": false,
                  "delimiter": false,
                  "requireDecimal": false,
                  "inputFormat": "plain",
                  "truncateMultipleSpaces": false,
                  "key": "number13",
                  "properties": {
                    "rowSpan": "1"
                  },
                  "type": "number",
                  "input": true
                }
              ]
            },
            {
              "components": [
                {
                  "label": "Number",
                  "applyMaskOn": "change",
                  "hideLabel": true,
                  "mask": false,
                  "tableView": false,
                  "delimiter": false,
                  "requireDecimal": false,
                  "inputFormat": "plain",
                  "truncateMultipleSpaces": false,
                  "key": "number28",
                  "properties": {
                    "rowSpan": "1"
                  },
                  "type": "number",
                  "input": true
                }
              ]
            },
            {
              "components": []
            },
            {
              "components": []
            },
            {
              "components": []
            },
            {
              "components": []
            },
            {
              "components": []
            },
            {
              "components": []
            },
            {
              "components": []
            },
            {
              "components": []
            },
            {
              "components": []
            },
            {
              "components": []
            }
          ],
          [
            {
              "components": [
                {
                  "label": "HTML",
                  "attrs": [
                    {
                      "attr": "",
                      "value": ""
                    }
                  ],
                  "content": "Lot-4",
                  "refreshOnChange": false,
                  "key": "html2",
                  "properties": {
                    "rowSpan": "2"
                  },
                  "type": "htmlelement",
                  "input": false,
                  "tableView": false
                }
              ]
            },
            {
              "components": [
                {
                  "label": "HTML",
                  "attrs": [
                    {
                      "attr": "",
                      "value": ""
                    }
                  ],
                  "content": "Fresh",
                  "refreshOnChange": false,
                  "key": "html3",
                  "type": "htmlelement",
                  "input": false,
                  "tableView": false
                }
              ]
            },
            {
              "components": [
                {
                  "label": "HTML",
                  "attrs": [
                    {
                      "attr": "",
                      "value": ""
                    }
                  ],
                  "content": "31",
                  "refreshOnChange": false,
                  "key": "html4",
                  "properties": {
                    "rowSpan": "2"
                  },
                  "type": "htmlelement",
                  "input": false,
                  "tableView": false
                }
              ]
            },
            {
              "components": [
                {
                  "label": "HTML",
                  "attrs": [
                    {
                      "attr": "",
                      "value": ""
                    }
                  ],
                  "content": "W * 0.5",
                  "refreshOnChange": false,
                  "key": "html4",
                  "properties": {
                    "rowSpan": "2"
                  },
                  "type": "htmlelement",
                  "input": false,
                  "tableView": false
                }
              ]
            },
            {
              "components": [
                {
                  "label": "HTML",
                  "attrs": [
                    {
                      "attr": "",
                      "value": ""
                    }
                  ],
                  "content": "Lt",
                  "refreshOnChange": false,
                  "key": "html11",
                  "properties": {
                    "rowSpan": "2"
                  },
                  "type": "htmlelement",
                  "input": false,
                  "tableView": false
                }
              ]
            },
            {
              "components": [
                {
                  "label": "HTML",
                  "attrs": [
                    {
                      "attr": "",
                      "value": ""
                    }
                  ],
                  "content": "750",
                  "refreshOnChange": false,
                  "key": "html20",
                  "properties": {
                    "rowSpan": "2"
                  },
                  "type": "htmlelement",
                  "input": false,
                  "tableView": false
                }
              ]
            },
            {
              "components": [
                {
                  "label": "Number",
                  "applyMaskOn": "change",
                  "hideLabel": true,
                  "mask": false,
                  "tableView": false,
                  "delimiter": false,
                  "requireDecimal": false,
                  "inputFormat": "plain",
                  "truncateMultipleSpaces": false,
                  "key": "number3",
                  "properties": {
                    "rowSpan": "2"
                  },
                  "type": "number",
                  "input": true
                }
              ]
            },
            {
              "components": [
                {
                  "label": "Number",
                  "applyMaskOn": "change",
                  "hideLabel": true,
                  "mask": false,
                  "tableView": false,
                  "delimiter": false,
                  "requireDecimal": false,
                  "inputFormat": "plain",
                  "truncateMultipleSpaces": false,
                  "key": "number14",
                  "properties": {
                    "rowSpan": "1"
                  },
                  "type": "number",
                  "input": true
                }
              ]
            },
            {
              "components": [
                {
                  "label": "Number",
                  "applyMaskOn": "change",
                  "hideLabel": true,
                  "mask": false,
                  "tableView": false,
                  "delimiter": false,
                  "requireDecimal": false,
                  "inputFormat": "plain",
                  "truncateMultipleSpaces": false,
                  "key": "number25",
                  "properties": {
                    "rowSpan": "1"
                  },
                  "type": "number",
                  "input": true
                }
              ]
            },
            {
              "components": [
                {
                  "label": "Signature",
                  "tableView": false,
                  "key": "signature3",
                  "properties": {
                    "rowSpan": "2"
                  },
                  "type": "signature",
                  "input": true
                }
              ]
            },
            {
              "components": []
            },
            {
              "components": []
            },
            {
              "components": []
            }
          ],
          [
            {
              "components": [
                {
                  "label": "HTML",
                  "attrs": [
                    {
                      "attr": "",
                      "value": ""
                    }
                  ],
                  "content": "Recovery",
                  "refreshOnChange": false,
                  "key": "html3",
                  "type": "htmlelement",
                  "input": false,
                  "tableView": false
                }
              ]
            },
            {
              "components": [
                {
                  "label": "Number",
                  "applyMaskOn": "change",
                  "hideLabel": true,
                  "mask": false,
                  "tableView": false,
                  "delimiter": false,
                  "requireDecimal": false,
                  "inputFormat": "plain",
                  "truncateMultipleSpaces": false,
                  "key": "number15",
                  "properties": {
                    "rowSpan": "1"
                  },
                  "type": "number",
                  "input": true
                }
              ]
            },
            {
              "components": [
                {
                  "label": "Number",
                  "applyMaskOn": "change",
                  "hideLabel": true,
                  "mask": false,
                  "tableView": false,
                  "delimiter": false,
                  "requireDecimal": false,
                  "inputFormat": "plain",
                  "truncateMultipleSpaces": false,
                  "key": "number30",
                  "properties": {
                    "rowSpan": "1"
                  },
                  "type": "number",
                  "input": true
                }
              ]
            },
            {
              "components": []
            },
            {
              "components": []
            },
            {
              "components": []
            },
            {
              "components": []
            },
            {
              "components": []
            },
            {
              "components": []
            },
            {
              "components": []
            },
            {
              "components": []
            },
            {
              "components": []
            },
            {
              "components": []
            }
          ],
          [
            {
              "components": [
                {
                  "label": "HTML",
                  "attrs": [
                    {
                      "attr": "",
                      "value": ""
                    }
                  ],
                  "content": "Lot-5",
                  "refreshOnChange": false,
                  "key": "html2",
                  "properties": {
                    "rowSpan": "2"
                  },
                  "type": "htmlelement",
                  "input": false,
                  "tableView": false
                }
              ]
            },
            {
              "components": [
                {
                  "label": "HTML",
                  "attrs": [
                    {
                      "attr": "",
                      "value": ""
                    }
                  ],
                  "content": "Fresh",
                  "refreshOnChange": false,
                  "key": "html3",
                  "type": "htmlelement",
                  "input": false,
                  "tableView": false
                }
              ]
            },
            {
              "components": [
                {
                  "label": "HTML",
                  "attrs": [
                    {
                      "attr": "",
                      "value": ""
                    }
                  ],
                  "content": "73",
                  "refreshOnChange": false,
                  "key": "html4",
                  "properties": {
                    "rowSpan": "2"
                  },
                  "type": "htmlelement",
                  "input": false,
                  "tableView": false
                }
              ]
            },
            {
              "components": [
                {
                  "label": "HTML",
                  "attrs": [
                    {
                      "attr": "",
                      "value": ""
                    }
                  ],
                  "content": "W * 0.15",
                  "refreshOnChange": false,
                  "key": "html5",
                  "properties": {
                    "rowSpan": "2"
                  },
                  "type": "htmlelement",
                  "input": false,
                  "tableView": false
                }
              ]
            },
            {
              "components": [
                {
                  "label": "HTML",
                  "attrs": [
                    {
                      "attr": "",
                      "value": ""
                    }
                  ],
                  "content": "Lt",
                  "refreshOnChange": false,
                  "key": "html12",
                  "properties": {
                    "rowSpan": "2"
                  },
                  "type": "htmlelement",
                  "input": false,
                  "tableView": false
                }
              ]
            },
            {
              "components": [
                {
                  "label": "HTML",
                  "attrs": [
                    {
                      "attr": "",
                      "value": ""
                    }
                  ],
                  "content": "225",
                  "refreshOnChange": false,
                  "key": "html21",
                  "properties": {
                    "rowSpan": "2"
                  },
                  "type": "htmlelement",
                  "input": false,
                  "tableView": false
                }
              ]
            },
            {
              "components": [
                {
                  "label": "Number",
                  "applyMaskOn": "change",
                  "hideLabel": true,
                  "mask": false,
                  "tableView": false,
                  "delimiter": false,
                  "requireDecimal": false,
                  "inputFormat": "plain",
                  "truncateMultipleSpaces": false,
                  "key": "number4",
                  "properties": {
                    "rowSpan": "2"
                  },
                  "type": "number",
                  "input": true
                }
              ]
            },
            {
              "components": [
                {
                  "label": "Number",
                  "applyMaskOn": "change",
                  "hideLabel": true,
                  "mask": false,
                  "tableView": false,
                  "delimiter": false,
                  "requireDecimal": false,
                  "inputFormat": "plain",
                  "truncateMultipleSpaces": false,
                  "key": "number16",
                  "properties": {
                    "rowSpan": "1"
                  },
                  "type": "number",
                  "input": true
                }
              ]
            },
            {
              "components": [
                {
                  "label": "Number",
                  "applyMaskOn": "change",
                  "hideLabel": true,
                  "mask": false,
                  "tableView": false,
                  "delimiter": false,
                  "requireDecimal": false,
                  "inputFormat": "plain",
                  "truncateMultipleSpaces": false,
                  "key": "number31",
                  "properties": {
                    "rowSpan": "1"
                  },
                  "type": "number",
                  "input": true
                }
              ]
            },
            {
              "components": [
                {
                  "label": "Signature",
                  "tableView": false,
                  "key": "signature6",
                  "properties": {
                    "rowSpan": "2"
                  },
                  "type": "signature",
                  "input": true
                }
              ]
            },
            {
              "components": []
            },
            {
              "components": []
            },
            {
              "components": []
            }
          ],
          [
            {
              "components": [
                {
                  "label": "HTML",
                  "attrs": [
                    {
                      "attr": "",
                      "value": ""
                    }
                  ],
                  "content": "Recovery",
                  "refreshOnChange": false,
                  "key": "html3",
                  "type": "htmlelement",
                  "input": false,
                  "tableView": false
                }
              ]
            },
            {
              "components": [
                {
                  "label": "Number",
                  "applyMaskOn": "change",
                  "hideLabel": true,
                  "mask": false,
                  "tableView": false,
                  "delimiter": false,
                  "requireDecimal": false,
                  "inputFormat": "plain",
                  "truncateMultipleSpaces": false,
                  "key": "number17",
                  "properties": {
                    "rowSpan": "1"
                  },
                  "type": "number",
                  "input": true
                }
              ]
            },
            {
              "components": [
                {
                  "label": "Number",
                  "applyMaskOn": "change",
                  "hideLabel": true,
                  "mask": false,
                  "tableView": false,
                  "delimiter": false,
                  "requireDecimal": false,
                  "inputFormat": "plain",
                  "truncateMultipleSpaces": false,
                  "key": "number32",
                  "properties": {
                    "rowSpan": "1"
                  },
                  "type": "number",
                  "input": true
                }
              ]
            },
            {
              "components": [
                {
                  "label": "Signature",
                  "tableView": false,
                  "key": "signature4",
                  "properties": {
                    "rowSpan": "2"
                  },
                  "type": "signature",
                  "input": true
                }
              ]
            },
            {
              "components": []
            },
            {
              "components": []
            },
            {
              "components": []
            },
            {
              "components": []
            },
            {
              "components": []
            },
            {
              "components": []
            },
            {
              "components": []
            },
            {
              "components": []
            },
            {
              "components": []
            }
          ],
          [
            {
              "components": [
                {
                  "label": "HTML",
                  "attrs": [
                    {
                      "attr": "",
                      "value": ""
                    }
                  ],
                  "content": "Lot-6",
                  "refreshOnChange": false,
                  "key": "html2",
                  "properties": {
                    "rowSpan": "2"
                  },
                  "type": "htmlelement",
                  "input": false,
                  "tableView": false
                }
              ]
            },
            {
              "components": [
                {
                  "label": "HTML",
                  "attrs": [
                    {
                      "attr": "",
                      "value": ""
                    }
                  ],
                  "content": "Fresh",
                  "refreshOnChange": false,
                  "key": "html3",
                  "type": "htmlelement",
                  "input": false,
                  "tableView": false
                }
              ]
            },
            {
              "components": [
                {
                  "label": "HTML",
                  "attrs": [
                    {
                      "attr": "",
                      "value": ""
                    }
                  ],
                  "content": "77",
                  "refreshOnChange": false,
                  "key": "html4",
                  "properties": {
                    "rowSpan": "2"
                  },
                  "type": "htmlelement",
                  "input": false,
                  "tableView": false
                }
              ]
            },
            {
              "components": [
                {
                  "label": "HTML",
                  "attrs": [
                    {
                      "attr": "",
                      "value": ""
                    }
                  ],
                  "content": "W * 0.15",
                  "refreshOnChange": false,
                  "key": "html6",
                  "properties": {
                    "rowSpan": "2"
                  },
                  "type": "htmlelement",
                  "input": false,
                  "tableView": false
                }
              ]
            },
            {
              "components": [
                {
                  "label": "HTML",
                  "attrs": [
                    {
                      "attr": "",
                      "value": ""
                    }
                  ],
                  "content": "Lt",
                  "refreshOnChange": false,
                  "key": "html13",
                  "properties": {
                    "rowSpan": "2"
                  },
                  "type": "htmlelement",
                  "input": false,
                  "tableView": false
                }
              ]
            },
            {
              "components": [
                {
                  "label": "HTML",
                  "attrs": [
                    {
                      "attr": "",
                      "value": ""
                    }
                  ],
                  "content": "225",
                  "refreshOnChange": false,
                  "key": "html22",
                  "properties": {
                    "rowSpan": "2"
                  },
                  "type": "htmlelement",
                  "input": false,
                  "tableView": false
                }
              ]
            },
            {
              "components": [
                {
                  "label": "Number",
                  "applyMaskOn": "change",
                  "hideLabel": true,
                  "mask": false,
                  "tableView": false,
                  "delimiter": false,
                  "requireDecimal": false,
                  "inputFormat": "plain",
                  "truncateMultipleSpaces": false,
                  "key": "number5",
                  "properties": {
                    "rowSpan": "2"
                  },
                  "type": "number",
                  "input": true
                }
              ]
            },
            {
              "components": [
                {
                  "label": "Number",
                  "applyMaskOn": "change",
                  "hideLabel": true,
                  "mask": false,
                  "tableView": false,
                  "delimiter": false,
                  "requireDecimal": false,
                  "inputFormat": "plain",
                  "truncateMultipleSpaces": false,
                  "key": "number18",
                  "properties": {
                    "rowSpan": "1"
                  },
                  "type": "number",
                  "input": true
                }
              ]
            },
            {
              "components": [
                {
                  "label": "Number",
                  "applyMaskOn": "change",
                  "hideLabel": true,
                  "mask": false,
                  "tableView": false,
                  "delimiter": false,
                  "requireDecimal": false,
                  "inputFormat": "plain",
                  "truncateMultipleSpaces": false,
                  "key": "number33",
                  "properties": {
                    "rowSpan": "1"
                  },
                  "type": "number",
                  "input": true
                }
              ]
            },
            {
              "components": [
                {
                  "label": "Signature",
                  "tableView": false,
                  "key": "signature44",
                  "properties": {
                    "rowSpan": "2"
                  },
                  "type": "signature",
                  "input": true
                }
              ]
            },
            {
              "components": []
            },
            {
              "components": []
            },
            {
              "components": []
            }
          ],
          [
            {
              "components": [
                {
                  "label": "HTML",
                  "attrs": [
                    {
                      "attr": "",
                      "value": ""
                    }
                  ],
                  "content": "Recovery",
                  "refreshOnChange": false,
                  "key": "html3",
                  "type": "htmlelement",
                  "input": false,
                  "tableView": false
                }
              ]
            },
            {
              "components": [
                {
                  "label": "Number",
                  "applyMaskOn": "change",
                  "hideLabel": true,
                  "mask": false,
                  "tableView": false,
                  "delimiter": false,
                  "requireDecimal": false,
                  "inputFormat": "plain",
                  "truncateMultipleSpaces": false,
                  "key": "number19",
                  "properties": {
                    "rowSpan": "1"
                  },
                  "type": "number",
                  "input": true
                }
              ]
            },
            {
              "components": [
                {
                  "label": "Number",
                  "applyMaskOn": "change",
                  "hideLabel": true,
                  "mask": false,
                  "tableView": false,
                  "delimiter": false,
                  "requireDecimal": false,
                  "inputFormat": "plain",
                  "truncateMultipleSpaces": false,
                  "key": "number34",
                  "properties": {
                    "rowSpan": "1"
                  },
                  "type": "number",
                  "input": true
                }
              ]
            },
            {
              "components": []
            },
            {
              "components": []
            },
            {
              "components": []
            },
            {
              "components": []
            },
            {
              "components": []
            },
            {
              "components": []
            },
            {
              "components": []
            },
            {
              "components": []
            },
            {
              "components": []
            },
            {
              "components": []
            }
          ],
          [
            {
              "components": [
                {
                  "label": "HTML",
                  "attrs": [
                    {
                      "attr": "",
                      "value": ""
                    }
                  ],
                  "content": "Lot-7",
                  "refreshOnChange": false,
                  "key": "html2",
                  "properties": {
                    "rowSpan": "2"
                  },
                  "type": "htmlelement",
                  "input": false,
                  "tableView": false
                }
              ]
            },
            {
              "components": [
                {
                  "label": "HTML",
                  "attrs": [
                    {
                      "attr": "",
                      "value": ""
                    }
                  ],
                  "content": "Fresh",
                  "refreshOnChange": false,
                  "key": "html3",
                  "type": "htmlelement",
                  "input": false,
                  "tableView": false
                }
              ]
            },
            {
              "components": [
                {
                  "label": "HTML",
                  "attrs": [
                    {
                      "attr": "",
                      "value": ""
                    }
                  ],
                  "content": "107/125",
                  "refreshOnChange": false,
                  "key": "html4",
                  "properties": {
                    "rowSpan": "2"
                  },
                  "type": "htmlelement",
                  "input": false,
                  "tableView": false
                }
              ]
            },
            {
              "components": [
                {
                  "label": "HTML",
                  "attrs": [
                    {
                      "attr": "",
                      "value": ""
                    }
                  ],
                  "content": "W * 0.07",
                  "refreshOnChange": false,
                  "key": "html7",
                  "properties": {
                    "rowSpan": "2"
                  },
                  "type": "htmlelement",
                  "input": false,
                  "tableView": false
                }
              ]
            },
            {
              "components": [
                {
                  "label": "HTML",
                  "attrs": [
                    {
                      "attr": "",
                      "value": ""
                    }
                  ],
                  "content": "Lt",
                  "refreshOnChange": false,
                  "key": "html14",
                  "properties": {
                    "rowSpan": "2"
                  },
                  "type": "htmlelement",
                  "input": false,
                  "tableView": false
                }
              ]
            },
            {
              "components": [
                {
                  "label": "HTML",
                  "attrs": [
                    {
                      "attr": "",
                      "value": ""
                    }
                  ],
                  "content": "105",
                  "refreshOnChange": false,
                  "key": "html23",
                  "properties": {
                    "rowSpan": "2"
                  },
                  "type": "htmlelement",
                  "input": false,
                  "tableView": false
                }
              ]
            },
            {
              "components": [
                {
                  "label": "Number",
                  "applyMaskOn": "change",
                  "hideLabel": true,
                  "mask": false,
                  "tableView": false,
                  "delimiter": false,
                  "requireDecimal": false,
                  "inputFormat": "plain",
                  "truncateMultipleSpaces": false,
                  "key": "number6",
                  "properties": {
                    "rowSpan": "2"
                  },
                  "type": "number",
                  "input": true
                }
              ]
            },
            {
              "components": [
                {
                  "label": "Number",
                  "applyMaskOn": "change",
                  "hideLabel": true,
                  "mask": false,
                  "tableView": false,
                  "delimiter": false,
                  "requireDecimal": false,
                  "inputFormat": "plain",
                  "truncateMultipleSpaces": false,
                  "key": "number20",
                  "properties": {
                    "rowSpan": "1"
                  },
                  "type": "number",
                  "input": true
                }
              ]
            },
            {
              "components": [
                {
                  "label": "Number",
                  "applyMaskOn": "change",
                  "hideLabel": true,
                  "mask": false,
                  "tableView": false,
                  "delimiter": false,
                  "requireDecimal": false,
                  "inputFormat": "plain",
                  "truncateMultipleSpaces": false,
                  "key": "number35",
                  "properties": {
                    "rowSpan": "1"
                  },
                  "type": "number",
                  "input": true
                }
              ]
            },
            {
              "components": [
                {
                  "label": "Signature",
                  "tableView": false,
                  "key": "signature24",
                  "properties": {
                    "rowSpan": "2"
                  },
                  "type": "signature",
                  "input": true
                }
              ]
            },
            {
              "components": []
            },
            {
              "components": []
            },
            {
              "components": []
            }
          ],
          [
            {
              "components": [
                {
                  "label": "HTML",
                  "attrs": [
                    {
                      "attr": "",
                      "value": ""
                    }
                  ],
                  "content": "Recovery",
                  "refreshOnChange": false,
                  "key": "html3",
                  "type": "htmlelement",
                  "input": false,
                  "tableView": false
                }
              ]
            },
            {
              "components": [
                {
                  "label": "Number",
                  "applyMaskOn": "change",
                  "hideLabel": true,
                  "mask": false,
                  "tableView": false,
                  "delimiter": false,
                  "requireDecimal": false,
                  "inputFormat": "plain",
                  "truncateMultipleSpaces": false,
                  "key": "number21",
                  "properties": {
                    "rowSpan": "1"
                  },
                  "type": "number",
                  "input": true
                }
              ]
            },
            {
              "components": [
                {
                  "label": "Number",
                  "applyMaskOn": "change",
                  "hideLabel": true,
                  "mask": false,
                  "tableView": false,
                  "delimiter": false,
                  "requireDecimal": false,
                  "inputFormat": "plain",
                  "truncateMultipleSpaces": false,
                  "key": "number36",
                  "properties": {
                    "rowSpan": "1"
                  },
                  "type": "number",
                  "input": true
                }
              ]
            },
            {
              "components": []
            },
            {
              "components": []
            },
            {
              "components": []
            },
            {
              "components": []
            },
            {
              "components": []
            },
            {
              "components": []
            },
            {
              "components": []
            },
            {
              "components": []
            },
            {
              "components": []
            },
            {
              "components": []
            }
          ],
          [
            {
              "components": [
                {
                  "label": "HTML",
                  "attrs": [
                    {
                      "attr": "",
                      "value": ""
                    }
                  ],
                  "content": "Total Qty.",
                  "refreshOnChange": false,
                  "key": "html1",
                  "properties": {
                    "colSpan": "4"
                  },
                  "type": "htmlelement",
                  "input": false,
                  "tableView": false
                }
              ]
            },
            {
              "components": [
                {
                  "label": "HTML",
                  "attrs": [
                    {
                      "attr": "",
                      "value": ""
                    }
                  ],
                  "content": "W * 4.27",
                  "refreshOnChange": false,
                  "key": "html4",
                  "properties": {
                    "rowSpan": "2"
                  },
                  "type": "htmlelement",
                  "input": false,
                  "tableView": false
                }
              ]
            },
            {
              "components": [
                {
                  "label": "HTML",
                  "attrs": [
                    {
                      "attr": "",
                      "value": ""
                    }
                  ],
                  "content": "Lt",
                  "refreshOnChange": false,
                  "key": "html16",
                  "type": "htmlelement",
                  "input": false,
                  "tableView": false
                }
              ]
            },
            {
              "components": [
                {
                  "label": "HTML",
                  "attrs": [
                    {
                      "attr": "",
                      "value": ""
                    }
                  ],
                  "content": "6405",
                  "refreshOnChange": false,
                  "key": "html24",
                  "properties": {
                    "rowSpan": "2"
                  },
                  "type": "htmlelement",
                  "input": false,
                  "tableView": false
                }
              ]
            },
            {
              "components": [
                {
                  "label": "Number",
                  "applyMaskOn": "change",
                  "hideLabel": true,
                  "mask": false,
                  "tableView": false,
                  "delimiter": false,
                  "requireDecimal": false,
                  "inputFormat": "plain",
                  "truncateMultipleSpaces": false,
                  "key": "number7",
                  "properties": {
                    "rowSpan": "1"
                  },
                  "type": "number",
                  "input": true
                }
              ]
            },
            {
              "components": [
                {
                  "label": "Number",
                  "applyMaskOn": "change",
                  "hideLabel": true,
                  "mask": false,
                  "tableView": false,
                  "delimiter": false,
                  "requireDecimal": false,
                  "inputFormat": "plain",
                  "truncateMultipleSpaces": false,
                  "key": "number22",
                  "properties": {
                    "rowSpan": "1"
                  },
                  "type": "number",
                  "input": true
                }
              ]
            },
            {
              "components": [
                {
                  "label": "HTML",
                  "className": "text-center",
                  "attrs": [
                    {
                      "attr": "",
                      "value": ""
                    }
                  ],
                  "content": "---",
                  "refreshOnChange": false,
                  "key": "html25",
                  "properties": {
                    "colSpan": "2"
                  },
                  "type": "htmlelement",
                  "input": false,
                  "tableView": false
                }
              ]
            },
            {
              "components": []
            },
            {
              "components": []
            },
            {
              "components": []
            },
            {
              "components": []
            },
            {
              "components": []
            },
            {
              "components": []
            }
          ]
        ]
      }
    ]
  };
}
Templates.current.table.form = (e: any) => {
  var table = `<table class="table `;

  if (e.component.striped) {
    table += ' table-striped ';
  }
  if (e.component.bordered) {
    table += ' table-bordered ';
  }
  if (e.component.hover) {
    table += ' table-hover ';
  }
  if (e.component.bordered) {
    table += ' table-sm ';
  }
  // table += `" \n <caption class="sr-only">${e.component.label || 'sa'}</caption>`;
  if (e.component.header && e.component.header.length) {
    table += `\n  <thead>\n    <tr>\n`;
    for (const eachItem of e.component.header) {
      table += `\n <th>${eachItem}</th>\n`;
    }
    table += `</tr>\n</thead>`
  }
  table += `\n  <tbody>\n    `;
  for (let rowIndex = 0; rowIndex < e.tableComponents.length; rowIndex++) {
    var eachRow = e.tableComponents[rowIndex];
    table += `\n <tr ref="row-${e.id || ''}"\n>`;
    for (let colIndex = 0; colIndex < eachRow.length; colIndex++) {
      var eachCell = eachRow[colIndex];
      var rowSpan = e.component.rows[rowIndex][colIndex].components[0] && e.component.rows[rowIndex][colIndex].components[0].properties?.['rowSpan'] || 1;
      var colSpan = e.component.rows[rowIndex][colIndex].components[0] && e.component.rows[rowIndex][colIndex].components[0].properties?.['colSpan'] || 1;
      if (rowSpan > 1) {
        for (let eachNextRowInd = rowIndex + 1; eachNextRowInd < (rowIndex + +rowSpan); eachNextRowInd++) {
          if (e.tableComponents[eachNextRowInd]) {
            e.tableComponents[eachNextRowInd].pop();
          }
        }
      }
      if (colSpan > 1) {
        e.tableComponents[rowIndex].splice(e.tableComponents[rowIndex].length - (+colSpan) + 1, colSpan);
      }
      table += `\n <td rowSpan="${rowSpan}" colSpan="${colSpan}" ref="${e.tableKey}-${rowIndex}" class="${e.cellClassName}">${eachCell}</td>\n`;
    }
    table += `\n </tr>\n`
  }
  table += `</tbody></table>`
  return table;
}
