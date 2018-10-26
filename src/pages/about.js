import React from "react"
import Layout from "../components/layout";
import { graphql } from 'gatsby';

export default ({ data }) => (
    <Layout>
        <div>
            <h1>About {data.site.siteMetadata.title}</h1>
            <p>I’m good enough, I’m smart enough, and gosh darn it, people like me!</p>
        </div>
    </Layout>
)


// only available on page components and usually defined outside and at the bottom of a component definition
export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;