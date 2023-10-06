import {Meta, StoryObj} from "@storybook/react";
import PostListItem from "@/app/post/components/PostListItem";
import {faker} from "@faker-js/faker/locale/ko";

const meta: Meta = {
  title: "Post/PostListItem",
  component: PostListItem,
  args: {
    value: {
      sys: {
        id: faker.string.uuid()
      },
      fields: {
        title: faker.lorem.lines(1),
        summary: faker.lorem.paragraphs(200)
      }
    }
  }
}

export default meta

type Story = StoryObj<typeof PostListItem>

export const Primary: Story = {}
