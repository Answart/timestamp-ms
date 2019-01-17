# timestamp-ms AKA Timestamp Micro-service

An app that listens for a date param and returns a JSON object of that date in natural language and unix form.

```
{
  "unix": 1450137600,
  "natural": "December 15, 2015"
}
```

User Stories
------------

- I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016).
- If it does, it returns both the Unix timestamp and the natural language form of that date.
- If it does not contain a date or Unix timestamp, it returns null for those properties.

Tech Stack and Key Packages
---------------------------

* [Express](https://expressjs.com/): Fast, unopinionated, minimalist web framework for node
* [Body-Parser](https://github.com/expressjs/body-parser#readme): Node.js body parsing middleware
* [Moment](https://momentjs.com/): Lightweight JavaScript date library for parsing, validating, manipulating, and formatting dates.

Getting Started
---------------

Install dependencies then launch app @ [localhost:8000](http://localhost:8000)
```
$ npm install
$ node server.js
```

Example routes:
```
http://localhost:8000/1450166400
http://localhost:8000/December%2015,%202015
```

View [app in production](https://answart-url-shortener-ms.herokuapp.com) (if still active)

```
https://answart-timestamp-ms.herokuapp.com/1450166400
https://answart-timestamp-ms.herokuapp.com/December%2015,%202015
```

NPM Commands
------------

| Command | Description |
|---------|-------------|
|npm install|Install dependencies in package.json|
|node server.js|Start server port @ **localhost:8000**|
