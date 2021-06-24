import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActionsPageComponent } from './actions-page/actions-page.component';

const routes: Routes = [
  {
    path: "",
    component: ActionsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminActionsModuleRoutingModule { }
