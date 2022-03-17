
import React from 'react';
import TableRow from '@mui/material-ui/core/TableRow';
import TableCell from '@mui/material-ui/core/TableCell';

class Student extends React.Component {
    render() {
    return(
        <>
        <TableRow>
            <TableCell>{this.props.id}</TableCell>
            <TableCell><image src={this.props.image} alt="profile"/></TableCell>
            <TableCell>{this.props.firstName}</TableCell>
            <TableCell>{this.props.lastName}</TableCell>
            <TableCell>{this.props.email}</TableCell>
            <TableCell>{this.props.major}</TableCell>

        </TableRow>
        </>
        )
    }
}




export default Student;


//class Student extends React.Component {
  //  render() {
  //      return(
//         <div>
//             <StudentProfile 
//             id={this.props.id} 
//             image={this.props.image} 
//             firstName={this.props.firstName} 
//             lastName={this.props.lastName}
            
            
//             />
//             <StudentInfo
//             firstName={this.props.firstName} 
//             lastName={this.props.lastName}
//             email={this.props.email}
//             major={this.props.major}
//             />
//         </div>
//     )
//     }
// }

// class StudentProfile extends React.Component{
//     render(){
//         return(
//             <div>
//             <img src={this.props.image} alt="profile"/>
//             <h2 sytle={{padding:"10px"}}>{this.props.firstName}{this.props.lastName}({this.props.id})</h2>
//             {/* <h2>{this.props.lastName}({this.props.id})</h2> */}
        
//             </div>
//         )
//     }
// }

//     class StudentInfo extends React.Component {
//         render() {
//             return(
//                 <div>
//                     {/* <h2>firstName={this.props.firstName}</h2> 
//                     <h2>lastName={this.props.lastName}</h2>  */}
//                     {/* <h2>{this.props.firstName} </h2>
//                     <h2>{this.props.lastName} </h2> */}
//                     <p>{this.props.email}</p>
//                     <p>{this.props.major}</p>
//                 </div>
//             )
//         }
//     }
// export default Student;