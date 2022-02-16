import { styled } from '@mui/material/styles';
 
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ReactPaginate from 'react-paginate';
 
import React from "react";
import Table from '../Table/Table';
 

const PostTable:React.FC<any> = ({postData})=>{

   
    
    
   return(  
    
       
      <TableBody>
        {postData.map((data:any,i:number)=>
        {
        return <Table tableObject={data} key={i}/>

          
        })}
      </TableBody>
     
   
   
 
     
  
   );
}
export default PostTable;