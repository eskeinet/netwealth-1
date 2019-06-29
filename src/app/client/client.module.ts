import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientService } from 'src/app/client/client.service';
import { HttpClientModule } from '@angular/common/http';
import { ClientComponent } from './client.component';

@NgModule({
  declarations: [
    ClientComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    ClientService,
  ],
  exports: [
    ClientComponent
  ],
})
export class ClientModule { }
