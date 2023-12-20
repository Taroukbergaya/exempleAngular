import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 import { HeaderComponent } from './header/header.component';
 import { ContainerComponent } from './container/container.component';
 import { FooterComponent } from './footer/footer.component';
 import { ContactComponent } from './contact/contact.component';
 import { ProjetComponent } from './projet/projet.component';
const routes: Routes = [
  
  { path: 'header', component: HeaderComponent },
  { path: 'container', component: ContainerComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'projet', component: ProjetComponent },
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true }),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
