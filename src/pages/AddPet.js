import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const AddPet = () => {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="name" label="Name" />
      <TextField id="age" label="Age" type="number"/>
      <TextField id="url" label="Image URL" />
      <Button variant="contained" color="primary" type="submit">
        Save
      </Button>
    </form>
  );
}

export default AddPet
