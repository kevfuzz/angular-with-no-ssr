import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-high-low-game',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './high-low-game.component.html',
  styleUrl: './high-low-game.component.scss'
})
export class HighLowGameComponent {

  chips = 100;
  bet = 10;
  cards: number[] = [];
  op1 = '+';
  op2 = '+';
  message = '';

  constructor() {
    this.dealCards();
  }

  dealCards(): void {
    this.cards = [this.randomCard(), this.randomCard(), this.randomCard()];
    this.message = '';
  }

  evaluate(): void {
    if (this.bet <= 0 || this.bet > this.chips) {
      this.message = 'Invalid bet.';
      return;
    }
    const result = this.calculate();
    const equation = `${this.cards[0]} ${this.op1} ${this.cards[1]} ${this.op2} ${this.cards[2]} = ${result}`;
    if (result === 1 || result === 21) {
      this.chips += this.bet;
      this.message = `You win! ${equation}`;
    } else {
      this.chips -= this.bet;
      this.message = `You lose. ${equation}`;
    }
  }

  private calculate(): number {
    const first = this.applyOp(this.cards[0], this.cards[1], this.op1);
    return this.applyOp(first, this.cards[2], this.op2);
  }

  private applyOp(a: number, b: number, op: string): number {
    switch (op) {
      case '+':
        return a + b;
      case '-':
        return a - b;
      case '*':
        return a * b;
      case '/':
        return b !== 0 ? a / b : NaN;
      default:
        return NaN;
    }
  }

  private randomCard(): number {
    return Math.floor(Math.random() * 10) + 1;

  }
}
