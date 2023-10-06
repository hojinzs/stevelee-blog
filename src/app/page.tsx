import Link from "next/link";

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
