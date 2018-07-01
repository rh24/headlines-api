# Headlines

News API client with a React/Redux front-end that persists user information and articles to a Rails API backend that users can save for later. Users have 5 different dashboards to view top U.S. headlines, view bookmarked stories, browse by news category, search the News API's 'everything' endpoint, and view all sources.

The search tool will include results from blog posts, DeviantArt, and both small and large news sources. All results are rendered in Google's Material UI grid-style cards, which make for visually delightful thumbnails.

## Usage

Fork and clone the repository, cd into the client directory. Run `npm install && npm start`.

Run `bundle install` to load necessary dependencies. To run the local API, `bundle exec rails s -p 3001`.

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/rh24/headlines-api. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.
