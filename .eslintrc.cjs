module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-essential',
        'prettier'
    ],
    globals: {
        defineOptions: true
    },
    parser: 'vue-eslint-parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    plugins: ['vue'],
    rules: {
        'vue/multi-word-component-names': 'off'
    }
};