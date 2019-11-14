import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Content from "../components/content"

class Post extends React.Component {
  renderHeroImage() {
    const post = this.props.data.devCmsEntry;
    if (!post.entry.fields.hero_image) {
      return null;
    }

    return <img src={post.entry.fields.hero_image.url} alt=""/>;
  }

  renderHeroText() {
    const post = this.props.data.devCmsEntry;
    if (!post.entry.fields.hero_text) {
      return null;
    }

    return (
      <div
        style={{
          marginBottom: `3rem`,
          padding: `0 2rem`,
          fontStyle: `italic`
        }}
      >{post.entry.fields.hero_text}</div>
    );
  }

  render() {
    const post = this.props.data.devCmsEntry;
    const siteTitle = this.props.data.site.siteMetadata.title;
    const { previous, next } = this.props.pageContext;

    return (
      <Layout title={siteTitle}>
        <SEO
          title={post.entry.title}
          description={post.entry.excerpt}
        />
        <article>
          <header>
            <h1>{post.entry.title}</h1>
            <p>{post.entry.published_at}</p>
            <ul
              style={{
                display: `flex`,
                flexWrap: `wrap`,
                listStyle: `none`,
                padding: 0,
              }}
            >
              {(post.entry.tags || []).map((tag)  => {
                return (
                  <li key={`tag-${tag}`} style={{ padding: `0 15px 0 0` }}>
                    <Link to={`tag/${tag}`}>#{tag}</Link>
                  </li>
                )
              })}
            </ul>
          </header>
          {this.renderHeroImage()}
          {this.renderHeroText()}

          <Content content={post.entry.fields.content} />

          <br/>

          <nav>
            <ul
              style={{
                display: `flex`,
                flexWrap: `wrap`,
                justifyContent: `space-between`,
                listStyle: `none`,
                padding: 0,
              }}
            >
              <li>
                {previous && (
                  <Link to={`blog/${previous.entry.slug}`} rel="prev">
                    ← {previous.entry.title}
                  </Link>
                )}
              </li>
              <li>
                {next && (
                  <Link to={`blog/${next.entry.slug}`} rel="next">
                    {next.entry.title} →
                  </Link>
                )}
              </li>
            </ul>
          </nav>
        </article>
      </Layout>
    )
  }
}

export default Post

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    devCmsEntry(entry: { slug: { eq: $slug } }) {
      entry {
        published_at(formatString: "MMMM D, YYYY")
        slug
        title
        tags
        fields {
          excerpt
          content
          hero_text
          hero_image {
            url
          }
        }
      }
    }
  }
`;
