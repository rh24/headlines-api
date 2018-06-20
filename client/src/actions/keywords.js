const apiKey = '7b48baa7e48541b9af219e981533d442';

export function fetchByKeyword(keyword) {
  return (dispatch) => {
    return fetch(`https://newsapi.org/v2/top-headlines?q=${keyword}&apiKey=${apiKey}`)
      .then(resp => resp.json())
      .then(json => json.articles)
      .then(searchedStories => {
        // console.log(searchedStories)
        // debugger;
        dispatch({ type: 'FETCH_BY_KEYWORD', searchedStories: searchedStories });
      });
  }
}
