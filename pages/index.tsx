import {GetServerSideProps} from "next";
import {DataStore} from "@aws-amplify/datastore";
import {LazyPost, Post} from "../src/models";
import {Amplify} from "aws-amplify";
import config from "../src/aws-exports"

export interface HomeProps {
  posts: LazyPost[]
}

export default function Home({posts}: HomeProps) {

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
        <ul>
          {posts.map(post => (
              <li key={post.id}>
                { post.title } : { post.createdAt }
              </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {

  Amplify.configure(config)

  const posts = await DataStore.query(Post)

  return {
    props: {
      posts: JSON.parse(JSON.stringify(posts))
    }
  }

}