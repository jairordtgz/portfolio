import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Skill } from '../../../core/models/skill';

@Component({
  selector: 'app-skill-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill-card.html'
})
export class SkillCardComponent {
  @Input({ required: true }) skill!: Skill;
  isFlipped = false;

  toggle(): void {
    this.isFlipped = !this.isFlipped;
  }
}