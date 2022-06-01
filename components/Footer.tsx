import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      Copyright <span className={classes.brand}>Bejamas</span>{" "}
      {new Date().getFullYear()}
    </footer>
  );
};

export default Footer;
