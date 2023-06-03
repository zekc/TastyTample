import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import FileUpload from '@material-ui/icons/AddPhotoAlternate'
import { makeStyles } from '@material-ui/core/styles'
import Sell from '../inputSellForIng&Cat/Sell';



const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 600,
    margin: 'auto',
    textAlign: 'center',
    marginTop: theme.spacing(5),
    paddingBottom: theme.spacing(2)
  },
  title: {
    margin: theme.spacing(2),
    color: theme.palette.protectedTitle
  },
  error: {
    verticalAlign: 'middle'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 300
  },
  submit: {
    margin: 'auto',
    marginBottom: theme.spacing(2)
  },
  bigAvatar: {
    width: 60,
    height: 60,
    margin: 'auto'
  },
  input: {
    display: 'none'
  },
  filename:{
    marginLeft:'10px'
  }
}))

export default function Input({ match }) {
  const classes = useStyles();


    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h6" className={classes.title}>
            Create Recipe
          </Typography>
          
          <input accept="image/*" className={classes.input} id="icon-button-file" type="file" /><br/>
         

          <label htmlFor="icon-button-file">
            <Button variant="contained" color="default" component="span">
              Upload photo
              <FileUpload/>
            </Button>
          </label> <span className={classes.filename}></span><br/><br/>
          
          <input accept="video/*" className={classes.input} id="icon-button-file-video" type="file" />
          <label htmlFor="icon-button-file">
            <Button variant="contained" color="default" component="span">
              Upload video
              <FileUpload/>
            </Button>
          </label> <span className={classes.filename}></span><br/>
          <TextField id="name"  label="Name" className={classes.textField}   margin="normal"/><br/>
          <TextField
            id="multiline-flexible"
            label="Directions"
            multiline
            rows="2"
           
            
            className={classes.textField}
            margin="normal"
          /><br/>
          <TextField id="time"  label="Duration" className={classes.textField}  margin="normal"/><br/>
          <span>Add Ingredients</span>
          <Sell /><br/>
          <span>Add Categories</span>
          <Sell /><br/>

          <br/> 
        </CardContent>
        <CardActions>
          <Button color="primary" variant="contained"className={classes.submit}>Submit</Button>
        </CardActions>
      </Card>
    )
}