const { category } = require('../database/models/index');

const CategoryName = async (name) => {
  try {
    const result = await category.create(name, {
      raw: true,
    });
    return result;
  } catch (error) {
    return {
      error: {
        code: 'required',
        message: '/name/ is required',
      },
    };
  }
};

module.exports = { CategoryName };
