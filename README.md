# Chess game

<li>
                This is simplified version of Chess game. The pieces can be
                moved wherever and without any rules or order.
              </li>
              <li>
               Pieces can attack opposite color and the attacked piece is removed
                from the board.
              </li>
              <li>Pieces within the same team can be toggled when selected.</li>
              <li>
                <strong>FEN notation</strong> is simplified to include only part
                of the notation responsible for position.
              </li>
              <li>
                <strong>FEN notation</strong> is updated on every move or by
                entering it manually in the textarea.
              </li>

## Live version   

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
