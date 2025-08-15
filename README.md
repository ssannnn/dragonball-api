# Dragon Ball API

A RESTful API that provides comprehensive information about Dragon Ball characters, including their power levels, sagas, series, species, and character images.

## What this project does

This API serves as a comprehensive database for Dragon Ball characters, offering:
- Paginated character listings
- Individual character details by ID
- Character images served as static assets
- Filtering and search capabilities

## Technologies Used

- **Node.js** with **TypeScript** - Runtime and type safety
- **Express.js** - Web framework for building REST API
- **MongoDB** with **Mongoose** - Database and Object Document Mapper
- **mongoose-paginate-v2** - Pagination support for efficient data retrieval
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management
- **nodemon** - Development server with auto-restart

## Project Structure

```
dragonball-api/
├── src/
│   ├── app.ts                     # Main application entry point
│   ├── assets/
│   │   └── images/                # Character images (331 webp files)
│   ├── config/
│   │   └── mongo.ts              # MongoDB connection configuration
│   ├── controllers/
│   │   └── character.ts          # Request handlers for character endpoints
│   ├── interface/
│   │   └── character.interface.ts # TypeScript interfaces
│   ├── models/
│   │   └── characters.model.ts   # Mongoose schema and model
│   ├── routes/
│   │   ├── characters.ts         # Character route definitions
│   │   └── index.ts             # Main router
│   ├── services/
│   │   └── character.ts         # Business logic for character operations
│   └── utils/
│       └── error.handler.ts     # Error handling utilities
├── package.json                  # Dependencies and scripts
├── tsconfig.json                # TypeScript configuration
└── README.md
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB database
- npm or yarn package manager

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables in a `.env` file:
   ```
   PORT=4001
   MONGODB_URI=your_mongodb_connection_string
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

The API will be available at `http://localhost:4001`

## API Endpoints

### Get All Characters (Paginated)
- **GET** `/api/characters`
- **Query Parameters:**
  - `page` (optional): Page number (default: 1)
  - Returns 10 characters per page

### Get Character by ID
- **GET** `/api/characters/:id`
- Returns specific character details

### Character Images
- **GET** `/api/characters/images/:filename`
- Serves static character images

## Character Data Structure

Each character includes:
- `id`: Unique identifier
- `name`: Character name
- `power_level`: Character's power level
- `saga`: Associated saga/arc
- `series`: Dragon Ball series (DB, DBZ, DBGT, DBS)
- `species`: Character species (Saiyan, Human, Namekian, etc.)
- `image_url`: URL to character image

## Features

- **Pagination**: Efficient data retrieval with customizable page size
- **Static Asset Serving**: Character images served directly from the API
- **TypeScript**: Full type safety and better development experience
- **Error Handling**: Comprehensive error handling with custom error responses
- **CORS Support**: Cross-origin requests enabled for frontend integration