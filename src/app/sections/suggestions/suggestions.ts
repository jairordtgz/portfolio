import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-suggestions',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './suggestions.html',
  styleUrls: ['./suggestions.css']
})
export class SuggestionsComponent {
  honeypot = '';
  private fb = inject(FormBuilder);

  submitted = false;
  sending = false;
  sendSuccess = false;
  sendError = false;

  form = this.fb.group({
    nombre:   ['', [Validators.required, Validators.minLength(2)]],
    email:    ['', [Validators.required, Validators.email]],
    mensaje:  ['', [Validators.required, Validators.minLength(10)]],
  });

  lastSentTime: number | null = null;
  cooldownSeconds = 60;

  get isCoolingDown(): boolean {
    if (!this.lastSentTime) return false;
    return (Date.now() - this.lastSentTime) < this.cooldownSeconds * 1000;
  }

  get cooldownRemaining(): number {
    if (!this.lastSentTime) return 0;
    return Math.ceil((this.cooldownSeconds * 1000 - (Date.now() - this.lastSentTime)) / 1000);
  }

  async onSubmit(): Promise<void> {
    if (this.isCoolingDown) return;
    if (this.honeypot) return;
    this.submitted = true;
    if (this.form.invalid) return;

    this.sending = true;
    this.sendSuccess = false;
    this.sendError = false;

    try {
      await emailjs.send(
        environment.emailjsServiceId,
        environment.emailjsTemplateId,
          {
            name:    this.form.value.nombre ?? '',
            email:   this.form.value.email ?? '',
            message: this.form.value.mensaje ?? '',
            time:    new Date().toLocaleString('es-EC'),
          },
        environment.emailjsPublicKey
      );
      this.sendSuccess = true;
      this.form.reset();
      this.submitted = false;
    } catch (error) {
      this.sendError = true;
    } finally {
      this.sending = false;
    }
    this.lastSentTime = Date.now();
  }

  get nombreInvalid(): boolean {
    return !!(this.submitted && this.form.get('nombre')?.invalid);
  }
  get emailInvalid(): boolean {
    return !!(this.submitted && this.form.get('email')?.invalid);
  }
  get mensajeInvalid(): boolean {
    return !!(this.submitted && this.form.get('mensaje')?.invalid);
  }
}