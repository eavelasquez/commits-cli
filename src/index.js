import { select, outro, intro } from '@clack/prompts'
import { COMMIT_TYPES } from './commit-types'

intro('Wizard for the creation of commits by @evelasquez')

const commitMessage = await select({
  message: 'Commit message',
  options: Object.entries(COMMIT_TYPES).map(([key, value]) => ({
    value: key,
    label: `${value.emoji} ${key} ${value.description}`
  }))
})

console.log(commitMessage)

outro('Commit created successfully. Thanks for using the wizard!')
