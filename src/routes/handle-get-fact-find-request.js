const R = require('ramda');
const FactFindDataModel = require('../data-store/FactFindModel');

module.exports = async (req, res) => {
  try {
    const factFindId = R.path(['query', 'factFindId'], req);
    req.log.info({ factFindId }, 'GET saved fact find request handler');

    const savedFactFind = await FactFindDataModel.findOne({ fact_find_id: factFindId });
    if (!savedFactFind) {
      req.log.info({ factFindId }, 'Fact find could not be found');
      return res.status(404);
    }
    return res.status(201).send({ fact_find: savedFactFind });
  } catch (e) {
    if (e && e.ValidationError) {
      return res.status(401).send({ 'invalid request': e.ValidationError });
    }
    req.log.error(e);
    return res.status(500).send({ error: 'something bad happened :(' });
  }
};
