import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly navLinks = [
    { label: 'Serviços', fragment: 'servicos' },
    { label: 'Projetos', fragment: 'projetos' },
    { label: 'Sobre', fragment: 'sobre' },
    { label: 'Contato', fragment: 'contato' }
  ];

  readonly currentYear = new Date().getFullYear();
}
