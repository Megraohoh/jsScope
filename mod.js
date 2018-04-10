{
    const ModSquad = {
        members: ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"],
        series: {
            start: "1968",
            end: "1973"
        }
    }

    
    ModSquad.members.forEach(member => {
        let HTMLRepresentation = `<h1>The Mod Squad</h1>`
        HTMLRepresentation += `<div>${member}</div>`
        document.querySelector(".show-info").innerHTML = HTMLRepresentation
    })
}