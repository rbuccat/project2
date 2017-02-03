module.exports = function(sequelize, DataTypes) {
  var artist = sequelize.define("artist", {
    photo: {
        type: DataTypes.STRING
    },
    artist_name: {
    	type: DataTypes.STRING
    },
    location: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    artist_password: {
        type: DataTypes.STRING
    },
    genre: {
        type: DataTypes.STRING
    },
    experience: {
        type: DataTypes.STRING
    },
    soundcloud: {
        type: DataTypes.STRING
    },
    available: {
    	type: DataTypes.BOOLEAN, 
    	defaultValue: true
    },
    date: {
        type: DataTypes.STRING
    }
    },
    {
    timestamps: false
});
  return artist;
};