const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

/* Menyajikan file statis dari folder public */
app.use(express.static(path.join(__dirname, 'public')));

/* Routing ke halaman utama */
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

/* Menjalankan server */
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
