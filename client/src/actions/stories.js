const apiKey = '7b48baa7e48541b9af219e981533d442';

export function fetchStories() {
  return (dispatch) => {
    // dispatch({ type: 'FETCH_STORIES', stories });
    return fetch(`https://newsapi.org/v2/top-headlines?pageSize=50&country=us&apiKey=${apiKey}`)
      .then(resp => resp.json())
      .then(json => json.articles)
      .then((stories) => {
        dispatch({ type: 'FETCH_STORIES', stories: stories });
      })
  }
}

// for some reason, even after changing the request parameter for pageSize to equal 50, only 20 results display on the page.
