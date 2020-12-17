import jsdom from "jsdom";

class CustomResourceLoader extends jsdom.ResourceLoader {
  fetch(url, options) {
    if (options.element) {
      console.log(
        `Element ${options.element.localName} is requesting the url ${url}`
      );
    } else {
      console.log(`URL called: ${url}`);
    }

    return super
      .fetch(url, options)
      .then((res) => console.log(`Response: ${res}\n`));
  }
}

export default CustomResourceLoader;
