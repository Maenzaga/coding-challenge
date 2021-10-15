export type DeviceApi = {
    "id": string;
    "brand":string;
    "model":string;
    "price": string;
    "imgUrl": string
}

export type Device = {
    id: string;
    brand:string;
    model:string;
    price: string;
    imgUrl: string
}

export type DeviceDetailApi = {
    "id": string;
    "brand":string;
    "model":string;
    "price": string;
    "imgUrl": string;
    "cpu": string;
    "ram":string;
    "os":string;
    "displayResolution": string;
    "battery": string;
    "primaryCamera": string[];
    "secondaryCamera": string[];
    "dimentiones":string;
    "weight":string;
}
export type DeviceDetail = {
    id: string;
    brand:string;
    model:string;
    price: string;
    imgUrl: string;
    cpu: string;
    ram:string;
    os:string;
    displayResolution: string;
    battery: string;
    primaryCamera: string[];
    secondaryCamera: string[];
    dimentiones:string;
    weight:string;
}

export type DevicesApiResponse = DeviceApi[]
export type DeviceDetailResponse = DeviceDetailApi