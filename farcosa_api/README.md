# Node js Template + Typescript

this is a project built with typescript | expressJs

## Requirements

- node
- postgresql | or any other Database

## RUN PROJECT

- install dependecies
  ```bash
  yarn install
  ```
- copy <b>.env.example</b> and name it <b>.env</b>
- set all the enviroment vars
- execute run script
  ```bash
  yarn start
  ```

## PROJECT STRUCTURE

```
.
├── dist
├── public
├── src
│   ├── config
│   ├── controllers
│   ├── dto
│   ├── interfaces
│   |   ├── request
│   |   ├── response
│   ├── middleware
│   ├── persistence
│   ├── repository
│   |   ├── implemetation
|   |
│   ├── service
│   ├── types
│   ├── utils
│   |- app.ts
├── tests
| - .env
| - .env.example
| - .gitignore
| - package-lock.json
| - package.json
| - README.md
| - tsconfig.json
| - yarn.lock
```

## MIGRATIONS

- to create a migration file use

  ```bash
  npm run knex:create:migration <migration_name>
  ```

- to execute a migration

  ```bash
  knex migrate:latest --knexfile src/persistence/pg/knexfile.ts
  ```

  or

  ```bash
  npm run knex:migrate
  ```

## TESTS

To create a unit tests the test file must be placed
inside the folder of tests, this file is a TS file where
you can use all the features of jest to make your own unit test

- to run a specific test

```bash
  jest tests/<testfile>.ts
```

- to run all tests

```bash
  npm run tests
```

### Test report

when running the command <b>npm run tests</b> a report will be generated
this is a html file and it is placed at the root of the project. you can find
the file by the name <b>test-report.html</b>

you can also view this file in the browser if you are running the service on the following route
[http://127.0.0.1:3500/test-report](http://127.0.0.1:3500/test-report)


### UPDATE MODELS
APP_PASSWORD must be in encrypted in SHA256