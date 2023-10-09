import {type EntrySkeletonType} from 'contentful'
import {createClient} from 'contentful'

export const contentfulClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || '',
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
})


export type Post = EntrySkeletonType<{
  title: string
  summary: string
  body: string
  extra?: object
}>

export type Category = EntrySkeletonType<{
  slug: string
  name: string,
  description: string
}>

export type Tags = EntrySkeletonType<{
  name: string
  description: string
}>