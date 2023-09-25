import { Component, EventEmitter, Output, Input } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = '${projectName} is live and running !!!'
  @Input() widgetInfo: any;
  @Output() widgetInfoChange = new EventEmitter();
  @Input() pageMode: 'config' | 'display' = 'config';
  @Input() activetab: 'chartProp' | 'tools' = 'chartProp';
  @Input() base_proxy: string = '';
}
