
/*eslint no-unused-vars: "error"*/


// import React, {Component} from 'react';
import Student from './components/Student'
import './App.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { withStyles} from '@mui/styles';

const styles = {
  root: {
    width: '100%',
    // marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  table: {
    minWidhth: 1080
  }
};



class App extends Student {

  state = {
    Students: ""
  }
  
  componentDidMount(){
    this.timer = setInterval(this.progress, 20);
    this.callApi()
    .then(res => this.setState({students: res}))
    .catch(err => console.log(err));
  
  }

  callApi = async () =>{
    const response = await fetch('/api/hello');
    const body = await response.json();
    return body;
  }

  render() {
    const {classes} = this.props? this.props:null;

    return( 
      <Paper className={classes.root}>
        <Table className={classes.table} >
        <TableHead>
          <TableRow>
            <TableCell>Number</TableCell>
            <TableCell>FirstName</TableCell>
            <TableCell>LastName</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Major</TableCell>

          </TableRow>

        </TableHead>
            
          
          <TableBody>
        {this.state.students ? this.state.students.map(en=>{ return (<Student
              key={en.id}
              id={en.id}
              image={en.image}
              firstName={en.firstName}
              lastName={en.lastName}
              email={en.email}
              major={en.major}/>);
            }) : ""}
              
              </TableBody>
              </Table>

              </Paper>
                );
              }
            }



export default withStyles(styles)(App);