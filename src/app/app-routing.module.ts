import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ResourceDisplayedComponent } from './pages/Resources/resource-displayed/resource-displayed.component';
import { ResourceListComponent } from './pages/Resources/resource-list/resource-list.component';
import { UserEditionComponent } from './pages/Users/user-edition/user-edition.component';
import { UserListComponent } from './pages/Users/user-list/user-list.component';

import { AuthGuardServiceGuard } from './guards/auth-guard-service.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path:'register', component: RegisterComponent },
  { path:'home', component: HomeComponent, canActivate: [AuthGuardServiceGuard] }, 
  { path:'userList', component: UserListComponent, canActivate: [AuthGuardServiceGuard] },
  { path:'user/:id', component: UserEditionComponent, canActivate: [AuthGuardServiceGuard] },
  { path:'resourceList', component: ResourceListComponent, canActivate: [AuthGuardServiceGuard] },
  { path:'resource/:id', component: ResourceDisplayedComponent, canActivate: [AuthGuardServiceGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
