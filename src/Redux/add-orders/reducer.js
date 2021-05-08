const INITIAL_STATE = {
  hidden: true,
  order: [
    {
      orderId: "1",
      cName: "Sachin",
      customerContactNo: "9560965388",
      product: "Apple",
      quantity: "2",
      totalAmount: "RS 15000",
    },
    {
      orderId: "2",
      cName: "Sagar",
      customerContactNo: "95630965388",
      product: "Asprin",
      quantity: "20",
      totalAmount: "RS700",
    },
  ],
};

const addOrderReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "TOGGLE_ADD_ORDER_HIDDEN":
      return {
        ...state,
        hidden: !state.hidden,
      };
    case "ADD_ORDER":
      return {
        order: [...state.order, action.payload],
      };
    case "CLEAR_ITEM_FROM_ORDER":
      return {
        ...state,
        order: state.order.filter(
          (ord) => ord.orderId !== action.payload.orderId
        ),
      };
    default:
      return state;
  }
};

export default addOrderReducer;
