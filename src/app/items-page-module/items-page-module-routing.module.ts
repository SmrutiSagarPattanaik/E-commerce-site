import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListOfItemsComponent } from './list-of-items/list-of-items.component';

const routes: Routes = [
  {
    path:"",
    component: ListOfItemsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemsPageModuleRoutingModule { }
