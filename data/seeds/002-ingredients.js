
exports.seed = function(knex) {
  return knex('ingredients').truncate()
    .then(function () {
      return knex('ingredients').insert([
        { ingredient_name: 'Milk' },
        { ingredient_name: 'Cereal' },
        { ingredient_name: 'Tendies' }
      ]);
    });
};
