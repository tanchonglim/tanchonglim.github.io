# Solution

### Library used

- [zip.js](https://gildas-lormeau.github.io/zip.js/core-api.html)

### Explanation

First, `zip.ZipReader(new zip.BlobReader(file))` reads the zipped files, then using `await reader.getEntries()` to get the files inside the zip. Remember to use `await` keyword as it is asynchronous. The method will return an array of entry, and the data of the entry can be read by using `await entries[0].getData(new zip.Data64URIWriter("image/png"))`. In this solution, the entries will be read as `image/png`. Finally, the result will be blob, which is appended to the div by creating `<img>` element with the blob as its `src`.
