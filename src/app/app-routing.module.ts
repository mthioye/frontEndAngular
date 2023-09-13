import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPersonneComponent } from './list-personne/list-personne.component';

const routes: Routes = [
  {path: 'personnes', component: ListPersonneComponent},
  {path: '', redirectTo: 'employees', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
