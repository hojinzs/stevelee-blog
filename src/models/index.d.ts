import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerTag = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Tag, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly label?: string | null;
  readonly posts?: (PostTag | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTag = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Tag, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly label?: string | null;
  readonly posts: AsyncCollection<PostTag>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Tag = LazyLoading extends LazyLoadingDisabled ? EagerTag : LazyTag

export declare const Tag: (new (init: ModelInit<Tag>) => Tag) & {
  copyOf(source: Tag, mutator: (draft: MutableModel<Tag>) => MutableModel<Tag> | void): Tag;
}

type EagerPost = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Post, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly content?: string | null;
  readonly published_at?: string | null;
  readonly TAGS?: (PostTag | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPost = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Post, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly content?: string | null;
  readonly published_at?: string | null;
  readonly TAGS: AsyncCollection<PostTag>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Post = LazyLoading extends LazyLoadingDisabled ? EagerPost : LazyPost

export declare const Post: (new (init: ModelInit<Post>) => Post) & {
  copyOf(source: Post, mutator: (draft: MutableModel<Post>) => MutableModel<Post> | void): Post;
}

type EagerPostTag = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PostTag, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly tagId?: string | null;
  readonly postId?: string | null;
  readonly tag: Tag;
  readonly post: Post;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPostTag = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PostTag, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly tagId?: string | null;
  readonly postId?: string | null;
  readonly tag: AsyncItem<Tag>;
  readonly post: AsyncItem<Post>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type PostTag = LazyLoading extends LazyLoadingDisabled ? EagerPostTag : LazyPostTag

export declare const PostTag: (new (init: ModelInit<PostTag>) => PostTag) & {
  copyOf(source: PostTag, mutator: (draft: MutableModel<PostTag>) => MutableModel<PostTag> | void): PostTag;
}