import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
});

// const Home = ({text}) => {
//   return <div>{text}</div>
// }

const Home = ({pets}) => {

  const classes = useStyles();

  return (
      pets.map((pet) => 
    <Card className={classes.root} key={pet.id}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={pet.img}
          title="Pet"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {pet.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {pet.age}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Delete
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>)
  );
}
// Home.defaultProps = {
//   text: "Home page"
// }

Home.propTypes = {
  text: PropTypes.string
}

export default Home
