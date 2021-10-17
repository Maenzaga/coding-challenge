export type Device = {
    id: string;
    brand:string;
    model:string;
    price: string;
    imgUrl: string
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
    secondaryCmera: string[];
    dimentions:string;
    weight:string;
}

export type DeviceApi = {
    "id": string;
    "brand":string;
    "model":string;
    "price": string;
    "imgUrl": string
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
    "secondaryCmera": string[];
    "dimentions":string;
    "weight":string;
    "options": {
        "colors": Array<{code: number, name: string}>;
        "storages": Array<{code: number, name: string}>;
    }
}

export type CartItemApi = {"count": number}
export type CartRequestBody = {
    "id"?: string;
    "colorCode"?: number;   
    "storageCode"?: number;
}

export type DevicesApiResponse = DeviceApi[]
export type DeviceDetailResponse = DeviceDetailApi