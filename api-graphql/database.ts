import mongoose from 'mongoose'

export const initDB = () => {

  mongoose.connect(
    'mongodb+srv://viniciuscosta110:Vinicius%40110@cluster0.dzfvggp.mongodb.net/test?retryWrites=true&w=majority',
  );

  mongoose.connection.once('open', () => {
    console.log('connected to database');
    console.log('-------------------');
    console.log('Access: http://localhost:5000/graphql');
  });

}