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
