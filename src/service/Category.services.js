const { category } = require('../database/models/index');

const CategoryName = async (name) => {
  try {
    const response = await category.create(name, {
      raw: true,
    });
    return response;
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
