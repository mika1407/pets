import PropTypes from "prop-types";
import Pet from "./Pet"


// const Home = ({text}) => {
//   return <div>{text}</div>
// }

const Home = ({pets, onRemove, onFavorite}) => {
  return pets.map((pet) => <Pet pet={pet} key={pet.id} onRemove={onRemove} onFavorite={onFavorite}/>);
}
// Home.defaultProps = {
//   text: "Home page"
// }

Home.propTypes = {
  text: PropTypes.string
}

export default Home
