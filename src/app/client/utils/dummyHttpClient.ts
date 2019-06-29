import { Observable } from 'rxjs';

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
