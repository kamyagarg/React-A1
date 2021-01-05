import * as actions from "./actionType";

// function:- fetchDatas
// param:- {object} -- {restaurant,meal}-- which will be used in Fetch
// Descripton:- It will get the parameter and return a function which taked dispatch as parameter and called the fetch and it will dispatch the data to store
export function fetchDatas(e) {
  console.log("e",e);
  return function (dispatch) {
    fetch(`http://www.recipepuppy.com/api/?i=${e}&q=rice`)
      .then((res) => res.json())
      .then((data) => {
        console.log("data",data.results);
        dispatch({
          type: actions.FETCH_DATA,
          data: data.results,
        });
      })
      .catch((error) => {
        dispatch({
          type: actions.ERROR_MSG,
        });
      });
  };
}
