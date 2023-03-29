const path = require('path');

module.exports = (app) =>
  app.get('/', (_req, res) =>
    res.sendFile(path.join(__dirname, '../client/dist/index.html'))
  );