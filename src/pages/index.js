import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

class BlogIndex extends React.Component {
  renderBio() {
    const { authorName, authorBio } = this.props.data;

    return (
      <div>
        <div style={{ fontWeight: `700` }}>About author – {authorName.setting.value}</div>
        <div style={{ fontSize: '0.875rem', fontStyle: 'italic' }}>{authorBio.setting.value}</div>
      </div>
    );
  }

  render() {
    const { data } = this.props;
    const posts = data.allDevCmsEntry.edges;
    const siteTitle = this.props.data.site.siteMetadata.title;

    return (
      <Layout title={siteTitle}>
        <SEO title="All posts" />
        {this.renderBio()}

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

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allDevCmsEntry(filter: {entry: {type: {eq: "post"}}}, sort: {fields: entry___published_at, order: DESC}) {
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
    authorName: devCmsSetting(setting: {name: {eq: "author_name"}}) {
      setting {
        value
      }
    }
    authorBio: devCmsSetting(setting: {name: {eq: "author_bio"}}) {
      setting {
        value
      }
    }
  }
`;
