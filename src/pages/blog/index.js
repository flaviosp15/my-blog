import React from 'react';
import Layout from '../../components/layout';
import Seo from '../../components/seo';
import { graphql, Link } from 'gatsby';

function Blog({ data }) {
  return (
    <Layout pageTitle="My Blog Posts">
      {data.allMdx.nodes.map(node => (
        <article key={node.id}>
          <Link to={`/blog/${node.frontmatter.slug}`}>
            <h2>{node.frontmatter.title}</h2>
          </Link>
          <p>Posted: {node.frontmatter.date}</p>
        </article>
      ))}
    </Layout>
  );
}

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        id
        excerpt
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          author
          slug
          title
        }
      }
    }
  }
`;

export const Head = () => <Seo title="My Blog Posts" />;

export default Blog;
