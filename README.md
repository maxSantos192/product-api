# Product API

This is a NestJS API for managing products and categories. It uses PostgreSQL as the database and Prisma as the ORM.

## Technologies Used

- **NestJS**: A progressive Node.js framework for building efficient and scalable server-side applications.
- **PostgreSQL**: A powerful, open-source object-relational database system.
- **Prisma**: Next-generation ORM for Node.js and TypeScript.
- **Docker**: For containerizing the PostgreSQL database.
- **Swagger**: For API documentation.

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- Docker

### Installation

1. Clone the repository

2. Navigate to the API directory:
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the PostgreSQL database using Docker:
   ```bash
   docker-compose up -d
   ```
5. Generate Prisma client:
   ```bash
   npm run prisma:generate
   ```
6. Run database migrations:
   ```bash
   npm run prisma:migrate
   ```
7. (optional) Seed the database:
   ```bash
   npm run prisma:seed
   ```
8. Start the application:
   ```bash
   npm run start:dev
   ```

The API will be available at http://localhost:3000.
API documentation (Swagger) will be available at http://localhost:3000/api.

## API Endpoints

### Categories

- `GET /category`: Get all categories

### Products

- `GET /product`: Get all products (with optional name filter)
- `GET /product/:id`: Get a product by ID
- `POST /product`: Create a new product
- `PATCH /product/:id`: Update a product
- `DELETE /product/:id`: Delete a product
