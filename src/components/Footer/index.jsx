import { Link } from 'gatsby';
import React from 'react';
import cn from './styles.module.scss';

export default function Footer({ author, title }) {
  return (
    <div className={cn.root}>
      <div className="container">
        <hr className="border-primary" />
        <p>
          {title}
          <Link to="/profile/">
            <br />
            <strong>{author}</strong>
          </Link>
        </p>
      </div>
    </div>
  );
}
