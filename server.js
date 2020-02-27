const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers',(req, res) =>{
    res.send([
        {
            'id':1,
            'image':'https://placeimg.com/150/100/1',
            'name':"David",
            'birthday':"910215",
            'gender':"male",
            'job':"Dev"
          },{
            'id':2,
            'image':'https://placeimg.com/150/100/2',
            'name':"Jung",
            'birthday':"910210",
            'gender':"female",
            'job':"Design"
          },{
            'id':3,
            'image':'https://placeimg.com/150/100/3',
            'name':"Solomon",
            'birthday':"920215",
            'gender':"male",
            'job':"Dev"
          }
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));