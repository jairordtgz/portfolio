import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../core/services/portfolio';
import { Education } from '../../core/models/education';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.html'
})
export class EducationComponent {
  private portfolioService = inject(PortfolioService);
  education: Education[] = this.portfolioService.getEducation();
}