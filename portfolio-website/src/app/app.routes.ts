import { Routes } from '@angular/router';
import { AboutPage } from './pages/about-page/about-page';
import { ContactPage } from './pages/contact-page/contact-page';
import { ExperiencePage } from './pages/experience-page/experience-page';
import { LandingPage } from './pages/landing-page/landing-page';
// import { ProjectsPage } from './pages/projects-page/projects-page';
import { ResumePage } from './pages/resume-page/resume-page';
import { SkillsPage } from './pages/skills-page/skills-page';

export const routes: Routes = [
  {
    path: '',
    component: LandingPage,
  },
  {
    path: 'about',
    component: AboutPage,
  },
  // {
  //   path: 'projects',
  //   component: ProjectsPage,
  // },
  {
    path: 'experience',
    component: ExperiencePage,
  },
  {
    path: 'skills',
    component: SkillsPage,
  },
  {
    path: 'resume',
    component: ResumePage,
  },
  {
    path: 'contact',
    component: ContactPage,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
