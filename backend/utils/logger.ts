import chalk from 'chalk'

export const log = {
  info: (msg: string) => console.log(chalk.bold.yellow(msg)),
  success: (msg: string) => console.log(chalk.bold.green(msg)),
  error: (msg: string) => console.error(chalk.bold.red(msg)),
}