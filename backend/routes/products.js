// Return dummy products
const express = require('express'); const router = express.Router();
router.get('/', (req, res) => {
 res.json([
  { name: 'Lays Classic', price: 20, imageUrl: 'https://example.com/lays.jpg' },
  { name: 'Kurkure Masala', price: 15, imageUrl: 'https://example.com/kurkure.jpg' },
  { name: 'Britannia Cake', price: 25, imageUrl: 'https://example.com/britannia.jpg' }
 ]);
});
module.exports = router;