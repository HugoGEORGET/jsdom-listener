# jsdom-listener

Fetch the URL with `jsdom` and logs every external requests made as well a their responses' bodies.

## Notice

The script currently ends with an error:  
`TypeError: Cannot read property 'headers' of undefined`

The `fetch` method of `jsdom`'s `ResourceLoader` cannot currently run asynchronously in a satisfying way.  
([See `jsdom` issue #2500](https://github.com/jsdom/jsdom/issues/2500))

The `ResourceLoader` class relies on the now-deprecated `request-promise-native` library.  
Maybe its behavior will change once another library is used...  
([See `jsdom` issue #2792 to follow the progress](https://github.com/jsdom/jsdom/issues/2792))

## **Warning**

**The use of the `{ runScripts: "dangerously"}` option means all the scripts found in the specified URL will run on your machine. Proceed with caution.**

## Install

`npm install`

## Run

`node index.js`
