import React from 'react';
import Slider from 'react-slick';
import { Typography } from '@material-ui/core';
import AspectRatioIcon from '@mui/icons-material/Crop'; // Change to Crop icon for Aspect Ratio
import LengthIcon from '@mui/icons-material/ArrowForward';
import HeightIcon from '@mui/icons-material/Height';
import AreaIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import EmployeesIcon from '@mui/icons-material/Group';


import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Avatar, Box, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

const images = Array.from({ length: 5 }, (_, index) => `https://picsum.photos/800/400?random=${index}`);
const storeDetails = {
  title: 'Hongqiao Market',
  measr: 10,
  len: 5,
  height: 3,
  area: 50,
  empolyees: 8,
};
const useStyles = makeStyles((theme) => ({
    storeIcon: {
        padding: '0.75rem', // Adjust the padding as needed
        minWidth: 'auto',
        maxWidth: 'auto',
        minHeight: theme.spacing(6),
        backgroundColor: '#ffffff', // Updated background color to white
        marginRight: theme.spacing(2),
        borderRadius: 12,
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Add box shadow for a modern look
        display: 'flex',

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }
      
    
  }));
const StoreViewPage = () => {

    const classes = useStyles();
 
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false, // Set arrows to false to hide them
    };
    

  return (
    <div className="flex flex-col md:flex-row mt-12 md:p-6 ">
    {/* {<div className="w-64 h-64 p-2">
    <img src={images[0]} alt={`Store Thumbnail`} className="w-full h-full object-cover rounded" />
    </div>} */}
      <div className="md:w-1/3  w-full ">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="h-96  rounded-xl shadow-xl">
              <img src={image} alt={`Store ${index + 1}`} className="w-full h-full object-cover rounded-3xl " />
            </div>
          ))}
        </Slider>
      </div>
      <div className="md:w-1.5/3 ml-8  p-2 " >
        <Typography variant="h4">{storeDetails.title}</Typography>
        <Typography variant="h6">Store Details</Typography>

        <div className="flex flex-col w-auto md:grid md:grid-cols-2 gap-4 p-4">

          <Box className={classes.storeIcon}>
                        Length <LengthIcon fontSize="medium" /> :<strong>{storeDetails.len}</strong>
            </Box>
             
             <Box className={classes.storeIcon}>

            <HeightIcon fontSize="medium" /> Height: <strong>{storeDetails.height}</strong>
            </Box>
            <Box className={classes.storeIcon}>

            <AreaIcon fontSize="medium" /> Area: <strong>{storeDetails.area}</strong>
            </Box>
            <Box className={classes.storeIcon}>
            <EmployeesIcon fontSize="medium" /> Employees:<strong>{storeDetails.empolyees    }</strong>
            </Box>
            <Box className={classes.storeIcon}>

            <AspectRatioIcon fontSize="medium" /> Measurement :<strong>{storeDetails.measr}</strong>
            </Box>
        </div>
        
      </div>
      <div className="md:w-0.5/3 p-4 md:ml-4 bg-white shadow-xl rounded-xl flex flex-col justify-center items-center">
  <Typography variant="h6">Store Address</Typography>

  <div className="flex flex-col w-auto grid grid-cols-1 gap-4 p-4">
  <Typography variant="subtitle1">Dongcheng, China, 100062</Typography>

    {/* Embed Google Maps */}
    <div>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28228401.268866282!2d82.66315675382047!3d30.269861529531806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35f04d435e6f3663%3A0x5308e30db2b91de2!2sHongqiao%20Market!5e0!3m2!1sen!2s!4v1700234588263!5m2!1sen!2s" width="200" height="200"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    {/* "View Address" button */}
    <Button
  variant="contained"
  color="primary"
  style={{ backgroundColor: '#2563eb', color: '#ffffff', borderRadius: '9999px' }}
  onClick={() => {
    // Handle the click event, e.g., open a modal with the address details
    alert(`Viewing address: ${storeDetails.address}`);
  }}
>
  View Address
</Button>

  </div>
</div>

      
    </div>
  );
};

export default StoreViewPage;
