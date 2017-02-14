## Exercise 2: Bluebird

1. Open the **apis/begin/runtime-manager/index.js** file. We are going to update the code to retrieve applications.

1. First of all, paste the following code on top of the file to require the Bluebird library

  ```js
  var Promise = require('bluebird');
  ```

1. Let's start by using one of the best features of Bluebird: `promisify`. This function returns a _promisified_ function that will wrap the one sent by argument, which should conform to node.js convention of handling callbacks. In this case, we are going to promisify the `fs.readFle` (for more information, see [here](http://bluebirdjs.com/docs/api/promise.promisify.html)).

```js
var readFile = Promise.promisify(fs.readFile);
```

> **Note:** you can also promisify the entire object by using `promisifyAll`. For more info, see [here](http://bluebirdjs.com/docs/api/promise.promisifyall.html).

1. Now, instead of creating a new Promise instance (which is considered a bad practice by Bluebird) call the _promisified_ version of `readFile` that you just created. Paste the following code inside `app.get('/applications/)`:

  ```JS
  app.get('/applications', function (req, res) {
    return readFile('data.json', 'utf8')
      .then(function (data) {
        // TODO: Do something with the result
      })
      .catch(function (err) {
        // TODO: Handle error
      });
  });
  ```

1. Next, set up the code that will be executed when the Promise is resolved with a successful result.

  ```JS
  app.get('/applications', function (req, res) {
    return readFile('data.json', 'utf8')
      .then(function (data) {
        var apps = JSON.parse(data);
        console.log('..applications requested, sending %s apps', apps.length);
        res.send(apps);
      })
      .catch(function (err) {
        // TODO: Handle error
      });
  });
  ```

1. Finally, handle the failure scenario by adding some code inside the `catch()`.

  ```JS
  app.get('/applications', function (req, res) {
    ...

    return promise
      .then(function (data) {
        ...
      })
      .catch(function (err) {
        throw err;
      });
  });
  ```

1. We are all set! Run the following code to activate the backend:

  ```js
  node start-backend.js
  ```

  And the following code for the frontend:

  ```js
  cd ui-facade && yarn start
  ```

  You should see the list with all the apps loaded.
