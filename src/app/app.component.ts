import { Component, OnInit } from '@angular/core';
import { CalculatorService } from './calculator.service';

@Component({
//   moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [CalculatorService]
})
export class AppComponent implements OnInit {
  title = 'Angular-iPhone-Calculator' ;
  answer: any = 0 ;
  second: any = 0 ;
  secondOn: boolean = false;
  operator: string = '';
  show: any = 0;
  equals: boolean = false;
  elements = ['AC', '+/-', '%', '/', 7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '='];
  showAnswer:any = [];
  constructor(private calculatorService: CalculatorService) {}
  ngOnInit() { }

  calculate(item: any) {
        if (typeof item === 'number') {
            if (this.secondOn) {
                this.show = this.second = Number('' + this.second + item);
            } else if (this.operator) {
                this.second = item;
                this.secondOn = true;
                // Show Second Number
                this.show = item;
            } else if (this.equals) {
                this.show = this.answer = item;
                this.equals = false;
            } else {
                this.show = this.answer = Number('' + this.answer + item);
            }
        } else if (item === 'AC') {
            this.show = this.answer = 0;
            this.operator = '';
            this.second = 0;
            this.secondOn = false;
        } else if (item === '+/-') {
            this.show = this.answer *= -1;
        } else if (item === '%') {
            this.show = this.answer /= 100;
        } else if (item === '=') {
            if (this.operator) {
                this.show = this.answer = this.calculatorService.calculate(this.answer, this.operator, this.second);
                this.operator = '';
                this.secondOn = false;
                this.equals = true;
            }
        } else if (item === '.') {
            if (this.operator) {
                this.secondOn = true;
                this.show = this.second = '' + this.second + '.';
            } else {
                this.show = this.answer = '' + this.answer + '.';
            }
        } else {
            if (this.operator && this.secondOn) {
                this.show = this.answer = this.calculatorService.calculate(this.answer, this.operator, this.second);
                this.secondOn = false;
            }

            this.operator = item;
        }
        // this.showAnswer = (this.show.toString()).split('');
        // // Add in padding
        // let l = 8 - this.showAnswer.length;
        // for(var i = 0; i < l; i++){
        //     this.showAnswer.unshift('');
        // }
        // this.showAnswer.push('');
    }

    getStyle (item: number) {
        if (item === 0) {
            return 'zero';
        } 

    }
    getColor (item: number) {
        if ( item % 4 === 0 || item === 19) {
            return 'orange';
        } else {
            return 'grey';
        }
    }
}