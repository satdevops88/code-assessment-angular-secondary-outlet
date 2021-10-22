import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterAComponent } from './footer-a/footer-a.component';
import { FooterBComponent } from './footer-b/footer-b.component';
import { Menu1Component } from './menu1/menu1.component';
import { Menu2Component } from './menu2/menu2.component';

const routes: Routes = [
  { path: 'menu1', component: Menu1Component },
  { path: 'menu2', component: Menu2Component },

  { path: 'footer-a', component: FooterAComponent, outlet: 'footer' },
  { path: 'footer-b', component: FooterBComponent, outlet: 'footer' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
