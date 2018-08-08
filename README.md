# Bitly page
This small application allows to get shorten links using Bitly API.

It's deployed to Github Pages for demonstration.
[DEMO](https://ykanapatskaya.github.io/bitly-page/)

## INSTALATION
To install this app do the following:
1. Clone this repo
```shell
git clone git@github.com:ykanapatskaya/bitly-page.git

```

2. Add your API credentials info into `.env` file. 
You can do it with the command `echo -e "API_LOGIN=[YOUR_LOGIN]\nAPI_KEY=[YOUR_KEY]" > .env`. 
The file should look like this:

```js
API_LOGIN=[YOUR_LOGIN]
API_KEY=[YOUR_KEY]
```


3. Install the dependencies
```shell
npm install

```

4. And run the dev server
```shell
npm run dev

```

## Building
Run `npm run build` to build this application in directory `dist`. This command will generate two files (html and js). Open html file in any way to get the built app.


## Testing
Command `npm test` will run existing unit tests. Not all components are covered with tests. The testing environment was set up to to demonstrate how to write test.


## Packages
This application was created from scratch starting with the command `npm init`. No one project with predefined set up environment was used. The result environment is not perfect and needs in optimization and some additional work. I wanted to demonstrate more/less working example of an environment close to real projects. Thus, there is the followng groups of packages which were installed:
  - `Webpack` and needed `loaders` (to work with scss, media files)
  - `React`, `Redux` and supported packages
  - `Babel` packages
  - `Jest`, `enzyme` for testing environment
  - `dotenv` for hidding private data
  - `gh-pages` for deployment to GitHub pages
  - `HtmlWebpackPlugin` - for building process
