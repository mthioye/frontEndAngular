import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListPersonneComponent } from './list-personne/list-personne.component';
import { CreatePersonneComponent } from './create-personne/create-personne.component';
import { UpdatePersonneComponent } from './update-personne/update-personne.component';
import { DetailsPersonneComponent } from './details-personne/details-personne.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';

const routes: Routes = [
  {path: 'personnes', component: ListPersonneComponent},
  {path: 'create-personne', component: CreatePersonneComponent},
  //{path: '', redirectTo: 'personnes', pathMatch: 'full'},
  {path: 'update-personne/:id', component: UpdatePersonneComponent},
  {path: 'details-personne/:id', component: DetailsPersonneComponent},
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
