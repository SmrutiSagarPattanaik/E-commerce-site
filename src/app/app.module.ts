import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ListOfItemsComponent } from './list-of-items/list-of-items.component';
import { HomeComponent } from './home/home.component';
import { FilterItemsPipe } from './filters/filter-items.pipe';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { FilterItemDetailsPipe } from './filters/filter-item-details.pipe';
import { CartComponent } from './cart/cart.component';
import { SignInFormComponent } from './sign-in-components/sign-in-form/sign-in-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserRegistrationFormComponent } from './sign-up-components/user-registration-form/user-registration-form.component';
import { EmailInputFieldComponent } from './sign-up-components/email-input-field/email-input-field.component';
import { TextInputFieldComponent } from './sign-up-components/text-input-field/text-input-field.component';
import { NumberInputFieldComponent } from './sign-up-components/number-input-field/number-input-field.component';
import { PasswordInputFieldComponent } from './sign-up-components/password-input-field/password-input-field.component';
import { DateInputFieldComponent } from './sign-up-components/date-input-field/date-input-field.component';
import { ErrorPageComponent } from './error-page/error-page.component';
@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    ListOfItemsComponent,
    HomeComponent,
    FilterItemsPipe,
    ItemDetailsComponent,
    FilterItemDetailsPipe,
    CartComponent,
    SignInFormComponent,
    UserRegistrationFormComponent,
    EmailInputFieldComponent,
    TextInputFieldComponent,
    NumberInputFieldComponent,
    PasswordInputFieldComponent,
    DateInputFieldComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
