const mongoose=require('mongoose');

const studentSchema=new mongoose.Schema({
    name:String,
    age:Number
})

const Student=mongoose.model('Student',studentSchema);

exports.Student=Student;