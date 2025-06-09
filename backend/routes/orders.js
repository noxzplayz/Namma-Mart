// Order endpoints
const express = require('express'); const router = express.Router();
router.post('/', (req, res) => { res.json({ message: 'Order received' }); });
router.get('/', (req, res) => {
 if (req.headers.authorization === 'Bearer your_admin_token') {
   res.json([{ id: 1, user: 'John', items: ['Lays', 'Kurkure'] }]);
 } else {
   res.status(403).json({ error: 'Unauthorized' });
 }});
module.exports = router;