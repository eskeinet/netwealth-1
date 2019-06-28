import { IAddressDto } from "src/app/client/i-address.dto";

export interface IClientDto {
    Title: string;
    FirstName: string;
    Surname: string;
    Id: string;
    Address: IAddressDto;
}