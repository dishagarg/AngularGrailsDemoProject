# Customer Management Forum - AngularJS app

This project is based on an awesome [John Papa's style guide](https://github.com/johnpapa/angular-styleguide). 

## Install Dependencies

Firstly, make sure you have bower, grunt-cli and karma-cli installed globally. To do this run:

```bash
npm install -g bower grunt-cli karma-cli
```

We have two kinds of dependencies in this project: tools and angular framework code. The tools help us manage and test the application.

* We get the tools we depend upon via `npm`, the [node package manager][npm].
* We get the angular code via `bower`, the [client-side code package manager][bower].

We have preconfigured `npm` to automatically run `bower` so we can simply do:

```bash
npm install
```

### Run the Application

We have preconfigured the project with a simple development web server. The simplest way to start this server is:

```bash
npm start
```

Now browse to the app at `http://localhost:8000`.
