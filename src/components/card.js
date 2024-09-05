import React from "react"
import "./card.css"

export default function Card({ album }) {
  return (
    <a href={`albums/${album.url}`} className="hyperlink">
      <article className="card">
        <section className="coverArt">
          <img
            src={album.coverArt?.file.url}
            className="coverArt-img"
            alt={album.coverArt?.description}
          />
        </section>
        <section className="albumData">
          <p className="artist">{album.artist}</p>
          <p className="title">{album.title}</p>
          <p className="publicationYear">{album.publicationYear}</p>
        </section>
      </article>
    </a>
  )
}
