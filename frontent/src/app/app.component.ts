import { Component } from '@angular/core';

import { Templates } from 'formiojs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  customForm: any = {
    "components": [
      {
        "label": "Table",
        "cloneRows": true,
        "cellAlignment": "left",
        "customClass": "text-center",
        "bordered": true,
        "condensed": true,
        "hideLabel": true,
        "key": "table",
        "type": "table",
        "input": false,
        "tableView": false,
        "header": [
          "S. No",
          "Material Code",
          "Raw Material Name",
          "Step No"
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
                  "rowSpan": 2,
                  "colSpan": 2,
                  "content": "6.",
                  "refreshOnChange": false,
                  "key": "html",
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
                  "rowSpan": 1,
                  "colSpan": 1,
                  "content": "6.",
                  "refreshOnChange": false,
                  "key": "html",
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
                  "rowSpan": 1,
                  "colSpan": 1,
                  "content": "6.",
                  "refreshOnChange": false,
                  "key": "html1",
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
                  "rowSpan": 1,
                  "colSpan": 1,
                  "content": "6.",
                  "refreshOnChange": false,
                  "key": "html2",
                  "type": "htmlelement",
                  "input": false,
                  "tableView": false
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
                  "rowSpan": 1,
                  "colSpan": 1,
                  "content": "6.",
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
                  "rowSpan": 1,
                  "colSpan": 1,
                  "content": "6.",
                  "refreshOnChange": false,
                  "key": "html4",
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
                  "rowSpan": 1,
                  "colSpan": 1,
                  "content": "6.",
                  "refreshOnChange": false,
                  "key": "html5",
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
                  "rowSpan": 1,
                  "colSpan": 1,
                  "content": "6.",
                  "refreshOnChange": false,
                  "key": "html6",
                  "type": "htmlelement",
                  "input": false,
                  "tableView": false
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
                  "rowSpan": 1,
                  "colSpan": 1,
                  "content": "6.",
                  "refreshOnChange": false,
                  "key": "html7",
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
                  "rowSpan": 1,
                  "colSpan": 1,
                  "content": "6.",
                  "refreshOnChange": false,
                  "key": "html8",
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
                  "rowSpan": 1,
                  "colSpan": 1,
                  "content": "6.",
                  "refreshOnChange": false,
                  "key": "html9",
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
                  "rowSpan": 1,
                  "colSpan": 1,
                  "content": "6.",
                  "refreshOnChange": false,
                  "key": "html10",
                  "type": "htmlelement",
                  "input": false,
                  "tableView": false
                }
              ]
            }
          ]
        ],
        "numCols": 4
      }
    ]
  };
}
Templates.current.table.form = (e: any) => {
  var t, n = "";
  var cellsTaken: any = {};
  n += '<table class="table\n    ' + (null == (t = e.component.striped ? "table-striped" : "") ? "" : t) + "\n    " + (null == (t = e.component.bordered ? "table-bordered" : "") ? "" : t) + "\n    " + (null == (t = e.component.hover ? "table-hover" : "") ? "" : t) + "\n    " + (null == (t = e.component.condensed ? "table-sm" : "") ? "" : t) + '\n  ">\n  <caption class="sr-only">' + (null == (t = e.t(e.component.label)) ? "" : t) + "</caption>\n  ",
    e.component.header && e.component.header.length > 0 && (n += "\n  <thead>\n    <tr>\n      ",
      e.component.header.forEach(function (r: any) {
        n += "\n      <th>" + (null == (t = e.t(r)) ? "" : t) + "</th>\n      "
      }),
      n += "\n    </tr>\n  </thead>\n  "),
    n += "\n  <tbody>\n    ",
    e.tableComponents.forEach(function (r: any, i: any) {
      n += '\n    <tr ref="row-' + (null == (t = e.id) ? "" : t) + '">\n      ';
      r.forEach(function (r: any, o: any) {
        console.log(i, o);
        var rowSpan = e.component.rows[i][o].components[0] && e.component.rows[i][o].components[0]['rowSpan'] || 1;
        var colSpan = e.component.rows[i][o].components[0] && e.component.rows[i][o].components[0]['colSpan'] || 1;
        if (!cellsTaken[i + '$' + o]) {
          for (let rowIndex = i; rowIndex < (i + rowSpan); rowIndex++) {
            for (let colIndex = o; colIndex < (o + colSpan); colIndex++) {
              cellsTaken[rowIndex + '$' + colIndex] = 1;
            }
          }
          console.log(cellsTaken)
          n += '\n      <td  rowSpan="' + rowSpan + '"    colSpan="' + colSpan + '"   ref="' + (null == (t = e.tableKey) ? "" : t) + "-" + (null == (t = i) ? "" : t) + '"',
            e.cellClassName && (n += ' class="' + (null == (t = e.cellClassName) ? "" : t) + '"'),
            n += ">" + (null == (t = r) ? "" : t) + "</td>\n      ";
        }

      });
      n += "\n    </tr>\n    ";
    })
  n += "\n  </tbody>\n</table>\n";
  return n;
}
