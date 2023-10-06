import {type Post} from "@/libs/contentful";
import {contentfulClient} from "@/libs/contentful";
import PostListItem from "@/app/post/PostListItem";

export default async function PostListPage({
  searchParams
} : {
  searchParams: {
    limit: string,
    page: string
  }
}) {

  const entries = await contentfulClient.getEntries<Post>({
    limit: searchParams.limit ? Number(searchParams.limit) : 20,
    skip: searchParams.page ? Number(searchParams.page) : undefined,
    content_type: 'post'
  })

  return (
    <>
      <h1 className="sm-margin-side">
        글 목록
      </h1>
      <ul className="post-list">
        { entries.items.map(item => (
          <PostListItem
            key={item.sys.id}
            value={item}
          />
        ))}
      </ul>
    </>
  )
}
