import { Formio } from 'formiojs';
import { maskInput } from '@formio/vanilla-text-mask';
 
const Number = Formio.Components.components.number;
 
class NumberComponent extends Number {
   
    setInputMask(input) {
        let numberPattern = '[0-9';
        numberPattern += this.decimalSeparator || '';
        numberPattern += this.delimiter || '';
        numberPattern += ']*';
        input.setAttribute('pattern', numberPattern);
        input.addEventListener('input', () => this.validateInput(input));//
        input.mask = maskInput({
            inputElement: input,
            mask: this.numberMask,
            shadowRoot: this.root ? this.root.shadowRoot : null,
        });
    }
    validateInput(input) {
        input.value = input.value
        .replace(/[^0-9.-]/g, '')            // Remove any characters that are not digits, minus sign, or decimal point
        .replace(/(?!^)-/g, '')              // Allow only one minus sign at the beginning
        .replace(/(\..*)\./g, '$1')          // Allow only one decimal point
        .replace(/^-0+(?=\d)/, '-')          // Prevent leading zeros for negative numbers unless followed by a decimal point
        .replace(/^0+(?=\d)/, '');           // Prevent leading zeros for positive numbers unless followed by a decimal point
    }
}
window['Formio'].Components.addComponent('number', NumberComponent);
