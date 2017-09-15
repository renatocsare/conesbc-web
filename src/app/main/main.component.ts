import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'qs-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {

  routes: Object[] = [{
      title: 'Agenda Digital',
      route: '/',
      icon: 'dashboard',
    }, {
      title: 'Sobre',
      route: '/product',
      icon: 'view_quilt',
    }, {
      title: 'Ir para o Site Principal',
      route: '/logs',
      icon: 'receipt',
    }
  ];

  constructor(private _router: Router) {}

  logout(): void {
    this._router.navigate(['/login']);
  }
}
