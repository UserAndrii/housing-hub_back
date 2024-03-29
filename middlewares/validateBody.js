const { HttpError } = require('../helpers');

const validateBody = shema => {
  const func = async (req, _, next) => {
    const { error } = shema.validate(req.body);

    if (Object.keys(req.body).length === 0)
      next(HttpError(400, 'Missing fields'));

    if (Object.keys(req.body).length < 4 && error)
      next(HttpError(400, error.message));

    if (error) next(HttpError(404, error.message));

    next();
  };

  return func;
};

module.exports = validateBody;
