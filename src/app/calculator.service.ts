import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  calculate(answer: number, operator: string, second: number): number {
    let ans = 0;
    switch (operator) {
      case '+':
        ans = answer + second;
        break;
      case '-':
        ans = answer - second;
        break;
      case 'x':
        ans = answer * second;
        break;
      case '/':
        ans = answer / second;
        break;
      default:
        break;
    }
    return ans;
  }
}
