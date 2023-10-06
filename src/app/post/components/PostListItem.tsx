import {Post} from "@/libs/contentful";
import {Entry} from "contentful";
import Link from "next/link";

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
      <li className="post-list-item tw-list-none active:tw-bg-gray-500 active:tw-bg-opacity-25 tw-transition-colors tw-duration-300 tw-ease-in-out tw-rounded-md tw-p-2">
        <div className="active:tw-scale-95 tw-transition-transform">
          <h6 className="post-list-title tw-mb-1 tw-font-bold">
            { value.fields.title ? String(value.fields.title) : '??' }
          </h6>
          <p className="post-list-summary">
            { value.fields.summary ? String(value.fields.summary) : '??' }
          </p>
        </div>
      </li>
    </Link>
  )
}
