import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu1',
  templateUrl: './menu1.component.html',
  styleUrls: ['./menu1.component.scss']
})
export class Menu1Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.navigate([{outlets: {primary: 'menu1', footer: 'footer-a'}}])
  }
}
