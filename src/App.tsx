import React, { useCallback, useEffect, useState } from 'react';
 
import './App.module.css';
import { PostService } from './services/PostService';
import { IHits } from './common/IHits';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ReactPaginate from 'react-paginate';
import PostTable from './components/Posts/PostTable';
import { Button, CircularProgress, Pagination, Stack } from '@mui/material';
import Navbar from './components/Navbar';
import { set } from 'react-hook-form';




interface IHitsResult{
  hits:IHits[],
  hitsPerPage:number,
  nbHits:number,
  nbPages:number,
  page:number
}
function App() {

   
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

 
  

  const [hits, setHits] = useState<IHits[]>([]); 
    const [isLoaded, setisLoaded] = useState(false);
    const [currentPage, setcurrentPage] = useState(0); 
 
    const [totalPage,setTotalPage] = useState(0);



  const postService:PostService = new PostService();
 
  const [hitsArr, setHitsArr] = useState<IHitsResult[]>([]);


   
  const handleFetch = useCallback(async ()=>{
     
    
    let arr = [...hitsArr];

    const result = await postService.fetchPosts(currentPage);
    setisLoaded(true)
   
      setHits((objects) => [objects, ...result.hits])


      arr[currentPage] = result
      setHitsArr(arr)
      setTotalPage(result.nbPages);

      
      
      console.log(hitsArr)
   
      
     
    
     
    

    
  
  
  },[currentPage]);

 
  


//   const handleScroll = useCallback( () => {
//     let userScrollHeight = window.innerHeight + window.scrollY;
// let windowBottomHeight = document.documentElement.offsetHeight;
// if (userScrollHeight >= windowBottomHeight) {
//   setcurrentPage(currentPage+1)
// }
// },[currentPage]);
  

  useEffect(() => {
   handleFetch()
  
   
    
  },[handleFetch]);


  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setcurrentPage(value-1);
    
    
  };
 

  // const handleNextPageCall = () => {
  //   const nextEndIndex = (currentPage + 1) * itemsPerPage;
  //   setcurrentPage(currentPage + 1);


  //   if (hits.length < nextEndIndex) {
  //     handleFetch();
  //   }
  // };
  // const handlePrevPageCall = () => {
  //   if (currentPage > 1) {
  //     setcurrentPage(currentPage - 1);
  //   }
  // };



 

  
  // const getPaginatedData = () => {
  //   const startIndex = currentPage * itemsPerPage - itemsPerPage;
  //   const endIndex = startIndex + itemsPerPage;

  
  //   console.log(endIndex);
  //   console.log(currentPage)

  //   return hits.slice(startIndex, endIndex);
  // };
 
// const handlePageChange = (selectedObject:any) => {
//   setcurrentPage(selectedObject.selected);
//   setQuery(selectedObject.selected as number)
//   handleFetch();
  
// };
 



  return (
    <div className="App">
   
     {/* {
       hits.length ? (
         <PostTable postData={getPaginatedData()}/>
       ): null
     }
     <div className="btn-container">
                <Button onClick={handlePrevPageCall}>Previous Page</Button>
                <div className={"current-page"}>Page {currentPage}</div>
                <Button onClick={handleNextPageCall}>Next Page</Button>
              </div> */}

   { hitsArr[currentPage] !== undefined ? (
     hitsArr.length ?(
     <div style={{ display:'flex', alignItems: 'center', flexDirection:'column'}}>
     <TableContainer component={Paper}>
     <Table sx={{ minWidth: 700 }} aria-label="customized table">
       <TableHead>
         <TableRow>
           <TableCellStyle>Title</TableCellStyle>
           <TableCellStyle align="right">URL</TableCellStyle>
           <TableCellStyle align="right">Created At</TableCellStyle>
           <TableCellStyle align="right">Author</TableCellStyle>
            
         </TableRow>
       </TableHead>
       <PostTable postData={hitsArr[currentPage].hits}/>
      
       
       
       
     
       
        

      

       </Table>

       </TableContainer>

       <Pagination variant="outlined" color="secondary" sx={{marginTop:'10px'}} count={totalPage} page={currentPage+1} onChange={handleChange} />
       </div>
     ):null

   ):(<Stack alignItems="center" spacing={5} height="500px">   <CircularProgress /> </Stack>)
  }
   
    



    
    </div>
  );
}

export default App;
