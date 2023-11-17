import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Container, Grid, Card, CardContent, Typography, InputBase, Avatar, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { makeStyles } from '@mui/styles';
import { useMaterialUIController } from 'context';
import { setLayout } from 'context';

import Footer from 'examples/Footer';
import Button from '@mui/material/Button';
import StoreCard from './storecard';
import StoreViewPage from './storeview';
import { setConditionalSearch } from 'context';
import { ArrowBackIos } from '@mui/icons-material';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position:'relative',
    background: '#fff', // Set your desired background color
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Add a subtle shadow
    borderRadius: '12px', // Rounded corners
  top:'12px',  
  marginBottom:'12px',  

  },
  container: {
    display: 'flex',

    width:'100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing(2),
    width: '100%',
  },
  search: {
    display: 'flex',
    top:'12px',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',

    alignItems: 'center',
    width: '100%', // Adjust the width as needed
    position: 'relative',
    borderRadius: '12px',
    backgroundColor: '#f0f0f0',
    '&:hover': {
      backgroundColor: '#e0e0e0',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'relative',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'end',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 2),
    transition: theme.transitions.create('width'),
    width: '100%',
  },
  banner: {
    height: '250px',
    background: '#e0e0e0',
    borderRadius: '12px',
    marginBottom: 'theme.spacing(2)',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1), 0 6px 12px rgba(0, 0, 0, 0.1), 0 6px 12px rgba(0, 0, 0, 0.1), 0 6px 12px rgba(0, 0, 0, 0.1)',
  },
  bannerImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '12px',

  },
  card: {
    marginBottom: theme.spacing(2),
  },
  term: {
    fontWeight: 'bold',
  },
  storeIcon: {
    padding:6,
    width: theme.spacing(6),
    height: theme.spacing(6),
    backgroundColor: theme.palette.primary.blue, // Adjust the background color as needed
    marginRight: theme.spacing(2),
    borderRadius:12
  },
  smallstoreIcon: {
    padding:1.5,
    width: theme.spacing(3),
    height: theme.spacing(3),
    backgroundColor: theme.palette.primary.main, // Adjust the background color as needed
    marginRight: theme.spacing(2),
    borderRadius:6
  },
  animatedContainer: {

    animation: '$slideUp 0.5s ease-in-out', // 0.5 seconds duration, ease-in-out timing function
  },
  '@keyframes slideUp': {
    from: {
      transform: 'translateY(100%)', // Start offscreen (100% down)
      opacity: 0,
    },
    to: {
      transform: 'translateY(0&)', // End at its normal position (0%)
      opacity: 1,
    },
  },
}));

const ClientView = () => {
  const classes = useStyles();
  const [controller, dispatch] = useMaterialUIController();
  console.log('contorler',controller.ConditionalSearch)
  const [searchInput, setSearchInput] = useState();
  //store view conditional rendering 

  // conditional Search is used for store active page viewing chnage karli badd me var name from context
  const isStorePageViewActive=controller.ConditionalSearch

  //handle search
  const handleSearch = (event) => {
    setSearchInput(event);
    if (searchInput.length>0){
      setConditionalSearch(dispatch, false);

    }

  };
  const handleBack=()=>{
    setConditionalSearch(dispatch, false);


  }
  useEffect(() => {
    setLayout(dispatch, 'vr');

  }, []);

  return (
    <>
       <AppBar position="relative" className={classes.appBar}>
       <Container classes={classes.container} className='bg-white rounded-xl' >
        <div>
        
        </div>
          <Typography variant="h5">
            {isStorePageViewActive &&(
          <Button
      color="primary"
      startIcon={<ArrowBackIos />}
      onClick={() => {
        handleBack();
      }}
    >
      
    </Button>)}
            IMO Diyari Stores</Typography>
          <div className={classes.search} >
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          onChange={(event) => handleSearch(event.target.value)}
        />

          </div>
        </Container>
      </AppBar>
      {!isStorePageViewActive?(
        <>
      {!searchInput ? (
          <>
      <Typography variant='h4'sx={{textAlign:'center',mt:6}} className='flex flex-col items-center justify-center' >
      促销横幅
          <hr className='bg-white h-1 w-24 text-center'/>
        </Typography>
      <Grid container spacing={2} sx={{ padding: 4, justifyContent: 'center', alignItems: 'center' }}>
        <Grid item md={6}>
          <div className={classes.banner}>
            <img src="https://picsum.photos/200" alt="Banner 1" className={classes.bannerImage} />
          </div>
        </Grid>
        <Grid item md={6}>
          <div className={classes.banner}>
            <img src="https://picsum.photos/202" alt="Banner 2" className={classes.bannerImage} />
          </div>
        </Grid>
      </Grid>
     
      <Typography variant='h4'sx={{textAlign:'center',mb:2}} className='flex flex-col items-center justify-center' >
      所有商店 
          <hr className='bg-white h-1 w-24 text-center'/>
        </Typography>
        
        <Container>
      <Grid container spacing={3}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((card) => (
          <Grid item xs={12} sm={6} md={4} key={card}>
            <StoreCard storename={card} measr={card} len={card} height={card} area={card} empolyees={card}></StoreCard>            
          </Grid>
        ))}
      </Grid>
      
    </Container>
    </>
      ):(
<Container className={classes.animatedContainer} sx={{mt:12}}>       
 <Grid container spacing={3}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((card) => (
            <Grid item xs={12} sm={6} md={4} key={card}>
              <StoreCard storename={card} measr={card} len={card} height={card} area={card} empolyees={card}></StoreCard>            
            </Grid>
          ))}
        </Grid>
      </Container>
      )}
      </>
      ):(
        <>
        <StoreViewPage/>
        </>
      )}
 {<footer className='bg-blue-500 rounded-t-xl p-4 bottom-0 fixed w-full'>
    <Typography variant='body2' className='text-center'>
    Copyright &#169; <strong> IMO Diyari Daar Stores 2023</strong> 
    </Typography>
  </footer>} 
    </>
  );
};
export default ClientView;
