# Chess game

1. This is simplified version of Chess game. The pieces can be moved wherever and without any rules or order.
2. Pieces can attack opposite color and the attacked piece is removed from the board.
3. Pieces within the same team can be toggled when selected.
4. **FEN notation** is simplified to include only part of the notation responsible for position.
5. **FEN notation** is updated on every move or by entering it manually in the textarea.    

### Live version

Deployed app - https://wojtechk.github.io/chess/

### Dev version

1. This repository was built using PNPM package manager. https://pnpm.io/
2. To run development localhost install dependepcies `pnpm install`
3. Run `pnpm dev` to start dev server

### Deployment

1. This repository is deployed using GitHub Pages.
2. Run `pnpm build` to create bundle in the `dist` folder.
3. Run `pnpm deploy` to publish built in code to the host.

### App architecture

1. Chess game app is having 2 main States:
- `fenString` - string value of the FEN notation 
- `fenData` - data transformed from FEN string, responsible for storing Board position
2. These states and all the logic responsible for updating and manipulating them are kept in one centralized place - **useFenNotation** Hook. This gives us few benefits:
- state, bussiness and functional code is at the highest parent level, rest of the components tree are pure UI, reflecting State stored at the top
- bussiness code is enapsulated from UI which gives clarity of what is responsibility of each of the components and files
- seperated functions and logic pieces are easier to maintain and test with unit tests
3. Types for the state and data are mostly defined at the top level as well. Where possible children and UI components are inheriting the Types as well, which leads to more centralized way of storing Types too.
4. To persist game state even after browser is closed the `localStorage` has been used. Code responsible for that is encapsulated in `useLocalStorage`. This Hook exposes API similar to `useState` which is simplifying usage of its caching mechanism. 