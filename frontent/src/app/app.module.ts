import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormioModule, registerCustomFormioComponent } from 'angular-formio';
import { FormsModule } from '@angular/forms';
import { InfoComponent } from './custom-components/info.component';

@NgModule({
  declarations: [
    InfoComponent
  ],
  imports: [
    BrowserModule,
    FormioModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [InfoComponent]
})
export class AppModule {

  constructor(public injector: Injector) {
    registerCustomFormioComponent({
      type: 'info',
      selector: 'info-renderer',
      title: 'Info',
      group: 'advanced',
      icon: 'info-circle',
      fieldOptions: ['customOptions']
    }, InfoComponent, injector);
  }
}