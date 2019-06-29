import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/client/client.service';
import { IClient } from 'src/app/client/i-client';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-client',
  template: `
    <pre *ngIf="client$ | async as client">
      {{ client | json }}
    </pre>
  `,
  styles: []
})
export class ClientComponent implements OnInit {

  public client$: Observable<IClient>;

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    const clientId = 'bar';
    this.client$ = this.clientService.getClient(clientId);
  }

}
