import "@babel/polyfill";
import express from 'express';
import renderer from './helpers/renderer';
import { matchRoutes } from 'react-router-config';
import Routes from './Routes';

const app = express();
app.use(express.static('dist'));

app.get("*", (req,res) => {
    // const store = createStore();
    matchRoutes(Routes, req.path);
    res.send(renderer(req));
})

app.listen(3000, () => {
    console.log('LISTENING TO PORT 3000 SUCCESSFULLY!!');
});