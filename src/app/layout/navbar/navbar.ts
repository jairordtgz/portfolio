import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class NavbarComponent {
  menuOpen = false;

  navLinks = [
    { id: 'resumen',     label: 'Sobre mí' },
    { id: 'educacion',   label: 'Educación' },
    { id: 'habilidades', label: 'Habilidades' },
    { id: 'proyectos',   label: 'Proyectos' },
    { id: 'contacto',    label: 'Contacto' },
    { id: 'logros',      label: 'Logros' },
    { id: 'testimonios', label: 'Referencias' },
    { id: 'sugerencias', label: 'Sugerencias' },
  ];

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  scrollTo(id: string, event: Event): void {
    event.preventDefault();
    this.menuOpen = false;
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }
}