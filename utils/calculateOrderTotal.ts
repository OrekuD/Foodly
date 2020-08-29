import { DELIVERY, VAT } from "../constants/Payment";

export const calculateOrderTotal = (cartTotal: number): number =>
  Number((cartTotal + (VAT / 100) * cartTotal + DELIVERY).toFixed(2));
