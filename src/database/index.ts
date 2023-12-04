import { Sequelize } from "sequelize";

export const database = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  port: 3306,
  database: "onebitflix_development",
  username: "onebitflix",
  password: "onebitflix",
  define: {
    underscored: true,
  },
});
