import React, {Component} from 'react';
import Customer from './components/Customer'
import './App.css';
import { Paper, Table, TableHead, TableBody, TableRow, TableCell, withStyles } from '@material-ui/core';

const styles = theme => ({
  root: {
  width: "100%",
  marginTop: theme.spacing.unit * 3,
  overflowX: "auto"
  },
  table: {
  minWidth: 600
  }
  });

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
    const { classes } = this.props;
    return(
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map(c=>{
              return <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);