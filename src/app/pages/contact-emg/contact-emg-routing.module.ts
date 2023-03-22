import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactEmgPage } from './contact-emg.page';

const routes: Routes = [
  {
    path: '',
    component: ContactEmgPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactEmgPageRoutingModule {}
