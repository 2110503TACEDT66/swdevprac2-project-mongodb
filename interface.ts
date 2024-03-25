  export interface HospitalItem {
    _id: string,
    name: string,
    address: string,
    district: string,
    province: string,
    postalcode: string,
    tel: string,
    picture: string,
    __v: number,
    id: string
  }

  export interface RestaurantItem {
    _id: string,
    name: string,
    address: string,
    district: string,
    province: string,
    postalcode: string,
    tel: string,
    picture: string,
    openclosetime: string,
    __v: number,
    id: string

  }
  
  export interface HospitalJson {
    success: boolean,
    count: number,
    pagination: Object,
    data: HospitalItem[]
  }

  export interface ReservationItem {
    name: string;
    surname: string;
    id: string;
    restaurant: string;
    reservationDate: string;
  }