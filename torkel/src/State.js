import React from "react";

const StateContext = React.createContext({});


const StateProvider = (props) => {

  const initialState = {
    siteMap: ['Contact-Us','Information','Site-map'],
    HomepageListing: {
      Restaurants: {
        title: "Restaurants for the day",
        listings: ["Chipotle", "Chick-fila", "5 Guys"],
      },
      Runner: {
        title: "Runners for the day",
        listings: ["Runner 1", "Runner 2", "Runner 3"],
      },
      Recommended: {
        title: "Recommended Items",
        listings: [
          "Chips and Guacamole",
          "Spicy Chicken Sandwich Meal l/ Sweet Tea",
          "Smoked Bacon Double Cheesburger w/ Med Fries",
        ],
      },
    },


    cart: [],
    setState: (newState) => {
      updateState((state) => {
        return { ...state, ...newState };
      });
    },
  };

  const [state, updateState] = React.useState(initialState);

  return (
    <StateContext.Provider value={state}>
      {props.children}
    </StateContext.Provider>
  );
};

export default StateProvider;
export { StateContext };

