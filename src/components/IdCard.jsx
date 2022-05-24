
function IdCard(props) {
    const { lastName, firstName, gender, height, birth, picture } = props; 
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const fecha = days[birth.getDay()].slice(0,3) +" "+ months[birth.getMonth()].slice(0,3) +" "+ birth.getDate() +" "+ birth.getFullYear()
  return (
    <div>
        <img  src={picture} alt="imagen" />
        <p> <strong>First name:</strong> {firstName}</p>
        <p> <strong>Last name:</strong> {lastName}</p>
        <p> <strong>Gender:</strong> {gender}</p>
        <p> <strong>Height:</strong> {height}</p>
        <p> <strong>Birth:</strong> { fecha }</p>
    </div>
  )
}

export default IdCard