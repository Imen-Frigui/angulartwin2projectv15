import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ListUserComponent } from './list-user/list-user.component';
import { AccountsComponent } from './accounts/accounts.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent,
    FooterComponent,
    HeaderComponent,
    ListUserComponent,
    AccountsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent, TestComponentComponent, AccountsComponent, HeaderComponent, ListUserComponent,FooterComponent]
})
export class AppModule { }
