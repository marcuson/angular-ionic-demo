import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CameraResultType, CameraSource, Plugins } from '@capacitor/core';
// tslint:disable-next-line:max-line-length
import {
  ActionSheetController,
  AlertController,
  LoadingController,
  ToastController,
} from '@ionic/angular';
import '@ionic/pwa-elements';

@Component({
  selector: 'ais-interaction',
  templateUrl: 'interaction.component.html',
  styleUrls: ['interaction.component.scss'],
})
export class InteractionPageComponent implements OnInit {
  imageUrl: SafeResourceUrl;

  constructor(
    private actionSheetCtrl: ActionSheetController,
    private toastController: ToastController,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {}

  async openMenu() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Test action sheet',
      buttons: [
        {
          text: 'Dangerous action!',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            const toast = this.toastController.create({
              message: 'You formatted your HD.',
              duration: 2000,
            });
            toast.then(e => e.present());
          },
        },
        {
          text: 'Normal action',
          icon: 'jet',
          handler: () => {
            const toast = this.toastController.create({
              message: 'Nothing special.',
              duration: 2000,
            });
            toast.then(e => e.present());
          },
        },
        {
          text: 'Cancel',
          icon: 'arrow-back',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          },
        },
      ],
    });
    actionSheet.present();
  }

  async openAlert() {
    const alert = await this.alertController.create({
      header: 'Main title',
      subHeader: 'Subtitle',
      message: 'Wow!',
      buttons: ['OK'],
    });

    await alert.present();
  }

  async openLoading() {
    const loading = await this.loadingController.create({
      duration: 5000,
      message: 'Please wait...',
      translucent: true,
    });
    return await loading.present();
  }

  async takePhoto() {
    const image = await Plugins.Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera,
    });

    this.imageUrl = this.sanitizer.bypassSecurityTrustResourceUrl(image && image.base64Data);
  }
}
