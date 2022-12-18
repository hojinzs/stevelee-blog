// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Tag, Post, TagPost } = initSchema(schema);

export {
  Tag,
  Post,
  TagPost
};