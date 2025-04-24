module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',  // Cambiado a jsdom para trabajar con document y canvas
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['lcov', 'text-summary'],
  roots: ['<rootDir>/tests'], // Solo busca en la carpeta 'tests'
  testMatch: ['**/*.test.ts', '**/*.spec.ts'], // Busca archivos con los sufijos .test.ts y .spec.ts
  testPathIgnorePatterns: ['/node_modules/'], // Ignora node_modules, por defecto
};
