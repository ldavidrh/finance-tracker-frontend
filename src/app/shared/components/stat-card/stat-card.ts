import { DecimalPipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { MatCard, MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-stat-card',
  imports: [DecimalPipe, MatCardModule],
  templateUrl: './stat-card.html',
  styleUrl: './stat-card.scss',
})
export class StatCard {
  title = input<string>();
}
