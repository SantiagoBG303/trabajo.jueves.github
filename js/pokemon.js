async function Pokemon(id){
    


    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`); 
    const data = await res.json();

    var root = document.getElementById("root");
    root.innerHTML = data.forms[0].name
}

Pokemon(5)
Pokemon(6)
Pokemon(7)
Pokemon(25)