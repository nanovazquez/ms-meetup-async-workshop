## Exercise 1: Native promises

1. Open the **apis/begin/azure-manager/index.js** file. We are going to update the code to retrieve applications.

1. Create a new Promise instance by updating the function inside the `app.get('/applications')` with the following code:

  ```js
  app.get('/applications', function (req, res) {
    var promise = new Promise(function (resolve, reject) {
      // TODO: Add the action here
    });

    return promise
      .then(function (data) {
        // TODO: Do something with the result
      })
      .catch(function (err) {
        // TODO: Handle error
      });
  });
  ```

1. Next, update the body of the function used when creating the Promise to perform the read action. Notice that we will call the `resolve()` and `reject()` functions when appropiate with the proper data:

  ```js
  app.get('/applications', function (req, res) {
    var promise = new Promise(function (resolve, reject) {
      fs.readFile('data.json', 'utf8', function (err, data) {
      if (err) {
        reject(err);
      }
      resolve(data);
    });

    ...
  });
  ```

1. Now, set up the code that will be executed when the Promise is resolved with a successful result:

  ```js
  app.get('/applications', function (req, res) {
    ...

    return promise
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

1. Finally, handle the failure scenario by adding some code inside the `catch()`:

  ```js
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

1. We are all set! 😊 Run the following code to activate the backend:

  ```js
  node start-backend.js
  ```

  And the following code for the frontend:

  ```js
  cd ui-facade && yarn start
  ```

  You should see the list with all the apps loaded.