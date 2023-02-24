const Student = require("../models/student.js");

const studentRegister = (req, res) => {
  //Check if  Exist
  const studentExists =  Student.findOne({ Nom: req?.body?.Nom });

  if (studentExists) throw new Error("student already exists");
  try {
    //Register
    const student =  Student.create({
      Nom: req?.body?.Nom,
      Age: req?.body?.Age,
    });

    res.json(student);
  } catch (error) {
    res.json(error);
  }
};

module.exports = {
  studentRegister,
};
