export const toggleAddOrderHidden = () => ({
  type: "TOGGLE_ADD_ORDER_HIDDEN",
});

export const addOrders = (item) => ({
  type: "ADD_ORDER",
  payload: item,
});
export const clearItemFromOrders = (item) => ({
  type: "CLEAR_ITEM_FROM_ORDER",
  payload: item,
});

export const searchOrder = (item) => ({
  type: "SEARCH_ORDER",
  payload: item,
});
