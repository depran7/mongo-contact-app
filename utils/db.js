const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/wpu", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

// // Menambah 1 data
// const contact1 = new Contact({
//   nama: "Ade Pranaya",
//   nohp: "08787263637",
//   email: "adepranaya@gmail.com"
// });

// // Simpan ke collection
// contact1
//   .save()
//   .then(result => {
//     console.log(result);
//   })
//   .catch(error => {
//     console.log(error);
//   });
