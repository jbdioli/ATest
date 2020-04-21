import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalTestPage } from '../modals/modal-test/modal-test.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private modalController: ModalController) {}

  onOpen() {
    this.modalTest('info1', 'info2');
  }

  async modalTest(path: any, img: any) {
    const myModal = await this.modalController.create({
      component: ModalTestPage,
      cssClass: 'modalCss',
      componentProps: {
        vPhoto: img,
        vPath: path
      }
    });
    return await myModal.present();
  }

}
