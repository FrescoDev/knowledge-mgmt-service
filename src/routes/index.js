const handleSaveFactFind = require('./handle-save-fact-find-request');
const handleGetFactFind = require('./handle-get-fact-find-request');

module.exports = (app) => {
  app.post('/fact-find/v1/save',
    handleSaveFactFind
  );
  app.get('/fact-find',
    handleGetFactFind
  );
  app.get('/health',
    (req, res) => res.json({ isHealthy: true })
  );
};
