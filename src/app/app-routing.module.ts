import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SliderComponent } from './slider/slider.component';
import { AccountsComponent } from './accounts/accounts.component';
import { ListUserComponent } from './list-user/list-user.component';

const routes: Routes = [
  {path: 'home', component: SliderComponent },
  {path: 'accounts', component: AccountsComponent },
  {path: 'users', component: ListUserComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

