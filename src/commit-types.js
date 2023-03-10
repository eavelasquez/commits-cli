export const COMMIT_TYPES = {
  feat: {
    emoji: 'โจ',
    description: 'add new feature',
    release: true
  },
  fix: {
    emoji: '๐',
    description: 'submit a bug fix',
    release: true
  },
  refac: {
    emoji: '๐ ',
    description: 'submit a code refactoring',
    release: true
  },
  docs: {
    emoji: '๐',
    description: 'add or update documentation',
    release: false
  },
  test: {
    emoji: '๐งช',
    description: 'add or update tests',
    release: false
  },
  build: {
    emoji: '๐ท',
    description: 'submit a build system change',
    release: false
  }
}
