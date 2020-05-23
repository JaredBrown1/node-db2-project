exports.up = function (knex) {
  return knex.schema.createTable("cars", (tbl) => {
    tbl.increments("id");

    tbl.integer("VIN").unique().notNullable();

    tbl.string("Make", 128).unique().notNullable();

    tbl.string("Model", 128).unique().notNullable();

    tbl.integer("Mileage").notNullable();

    tbl.string("Transmission");

    tbl.string("Title-Status");
  });
};

exports.down = function (knex, promise) {
  return knex.schema.dropTableIfExists("cars");
};
