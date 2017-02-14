## Exercise 3: async/await

> **Note**: You can see a working version of the app under the [/end/worker-clouds](./end/worker-clouds) folder.

### Prerequisites

Since async/await is still in revision, we need to perform some actions to set up our development environment:

1. Install babel-node and the proper babel pluging by running `npm i -D babel-cli babel-plugin-transform-async-to-generator`.

1. Update the **package.json** with the following code:

  ```
  {
    ...
    "babel": {
      "plugins": [
        "transform-async-to-generator"
      ]
    }
    ...
  }
  ```

1. Update the start script with the following code:

  ```
  {
    ...
    "scripts": {
      "start": "babel-node ."
    },
    ...
  }
  ```

### Steps

1. Open the **apis//worker-clouds/index.js** file. We are going to update the code to retrieve applications.

1. As before, we are going to use bluebird to promisify the `fs.readFile` function. Paste the following code at tthe top of the file:

  ```js
  var Promise = require('bluebird');
  var readFile = Promise.promisify(fs.readFile);
  ```

1. Now, update the function being called when the user requests the `/applications` endpoint by prefixing it with the `async` keyword:

  ```js
  app.get('/applications', async function (req, res) {
    // TODO: Perform the operation
  });
  ```

1. Then, update the body of `app.get('/applications/)` with the following code:

  ```js
  app.get('/applications', async function (req, res) {
    try {
     // TODO: Get the data
    }
    catch (err){
      // TODO: Handle error
    }
  });
  ```

1. Next, set up the code that will be executed to retrieve the data, parse it, and send it to the user. For this, paste the following code inside the `try` statement.

  ```js
  app.get('/applications', async function (req, res) {
    try {
      var data = await readFile('data.json', 'utf8');
      var apps = JSON.parse(data);
      console.log('..applications requested, sending %s apps', apps.length);
      res.send(apps);
    }
    catch (err){
      // TODO: handle error
    }
  });
  ```

1. Finally, handle the failure scenario by adding some code inside the `catch` statement.

  ```js
  app.get('/applications', async function (req, res) {
    try {
      var data = await readFile('data.json', 'utf8');
      var apps = JSON.parse(data);
      console.log('..applications requested, sending %s apps', apps.length);
      res.send(apps);
    }
    catch (err){
      throw err;    }
  });
  ```

### Run the code

1. We are all set 😊 Run the following code to activate the backend:

  ```js
  node start-backend.js
  ```

  And the following code for the frontend:

  ```js
  cd mulesoft-apps-ui && npm start
  ```

  You should see the list with all the apps loaded.

> **Note**: you can see a working version of the app under the [/end/worker-clouds](./end/worker-clouds) folder.