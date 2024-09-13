# CompareNews

CompareNews is a web application that fetches and compares news articles from The Guardian and The New York Times based on a search query. It allows users to search for specific topics and displays results from both news sources for comparison.

## Technologies Used
- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **APIs**: The Guardian API, The New York Times API
- **Other**: Axios, Nodemon, dotenv

## Project Structure

CompareNews/
│
├── backend/                    # Node.js backend
│   ├── src/
│   │   ├── routes/             # Express routes
│   │   ├── services/           # Services handling API requests
│   │   ├── utils/              # Utility files
│   │   └── server.js           # Server setup
│   ├── .env                    # Environment variables
│   ├── package.json            # Backend dependencies
│   └── README.md               # Backend documentation
│
├── frontend/                   # React frontend
│   ├── src/
│   │   ├── components/         # React components
│   │   ├── services/           # Service files for API communication
│   │   └── App.js              # Main React component
│   ├── .env                    # Frontend environment variables
│   ├── package.json            # Frontend dependencies
│   └── README.md               # Frontend documentation
└── README.md                   # Main project documentation


## Installation

### Prerequisites
Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Backend Setup
1. Navigate to the `backend` directory:
    ```bash
    cd backend
    ```
2. Install the backend dependencies:
    ```bash
    npm install
    ```
3. Create a `.env` file in the `backend` directory with the following contents:
    ```bash
    GUARDIAN_API_URL=https://content.guardianapis.com/search
    GUARDIAN_API_KEY=your-guardian-api-key
    TIMES_API_URL=https://api.nytimes.com/svc/search/v2/articlesearch.json
    TIMES_API_KEY=your-nyt-api-key
    ```

### Frontend Setup
1. Navigate to the `frontend` directory:
    ```bash
    cd frontend
    ```
2. Install the frontend dependencies:
    ```bash
    npm install
    ```

## Running the Application

### Backend
To run the backend server:
1. Navigate to the `backend` directory:
    ```bash
    cd backend
    ```
2. Start the development server:
    ```bash
    npm run dev
    ```
The backend server will be running at `http://localhost:3000`.

### Frontend
To run the frontend React app:
1. Navigate to the `frontend` directory:
    ```bash
    cd frontend
    ```
2. Start the development server:
    ```bash
    npm start
    ```
The frontend will be running at `http://localhost:3001`.

## Environment Variables

### Backend
The backend requires API keys for both The Guardian and The New York Times APIs. You can add these to the `.env` file in the `backend` folder:
```bash
GUARDIAN_API_URL=https://content.guardianapis.com/search
GUARDIAN_API_KEY=your-guardian-api-key
TIMES_API_URL=https://api.nytimes.com/svc/search/v2/articlesearch.json
TIMES_API_KEY=your-nyt-api-key
```

### Frontend
The frontend will communicate with the backend at `http://localhost:3000` by default.

## API Routes

### Search Route
- **Endpoint**: `/search`
- **Method**: `GET`
- **Description**: This route accepts a query parameter and searches for news articles related to the query in both The Guardian and The New York Times.
- **Parameters**:
    - `query`: The search term entered by the user.
- **Example**:
    ```
    GET /search?query=debate
    ```

## Frontend

The frontend has a search bar where the user can input a query. Upon submitting, the results from both The Guardian and The New York Times are displayed side by side for comparison.

### Components:
1. **SearchForm.js**: The input field where the user enters their search query.
2. **AdComparison.js**: Displays the results from both APIs.
