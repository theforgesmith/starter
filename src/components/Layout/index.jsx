import React from 'react';

import Nav from 'components/Nav';
import Footer from 'components/Footer';
import { siteMetadata } from '../../../gatsby-config';

import 'modern-normalize/modern-normalize.css';
import 'scss/main.scss';

export default function Layout(props) {
  const { children } = props;

  return (
    <div>
      <Nav title={siteMetadata.title} {...props} />
      {children}
      <Footer title={siteMetadata.title} author={siteMetadata.author} />
    </div>
  );
}
