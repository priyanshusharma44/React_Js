import styles from "./Button.module.css";

//or can do inline css as well
// const style = {
//   backgroundColor: "hsl(200, 100%, 50%)",
//   color: "white",
//   padding: "10px 20px",
//   borderRadius: "5px",
//   border: "none",
//   cursor: "pointer",
// };

function Button() {
  return <button className={styles.button}>Click Me</button>;
}

export default Button;
