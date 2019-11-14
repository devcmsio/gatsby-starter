const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const postComponent = path.resolve(`./src/templates/post.js`);
  const tagComponent = path.resolve(`./src/templates/tag.js`);

  const result = await graphql(`
    {
      allDevCmsEntry(filter: { entry: { type: { eq: "post" } } }) {
        edges {
          node {
            entry {
              slug
              title
            }
          }
        }
      }
      allDevCmsTag {
        edges {
          node {
            tag {
              slug
              title
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors
  }

  const posts = result.data.allDevCmsEntry.edges;
  const tags = result.data.allDevCmsTag.edges;

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;

    createPage({
      path: `blog/${post.node.entry.slug}`,
      component: postComponent,
      context: {
        slug: post.node.entry.slug,
        previous,
        next,
      }
    })
  });

  tags.forEach((tag) => {
    createPage({
      path: `tag/${tag.node.tag.slug}`,
      component: tagComponent,
      context: {
        slug: tag.node.tag.slug,
      }
    })
  });
};
