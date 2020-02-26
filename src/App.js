import React, {Component} from 'react';
import Customer from './components/Customer'
import './App.css';

const customers = [{
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
}];
class App extends Component{
  render(){
    return(
      <div>
        {customers.map(c=>{
          return <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />
        })}
      </div>
    );
  }
}

export default App;