import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';
import { FormioModule, FormioAppConfig } from 'angular-formio';
import { FormsModule } from '@angular/forms';
import './number.js';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormioModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(public injector: Injector) { }

  ngDoBootstrap() {
    const ele = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define('app-hello-world', ele);
  }
}