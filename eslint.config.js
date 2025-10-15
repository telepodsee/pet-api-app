// eslint.config.js
import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
  // 무시 폴더
  { ignores: ['dist', 'node_modules', 'public'] },

  // JS 기본 권장
  js.configs.recommended,

  // TS 권장
  ...tseslint.configs.recommended,

  // 프로젝트 규칙
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        // Cloudflare Workers 전역 (Request/Response 등은 @cloudflare/workers-types로 타입 제공)
        // 여기서는 런타임 전역만 읽기 전용으로 추가할 수도 있습니다.
        // WorkerGlobalScope: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      prettier: prettierPlugin,
    },
    rules: {
      // Prettier 결과를 린트 에러로
      'prettier/prettier': ['error', { semi: true }],

      // 세미콜론 항상
      '@typescript-eslint/semi': ['error', 'always'],
      // 중복 방지용으로 기본 semi는 끔
      semi: 'off',

      '@typescript-eslint/no-unused-vars': ['warn'],
      'no-console': 'off',
    },
  },

  // Prettier와 충돌하는 ESLint 규칙 비활성화
  eslintConfigPrettier,
];
