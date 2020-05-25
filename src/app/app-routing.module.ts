import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';


import { LoginComponent } from './components/login/login.component'; 
import { AddUserComponent } from './components/add-user/add-user.component'; 
import { ListUserComponent } from './components/list-user/list-user.component'; 
import { EditUserComponent } from './components/edit-user/edit-user.component';


const routes: Routes = [
{ path: '',component: HomeComponent },
{ path: 'home',component:HomeComponent},
{ path: 'login', component: LoginComponent },
{ path: 'add-user', component: AddUserComponent },
{ path: 'list-user', component: ListUserComponent },
{ path: 'edit-user', component: EditUserComponent }, //
{path : '', component : LoginComponent},
// or { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
