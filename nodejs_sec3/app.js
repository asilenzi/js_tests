const http = require('http');

const express = require('express');

const pages = require('./pages')

const app = express();


app.use('/create_user', pages.create_user);
app.use('/users', pages.users);
app.use('/', pages.index);

app.use((req, res, next) => {
        routes.handler(req, res);
        // next();
    }
);

app.listen(3000);
