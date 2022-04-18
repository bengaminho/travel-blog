import * as React from 'react'
import {graphql, Link} from "gatsby"
import Layout from '../components/layout'
import '../scss/index.scss'

export default function Blog({ data }) {
    const { posts } = data.blog

    return (
            <Layout pageTitle={'kind of a travel blog'}>

            {posts.map(post => (
                <article key={post.id}>
                    <Link to={post.fields.slug} className={'h2'}>
                        {post.frontmatter.title}
                    </Link>
                    <p className={'article-date'}>
                        {post.frontmatter.author}, {post.frontmatter.date}
                    </p>
                    <p>{post.excerpt}</p>
                </article>
            ))}
            </Layout>
    )
}

export const pageQuery = graphql`
  query MyQuery {
    blog: allMarkdownRemark  ( sort: { fields: [frontmatter___date]
                                 order: DESC}
      ) { 
      posts: nodes {
        fields {
          slug
        }
        frontmatter {
          date(formatString: "DD/MM/YYYY")
          title
          author
        }
        excerpt
        id
      }
    }
  }
`