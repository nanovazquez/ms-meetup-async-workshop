## Exercise 4: RxJS

1. Open the **mulesoft-apps-ui/src/components/ApplicationList/index.js** file. We are going to update the code to retrieve applications.

1. First of all, paste the following ES6 code on top of the file to require the RxJS library:

  ```js
  import Rx from 'rxjs/Rx';
  ```

1. Now, replace the code inside the `componentDidMount()` method with a function that will take care of calling the **applicationService** but also to move that result to a stream that will, in time, execute a code to update the component's state:

  ```js
    componentDidMount() {
      Rx.Observable
        .flatMap(() => Rx.Observable.fromPromise(applicationsService.getApplications()))
        .subscribe(result => this.setState({ applications: result }));
    }
  ```

  > **Note:** the `Rx.Observable.flatMap()` transforms the items emitted by an Observable into Observables, then flatten the emissions from those into a single Observable (for more information, see [here](http://reactivex.io/documentation/operators/flatmap.html)).


1. And since we are working with streams we can do things like filtering the returned apps:

  ```js
  componentDidMount() {
    Rx.Observable
      ...
      .filter(apps => apps.filter(app => !app.name.length))
      .subscribe(result => this.setState({ applications: result }));
  }
  ```

1. Add a simple retry policy in case the call fails because of a network disruption:

  ```js
  componentDidMount() {
    Rx.Observable
      .flatMap(() => Rx.Observable.fromPromise(applicationsService.getApplications()))
      .retry(3)
      .subscribe(result => this.setState({ applications: result }));
  }
  ```

1. And even set up a polling to retrieve the applications every 3 seconds:

  ```js
  componentDidMount() {
    Rx.Observable
      .interval(3000)
      .startWith(0)
      ....
  }
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
