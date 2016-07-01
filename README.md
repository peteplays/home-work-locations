# Home Work Locations

## Purpose
This app was created to visually display on a map where people live and where they would like to work.  A user is able to input their home address and desired work address.  They are also able to adjust the radius of the circle that is created on the map.

## Install
Clone repo

`npm i`

`gulp build`

## Develop Locally with DB Access
`gulp` or `npm run dev`

This will open a browser window with live reloads

Severed at `http://localhost:7777`

## Components
- express

- gulp

- browserify

- mongo

- angular-ui-bootstrap

- font-awesome

## Usage
`gulp build` will build `bundled.css` and `bundled.js`, `bundled.min.css` and `bundled.min.js`, & add the bootstrap and font awesome icons to `fonts` (_run this first_)

`gulp` or `npm run dev` will build your `bundled.css` and `bundled.js` in `www` -> `css` and `js` and run live reloads

`gulp local` or `npm start` will build your `bundled.css` and `bundled.js` -> `css` and `js`

`gulp no-db` will give you live reloads without db access

edit files in `app` -> `js` and `css` they will be bundled into `www`

add resources in `resources`

images are in `resources/images/`

## Mongo
Mongo must be installed locally and running to have db access.

running `createDBandData.js` will create a db named `homeworklocations` and will populate 3 records in the db

Navigate to this project folder in terminal and...

Run `cd resources/db/mongodb`

Run `node createDBandData.js`

The three records will be added to `homeworklocations`

## App File Structure
```
├───┬ app/
|   ├───┬ css/
|   |   ├── main.less
|   |   ├── autocomplete.min.less
|   |   └── slider.less
|   ├───┬ js/
|   |   ├── autocomplete.min.js
|   |   └── main.js
|   ├── app.js
|   └── app.less
├───┬ resources/
|   ├───┬ db/
|   |   ├───┬ mongodb/
|   |   |   ├── createDBandData.js
|   |   |   ├── mongoDBConnection.js
|   |   |   └── mongoDBUI.js
|   ├───┬ images/
|   |   ├── cartographer.png
|   |   ├── dimension.png
|   |   ├── favicon.ico
|   |   └── playslogo.png
├───┬ www/
|   ├───┬ css/
|   |   ├── bundle.css
|   |   └── bundle.min.css
|   ├───┬ fonts/
|   ├───┬ js/
|   |   ├── bundle.js
|   |   └── bundle.min.js
|   └── index.html
├── gulpfile.js
├── package.json
├── Procfile
├── README.md
└── server.js
```

## Comments Suggestions
All comments, suggestions, pull requests are welcome.  

*Please delete my api key*

## License
MIT

