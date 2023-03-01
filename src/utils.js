export function cleanStdout (stdout) {
  return stdout.trim().split('\n').filter(Boolean)
}
