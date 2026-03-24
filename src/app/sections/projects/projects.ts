import { Component, inject } from '@angular/core';
import { TableModule } from 'primeng/table';
import { PortfolioService } from '../../core/services/portfolio';
import { Project } from '../../core/models/project';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [TableModule],
  templateUrl: './projects.html'
})
export class ProjectsComponent {
  private portfolioService = inject(PortfolioService);
  projects: Project[] = this.portfolioService.getProjects();
}