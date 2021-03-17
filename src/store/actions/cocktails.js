export const SAVE_COCKTAILS = "SAVE_COCKTAILS";
export const saveCocktails = (data) => {
  return {
    type: SAVE_COCKTAILS,
    payload: data,
  };
};
