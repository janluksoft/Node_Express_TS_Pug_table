//import express from 'express';
import express, { Express, Request, Response } from "express";

const port = 3000;
let aCounter = 0;
let aCountAb = 0;

let tnames: any =  [
    {name: 'Emma',sex: 'woman', age: 25},
    {name: 'Amelia',sex: 'woman', age: 26},
    {name: 'Isabella',sex: 'woman', age: 19},
    {name: 'Helena',sex: 'woman', age: 24},
    {name: 'Elizabeth',sex: 'woman', age: 19},
    {name: 'Aleksandra',sex: 'woman', age: 20},
    {name: 'Peter',sex: 'man', age: 25},
    {name: 'Mark',sex: 'man', age: 28},
    {name: 'Dawid',sex: 'man', age: 31},
    {name: 'Gregory',sex: 'man', age: 33},
    {name: 'Tom',sex: 'man', age: 34},
    {name: 'AdamF',sex: 'man', age: 27}
    ];

const app_express: Express = express(); //Node.Express - the most popular framework for creating web applications 
app_express.use(express.static(__dirname + '/public'));
//app_express.use('/static', express.static(path.join(__dirname, 'public')));
app_express.set('view engine', 'pug'); // Pug template engine

//===== Routing of pages =============================================
app_express.get('/', function (xrequest: Request, xresponse: Response) { 
    xresponse.render('table2', {
        zPageTitle: 'Node Main Page',
        zbIsTable: false,
        zCount: aCounter,
        ztNames: [],
    });
    aCounter++;
}); //Main page '/' localhost:3000

app_express.get("/table", function (xrequest: Request, xresponse: Response) { 
    xresponse.render('table2', {
        zPageTitle: 'Node Table page',
        zbIsTable: true,
        zCount: aCountAb,
        ztNames: tnames,
    });
    aCountAb++;
}); //'/table' localhost:3000/table


//Enabling the node.http server on port 3000 (http://localhost:3000/)

app_express.listen(port, () => {
    console.log('Server Node Express is running on port 3000!');
})

function ServerRunning() {
    console.log('Server Node Express is running..');
};
