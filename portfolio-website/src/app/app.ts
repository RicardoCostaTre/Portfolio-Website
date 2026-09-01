import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  public appYear = new Date().getFullYear();

  protected readonly title = signal('Ricardo Costa-Tre');
  protected readonly navItems = [
    { label: 'Home', path: '/', exact: true },
    { label: 'About', path: '/about' },
    // { label: 'Personal Projects', path: '/projects' },
    { label: 'Experience', path: '/experience' },
    { label: 'Skills', path: '/skills' },
    { label: 'Resume', path: '/resume' },
    { label: 'Contact', path: '/contact' },
  ];
}
