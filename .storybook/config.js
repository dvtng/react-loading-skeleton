import { configure } from '@storybook/react'
import './base.css'

function loadStories() {
    require('../stories/Skeleton.story.js')
    require('../stories/Post.story.js')
}

configure(loadStories, module)
