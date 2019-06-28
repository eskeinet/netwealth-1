import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientService } from 'src/app/client/client.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    ClientService,
  ]
})
export class ClientModule { }
