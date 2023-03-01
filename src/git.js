import { exec } from 'node:child_process'
import { promisify } from 'node:util'

import { cleanStdout } from './utils'

const execAsync = promisify(exec)

export async function getChangedFiles () {
  const { stdout } = await execAsync('git status --porcelain')
  return cleanStdout(stdout).map((line) => line.split(' ').at(-1))
}

export async function getStagedFiles () {
  const { stdout } = await execAsync('git diff --cached --name-only')
  return cleanStdout(stdout)
}

export async function createCommit ({ commit } = {}) {
  const { stdout } = await execAsync(`git commit -m "${commit}"`)
  return cleanStdout(stdout)
}

export async function addFiles ({ files = [] } = {}) {
  const { stdout } = await execAsync(`git add ${files.join(' ')}`)
  return cleanStdout(stdout)
}
