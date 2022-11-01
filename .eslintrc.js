module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": ["airbnb", "plugin:prettier/recommended"],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        'no-plusplus': 'off',
        "no-use-before-define": [
            "error",
            {
                "functions": false,
                "classes": false,
                "variables": false
            }
        ],
        "no-param-reassign": 0
    }
}
