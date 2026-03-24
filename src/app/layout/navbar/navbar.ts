import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class NavbarComponent {
  navLinks = [
    { id: 'resumen',     label: 'Sobre mí' },
    { id: 'educacion',   label: 'Educación' },
    { id: 'habilidades', label: 'Habilidades' },
    { id: 'proyectos',   label: 'Proyectos' },
    { id: 'contacto',    label: 'Contacto' },
    { id: 'logros',      label: 'Logros y Certificados' },
    { id: 'testimonios', label: 'Referencias' },
    { id: 'sugerencias', label: 'Sugerencias' },
  ];

  scrollTo(id: string, event: Event): void {
    event.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}