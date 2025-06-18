import * as React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';
import Seo from '../components/seo';

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage alt="A person taking a photo of monument from a digital camera" src="../images/my-photo.jpg" />
    </Layout>
  );
};

export const Head = () => <Seo title="Home" />;

export default IndexPage;
