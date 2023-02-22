require("dotenv").config();

module.exports = {
  development: {
    client: "postgresql",
    connection: {
      database: "shelf_life",
      port: 5432,
      user: "postgres",
      password: "1996",
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
      connectionString: process.env.DATABASE_URL, 
      ssl: { rejectUnauthorized: false },
    },
  },
};
