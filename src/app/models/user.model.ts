export interface IUserInfo {
    name: string;
    age: number;
    address: IAddressInfo;
}
export interface IAddressInfo {
    city: string;
    code: number;
}