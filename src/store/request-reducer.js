const initialState = [
  {
    id: 1,
    title: "request title one",
    description: "Neque porro quisquam est qui Neque porro quisquam est qui ",
    date: "2021-06-23"
  },
  {
    id: 2,
    title: "request title two ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas orci turpis, tristique at mattis a, volutpat eget mi ",
    date: "2021-06-24"
  }
];

export const requestReducer = (state = initialState, action) => {
  if (action.type === "ADD_REQUEST") {
    return [...state, action.payload];
  }
  return state;
};
