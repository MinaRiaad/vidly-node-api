const express=require('express');
const Student=require('../models/student');
const router=express.Router();

router.get('/',async(req,res)=>{
    const students=await Student.find();
    res.send(students);
});

router.get('/:id',async(req,res)=>{
    const student=await Student.findById(req.params.id);
    res.send(student);
});


router.post('/',async(req,res)=>{
    const student=new Student(req.body);
    await student.save();
    res.send(student);
});

router.put('/:id',async(req,res)=>{
    const student= await Student.findByIdAndUpdate(req.params.id,req.body);
    res.send(student);
});

router.delete('/:id',async(req,res)=>{
    const student= await Student.findByIdAndRemove(req.params.id,req.body);
    res.send(student);
});

module.exports=router;