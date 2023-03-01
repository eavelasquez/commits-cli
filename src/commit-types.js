export const COMMIT_TYPES = {
  feat: {
    emoji: '✨',
    description: 'add new feature',
    release: true
  },
  fix: {
    emoji: '🐛',
    description: 'submit a bug fix',
    release: true
  },
  refac: {
    emoji: '🛠',
    description: 'submit a code refactoring',
    release: true
  },
  docs: {
    emoji: '📚',
    description: 'add or update documentation',
    release: false
  },
  test: {
    emoji: '🧪',
    description: 'add or update tests',
    release: false
  },
  build: {
    emoji: '👷',
    description: 'submit a build system change',
    release: false
  }
}
