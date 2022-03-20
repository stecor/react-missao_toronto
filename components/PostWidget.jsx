import React, { useState, useEffect } from "react"
import moment from "moment"
import Link from "next/link"

import { getRecentPosts } from "../services"

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setrelatedPosts] = useState([])

  useEffect(() => {
    if (slug) {
      getSimilarPosts(category, slug).then((result) => setrelatedPosts(results))
    } else {
      getRecentPosts(category, slug).then((result) => setrelatedPosts(results))
    }

    return () => {
      second
    }
  }, [third])

  return <div>PostWidget</div>
}

export default PostWidget
