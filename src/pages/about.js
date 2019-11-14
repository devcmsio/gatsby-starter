import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Content from "../components/content";

class AboutPage extends React.Component {
  render() {
    const { data } = this.props;
    const page = data.devCmsEntry;
    const siteTitle = this.props.data.site.siteMetadata.title;

    return (
      <Layout title={siteTitle}>
        <SEO title="About us" />
        <article>
          <header><h1>{page.entry.title}</h1></header>
          <hr/>
          <Content content={page.entry.fields.content} />
        </article>
      </Layout>
    )
  }
}

export default AboutPage

export const pageQuery = graphql`
  query PageBySlug {
    site {
      siteMetadata {
        title
      }
    }
    devCmsEntry(entry: { slug: { eq: "about" } }) {
      entry {
        slug
        title
        fields {
          content
        }
      }
    }
  }
`;
