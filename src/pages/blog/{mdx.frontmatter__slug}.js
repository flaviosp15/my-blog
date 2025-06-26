import React from 'react';
import Layout from '../../components/layout';
import Seo from '../../components/seo';
import { graphql } from 'gatsby';

function BlogPost({ data, children }) {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      {children}
      <p>Written by: {data.mdx.frontmatter.author}</p>
    </Layout>
  );
}

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        author
        slug
      }
    }
  }
`;

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />;

export default BlogPost;
