import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../core/services/portfolio';
import { Project } from '../../core/models/project';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css']
})
export class ProjectsComponent {
  private portfolioService = inject(PortfolioService);

  allProjects: Project[] = this.portfolioService.getProjects();
  activeFilter = signal('Todos');

  categories = computed(() => {
    const cats = [...new Set(this.allProjects.map(p => p.category ?? 'Otro'))];
    return ['Todos', ...cats];
  });

  filteredProjects = computed(() => {
    if (this.activeFilter() === 'Todos') return this.allProjects;
    return this.allProjects.filter(p => p.category === this.activeFilter());
  });

  setFilter(cat: string): void {
    this.activeFilter.set(cat);
  }

  // Paginación
  pageSize = 3;
  currentPage = signal(0);

  paginatedProjects = computed(() => {
    const start = this.currentPage() * this.pageSize;
    return this.filteredProjects().slice(start, start + this.pageSize);
  });

  totalPages = computed(() =>
    Math.ceil(this.filteredProjects().length / this.pageSize)
  );

  goToPage(page: number): void {
    this.currentPage.set(page);
  }

  pages = computed(() =>
    Array.from({ length: this.totalPages() }, (_, i) => i)
  );

  // Resetear página al cambiar filtro
  filterAndReset(cat: string): void {
    this.activeFilter.set(cat);
    this.currentPage.set(0);
  }
}