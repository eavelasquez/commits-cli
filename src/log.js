import pc from 'picocolors'

const symbols = {
  info: pc.cyan('ℹ'),
  success: pc.green('✔'),
  warning: pc.yellow('⚠'),
  error: pc.red('✖')
}

export const info = ({ message }) => pc.cyan(`${symbols.info} ${message}`)
export const log = ({ message }) => pc.inverse(message)
export const success = ({ message }) => pc.green(`${symbols.success} ${message}`)
export const warning = ({ message }) => pc.yellow(`${symbols.warning} ${message}`)
export const error = ({ message }) => pc.red(`${symbols.error} ${message}`)
