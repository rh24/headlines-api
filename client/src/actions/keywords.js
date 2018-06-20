const apiKey = '7b48baa7e48541b9af219e981533d442';

export function fetchByKeyword(keyword) {
  return (dispatch) => {
    return fetch(`https://newsapi.org/v2/everything?q=${keyword}&pageSize=100&apiKey=${apiKey}`)
      .then(resp => resp.json())
      .then(json => json.articles)
      .then(searchedStories => {
        dispatch({ type: 'FETCH_BY_KEYWORD', searchedStories: searchedStories });
      });
  }
}
