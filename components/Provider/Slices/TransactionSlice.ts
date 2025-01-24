import { createSlice } from "@reduxjs/toolkit";

type Service = {
  title: string;
  quantity: number;
  price: number;
};

type InitalState = {
  name: string;
  streak: number;
  streakDiscount: number;
  branch: string;
  services: Service[];
  voucherDiscount: number;
  method: string;
  totalDiscount: number;
  grandTotal: number;
};

const streakEquivalents = [
  { value: 0, discount: 0 },
  { value: 1, discount: 10 },
  { value: 2, discount: 20 },
  { value: 3, discount: 30 },
];
const initialState: InitalState = {
  name: "",
  streak: 0,
  streakDiscount: 0,
  branch: "",
  services: [],
  voucherDiscount: 0,
  method: "",
  totalDiscount: 0,
  grandTotal: 0,
};

export const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    setCustomerName(state, action) {
      state.name = action.payload;
    },
    setStreak(state, action) {
      state.streak = action.payload;
      const discount = streakEquivalents.find(
        (streak) => streak.value === action.payload
      );
      state.streakDiscount = discount ? discount.discount : 0; // Fallback to 0
    },
    setBranchOrMethod(state, action) {
      if (action.payload.branch) {
        state.branch = action.payload.branch;
      }
      if (action.payload.method) {
        state.method = action.payload.method;
      }
    },
    setAvailedServices(state, action: { payload: Service }) {
      const isAdded = state.services.find(
        (service) => service.title === action.payload.title
      );

      if (!isAdded) {
        state.services.push({
          title: action.payload.title,
          quantity: action.payload.quantity,
          price: action.payload.price,
        });
      } else {
        state.services = state.services.filter(
          (service) => service.title !== action.payload.title
        );
      }
    },
    setTotal(state) {
      const totalPrice = state.services.reduce((sum, service) => {
        return sum + service.price * service.quantity;
      }, 0);

      state.grandTotal = totalPrice - state.totalDiscount;
    },
    setVoucherDiscount(state, action) {
      console.log(action.payload);
      state.voucherDiscount = action.payload;
      console.log(JSON.stringify(state.voucherDiscount));
    },
    setTotalDiscount(state) {
      state.totalDiscount = state.streakDiscount + state.voucherDiscount;
    },
    modifyServiceQuantity(state, action) {
      const { identifier, title } = action.payload;

      if (identifier === "inc") {
        const foundService = state.services.find(
          (service) => service.title === title
        );
        if (foundService) {
          foundService.quantity++;
        }
      }
      if (identifier === "dec") {
        const foundService = state.services.find(
          (service) => service.title === title
        );
        if (foundService) {
          if (foundService.quantity > 1) {
            foundService.quantity--;
          } else {
            state.services = state.services.filter(
              (service) => service.title !== title
            );
          }
        }
      }
    },
  },
});

export const transactionActions = transactionSlice.actions;
