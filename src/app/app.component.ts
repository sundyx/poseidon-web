import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <!-- routes will be rendered here -->
      <app-nav></app-nav>
      <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  title = 'poseidon-web';

  ngOnInit(): void {
  }
}
