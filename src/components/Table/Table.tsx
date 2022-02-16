import { styled } from "@material-ui/core";
import { Grid, TableCell, tableCellClasses, TableRow, Typography } from "@mui/material";
import { useNavigate } from "react-router";

const Table:React.FC<any> = ({tableObject})=>{

    const TableCellStyle = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
      }));
    const TableRowStyle = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
         
        '&:last-child td, &:last-child th': {
          border: 0,
        },
      }));
      const navigate = useNavigate()

      const handleClick = ()=>{
        navigate('/rawJson', { state : {data:tableObject}});
      }
    

    return(
       
            <TableRowStyle key={tableObject.objectID} onClick={handleClick}>
          <TableCellStyle component="th" scope="row">
            {tableObject.title}
          </TableCellStyle>
          <TableCellStyle  >{tableObject.url}</TableCellStyle>
          <TableCellStyle  >{tableObject.created_at}</TableCellStyle>
          <TableCellStyle  >{tableObject.author}</TableCellStyle>
          
        </TableRowStyle>

   

    );

    

}

export default Table;