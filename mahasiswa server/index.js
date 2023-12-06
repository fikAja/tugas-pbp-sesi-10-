const mahasiswaNim = "004017";
const updateData = {
  nama: "Rudi",
  gender: "L",
  prodi: "TE",
  alamat: "Cinagen",
};

fetch(`http://localhost:3000/mahasiswa/${mahasiswaNim}`, {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(updateData),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => log.error("Error:", error));
