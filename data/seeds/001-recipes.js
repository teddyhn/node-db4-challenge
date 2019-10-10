
exports.seed = function(knex) {
  return knex('recipes').truncate()
    .then(function () {
      return knex('recipes').insert([
        { recipe_name: 'Milk & Cereal', 
        instructions: 'Pour milk into the bowl, then add cereal.' },
        { recipe_name: 'Chicken Tendies',
        instructions: 'Retrieve frozen tendies from freezer, then microwave as desired.' }
      ]);
    });
};
