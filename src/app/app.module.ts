import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './home-page-module/search-bar/search-bar.component';
import { ListOfItemsComponent } from './home-page-module/list-of-items/list-of-items.component';
import { HomeComponent } from './home-page-module/home/home.component';
import { FilterItemsPipe } from './filters/filter-items.pipe';
import { ItemDetailsComponent } from './item-details-page-module/item-details/item-details.component';
import { FilterItemDetailsPipe } from './filters/filter-item-details.pipe';
import { CartComponent } from './cart-page-module/cart/cart.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserRegistrationFormComponent } from './sign-up-module/user-registration-form/user-registration-form.component';
import { EmailInputFieldComponent } from './sign-up-module/email-input-field/email-input-field.component';
import { TextInputFieldComponent } from './sign-up-module/text-input-field/text-input-field.component';
import { NumberInputFieldComponent } from './sign-up-module/number-input-field/number-input-field.component';
import { PasswordInputFieldComponent } from './sign-up-module/password-input-field/password-input-field.component';
import { DateInputFieldComponent } from './sign-up-module/date-input-field/date-input-field.component';
import { ErrorPageComponent } from './error-module/error-page/error-page.component';
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
