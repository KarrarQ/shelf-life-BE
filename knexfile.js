// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "postgresql",
    connection: {
      database: "shelf_life",
      port: 5432, //maybe not necassary
      user: "postgres",
      password: "RLft353244",
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
  production: {
    client: "postgresql",
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
