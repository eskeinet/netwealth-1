import { TestBed } from '@angular/core/testing';

import { ClientService } from './client.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { IClient } from 'src/app/client/i-client';

export class DummyHttpClient {
  public get<T>(url: string) {
    const urlParts = url.split('/');
    const clientId = urlParts[urlParts.length - 1];
    return Observable.create((observer) => {
      observer.next({
        Title: 'Mr',
        FirstName: 'Jo',
        Surname: 'Bloggs',
        Id: clientId,
        Address: {
          Street: '60 Charlotte Street',
          City: 'London',
          Postcode: 'W1T 2NU'
        }
      });
      observer.complete();
    });
  }
}

describe('ClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      // had to fake it because api gave me CORS error
      {
        provide: HttpClient,
        useClass: DummyHttpClient,
      },
      ClientService,
    ]
  }));

  it('should be created', () => {
    const service: ClientService = TestBed.get(ClientService);
    expect(service).toBeTruthy();
  });

  describe('=> getClient', () => {
    let service: ClientService;
    let clientId: string;
    let clientObservable: Observable<IClient>;

    beforeEach(() => {
      service = TestBed.get(ClientService);
      clientId = 'foo';
      clientObservable = service.getClient(clientId);
    });

    it('| should return client with the requested ID', (done: DoneFn) => {
      const subscription = clientObservable.subscribe((clientFromBackend) => {
        expect(clientFromBackend.id).toEqual(clientId);
        done();
      });
    });

    it('| should return client object conforming to IClient interface', (done: DoneFn) => {
      const keysArray = ['title', 'firstName', 'surname', 'id', 'address'];

      const subscription = clientObservable.subscribe((clientFromBackend) => {
        keysArray.forEach(propName => {
          expect(clientFromBackend[propName]).toBeDefined();
        });
        done();
      });
    });

    it('| should return client with an address in a correct format', (done: DoneFn) => {
      const expectedAddress = {
        street: '60 Charlotte Street',
        city: 'London',
        postcode: 'W1T 2NU'
      };
      const subscription = clientObservable.subscribe((clientFromBackend) => {
        expect(JSON.stringify(expectedAddress)).toEqual(JSON.stringify(clientFromBackend.address));
        done();
      });
    });
  });
});
