# React Custom Hook – useFetch
This project demonstrates how to create and use a reusable custom React hook (`useFetch`) for handling API requests in a clean and organized way. The hook abstracts common fetch logic and provides loading, error, and data states, while the UI uses Bootstrap 5 components for a polished look.

## Features
- Reusable `useFetch` hook for API requests
- Automatic handling of loading, success, and error states
- Built-in delay simulation to test loading spinners
- Bootstrap 5 integration (spinner, alerts, list styles)
- Clean and maintainable project structure

## Tech Stack
- React (Functional Components + Hooks)
- Bootstrap 5
- Custom Hooks (useFetch)

## Installation
1. Clone the repository: git clone https://github.com/phantekzy/react-custom-hook.git
2. Navigate into the project folder: cd react-custom-hook
3. Install dependencies: npm install
4. Start the development server: npm run dev

## Usage
Import and use the `useFetch` hook by passing a URL and optional fetch options. It returns an object with `{ loading, data, errors }`:
const { loading, data, errors } = useFetch("https://jsonplaceholder.typicode.com/posts?_limit=10");


