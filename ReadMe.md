# Social Network API

This is a social network API built with Node.js, Express, and MongoDB. It allows users to create and manage thoughts, reactions, and friendships.

![App Demo](https://your-image-hosting-service.com/path-to-your-gif.gif)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Models](#models)
- [License](#license)

## Installation

1. Clone the repository:
    ```sh
    git clone <repository-url>
    ```
2. Navigate to the project directory:
    ```sh
    cd 18-Challenge
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

## Usage

1. Start the server:
    ```sh
    npm start
    ```
2. The server will run on `http://localhost:3000`.

## API Endpoints

### Users

- **GET** `/api/users` - Get all users
- **GET** `/api/users/:id` - Get a single user by its `_id` and populated thought and friend data
- **POST** `/api/users` - Create a new user
    ```json
    // example data
    {
      "username": "lernantino",
      "email": "lernantino@gmail.com"
    }
    ```
- **PUT** `/api/users/:id` - Update a user by its `_id`
- **DELETE** `/api/users/:id` - Remove a user by its `_id`
- **POST** `/api/users/:userId/friends/:friendId` - Add a new friend to a user's friend list
- **DELETE** `/api/users/:userId/friends/:friendId` - Remove a friend from a user's friend list

### Thoughts

- **GET** `/api/thoughts` - Get all thoughts
- **GET** `/api/thoughts/:id` - Get a single thought by its `_id`
- **POST** `/api/thoughts` - Create a new thought
- **PUT** `/api/thoughts/:id` - Update a thought by its `_id`
- **DELETE** `/api/thoughts/:id` - Delete a thought by its `_id`
- **POST** `/api/thoughts/:thoughtId/reactions` - Add a reaction to a thought
- **DELETE** `/api/thoughts/:thoughtId/reactions/:reactionId` - Remove a reaction from a thought

## Models

### User

- `username`: String, required, unique
- `email`: String, required, unique
- `password`: String, required
- `friends`: Array of ObjectId references to `User`

### Thought

- `title`: String, required
- `content`: String, required
- `createdAt`: Date, default to current timestamp
- `username`: String, required
- `reactions`: Array of nested documents created with the `reactionSchema`

### Reaction (Subdocument Schema)

- `reactionId`: ObjectId, default to a new ObjectId
- `reactionBody`: String, required, 280 character maximum
- `username`: String, required
- `createdAt`: Date, default to current timestamp

## License

This project is licensed under the MIT License.