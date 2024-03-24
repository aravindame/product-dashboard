# React Data Visualization with Filtering

This project demonstrates a React application utilizing various tools to visualize and filter product data.

## Features

- **Initial State:** Upon loading, a PIE chart displays all product categories. (#pie-chart)
- **TypeScript Types:** Category and Product data are defined with TypeScript interfaces for type safety. (#typescript)
- **Filtering and Charts:**
  - A "Clear" button resets filters and displays the default PIE chart. (#clear-button)
  - Reports can be run with only a category filter, showing a category-specific PIE chart. (#category-filter)
  - The column bar chart requires clicking "Run Report" to generate. (#run-report)
  - "Run Report" disables after a report is generated until filters change. (#disable-run-report)

## Technology Stack

- React with Hooks ([react](https://reactjs.org/))
- TypeScript ([typescript](https://www.typescriptlang.org/))
- DummyJSON API (data source)
- Material UI (UI components) with Atomic design
- Highcharts (chart library) ([highcharts](https://www.highcharts.com/))

## Getting Started

1. Clone this repository or open it in CodeSandbox: [CodeSandbox](https://codesandbox.io/)
2. Ensure you have Node.js and npm (or yarn) installed on your system.
3. Navigate to the project directory in your terminal and run `npm install` (or `yarn install`) to install dependencies.

## Running the Application

1. In your terminal, run `npm start` (or `yarn start`) to start the development server.
2. The application will open in your web browser, typically at [http://localhost:3000/](http://localhost:3000/).

## Development

- Feel free to modify the code to suit your specific needs. The code is well-structured and uses React best practices to ensure maintainability.

## Additional Notes

- Consider implementing error handling for API calls and unexpected data.
- Explore displaying a loading indicator while data is being fetched.
- Advanced filtering options can be added based on project requirements.
- Ensure UI elements are accessible to users with disabilities.
