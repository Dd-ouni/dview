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
    plugins: ['vue'],
    rules: {
        'vue/multi-word-component-names': 'off'
    }
};