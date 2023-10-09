import {Category, contentfulClient} from "@/libs/contentful";
import {notFound} from "next/navigation";

export const generateStaticParams = async () => {
  const category = await contentfulClient.getEntries<Category>({
    content_type: 'categories',
    select: ['sys.id', 'fields.slug']
  })
  return category.items.map(category => category.fields.slug)
}

export default async function CategoryPage({ params }:{ params: { category: string }}) {

  const category = await contentfulClient.getEntries({
    content_type: 'categories',
    query: `fields.slug=${params}`
  })

  if(category.total === 0) {
    notFound()
  }

  console.log("category", category)

  return (
    <div>
      { JSON.stringify(category)}
    </div>
  )
}