// Import the styles
import {styles} from "./styles/styles"

export default function Home(){
  return (
    <div>
      <h2 style={styles.Header}>Header</h2>
      <h2 style={styles.Content}>Content....</h2>
      <h2 style={styles.Footer}>Footer</h2>      
    </div>
  );
};