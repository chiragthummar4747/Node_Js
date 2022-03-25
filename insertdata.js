var mongoose = require('mongoose')
var Empschema = new mongoose.Schema({_id:Number,eno:Number,ename:String,esal:Number,eaddar:String},{versionKey:false});
var Empmodel = mongoose.model("employees",Empschema)
mongoose.connect("mongodb://localhost/chirag");

var newEmp = new Empmodel({"_id":9,"eno":108,"ename":"chirag","esal":5100,"eaddar":"surat"})
var newEmp = new Empmodel({"_id":10,"eno":108,"ename":"chirag","esal":5100,"eaddar":"surat"})


newEmp.save(afterdatainsert);
function afterdatainsert(error){
    if(error){
        console.log(error)
    }
    else{
        console.log("document insert .......")
    }
    mongoose.disconnect()
}