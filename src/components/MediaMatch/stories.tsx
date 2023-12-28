import { Meta, StoryObj } from '@storybook/react'
import MediaMatch from '.'

export default {
  title: 'MediaMatch',
  component: MediaMatch
} as Meta

type Story = StoryObj<typeof MediaMatch>

export const Desktop: Story = {
  render: () => <MediaMatch $greaterThan="medium">Only on desktop</MediaMatch>
}

export const Mobile: Story = {
  render: () => <MediaMatch $lessThan="medium">Only on mobile</MediaMatch>
}

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  }
}
