const statusErrorCode = {
  'any.required': 400,
  'string.min': 400,
  'number.positive': 400,
  'number.min': 400,
  'string.empy': 400,
  'string.email': 400,
  NOT_FOUND: 404,
  INVALID_DATA: 400,
  ALREADY_EXIXSTS: 409,
  REQUIRED: 400,
};
module.exports = (err, _req, res, _next) => {
  if (err.isJoi) {
    const status = statusErrorCode[err.details[0].type];
    return res.status(status).json({ message: err.details[0].message });
  }
  if (err.code) {
    const status = statusErrorCode[err.code] || 500;
    return res.status(status).json(err);
  }
  console.error(err);
  return res.status(500).json({ message: 'Internal server error' });
};
