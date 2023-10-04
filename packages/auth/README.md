## Installation

Install the following in order to ussse the datasource initial migration for the entities

```bash
$ npm install typeorm@^0.3.17 cross-env@^7.0.3
```

## Script

**Required:** In order to initialize the tables when using Postgres version, add this script to your package.json and execute the command.
**Required:** Do not include the script to repository (You can run it manually during deployment).

```bash
# Replace the brackets with your data
$ "migration:up": "nest build && cross-env DB_HOST=[your db host] DB_PORT=[your db port] DB_USER=[your db user] DB_PASS=[your db pass] DB_NAME=[your db name] typeorm -d node_modules/@nepk/auth/dist/datasource.js migration:run"

# Execute the command
$ npm run migration:up
```
