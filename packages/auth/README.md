## Installation

Install the following in order to ussse the datasource initial migration for the entities

```bash
$ npm install typeorm@^0.3.17 cross-env@^7.0.3
```

## Script

**Required:** In order to initialize the tables when using Postgres version, add this script to your package.json and execute the command.

**NOTE:** Do not include the script to repository (You can run it manually during deployment).

```bash
# Replace the brackets with your data
$ "migration:up": "nest build && cross-env DB_HOST=[your db host] DB_PORT=[your db port] DB_USER=[your db user] DB_PASS=[your db pass] DB_NAME=[your db name] typeorm -d node_modules/@nepk/auth/dist/datasource.js migration:run"

# Execute the command
$ npm run migration:up
```

## Usage

Just import the AuthModule and put the keypairs that will be use by the package to encrypt the user credentials

**Recommended:** Use different keypair which isss only relevant for auth module

```bash
  import ...

  @Module({
    imports: [
      AuthModule.register({
        private_key: '',
        public_key: '',
      }),
    ],
    ...
  })
  export class AppModule {}
```
