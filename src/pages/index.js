import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";

const IndexPage = ({ data }) => (
  <Layout>
    <p>Query result: {data && data.file && data.file.publicURL}</p>
    <p>Env var value: {process.env.GATSBY_FILE_EXT}</p>
  </Layout>
);

export const query = graphql`
  query FileQuery($fileExt: String) {
    file(extension: { eq: $fileExt }) {
      publicURL
    }
  }
`;

export default IndexPage;
