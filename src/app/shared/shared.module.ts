import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [CommonModule, IonicModule],
  exports: [CommonModule, IonicModule],
  declarations: [],
  entryComponents: [],
})
export class SharedModule {
  // This should only be called inside the CoreModule!
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [],
    };
  }
}
