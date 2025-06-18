import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

function Seo({ title }) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const titleStr = `${title} | ${data.site.siteMetadata.title}`;

  return <title>{titleStr}</title>;
}

export default Seo;
