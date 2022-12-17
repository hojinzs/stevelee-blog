// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Tag, Post, PostTag } = initSchema(schema);

export {
  Tag,
  Post,
  PostTag
};