import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactEmgPageRoutingModule } from './contact-emg-routing.module';

import { ContactEmgPage } from './contact-emg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactEmgPageRoutingModule
  ],
  declarations: [ContactEmgPage]
})
export class ContactEmgPageModule {}
