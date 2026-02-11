# Cookbook app
This is an app where users can create, share and sell their recipes as a cookbook. The app consists of a React frontend and an Express backend, both written in TypeScript. The frontend is built with Vite and the backend uses ts-node-dev for development.

## Getting Started
### Prerequisites
- Node.js (version 14 or higher)
- npm (version 6 or higher)

### Installation
1. Clone the repository:
```bash
git clone https://github.com/your-username/cookbook-app.git
cd cookbook-app
npm install
```

2. Install dependencies for the API:
```bash
cd apps/api
npm install
```

3. Install dependencies for the Web:
```bash
cd ../web
npm install
```

### Running the App
Both the API and the web app run concurrently. You can start them with the following command from the root directory:
```bash
npm run dev
```

## Repository Structure
- `apps/api`: Contains the Express backend code.
- `apps/web`: Contains the React frontend code.
- `.github/workflows/ci.yml`: GitHub Actions workflow for continuous integration.
- `package.json`: Root package file for managing dependencies and scripts.
- `tsconfig.json`: TypeScript configuration file.
- `README.md`: This file.

## Production
App is deployd on Render.
Web: https://cookbook-app-1.onrender.com/
API: https://cookbook-app-xrig.onrender.com

## Pipeline
The CI pipeline is set up to run on pushes to the master branch and on pull requests.
Stages include:
- Installation: Installs dependencies for both the API and the web app.
- Linting: Placeholder for linting the code.
- Testing: Placeholder for running tests.
- Building: Builds the API and web app for production.
