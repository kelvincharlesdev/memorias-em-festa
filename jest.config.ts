// jest.config.ts
import type { Config } from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './', // Caminho da raiz do projeto (onde está o next.config.js e .env)
});

const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom', // Para testar componentes React (DOM virtual)
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@/components/(.*)$': '<rootDir>/src/components/$1',
    '^@/containers/(.*)$': '<rootDir>/src/containers/$1',
    '^@/content/(.*)$': '<rootDir>/src/content/$1',
    '^@/styles/(.*)$': '<rootDir>/src/styles/$1',
    '^@/app/(.*)$': '<rootDir>/src/app/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], // (Opcional) Arquivo para configs globais
};

export default createJestConfig(config);
