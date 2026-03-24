import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillCardComponent } from './skill-card/skill-card';
import { PortfolioService } from '../../core/services/portfolio';
import { Skill } from '../../core/models/skill';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, SkillCardComponent],
  templateUrl: './skills.html'
})
export class SkillsComponent {
  private portfolioService = inject(PortfolioService);
  skills: Skill[] = this.portfolioService.getSkills();
}