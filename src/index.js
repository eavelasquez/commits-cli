import { text, outro, intro } from '@clack/prompts'

intro('Wizard for the creation of commits by @evelasquez')

const commitMessage = await text({
  message: 'Commit message',
  placeholder: 'feat: add new feature'
})

console.log(commitMessage)

outro('Commit created successfully. Thanks for using the wizard!')
