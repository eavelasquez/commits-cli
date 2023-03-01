import { outro, intro, select, isCancel } from '@clack/prompts'
import { trytm } from '@bdsqqq/try'

import { addFiles, getChangedFiles, getStagedFiles } from './git-cmd'
import { COMMIT_TYPES } from './commit-types'
import { error, info, log, warning } from './log'
import { exitProgram } from './utils'

intro(log(`Wizard for the creation of commits by ${warning('@evelasquez')}`))

const [changedFiles, errorChangedFiles] = await trytm(getChangedFiles())
const [stagedFiles, errorStagedFiles] = await trytm(getStagedFiles())

// validate if there are errors
if (errorChangedFiles ?? errorStagedFiles) {
  exitProgram({ code: 1, message: error('Error: check that you are in a git repository') })
}

// check if there are files to commit and if there are no files staged
if (changedFiles.length > 0 && stagedFiles.length === 0) {
  const files = await select({
    message: info('No files to commit, select the files to add'),
    options: changedFiles.map((file) => ({
      value: file,
      label: file
    }))
  })

  if (isCancel(files)) {
    exitProgram({ message: info('No files selected, exiting the wizard') })
  }

  await addFiles(files)
}

// select the type of commit
const commitType = await select({
  message: info('Select the type of commit'),
  options: Object.entries(COMMIT_TYPES).map(([key, value]) => ({
    value: key,
    label: `${value.emoji} ${key.padEnd(7)} · ${value.description}`
  }))
})

if (isCancel(commitType)) {
  exitProgram({ message: info('No commit type selected, exiting the wizard') })
}

// Ask for the commit message
const commitMessage = await select({
  message: info('Enter the commit message:'),
  validate: (value) => {
    if (value.length > 0) {
      return error('The commit message cannot be empty')
    }

    if (value.length > 50) {
      return error('The commit message cannot be greater than 50 characters')
    }

    if (value.includes(' ')) {
      return error('The commit message cannot contain spaces')
    }
  }
})

if (isCancel(commitMessage)) {
  exitProgram({ message: info('No commit message entered, exiting the wizard') })
}

outro('Commit created successfully. Thanks for using the wizard!')
