const apiKey = '7b48baa7e48541b9af219e981533d442';

export function fetchByKeyword(keyword) {
  return (dispatch) => {
      // debugger;
    return fetch(`https://newsapi.org/v2/top-headlines?q=${keyword}&apiKey=${apiKey}`)
      .then(resp => resp.json())
      .then(json => json.articles)
      .then(stories => {
        console.log(stories)
        dispatch({ type: 'FETCH_STORIES', stories });
      });
  }
}
