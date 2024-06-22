const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Daftar nama hewan, hantu, tokoh, dan kerajaan
const names = [
  'Harimau',
  'Gajah',
  'Serigala',
  'Ular',
  'Elang',
  'Buaya',
  'Kucing',
  'Anjing',
  'Kuda',
  'Sapi',
  'Kuntilanak',
  'Pocong',
  'Genderuwo',
  'Sundel Bolong',
  'Tuyul',
  'Wewe Gombel',
  'Babi Ngepet',
  'Lelembut',
  'Jurig',
  'Memedi',
  'Rama',
  'Shinta',
  'Arjuna',
  'Bima',
  'Nakula',
  'Sadewa',
  'Gatotkaca',
  'Srikandi',
  'Krishna',
  'Karna',
  'Majapahit',
  'Sriwijaya',
  'Mataram',
  'Kediri',
  'Singasari',
  'Demak',
  'Sunda',
  'Galuh',
  'Pajajaran',
  'Samudera Pasai',
  'Ayam',
  'Bebek',
  'Kambing',
  'Kelinci',
  'Burung',
  'Ikan',
  'Gurita',
  'Hiu',
  'Paus',
  'Lumba-lumba',
  'Peri',
  'Nyi Roro Kidul',
  'Buto Ijo',
  'Mak Lampir',
  'Si Manis Jembatan Ancol',
  'Nyai Loro Kidul',
  'Suster Ngesot',
];

// Fungsi untuk mendapatkan nama acak dari daftar
function getRandomName() {
  const randomIndex = Math.floor(Math.random() * names.length);
  return names[randomIndex];
}

app.use(express.static('public'));
app.use(bodyParser.json());

// Endpoint untuk menerima permintaan POST dari frontend
app.post('/cek-khodam', (req, res) => {
  const { name, birthDate } = req.body;

  // Mendapatkan nama acak dari daftar hewan, hantu, tokoh, dan kerajaan
  const randomName = getRandomName();
  const result = `Khodam untuk ${name} yang lahir pada ${birthDate} adalah Khodam ${randomName}.`;

  // Mengirimkan respons dalam bentuk JSON
  res.json({ result });
});

// Mulai server Express
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
