const each = require('lodash/fp/each');
const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allFile(filter: { extension: { regex: "/md|js/" } }, limit: 1000) {
              edges {
                node {
                  id
                  name: sourceInstanceName
                  path: absolutePath
                }
              }
            }
          }
        `
      ).then(({ errors, data }) => {
        if (errors) {
          console.log(errors);
          reject(errors);
        }

        // Create blog posts & pages.
        const items = data.allFile.edges;

        const pages = items.filter(({ node }) => /page/.test(node.name));
        each(({ node }) => {
          const { name } = path.parse(node.path);
          const PageTemplate = path.resolve(node.path);
          createPage({
            path: name,
            component: PageTemplate,
          });
        }, pages);
      })
    );
  });
};

exports.onCreateWebpackConfig = ({ actions, plugins, stage }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src/components'),
        templates: path.resolve(__dirname, 'src/templates'),
        scss: path.resolve(__dirname, 'src/scss'),
      },
    },
    plugins: [
      plugins.define({
        __DEV__: stage === `develop` || stage === `develop-html`,
      }),
    ],
  });
};
