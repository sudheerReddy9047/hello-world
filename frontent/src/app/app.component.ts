import { Component } from '@angular/core';
import { formJSON, data } from './form'
import { Components, Formio } from 'angular-formio';
const TagsComponent = Components.components.tags;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public showPreview: any = 1;
  customForm = {}
  submittedData = {
    data: {}
  }
  constructor() {
    this.customForm = formJSON;
    this.submittedData.data = data;
  }
}

