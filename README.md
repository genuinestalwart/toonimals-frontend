# Toonimals | Frontend

> *A simple cartoon-like animal listing site.*

## Technologies Used

- Next.js
- Chakra UI

## Documentation

If you want to create this project on your own, do the following steps:

1. Create an app-router based next.js app with tailwindcss and typescript. Then, install the necessary packages.

    ```bash
    npx create-next-app@latest
    npm i @chakra-ui/react @chakra-ui/next-js @emotion/react @emotion/styled framer-motion axios @tanstack/react-query react-hook-form
    ```

2. Add these lines in `postcss.config.mjs`.

    ```js
    plugins: {
        "postcss-import": {}, // this line
        "tailwindcss/nesting": {}, // this line
        tailwindcss: {},
    },
    ```
