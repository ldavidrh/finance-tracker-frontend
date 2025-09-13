import { DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { StatCard } from '../../shared/components/stat-card/stat-card';

@Component({
  selector: 'app-dashboard',
  imports: [MatCardModule, MatIconModule, StatCard, DecimalPipe],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {}
