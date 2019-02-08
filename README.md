# Watson Speech-to-Text Tooling

This project uses a simple Node/Express backend and a React frontend

## Setup
The backend requires a `.env` file at the root directory in order to connect to the Watson Speech-to-Text API. It expects to find the environment variables `API_URL` and `API_KEY`, which correlate with the service credentials for a Speech-to-Text instance. If you do not have this file present, you may get errors.

Ex: (`.env`)
```js
API_URL='<your/api/endpoint>'
API_KEY='<your_iam_api_key>'
```

## Starting the Application

### Starting the backend

```
  npm start server
```

Starts the backend server at `http://localhost:4000`

### Starting the client

```
  cd client
  npm run start
```

Starts the client at `http://localhost:3000`
