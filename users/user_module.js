const db = require('../data/connection');

module.exports = {
  addUser,
  getUsers,
  findBy,
  getClassById,
  getClassType,
  getClass,
  getIntensity,
  getByLocation,
  getByDuration,
  addFavorite,
  getFavoriteClass
};

function addUser(user) {
  return db
    .select('*')
    .from('user')
    .insert(user);
}

// function getUserById(id) {
//   return db
//     .select('*')
//     .from('user')
//     .where({id});
// }

function getUsers() {
  return db.select('*').from('user');
}

function findBy(user) {
  return db
    .select('*')
    .from('user')
    .where(user);
}

function getClass() {
  return db.select('*').from('class');
}

function getClassById(id) {
  return db
    .select('*')
    .from('class')
    .where({id})
    .first();
}

function getClassType(type) {
  return db
    .select('*')
    .from('class')
    .where('class.type', '=', `${type}`);
}

function getIntensity(intensity) {
  return db
    .select('*')
    .from('class')
    .where({intensity});
}

function getByLocation(location) {
  return db
    .select('*')
    .from('class')
    .where({location});
}

function getByDuration(duration) {
  return db
    .select('*')
    .from('class')
    .where({duration});
}

function addFavorite(user_id, class_id) {
  return db('user_classes')
    .insert({user_id, class_id})
    .then(() => {
      return getClassById(user_id);
    });
}

function getFavoriteClass({user_id}) {
  return db
    .select('*')
    .from('user_classes')
    .join('user', 'user.id', 'user_classes.user_id')
    .where('user.id', '=', `${user_id}`);
}