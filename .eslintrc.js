module.exports = {
    "parser": "babel-eslint",
    "globals": { 
        "angular": false, 
        "module": false, 
        "inject": false, 
        "document": false 
    },
    "env": {
        "browser": true,
        "es6": true,
        "amd": true,
        // "commonjs": true
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],    
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            // "jsx": true
        }
    },
    "plugins": [
        "react",
        "jsx-a11y"
    ],
    "rules": {
        "indent": [
            "warn",
            4,
            { "SwitchCase": 1 }
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "react/prop-types": [ 1, { ignore: ["children"] } ],
        "eqeqeq": "error",
        'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
        "no-unused-vars": "warn",
        "no-undef": 2,
        "no-undef-init": 2,
        "jsx-a11y/href-no-hash": [0],
        "jsx-a11y/anchor-is-valid": ["warn", { "aspects": ["invalidHref"] }]
    }
};