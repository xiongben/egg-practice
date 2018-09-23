

module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
   
    const UserSchema = new Schema({
      
    });
   
    return mongoose.model('User', UserSchema);
  }