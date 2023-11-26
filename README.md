# React Testing Library Demo

## Download the required packages 

```
yarn add @testing-library/jest-dom @testing-library/react @testing-library/react-hooks @testing-library/user-event jsdom vitest -D 
```


## Setup vitest

1. Updated vite.config.js
   ```
   test: {
    globals: true,

    environment: "jsdom",

    setupFiles: "./setupTests.js",
  },
   ```
2. Added file setupTests.js at root folder
    ```
    import "@testing-library/jest-dom";

    ```


# Rule for writing unit test 
White writing unit testing remember 3 AAA, Arrange then Act and then Asset