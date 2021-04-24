import PropTypes from "prop-types";
import Pet from "./Pet"


// const Home = ({text}) => {
//   return <div>{text}</div>
// }

const Home = ({pets}) => {
  return pets.map((pet) => <Pet pet={pet} key={pet.id} />);
}
// Home.defaultProps = {
//   text: "Home page"
// }

Home.propTypes = {
  text: PropTypes.string
}

export default Home
