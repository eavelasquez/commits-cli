import { outro, intro } from '@clack/prompts'
import { trytm } from '@bdsqqq/try'

import { error, log, warning } from './log'
import { exitProgram } from './utils'
import { getChangedFiles, getStagedFiles } from './git-cmd'

intro(log(`Wizard for the creation of commits by ${warning('@evelasquez')}`))

const [changedFiles, errorChangedFiles] = await trytm(getChangedFiles())
const [stagedFiles, errorStagedFiles] = await trytm(getStagedFiles())

// validate if there are errors
if (errorChangedFiles ?? errorStagedFiles) {
  exitProgram({ code: 1, message: error('Error: check that you are in a git repository') })
}

outro('Commit created successfully. Thanks for using the wizard!')
