import { IAddress } from "src/app/client/i-address";

export interface IClient {
    title: string;
    firstName: string;
    surname: string;
    id: string;
    address: IAddress;
}