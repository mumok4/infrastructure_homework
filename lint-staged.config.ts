export default {
    '*.{ts,tsx}': ['npm run lint:fix', 'npm run format', () => 'npm run typecheck'],
    '*.{json,md,css,html,yml}': ['npm run format'],
};
