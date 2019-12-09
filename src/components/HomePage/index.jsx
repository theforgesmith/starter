import React from 'react';

import Layout from 'components/Layout';

export default function HomePage(props) {
  return (
    <Layout {...props}>
      <div className="container py-5">
        <h1>Hello World!</h1>
      </div>
    </Layout>
  );
}
