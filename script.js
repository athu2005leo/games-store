function searchGame() {

    let game = document.getElementById("searchBox").value.toLowerCase().trim();

    document.getElementById("gta").style.display = "none";
    document.getElementById("gtaiv").style.display = "none";
    document.getElementById("gtasa").style.display = "none";
    document.getElementById("gtavc").style.display = "none";
    document.getElementById("gta3").style.display = "none";

    if (
        game === "gta v" ||
        game === "gtav" ||
        game === "grand theft auto v"
    ) {
        document.getElementById("gta").style.display = "block";
    }

    else if (
        game === "gta iv" ||
        game === "gta4" ||
        game === "grand theft auto iv"
    ) {
        document.getElementById("gtaiv").style.display = "block";
    }

    else if (
        game === "gta sa" ||
        game === "gtasa" ||
        game === "gta san andreas"
    ) {
        document.getElementById("gtasa").style.display = "block";
    }

    else if (
        game === "gta vc" ||
        game === "gtavc" ||
        game === "gta vice city"
    ) {
        document.getElementById("gtavc").style.display = "block";
    }
    else if (
        game === "grand theft auto 3" ||
        game === "gta3" ||
        game === "gta iii"
    ) {
        document.getElementById("gta3").style.display = "block";
    }

    else {
        alert("Game Not Found!");
    }
}