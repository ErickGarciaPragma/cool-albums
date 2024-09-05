import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Card from "../components/card"

const IndexPage = ({ data }) => (
  <Layout>
    <h1>Albums</h1>
    <div className="indexPage">
      {data.allContentfulAlbum.edges.map(({ node, index }) => {
        return <Card album={node} id={`album-card-${index}`} />
      })}
    </div>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query MyQuery {
    allContentfulAlbum {
      edges {
        node {
          id
          artist
          coverArt {
            file {
              fileName
              url
            }
            description
          }
          duration
          numberOfSongs
          publicationYear
          title
          songList {
            raw
          }
          url
          description {
            raw
          }
        }
      }
    }
  }
`
