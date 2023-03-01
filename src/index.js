import { outro, intro, select, isCancel } from '@clack/prompts'
import { trytm } from '@bdsqqq/try'

import { addFiles, getChangedFiles, getStagedFiles } from './git-cmd'
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

outro('Commit created successfully. Thanks for using the wizard!')
