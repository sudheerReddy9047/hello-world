// tslint:disable:component-selector ter-indent ter-arrow-parens align max-line-length no-this-assignment prefer-template no-increment-decrement no-inferrable-types
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormioCustomComponent } from 'angular-formio';

@Component({
    selector: 'kl-info-renderer',
    template: 'inside info component',
})

export class InfoComponent implements FormioCustomComponent<any> {

    @Input() value: any;
    @Input() disabled: any;
    @Output() valueChange: EventEmitter<any> = new EventEmitter();
}