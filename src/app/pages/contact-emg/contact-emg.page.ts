import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-contact-emg',
  templateUrl: './contact-emg.page.html',
  styleUrls: ['./contact-emg.page.scss'],
})
export class ContactEmgPage implements OnInit {

  constructor(private alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Please enter your info contac',
      buttons: ['Save'],
      inputs: [
        {
          placeholder: 'Nombre',
        },
        {
          placeholder: 'Parentesco',
          attributes: {
            maxlength: 8,
          },
        },
        {
          type: 'number',
          placeholder: 'Number Phone',
          min: 1,
          max: 10,
        },
      ],
    });

    await alert.present();
  }

  ngOnInit() {
  }

}
