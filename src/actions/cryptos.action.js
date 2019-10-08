import { KEY} from '../environment';

export const GET_ALL_CRYPTOS = 'GET_ALL_CRYPTOS';
export const GET_ALL_CRYPTOS_SUCCESS = 'GET_ALL_CRYPTOS_SUCCESS';
export const GET_ALL_CRYPTOS_FAILURE = 'GET_ALL_CRYPTOS_FAILURE';

export const getCryptos = () => (dispatch) => {
  dispatch({ type: GET_ALL_CRYPTOS });
  return fetch('https://cors-anywhere.herokuapp.com/http://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
    method: 'GET',
    headers: new Headers({
      "Accept": "application/json",
      "Accept-Encoding": "deflate, gzip",
      'X-CMC_PRO_API_KEY': KEY
    }),
  })
  .then(async (cryptos) => {
    dispatch({
      type: GET_ALL_CRYPTOS_SUCCESS,
      payload: await cryptos.json()
    })
  })
  .catch((error) => {
    dispatch({
      type: GET_ALL_CRYPTOS_FAILURE,
      payload: error
    });
  });
}
