# Groupomania

## Get Started

### Clone the repository

Start by cloning the repository

    git clone https://github.com/ErwSim/SimoninErwan_7_24102021.git

### Requirements

You will need following global packages in order to compile :

- typescript
- ts-node
- prisma
- eslint

### Install dependencies

Do `npm install` on both folders api and front

### Initialize API .env file

All required environments variables are in api/.dovenv file.
You can copy this file to api/.env and edit as you wish

- APP_PORT : The port which will be used to start application
- DATABASE_URL : The database URL for Prisma, you can use
- JWT_SECRET : A secret code used to generate JWT
- SALT_ROUNDS : Number of rounds required for bcrypt

## Development

### Migrate database

The database migration has two steps

1.  `npx prisma generate`
2.  `npx prisma migrate dev --name=init`
3.  `npx prisma db seed`

All those three commands can be run in once with `npm run dbInit`

### Start API

You can start the development server by running `npm run dev` in api folder
It will compil to dist folder then watch every change you make to the code and start the server

### Start Frontend

You can start the frontend by running `npm run start` in front folder
It will open up your browser with the frontend

## Production

### Migrate database

The database migration has two steps

1.  `prisma migrate deploy`
2.  `prisma db seed`

### Start API server

You can start the development server by running `npm run start` in api folder
It will compil to dist folder and start the server

### Build frontend for hosting

You can build the frontend for hosting it with `npm run build` in front folder

## Create administrator

To create the first user, which will be administrator, use `npm run createAdmin` in api folder
Project must be built in before
