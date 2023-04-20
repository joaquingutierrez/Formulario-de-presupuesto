const budgetContainer = document.getElementById("budgetContainer")
const user_name_button = document.getElementById("user_name_button")

/* Defino variables */
const house_price = {
    pm1a: 45000,
    pm1b: 46500,
    pm1c: 49800,
    pm1d: 22500,
    pm1e: 15000,
    pm2a: 89900,
    pm2b: 92100,
    pm2c: 90100,
    pm3a: 128000,
    nm1a: 50000,
    nm1b: 50000,
    nm1c: 50900,
    nm1d: 51500,
    nm2a: 89300,
    nm2b: 99910,
    nm3a: 122300,
    nm3b: 141700
}
const floor_wood = {
    pm1a: 812,
    pm1b: 812,
    pm1c: 847,
    pm1d: 424,
    pm1e: 424,
    pm2a: 1623,
    pm2b: 2188,
    pm2c: 2188,
    pm3a: 2312,
    nm1a: 812,
    nm1b: 812,
    nm1c: 812,
    nm1d: 812,
    nm2a: 1518,
    nm2b: 1712,
    nm3a: 2118,
    nm3b: 2965
}
const ceiling_wood = {
    pm1a: 749,
    pm1b: 749,
    pm1c: 749,
    pm1d: 195,
    pm1e: 195,
    pm2a: 1007,
    pm2b: 1007,
    pm2c: 1007,
    pm3a: 490,
    nm1a: 749,
    nm1b: 749,
    nm1c: 749,
    nm1d: 749,
    nm2a: 749,
    nm2b: 749,
    nm3a: 749,
    nm3b: 998
}
const frontage_wood = {
    pm1a: 2157,
    pm1b: 2157,
    pm1c: 2157,
    pm1d: 1344,
    pm1e: 1344,
    pm2a: 0,
    pm2b: 0,
    pm2c: 0,
    pm3a: 0,
    nm1a: 2326,
    nm1b: 2326,
    nm1c: 2326,
    nm1d: 2326,
    nm2a: 1526,
    nm2b: 2022,
    nm3a: 2476,
    nm3b: 4513
}

const user_selected_opcions = []

/* funcion para tomar el nombre de la persona*/

const user_name = document.getElementById("user_name").value