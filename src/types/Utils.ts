export type headerBar={
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
    open:boolean

}
export interface IVehicle {
    carModel: string;
    year: number;
    pricePerDay: number;
    available: string; // NonNullable<boolean | undefined> can simply be boolean
    carImage: FileList;
    brand: string;
    type: string;
    description: string;
    details: {
        Transmission: string;
        allWheelDrive: string;
        Passengers: number;
    };
    location: string;
}
