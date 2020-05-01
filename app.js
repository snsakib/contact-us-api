var express = require('express');
var router = express.Router();
var cors = require('cors');

router.post('/send', (req, res) => {
  console.log(req.body);
});

const app = express();
app.use(cors());
app.use(express.json());
app.use('/', router);
app.listen(3002, () => {
  console.log(`Running on port: 3002`);
});
 
