export const SAVE_COCKTAILS_DETAILS = "SAVE_COCKTAILS_DETAILS";
export const saveCocktailsDetails = (data) => {
  return {
    type: SAVE_COCKTAILS_DETAILS,
    payload: data,
  };
};

export const SAVE_COCKTAILS = "SAVE_COCKTAILS";
export const saveCocktails = (data) => {
  return {
    type: SAVE_COCKTAILS,
    payload: data,
  };
};

export const SET_FILTER_COCKTAILS_ID = "SET_FILTER_COCKTAILS_ID";
export const setFilterCocktailsId = (id, type) => {
  return {
    type: SET_FILTER_COCKTAILS_ID,
    payload: {
      id: id,
      type: type,
    },
  };
};
