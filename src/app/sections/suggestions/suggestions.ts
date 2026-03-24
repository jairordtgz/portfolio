import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-suggestions',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './suggestions.html'
})
export class SuggestionsComponent {
  private fb = inject(FormBuilder);
  submitted = false;

  form = this.fb.group({
    nombre:          ['', [Validators.required, Validators.minLength(3)]],
    areaMejora:      ['', Validators.required],
    tipoSugerencia:  ['', Validators.required],
    habilidades:     [[] as string[]],
    comentarios:     [''],
  });

  onSubmit(): void {
    this.submitted = true;
    if (this.form.valid) {
      console.log('Sugerencia enviada:', this.form.value);
      alert('¡Gracias por tu sugerencia!');
      this.form.reset();
      this.submitted = false;
    }
  }

  // Helpers de validación
  get nombreInvalid(): boolean {
    return !!(this.submitted && this.form.get('nombre')?.invalid);
  }
  get areaInvalid(): boolean {
    return !!(this.submitted && this.form.get('areaMejora')?.invalid);
  }
  get tipoInvalid(): boolean {
    return !!(this.submitted && this.form.get('tipoSugerencia')?.invalid);
  }
}