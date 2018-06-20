const apiKey = '7b48baa7e48541b9af219e981533d442';

export function fetchByKeyWord(keyword) {
  return (dispatch) => {
    return fetch(`https://newsapi.org/v2/top-headlines?q=${keyword}&apiKey=${apiKey}`)
      .then(resp => resp.json())
      .then(stories =>  {
        dispatch({ type: 'FETCH_STORIES', stories });
      });
  }
}
