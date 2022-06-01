import Sidebars from "../components/Sidebars";
import Products from "../components/Products";
import classes from "../styles/Home.module.css";


const HomePage = () => {
  return (
    <main className={classes.container}>
      <Sidebars />
      <Products />
    </main>
  );
};

export default HomePage;
