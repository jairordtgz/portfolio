import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../core/services/portfolio';
import { Testimonial } from '../../core/models/testimonial';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.html'
})
export class TestimonialsComponent {
  private portfolioService = inject(PortfolioService);
  testimonials: Testimonial[] = this.portfolioService.getTestimonials();
}