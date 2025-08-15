# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with nodemon (auto-restart on changes)
- `npm install` - Install dependencies

## Environment Setup

Copy `.env.example` to `.env` and configure:
- `PORT` - Server port (default: 4001)
- `DB_URI` - MongoDB connection string (required)

## Architecture Overview

This is a TypeScript Express API for Dragon Ball character data with MongoDB backend.

### Key Architectural Patterns

**Dynamic Route Loading**: The `src/routes/index.ts` uses dynamic imports to automatically register routes from files in the routes directory. Each route file exports a `router` and gets mounted at `/api/{filename}`.

**Layered Architecture**:
- **Routes** (`src/routes/`) - Route definitions and HTTP method handlers
- **Controllers** (`src/controllers/`) - Request/response handling and validation
- **Services** (`src/services/`) - Business logic and data operations
- **Models** (`src/models/`) - Mongoose schemas with pagination plugin
- **Interfaces** (`src/interface/`) - TypeScript type definitions

**Pagination System**: Uses `mongoose-paginate-v2` with custom labels for consistent API responses. All character listings return paginated results with metadata.

**Static Asset Serving**: Character images in `src/assets/images/` are served via Express static middleware at `/api/characters/images/`.

**Error Handling**: Centralized error handling through `src/utils/error.handler.ts` - returns 500 status with error message array.

### Database Schema

Characters are stored in the `dragonball_dataset` collection with fields:
- `id` (String) - Custom character identifier
- `name`, `power_level`, `saga`, `series`, `species` (String)
- `image_url` (String) - URL reference to character image

### Important Notes

- MongoDB queries exclude `_id` field using `"-_id"` selection
- TypeScript strict mode enabled with ES2016 target
- No test framework or linting tools configured
- Environment variables loaded via dotenv in app entry point