import {type Post} from "@/libs/contentful";
import Head from 'next/head'
import {contentfulClient} from "@/libs/contentful";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import remarkUnwrapImages from "remark-unwrap-images";

export default async function PostDetail({
  params
} : { params: { slug: string }
}) {

  const post = await contentfulClient.getEntry<Post>(params.slug);

  return (
    <div className="post-content">
      <Head>
        <title>{ `${post.fields.title}` }</title>
      </Head>
      <h1>
        { `${post.fields.title}` }
      </h1>
      <ReactMarkdown
        remarkPlugins={[
          remarkUnwrapImages
        ]}
        components={{
          img: ({src, alt}: any) => {
            return (
              <div className="image-container">
                <Image
                  className="image"
                  width={1000}
                  height={1000}
                  src={`https:${src}`}
                  alt={alt || 'image'}
                />
                <span className="image-description">{alt}</span>
              </div>
            )
          }
        }}
      >
        {`${post.fields.body}`}
      </ReactMarkdown>
    </div>
  )
}

export const generateStaticParams = async () => {
  const entries = await contentfulClient.getEntries<Post>({
    content_type: "post",
    select: ["sys.id"],
  });

  return entries.items.map((item) => ({
    id: item.sys.id,
  }));
};
