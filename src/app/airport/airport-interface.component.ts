export interface AirportInterfaceComponent {
  airport_code: string;
  airport_name: IHash
}

export interface IHash {
  [name: string]: string;
}
