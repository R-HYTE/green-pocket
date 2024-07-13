# Description

This project is built using MongoDB as its database, ExpessJS and NodeJS in the backend, and REACT library in the frontend.

I opted to use `dotenv` package because the project has some environment variables that are safer if not exposed in a public repository.

MongoDB atlas was my cloud data service of choice but you could install and use mongodb locally on your machine. You'll have to pass the connection uri in the `MONGO_URI` variable in the `.env`

The `.env` file in the backend folder will have variables like:
```
PORT={insert a port number here}
MONGO_URI={insert the connection uri to your database}
...
```

`Mongoose` was my Object Data Modeling(ODM) library of choice for the connection between my mongoDB and the node.js environment.

# Install

Your environment should have node  and npm installed
``` bash
sudo apt install node npm
```

## Access the codebase

Navigate into the project folder
``` bash
cd green-pocket
```
