import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Avatar, Button, TextField, FormGroup, FormControlLabel, FormLabel, FormControl, RadioGroup, Checkbox, Radio, 
        Dialog, DialogTitle, DialogActions, DialogContent, DialogContentText } from '@material-ui/core';
import ArrowForward from '@material-ui/icons/ArrowForward';
import Add from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
  profile: {
    position: 'absolute',
    bottom: '0vh',
  }
}));

function Navigation(props) {
  const classes = useStyles();
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const [isChecked, setIsChecked] = useState({
    checkedA: false,
    checkedB: false,
    checkedC: false,
    checkedD: false,
  });
  const [radioValue, setRadioValue] = useState("Streamer");

  const handleClickOpen = () => {
    setIsOpenDialog(true);
  };

  const handleClose = () => {
    setIsOpenDialog(false);
  };

  const handleSubmit = () => {
    setIsOpenDialog(false);
  }

  const handleRadioChange = (event) => {
    setRadioValue(event.target.value);
  };

  const handleCheckChange = (event) => {
    setIsChecked({ ...isChecked, [event.target.name]: event.target.checked })
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      bgcolor="info.light"
      width={60}
      height="100vh"
      boxShadow={3}
    >
      <div className={classes.root}>
        <Avatar>
          <Button><ArrowForward /></Button>
        </Avatar>
        <Avatar>
          <Button>H</Button>
        </Avatar>
        <Avatar>
          <Button>Y</Button>
        </Avatar>
        <Avatar>
          <Button>H</Button>
        </Avatar>
        <Avatar>
          <Button onClick={handleClickOpen}><Add /></Button>
        </Avatar>
        <Dialog open={isOpenDialog} onClone={handleClose}>
          <DialogTitle>新しい推しを登録する</DialogTitle>
          <DialogContent>
            <DialogContentText>
              推しの名前／画像／種別／知りたい情報を登録してね！
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              type="text"
              required={true}
              fullWidth
            />
            <TextField
              id="image"
              label="Image"
              type="file"
              required={true}
              inputProps={{ accept: 'image/jpeg, image/png, image/gif, image/bmp' }}
              fullWidth
            />
            <FormControl component="fieldset" margin="dense">
              <FormLabel component="legend">種別</FormLabel>
              <RadioGroup row aria-label="type" name="type1" value={radioValue} onChange={handleRadioChange}>
                <FormControlLabel value="Streamer" control={<Radio />} label="配信者" />
                <FormControlLabel value="Book" control={<Radio />} label="書籍" />
              </RadioGroup>
            </FormControl>
            <FormGroup>
            <FormControl component="fieldset" margin="dense">
              <FormLabel component="legend">知りたい情報</FormLabel>
              <FormControlLabel
                control={<Checkbox checked={isChecked.checkedA} onChange={handleCheckChange} name="checkedA" />}
                label="次回配信タイマー"
              />
              <FormControlLabel
                control={<Checkbox checked={isChecked.checkedB} onChange={handleCheckChange} name="checkedB" />}
                label="話題の動画（Youtube）"
              />
              <FormControlLabel
                control={<Checkbox checked={isChecked.checkedC} onChange={handleCheckChange} name="checkedC" />}
                label="話題の動画（niconico）"
              />
              <FormControlLabel
                control={<Checkbox checked={isChecked.checkedD} onChange={handleCheckChange} name="checkedD" />}
                label="話題のツイート"
              />
            </FormControl>
            </FormGroup>

          </DialogContent>
          <DialogActions>
            <Button onClick={handleSubmit} color="primary" variant="contained">Submit</Button>
            <Button onClick={handleClose}>Cansel</Button>
          </DialogActions>
        </Dialog>
        <Avatar classes={{ root: classes.profile }}>
          <Button>MY PROF</Button>
        </Avatar>
      </div>
    </Box>
  )
}

export default Navigation;