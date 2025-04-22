module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
        project: './tsconfig.json',
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    env: {
        browser: true,
        es2021: true,
    },
    plugins: [
        'react',
        'react-hooks',
        'jsx-a11y',
        '@typescript-eslint'
    ],
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    rules: {
        'jsx-a11y/anchor-is-valid': 'off', // <a href="#"> 사용 허용
        'react/react-in-jsx-scope': 'off', // Next.js 쓸 경우 필수
        "react/no-unescaped-entities": "off", // JSX에서 ' 사용 허용
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
    },
};
