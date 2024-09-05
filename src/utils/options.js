import React from "react"
import { INLINES, BLOCKS, MARKS } from "@contentful/rich-text-types"

export const options = {
  renderMark: {
    [MARKS.BOLD]: text => <b className="font-bold">{text}</b>,
    [MARKS.ITALIC]: text => <i className="font-italic">{text}</i>,
    [MARKS.UNDERLINE]: text => <u className="font-underline">{text}</u>,
  },
  renderNode: {
    [INLINES.HYPERLINK]: (node, children) => {
      const { uri } = node.data
      return (
        <a href={uri} className="underline" target="_blank">
          {children}
        </a>
      )
    },
    [BLOCKS.OL_LIST]: (node, children) => {
      return <ol>{children}</ol>
    },
    [BLOCKS.UL_LIST]: (node, children) => {
      return <ul>{children}</ul>
    },
    [BLOCKS.QUOTE]: (node, children) => <blockquote>{children}</blockquote>,
  },
}
