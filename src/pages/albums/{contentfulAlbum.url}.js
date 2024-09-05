import React from "react";
import Layout from "../../components/layout";
import { graphql } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { options } from "../../utils/options";
import "../../styles/albums-page.css";

export default function AlbumsPage({ data }) {
  return (
    <Layout>
      <>
        <section className="album-header">
          <div className="album-header-cover">
            <img
              src={data.contentfulAlbum.coverArt?.file.url}
              className="album-header-cover-img"
              alt={data.contentfulAlbum.coverArt?.description}
            />
          </div>

          <div className="album-header-data">
            <p className="album-header-data-title">
              {data.contentfulAlbum.title}
            </p>

            <div className="album-header-data-description">
              {renderRichText(data.contentfulAlbum.description, options)}
            </div>
            <div className="album-header-data-info">
              <p className="album-header-data-artist">
                {data.contentfulAlbum.artist}
              </p>
              <p className="album-header-data-duration">
                {data.contentfulAlbum.duration}
              </p>
              <p className="album-header-data-number-of-songs">
                {data.contentfulAlbum.numberOfSongs} Songs
              </p>
              <p className="album-header-data-publication-year">
                {data.contentfulAlbum.publicationYear}
              </p>
            </div>
          </div>
        </section>

        <section className="album-content">
          <div className="album-content-header">
            <span className="album-content-header-number">#</span>
            <span className="album-content-header-title">Title</span>
          </div>
          <div className="album-content-list">
            {renderRichText(data.contentfulAlbum.songList, options)}
          </div>
        </section>
      </>
    </Layout>
  );
}

export const pageQuery = graphql`
  query pageQuery($id: String) {
    contentfulAlbum(id: { eq: $id }) {
      artist
      coverArt {
        description
        file {
          fileName
          url
        }
      }
      duration
      numberOfSongs
      publicationYear
      songList {
        raw
      }
      title
      url
      description {
        raw
      }
    }
  }
`;
