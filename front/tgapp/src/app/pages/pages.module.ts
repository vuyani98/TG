import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NetworkComponent } from './Products/network/network.component';
import { TurboComponent } from './Products/turbo/turbo.component';
import { TransmissionComponent } from './Products/transmission/transmission.component';
import { OnboardComponent } from './Products/onboard/onboard.component';
import { AccessControlComponent } from './Products/access-control/access-control.component';
import { VideoIntercomComponent } from './Products/video-intercom/video-intercom.component';
import { AlarmComponent } from './Products/alarm/alarm.component';
import { AccessoriesComponent } from './Products/accessories/accessories.component';
import { SoftwareComponent } from './Products/software/software.component';


@NgModule({
  declarations: [
    LandingPageComponent,
    NetworkComponent,
    TurboComponent,
    TransmissionComponent,
    OnboardComponent,
    AccessControlComponent,
    VideoIntercomComponent,
    AlarmComponent,
    AccessoriesComponent,
    SoftwareComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
