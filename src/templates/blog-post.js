import React from "react"
import {graphql, Link} from "gatsby"
import Layout from "../components/layout";

export default function BlogPost({ data }) {
    const post = data.markdownRemark

    return (
        <Layout pageTitle={post.frontmatter.title}>
            <div>
                <div className={'article-toprow'}>
                    <p className={'article-date'}>{post.frontmatter.date}</p>
                    <Link to="/" className={'article-goback'}>&#8592; back home</Link>
                </div>
                <div className={'article-content'} dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
        </Layout>
    )
}
export const query = graphql`
  query BlogQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "LL")
      }
    }
  }
`
