import mongoose from 'mongoose'

export const initDB = () => {

  mongoose.connect(
    'mongodb+srv://viniciuscosta110:Vinicius%40110@cluster0.dzfvggp.mongodb.net/test?retryWrites=true&w=majority',
  );

  mongoose.connection.once('open', () => {
    // return all collections
    mongoose.connection.db.listCollections().toArray().then((collections) => {
      console.log(collections);
    });
    console.log('connected to database');
  });

}