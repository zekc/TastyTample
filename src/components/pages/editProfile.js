import React, { useState} from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Icon from '@material-ui/core/Icon'
import Avatar from '@material-ui/core/Avatar'
import FileUpload from '@material-ui/icons/AddPhotoAlternate'
import { makeStyles } from '@material-ui/core/styles'


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
  const {values} = useState({
    name: '',
    about: '',
    photo: '',
    email: '',
    password: '',
    redirectToProfile: false,
    error: '',
    id: ''
  });


    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h6" className={classes.title}>
            Edit Profile
          </Typography>
          <Avatar src='' className={classes.bigAvatar}/><br/>
          <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
          <label htmlFor="icon-button-file">
            <Button variant="contained" color="default" component="span">
              Upload
              <FileUpload/>
            </Button>
          </label> <span className={classes.filename}>{values.photo ? values.photo.name : ''}</span><br/>
          <TextField id="name"  label="name" className={classes.textField}   margin="normal"/><br/>
          <TextField
            id="multiline-flexible"
            label="About"
            multiline
            rows="2"
            value={values.about}
            
            className={classes.textField}
            margin="normal"
          /><br/>
          <TextField id="email" type="email" label="Email" className={classes.textField} value={values.email}  margin="normal"/><br/>
          <TextField id="password" type="password" label="Password" className={classes.textField} value={values.password}  margin="normal"/>
          <br/> {
            values.error && (<Typography component="p" color="error">
              <Icon color="error" className={classes.error}>error</Icon>
              {values.error}
            </Typography>)
          }
        </CardContent>
        <CardActions>
          <Button color="primary" variant="contained"className={classes.submit}>Submit</Button>
        </CardActions>
      </Card>
    )
}