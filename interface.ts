  export interface HospitalItem {
    _id: string,
    name: string,
    picture:string,
    address: string,
    district: string,
    province: string,
    postalcode: string,
    tel: string,
    __v: number,
    id: string
  }

  export interface RestaurantItem {
    _id: string,
    name: string,
    picture: string,
    address: string,
    district: string,
    province: string,
    postalcode: string,
    tel: string,
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
    "_id": string,
    "reservationDate": string,
    "user": string,
    "restaurant": RestaurantItem
}
  
  export interface ReservationJson {
    success: boolean,
    count: number,
    data: ReservationItem[]
  }