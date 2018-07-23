const R = require('ramda');
const FactFindDataModel = require('../data-store/FactFindModel');

module.exports = async (req, res) => {
  try {
    const factFind = R.path(['body'], req);
    req.log.info({ factFind }, 'POST save fact find request handler');
    const savedFactFind = await new FactFindDataModel(factFind).save();

    return res.status(201).send({ id: savedFactFind.id });
  } catch (e) {
    if (e && e.ValidationError) {
      return res.status(401).send({ 'invalid request': e.ValidationError });
    }
    req.log.error(e);
    return res.status(500).send({ error: 'something bad happened :(' });
  }
};
