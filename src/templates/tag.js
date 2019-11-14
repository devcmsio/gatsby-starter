import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {rhythm} from "../utils/typography";

class Post extends React.Component {
  render() {
    const { data } = this.props;
    const tag = data.devCmsTag;
    const posts = data.allDevCmsEntry.edges;
    const siteTitle = this.props.data.site.siteMetadata.title;

    return (
      <Layout title={siteTitle}>
        <SEO title={tag.tag.title} />
        <h3>Tag: {tag.tag.title}</h3>
        {posts.map(({ node }) => {
          return (
            <article key={node.entry.slug}>
              <header>
                <h3
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <Link style={{ boxShadow: `none` }} to={`blog/${node.entry.slug}`}>
                    {node.entry.title}
                  </Link>
                </h3>
                <small>{node.entry.published_at}</small>
              </header>
              <section>
                <p dangerouslySetInnerHTML={{ __html: node.entry.fields.excerpt }} />
              </section>
            </article>
          )
        })}
      </Layout>
    )
  }
}

export default Post

export const pageQuery = graphql`
  query BlogTagBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    devCmsTag(tag: { slug: { eq: $slug } }) {
      tag {
        slug
        title
      }
    }
    allDevCmsEntry(filter: {entry: {type: {eq: "post"}, tags: {in: [$slug]}}}, sort: {fields: entry___published_at, order: DESC}) {
      edges {
        node {
          entry {
            published_at(formatString: "MMMM D, YYYY")
            slug
            title
            fields {
              excerpt
            }
          }
        }
      }
    }
  }
`;
