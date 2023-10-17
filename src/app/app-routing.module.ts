import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SliderComponent } from './slider/slider.component';
import { AccountsComponent } from './accounts/accounts.component';
import { ListUserComponent } from './list-user/list-user.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path: '', redirectTo:"home", pathMatch:"full" },
  {path: 'home', component: SliderComponent },
  {path: 'accounts', component: AccountsComponent,children:[
    {path:'users/:category', component:ListUserComponent}
  ] },
  {path: 'users', component: ListUserComponent },
  {path:"**", component: NotFoundComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

