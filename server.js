const express = require('express');

const app = express();
app.use(express.static('.'));

const PORT = 1919;
app.listen(PORT, () => {
  console.info('listening on port', PORT);
});
