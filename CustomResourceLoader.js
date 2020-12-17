import jsdom from "jsdom";

class CustomResourceLoader extends jsdom.ResourceLoader {
  fetch(url, options) {
    if (options.element) {
      console.log(
        `Element ${options.element.localName} is requesting the url ${url}\n`
      );
    } else {
      console.log(`URL called: ${url}\n`);
    }

    return super.fetch(url, options);
  }
}

export default CustomResourceLoader;
