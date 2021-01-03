export const initialState = {
  basket: [
    {
      id: "123456789",
      title: "Becoming: A Guided Journal for Discovering Your Voice111",
      price: 10.97,
      rating: 5,
      image: "https://m.media-amazon.com/images/I/51w4zG9Dn6L.jpg",
    },
    {
      id: "123456782",
      title: "Becoming: A Guided Journal for Discovering Your Voice222",
      price: 10.97,
      rating: 5,
      image: "https://m.media-amazon.com/images/I/51w4zG9Dn6L.jpg",
    },
  ],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return { ...state, basket: [...state.basket, action.item] };
    case "REMOVE_FROM_BASKET":
      let newBasket = [...state.basket];
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not basket`
        );
      }
      return { ...state, basket: newBasket };
    default:
      return state;
  }
};

export default reducer;
