import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IClient } from 'src/app/client/i-client';
import { IClientDto } from 'src/app/client/i-client.dto';
import { map } from 'rxjs/operators';

@Injectable()
export class ClientService {
  // the api is incomplete so I will assume it returns only single datum
  private clientUrl = 'https://netwealthonlinetests.azurewebsites.net/clients/';

  constructor(private http: HttpClient) { }

  public getClient(id: string): Observable<IClient> {
    return this.http.get<IClientDto>(this.clientUrl + id)
      .pipe(map((dto: IClientDto) => this.getClientFromDto(dto)));
  }

  // style guide for Typescript encourages for the property names to be lowercase
  private getClientFromDto(dto: IClientDto): IClient {
    return {
      title: dto.Title,
      firstName: dto.FirstName,
      surname: dto.Surname,
      id: dto.Id,
      address: {
        street: dto.Address.Street,
        city: dto.Address.City,
        postcode: dto.Address.Postcode,
      }
    };
  }
}
