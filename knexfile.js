require("dotenv").config();

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
      directory: "./migrations",
      // tableName: "knex_migrations",
    },
    seeds: {
      directory: "./seeds",
    },
  },
  production: {
    client: "postgresql",
    connection: {
      connectionString: process.env.DATABASE_URL, //may want to check this if breaking
      ssl: { rejectUnauthorized: false },
    },
  },
};
