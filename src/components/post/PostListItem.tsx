import {Post} from "@/libs/contentful";
import Link from "next/link";
import {Entry} from "contentful";

export interface PostListItemProps {
  value: Entry<Post>
}

export default function PostListItem({
  value
}: PostListItemProps) {
  return (
    <Link
      href={`/post/${value.sys.id}`}
    >
      <li className="post-list-item">
        <h6 className="post-list-title tw-mb-1 tw-font-bold">
          { value.fields.title ? String(value.fields.title) : '??' }
        </h6>
        <p className="post-list-summary">
          { value.fields.summary ? String(value.fields.summary) : '??' }
        </p>
      </li>
    </Link>
  )
}
