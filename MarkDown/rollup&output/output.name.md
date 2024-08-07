if the script is a tool, it will be used in global, we set a name in out put.
if the script is just execute a function, we didn't need to set name, it maybe pollute the global namespace.

Yes, that's correct. Here's a more detailed explanation:

### When to Set the `name` Property

1. **Tool or Library**: If your bundle is a reusable tool or library that you want to make available to other scripts or applications, you should set the `name` property. This makes the exports accessible through a global variable, allowing other scripts to use the functionality provided by your bundle.

   ```js
   {
     file: 'dist/bundle.min.js',
     format: 'iife',
     name: 'myTool',
     plugins: [terser()],
     sourcemap: true,
   }
   ```

   With this configuration, other scripts can access the exports of your bundle via the `myTool` global variable.

   ```html
   <script src="dist/bundle.min.js"></script>
   <script>
     myTool.someFunction();
   </script>
   ```

2. **Standalone Script**: If your bundle is a standalone script meant to execute some logic on an HTML page without the need for its exports to be reused elsewhere, you don't need to set the `name` property. The script will execute immediately, and its internal variables and functions won't be accessible globally, helping to avoid polluting the global namespace.

   ```js
   {
     file: 'dist/bundle.min.js',
     format: 'iife',
     plugins: [terser()],
     sourcemap: true,
   }
   ```

   In this case, your script might be something like:

   ```html
   <script src="dist/bundle.min.js"></script>
   ```

   The script runs immediately upon loading, performing whatever task it is designed to do, without exposing any global variables.

### Summary

- **Set `name`**: When the bundle is a tool or library and you need to access its exports globally.
- **Don't set `name`**: When the bundle is a standalone script meant to execute its logic without needing to expose its exports globally.

This approach ensures that you only expose global variables when necessary, helping to keep the global namespace clean and avoiding potential conflicts with other scripts.