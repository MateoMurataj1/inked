import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BlogComponent } from './blog/blog.component';
import { TermsComponent } from './terms/terms.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ContactusComponent } from './contactus/contactus.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    AboutusComponent,
    BlogComponent,
    TermsComponent,
    PrivacyComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'aboutus', component: AboutusComponent },
      { path: 'blog', component: BlogComponent },
      { path: 'contactus', component: ContactusComponent },
      { path: 'footer', component: FooterComponent },
      { path: 'login', component: LoginComponent },
      { path: 'menu', component: MenuComponent },
      { path: 'privacy', component: PrivacyComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'terms', component: TermsComponent },
    ]),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
