
const Header = { 
    padding: "10px 20px", 
    textAlign: "center", 
    color: "green", 
    backgroundColor:"yellow"};

const spacing = "10px 20px";
const bg = "green";
const Footer = {
      margin: spacing,
      padding: spacing,
      backgroundColor: bg,
      color:"blue"
    }

export default function ObjectVariable(){
    return(
        <div>
          <h2 style={Header}>Object Variable</h2>
          
          <h2 style={Footer}>Footer</h2>
        </div>
    );
}