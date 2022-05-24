
function BoxColor(props) {
    const { r,g,b } = props;

    const divStyle = {
        padding: "15px",
        margin: "10px",
        border: "solid 1px black",
        backgroundColor: 'rgb(' + r +','+ g +','+ b + ')',
      };
    
      
      return (
        <div style={divStyle}>rgb({r},{g},{b})</div>
      );
      
}
export default BoxColor