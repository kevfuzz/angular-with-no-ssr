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
  targetNumber = this.getRandomNumber(1, 100);
  guess: number | null = null;
  message = '';
  guessCount = 0;

  checkGuess(): void {
    if (this.guess === null || isNaN(this.guess)) {
      return;
    }
    this.guessCount++;
    if (this.guess < this.targetNumber) {
      this.message = 'Too low!';
    } else if (this.guess > this.targetNumber) {
      this.message = 'Too high!';
    } else {
      this.message = `Correct! You solved it in ${this.guessCount} attempts.`;
    }
  }

  resetGame(): void {
    this.targetNumber = this.getRandomNumber(1, 100);
    this.guess = null;
    this.message = '';
    this.guessCount = 0;
  }

  private getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
