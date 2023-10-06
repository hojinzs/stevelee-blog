import Link from "next/link";
import {Amplify} from "aws-amplify";
import awsExports from "@/aws-exports"

Amplify.configure({...awsExports, ssr: true })

export default function HomePage() {
  return (
    <div className="sm-margin-side">
      <h1>
        Stevelee Blog
      </h1>
      <h2>
        Post
        <Link href="/post">
          <small className="more">
            more
          </small>
        </Link>
      </h2>
      <h2>
        Tags
        <Link href="/tag">
          <small className="more">
            more
          </small>
        </Link>
      </h2>
    </div>
  )
}
