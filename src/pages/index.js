import React from 'react';
import { graphql } from 'gatsby';

import HomePage from 'components/HomePage';

export default props => <HomePage {...props} />;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      meta: siteMetadata {
        title
        description
        url: siteUrl
        author
        twitter
      }
    }
  }
`;
