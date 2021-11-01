# Groupomania API

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

    npm install

### Initialize .env file

All required environments variables are in .dovenv file.
You can copy this file to .env and edit as you wish

- APP_PORT : The port which will be used to start application
- DATABASE_URL : The database URL for Prisma, you can use
- JWT_SECRET : A secret code used to generate JWT
- SALT_ROUNDS : Number of rounds required for bcrypt

## Development

### Migrate database

The database migration has two steps

1.  `prisma migrate dev`
2.  `prisma db seed`

### Start server

You can start the development server by running `npm run dev`
It will compil to dist folder then watch every change you make to the code and start the server

### API Specifications

#### Filter

When you want to filter on a model, you have to use queryParams.
To simplify queryParams translation, your frontend can use URLSearchParams to encode your json.
The json should be like

    {
        "filter": <theFilter>
    }

`<theFilter>` shall be readable by Prisma SelectSubset.

## Production

### Migrate database

The database migration has two steps

1.  `prisma migrate deploy`
2.  `prisma db seed`

### Start server

You can start the development server by running `npm run start`
It will compil to dist folder and start the server

## Create first user

The first user will automatically be created as admin. All subsequent users will be standard users.
The first user can be created with given frontend or directly with API call and doesn't require any permission.

Due to this behaviour, be aware that none else than you create the first user or he won't be administrator.
