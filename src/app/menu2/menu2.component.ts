import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu2',
  templateUrl: './menu2.component.html',
  styleUrls: ['./menu2.component.scss']
})
export class Menu2Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.navigate([{outlets: {primary: 'menu2', footer: 'footer-b'}}])
  }

}
