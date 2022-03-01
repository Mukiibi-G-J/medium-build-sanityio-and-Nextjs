import { GetStaticProps } from 'next'
import React from 'react'
import { sanityClient } from '../../Client'
import { Post } from '../../typing'

function Post() {
  return <div>Post</div>
}

export default Post

export const getStaticPaths = async () => {
  const query = `*[_type == "post"]{
        _id,
        slug{
            current
        }
    }`
  const posts = await sanityClient.fetch(query)
  const paths = posts.map((post: Post) => ({
    params: {
      sulg: post.slug.current,
    },
  }))
  return {
    paths,
    fallback: 'blocking',
  }
}

// export const getStaticProps: GetStaticProps = async ({params}) =>{

// }
