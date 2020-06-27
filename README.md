# Ericorruption's personal website ![Jekyll site CI](https://github.com/ericorruption/ericorruption.github.io/workflows/Jekyll%20site%20CI/badge.svg)

This project uses [jekyll](http://jekyllrb.com) and is hosted on github. If you want to use it, fork this repo and:

1.  `cd` into the repo folder
2.  `bundle install` - you have to have [bundler](http://bundler.io/) and ruby (preferably v2.5.3) installed.
3.  `bundle exec jekyll serve`
4.  optionally, you can live-reload and cross-browser test with [browsersync](http://browsersync.io).
    You need [node.js](http://nodejs.org) installed for this. You can run it by typing `npx browser-sync start --files '_site/**' --proxy localhost:4000`.
