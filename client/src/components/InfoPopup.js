import Popover from '@mui/material/Popover';

const InfoPopup = ({DietMessage, TransportMessage, EnergyMessage}) => {

<Button aria-describedby={id} variant="contained" onClick={handleClick}>

  Click Me
  
</Button>

<Popover
  id={id}
  open={open}
  anchorEl={anchorEl}
  onClose={handleClose}
  anchorOrigin={{
    vertical: 'bottom',
    horizontal: 'left',
  }}
>

</Popover>


    
}