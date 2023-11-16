# Rick and Morty characters Website [(Live Link)](https://rick-morty-aryan.vercel.app/)

Explore an immersive website powered by the [Rick and Morty characters API](https://rickandmortyapi.com/documentation/), offering dynamic filtering options for characters by name, status, and gender. Uncover your favorite characters from the beloved animated series with ease."

## Features

1. **Character Search with Debouncing:**
   - The application features a search bar powered by the useDebounce custom hook to mitigate unnecessary network requests.
   - Debouncing ensures that API calls are made only after a specified delay, improving performance and user experience.

2. **Filter Options:**
   - Users can utilize different filters, such as species, status, and gender, to narrow down the displayed characters according to specific criteria.

3. **Axios for API Requests:**
   - Axios, a powerful HTTP client, is employed to handle asynchronous API requests efficiently.
   - The use of Axios simplifies data fetching and enhances error handling.

4. **React Hooks:**
   - **useState:** Used for managing component state, ensuring dynamic updates and re-renders as needed.
   - **useEffect:** Enables the execution of side effects, such as API calls, after rendering.
   - **Custom Hook - useDebounce:** Created to encapsulate the logic for debouncing search input.

5. **Context API with Reducer:**
   - The application employs the Context API with a reducer to manage global state, facilitating efficient state updates and actions across components.

## Getting Started

To set up and run the project locally, follow these steps:

1. **Clone the Repository:**
   ```
   git clone https://github.com/your-username/rick-and-morty-explorer.git
   ```

2. **Install Dependencies:**
   ```
   cd rick-and-morty-explorer
   npm install
   ```

3. **Run the Application:**
   ```
   npm start
   ```

   Open the application in your web browser at `http://localhost:3000`.

## Usage

- Explore the application by searching for characters using the debounced search bar.
- Utilize the various filters to refine the displayed characters based on different attributes.
- Enjoy a seamless user experience powered by React hooks and efficient API requests.

## Technologies Used

- ReactJS: A JavaScript library for building user interfaces.
- Axios: A promise-based HTTP client for making API requests.
- React Hooks: useState, useEffect, useContext, useReducer.
- Context API: Facilitates global state management.

## Acknowledgments

- Character data is provided by the [Rick and Morty API](https://rickandmortyapi.com/).
- Special thanks to the ReactJS and Axios communities for their valuable contributions.

Feel free to customize, contribute, and enhance the project. If you have any questions or suggestions, please reach out.
