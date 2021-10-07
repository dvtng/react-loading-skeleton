module.exports = {
    extends: [
        'react-app',
        'react-app/jest',
        'plugin:jest/recommended',
        'eslint:recommended',
    ],
    plugins: ['jest'],
    ignorePatterns: ['**/*.js', '**/*.cjs', 'dist/*'],
}
