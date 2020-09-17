import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { UserListComponent } from './pages/Users/user-list/user-list.component';
import { UserEditionComponent } from './pages/Users/user-edition/user-edition.component';
import { ResourceListComponent } from './pages/Resources/resource-list/resource-list.component';
import { ResourceDisplayedComponent } from './pages/Resources/resource-displayed/resource-displayed.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    UserListComponent,
    UserEditionComponent,
    ResourceListComponent,
    ResourceDisplayedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
