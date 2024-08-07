the dayjs bundle had set 'dayjs' as output.name, so we can use dayjs every where if we imported it?

Yes, the `dayjs` library sets `dayjs` as the output name in its bundle. This means that when you include the `dayjs` library via a script tag in an HTML file, the `dayjs` global variable is available, allowing you to use its functionality directly.

Here's how it looks in practice:

### Including Day.js in HTML

When you include the `dayjs` library using a script tag, it attaches itself to the `dayjs` global variable:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Day.js Example</title>
  <script src="https://cdn.jsdelivr.net/npm/dayjs@latest/dayjs.min.js"></script>
</head>
<body>
  <script>
    // You can now use dayjs globally
    const now = dayjs();
    console.log(now.format());
  </script>
</body>
</html>
```

### Rollup Configuration for Day.js

In the context of Rollup, the `dayjs` library might use a configuration similar to this:

```js
export default {
  input: 'src/index.js',
  output: {
    file: 'dist/dayjs.min.js',
    format: 'iife',
    name: 'dayjs', // This sets the global variable name to 'dayjs'
    plugins: [terser()],
    sourcemap: true,
  },
};
```

By setting the `name` property to `'dayjs'`, the bundled code ensures that the exports of the library are attached to the `dayjs` global variable, making it easy to use in any HTML page by including the script.

This is consistent with how most libraries are configured to ensure their functionalities are easily accessible when included in web pages.