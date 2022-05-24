
function Greetings(props) {
    const { lang, children } = props
    //console.log(children)
    let saludo;
    switch (lang) {
        case "de":
            saludo = "Hallo " +children;
            break;
        case "en":
            saludo = "Hi " +children;
            break;
        case "es":
            saludo = "Hola " +children;
            break;
        case "fr":
            saludo = "Bonjour " +children;
            break;  
        default:
            saludo = ""
            break;                                      
    }

  return (
    <div>
        {saludo}
    </div>
  )
}

export default Greetings