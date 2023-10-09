import {Category, contentfulClient} from "@/libs/contentful";
import Link from "next/link";

export default async function CategoriesPage() {

  const entries = await contentfulClient.getEntries<Category>({
    content_type: 'categories',
    select: ["sys.id", "fields.name", "fields.description", "fields.slug"]
  })

  console.log("entries", entries)

  return (
    <div>
      <ul>
        { entries.items.map(category => (
          <Link key={category.sys.id} href={`/${category.fields.slug}`}>
            <li>{ category.fields.name} </li>
          </Link>
        ))}
      </ul>
    </div>
  )
}