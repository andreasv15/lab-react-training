
function Random(props) {
    const { min, max } = props;

    const randomNumber = Math.floor(Math.random() * max) + min; // entre min y max

  return (
    <div>
        <p>Random value between {min} and {max} =&gt; {randomNumber}</p> {/*&gt; es el simbolo >*/}
    </div>
  )
}

export default Random