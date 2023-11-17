import React from 'react';
import { Card, CardContent, Typography, InputBase, Avatar, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { makeStyles } from '@mui/styles';

import StorefrontIcon from '@mui/icons-material/Storefront'; // Import Storefront icon
import MeasureIcon from '@mui/icons-material/AspectRatio'; // Import Measure icon
import LengthIcon from '@mui/icons-material/ArrowForward'; // Import Length icon
import HeightIcon from '@mui/icons-material/Height'; // Import Height icon
import AreaIcon from '@mui/icons-material/CheckBoxOutlineBlank'; // Import Area icon
import EmployeesIcon from '@mui/icons-material/Group';
import Footer from 'examples/Footer';
import Button from '@mui/material/Button';
import { useMaterialUIController } from 'context';
import { setConditionalSearch } from 'context';

const useStyles = makeStyles((theme) => ({
  
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
}));

const handleStoreViewPage=(dispatch)=>{
  setConditionalSearch(dispatch, true);
}
const StoreCard = ({ storename, measr, len, height, area, empolyees }) => {
    const classes = useStyles();
    const [controller, dispatch] = useMaterialUIController();
    const isSearch=controller.ConditionalSearch


 

  return (
    <>
        <Card className={classes.card}>
              <CardContent sx={{ p: 2 }}>
                <div style={{ display: 'flex', alignItems: 'center',flexDirection:'column' }}>
                  <Box className={classes.storeIcon}>
                    <StorefrontIcon fontSize="large" color="white" />
                  </Box>
                  <Typography variant="h6" gutterBottom>
                    Store Name {storename}
                  </Typography>
                  <hr/>

                </div>
                <Typography variant="body2" color="textSecondary" sx={{ textAlign: 'right',display:'flex' }}>
                  <div className={classes.term}>
                    <MeasureIcon fontSize="small" /> M: {measr}m
                  </div>
                  <div className={classes.term}>
                    <LengthIcon fontSize="small" /> L: {len}m
                  </div>
                  <div className={classes.term}>
                    <HeightIcon fontSize="small" /> H: {height}m
                  </div>
                  <div className={classes.term}>
                    <AreaIcon fontSize="small" /> A: {area}m²
                  </div>
                  <div className={classes.term}>
                    <EmployeesIcon fontSize="small" /> Emp: {empolyees}
                  </div>
                </Typography>
              </CardContent> 
              <hr/>

              <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <Button  
                onClick={() => {
                  handleStoreViewPage(dispatch)
                }}
              >
        <LengthIcon fontSize="large" />
      </Button>
    </Box>
            </Card>
       
      
   
    </>
  );
};

export default StoreCard;
