import { outro } from '@clack/prompts'

export function cleanStdout (stdout) {
  return stdout.trim().split('\n').filter(Boolean)
}

export function exitProgram ({ code = 0, message = 'A commit has not been created' } = {}) {
  outro(message)
  process.exit(code)
}
