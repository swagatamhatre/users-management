module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    // Other Jest configurations as needed
  
    // Optional: If using Supertest with TypeScript, include this configuration
    globals: {
      'ts-jest': {
        diagnostics: false, // Disable TypeScript diagnostics in Jest output
      },
    },
};