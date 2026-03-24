import { Component } from '@angular/core';
import { HeaderComponent } from './layout/header/header';
import { NavbarComponent } from './layout/navbar/navbar';
import { FooterComponent } from './layout/footer/footer';
import { AboutComponent } from './sections/about/about';
import { EducationComponent } from './sections/education/education';
import { SkillsComponent } from './sections/skills/skills';
import { ProjectsComponent } from './sections/projects/projects';
import { ContactComponent } from './sections/contact/contact';
import { AchievementsComponent } from './sections/achievements/achievements';
import { TestimonialsComponent } from './sections/testimonials/testimonials';
import { SuggestionsComponent } from './sections/suggestions/suggestions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    EducationComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    AchievementsComponent,
    TestimonialsComponent,
    SuggestionsComponent,
  ],
  templateUrl: './app.html',
})
export class AppComponent {}