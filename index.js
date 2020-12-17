import jsdom from "jsdom";
import CustomResourceLoader from "./CustomResourceLoader.js";

const { JSDOM } = jsdom;

const resourceLoader = new CustomResourceLoader({
  strictSSL: false,
});

JSDOM.fromURL("https://amazon.com", {
  runScripts: "dangerously",
  resources: resourceLoader,
}).catch((err) => console.log(err));
