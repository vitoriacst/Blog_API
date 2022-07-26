const rescue = require('express-rescue');
const service = require('../service/BlogPost.services');

// construindo a controller da rota get (post)
const BlogPost = rescue(async (_req, res) => {
  const response = await service.BlogPosts();
  return res.status(200).json(response);
});

module.exports = { BlogPost };
