export interface StatusDate {
  code: string;
}
export interface startTicketMaster {
  dateTBA: boolean;
  timeTBA: boolean;
  dateTBD: boolean;
  dateTime: string;
  localDate: string;
  localTime: string;
  noSpecificTime: boolean;
}
export interface DateTicketMaster {
  spanMultipleDays: boolean;
  start: startTicketMaster;
  status: StatusDate;
  timezone: string;
}
export interface ImageTicketMaster {
  ratio: string;
  fallback: boolean;
  url: string;
  width: number;
  height: number;
  dates: DateTicketMaster;
}

export interface Venues {
  name: string;
}
export interface Embedded {
  attractions: any;
  venues: Venues[];
}

export interface PriceRange {
    currency: string;
    max: number;
    min: number;
    type: string;
}
export interface Event {
  id: string;
  name: string;
  dates: DateTicketMaster;
  images: ImageTicketMaster[];
  _embedded: Embedded;
  url: string;
  priceRanges: PriceRange[];
}
