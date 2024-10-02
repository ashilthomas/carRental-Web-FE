import { createSlice, PayloadAction } from '@reduxjs/toolkit';


export interface IVehicle {
    _id:string
  carModel: string;
  year: number;
  pricePerDay: number;
  available: boolean;
  carImage: string;
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


interface VehicleState {
  vehicles: IVehicle[];
  adminVehicles:IVehicle[]
  loading: boolean;
  error: string | null;
}

const initialState: VehicleState = {
  vehicles: [],
  loading: false,
  adminVehicles:[],
  error: null,
};

// Create a vehicle slice with basic reducers
const vehicleSlice = createSlice({
  name: 'vehicles',
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true;
      state.error = null;
    },
    setVehicles: (state, action: PayloadAction<IVehicle[]>) => {
      state.vehicles = action.payload;
      state.loading = false;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
    setAdminVehicles:(state,action:PayloadAction<IVehicle[]>)=>{
      state.adminVehicles = action.payload;
      state.loading = false;
    }
  },
});

// Export actions to use them in the component
export const { setLoading, setVehicles, setError,setAdminVehicles } = vehicleSlice.actions;

export default vehicleSlice.reducer;
