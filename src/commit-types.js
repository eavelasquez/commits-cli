export const COMMIT_TYPES = {
  feat: {
    emoji: '✨',
    description: 'feat: add new feature',
    release: true
  },
  fix: {
    emoji: '🐛',
    description: 'fix: submit a bug fix',
    release: true
  },
  docs: {
    emoji: '📚',
    description: 'docs: add or update documentation',
    release: false
  },
  refac: {
    emoji: '🛠',
    description: 'refactor: submit a code refactoring',
    release: true
  },
  test: {
    emoji: '🧪',
    description: 'test: add or update tests',
    release: false
  },
  build: {
    emoji: '👷',
    description: 'build: submit a build system change',
    release: false
  }
}
