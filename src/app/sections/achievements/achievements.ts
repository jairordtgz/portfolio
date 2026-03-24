import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../core/services/portfolio';
import { Achievement } from '../../core/models/achievement';

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './achievements.html'
})
export class AchievementsComponent {
  private portfolioService = inject(PortfolioService);
  achievements: Achievement[] = this.portfolioService.getAchievements();
}