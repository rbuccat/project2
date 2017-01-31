module.exports = function(sequelize, DataTypes) {
  var Artist = sequelize.define("Artist", {
    artist_name: {
    	type: DataTypes.STRING
    },
    artist_location: {
        type: DataTypes.STRING
    },
    artist_genre: {
        type: DataTypes.STRING
    },
    available: {
    	type: DataTypes.BOOLEAN,
    	defaultValue: true
    },
    username: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    });
  return Artist;
};
