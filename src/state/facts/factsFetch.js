import axios from "axios";
import { factsSuccess, hasError, startLoading } from "./factsSlice";

export const fetchFacts = (value) => async dispatch => {
  dispatch(startLoading())
  try {
    await axios(`https://api.chucknorris.io/jokes/search?query=${value}`)
      .then((response) => dispatch(factsSuccess(response.data.result)))
  } catch (e) {
    dispatch(hasError(e.message))
  }
}