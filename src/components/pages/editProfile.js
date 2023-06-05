import React, { useEffect, useState } from 'react'
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
import { getAuth } from 'firebase/auth'
import { doc, getDoc, getFirestore, updateDoc } from 'firebase/firestore'
import { getStorage, uploadBytes, ref } from 'firebase/storage'
import { MenuItem, Select } from '@material-ui/core'
import { useNavigate } from 'react-router-dom'


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
  select: {
    width: 300,
    display: 'flex',
    justifyContent: 'space-between',
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
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
  filename: {
    marginLeft: '10px'
  }
}))

export default function Input({ match }) {
  const { currentUser } = getAuth();
  const [picture, setPicture] = useState();
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: '',
    caption: '',
    photo: '',
    email: '',
    password: '',
    redirectToProfile: false,
    error: '',
    id: '',
    gender: 'Male'
  });
  const classes = useStyles();

  useEffect(() => {
    async function fetchProfile() {
      const db = getFirestore();
      const ref = doc(db, "Profile", currentUser.uid);
      const profile = (await getDoc(ref)).data();

      setProfile(profile);
    }

    fetchProfile();
  }, []);

  function handlePictureChange(e) {
    e.preventDefault();
    setPicture(e.target.files[0]);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const profile = {
      nick: e.target.elements.nick.value,
      firstName: e.target.elements.firstName.value,
      lastName: e.target.elements.lastName.value,
      caption: values.caption,
      gender: values.gender
    };


    const db = getFirestore();
    const profileRef = doc(db, "Profile", currentUser.uid);

    if (picture) {
      const storage = getStorage();
      const picRef = ref(storage, `gs://recepiesite.appspot.com/${currentUser.uid}.png`);
      const res = await uploadBytes(picRef, picture);
    }

    await updateDoc(profileRef, profile);

    return navigate('/profile');
  }


  return (currentUser && profile) && (
    <Card className={classes.card}>
      <form id='edit-form' onSubmit={handleSubmit}>
        <CardContent>
          <Typography variant="h6" className={classes.title}>
            Edit Profile
          </Typography>
          <Avatar src={(picture && URL.createObjectURL(picture)) ?? `https://firebasestorage.googleapis.com/v0/b/recepiesite.appspot.com/o/${currentUser.uid}.png?alt=media`} className={classes.bigAvatar} /><br />
          <input accept="image/png" className={classes.input} id="icon-button-file" type="file" onChange={handlePictureChange} />
          <label htmlFor="icon-button-file">
            <Button variant="contained" color="default" component="span">
              Upload
              <FileUpload />
            </Button>
          </label> <span className={classes.filename}>{values.photo ? values.photo.name : ''}</span><br />
          <TextField id="nick" label="Nick" className={classes.textField} margin="normal" /><br />
          <TextField id="firstName" label="First Name" className={classes.textField} margin="normal" /><br />
          <TextField id="lastName" label="Last Name" className={classes.textField} margin="normal" /><br />
          <br />
          <label htmlFor='gender-select'>Gender</label>
          <Select id='gender-select' value={values.gender} onChange={(e) => setValues({
            ...values,
            gender: e.target.value
          })} label='Gender' margin="normal">
            <MenuItem value={'Male'}>Male</MenuItem>
            <MenuItem value={'Female'}>Female</MenuItem>
          </Select><br />
          <TextField
            id="multiline-flexible"
            label="Caption"
            multiline
            rows="2"
            value={values.caption}
            onChange={(e) => {
              setValues({
                ...values,
                caption: e.target.value
              })
            }}
            className={classes.textField}
            margin="normal"
          /><br />
          <br /> {
            values.error && (<Typography component="p" color="error">
              <Icon color="error" className={classes.error}>error</Icon>
              {values.error}
            </Typography>)
          }
        </CardContent>
        <CardActions>
          <Button type='submit' form='edit-form' color="primary" variant="contained" className={classes.submit}>Submit</Button>
        </CardActions>
      </form>
    </Card>
  )
}