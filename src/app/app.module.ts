import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ListOfItemsComponent } from './list-of-items/list-of-items.component';
import { HomeComponent } from './home/home.component';
import { FilterItemsPipe } from './filter-items.pipe';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { FilterItemDetailsPipe } from './filter-item-details.pipe';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    ListOfItemsComponent,
    HomeComponent,
    FilterItemsPipe,
    ItemDetailsComponent,
    FilterItemDetailsPipe,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
