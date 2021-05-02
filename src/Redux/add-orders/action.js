export const toggleAddOrderHidden = () => ({
  type: "TOGGLE_ADD_ORDER_HIDDEN",
});

export const addOrders = (item) => ({
  type: "ADD_ORDER",
  payload: item,
});
