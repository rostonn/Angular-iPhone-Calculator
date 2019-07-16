import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  calculate(answer: number, operator: string, second: number): number {
    let ans = 0;
    switch (operator) {
      case '+':
        // ans = this.convert(answer + second);
        ans = answer + second
        break;
      case '-':
        // ans = this.convert(answer - second);
        ans = answer - second;
        break;
      case 'x':
        // ans = this.convert(answer * second);
        ans = answer * second;
        break;
      case '/':
        // ans = this.convert(answer / second);
        ans = answer / second;
        break;
      default:
        break;
    }
    return ans;
  }

  convert(ans: number): string {
    ans = parseFloat(ans.toFixed(20));

    if(ans.toString().length <= 11) {
      return ans.toString();
    }
    // Get numbers length
    let numbersLength = ans.toString().split(".")[0].length;

    if(numbersLength < 11) {
      return ans.toFixed(11 - numbersLength);
    }
// Large Number
    let precisionLength = ans.toExponential().split("+")[1].length;
    return parseFloat(ans.toExponential()).toPrecision(11 - 4 - precisionLength);
  }

  countDecimals = function (value) {
    if(Math.floor(value) === value) return 0;
    return value.toString().split(".")[1].length || 0; 
  }
}

