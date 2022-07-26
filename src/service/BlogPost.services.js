const { BlogPost, User, Category } = require('../database/models/index');
// puxando  da model

const BlogPosts = async () => {
  try {
    const response = await BlogPost.findAll({
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        // recebe todos menos a senha
        {
          model: Category,
          as: 'categories',
          // usando o as para renomear
          through: {
            attributes: [],
          },
        },
      ],
    });
    return response;
  } catch (error) {
    return error;
  }
};

module.exports = { BlogPosts };
