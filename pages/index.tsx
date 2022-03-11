import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const posts = [
  { title: 'React test', description: 'Learn React test' },
  { title: 'React tailwind', description: 'Learn React tailwind' },
]

const Home: NextPage = () => {
  return (
    <div className="container mx-auto mb-8 bg-gray-300 px-10">
      <Head>
        <title>Toronto Mission</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        {posts.map((post, index) => (
          <div key={index}>
            {post.title}
            {post.description}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
