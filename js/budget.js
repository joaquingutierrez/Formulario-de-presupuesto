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

let user_selected_opcions = {}

/* funcion para tomar el nombre de la persona*/
user_name_button.addEventListener("click", () => {
    const user_name = document.getElementById("user_name").value
    user_selected_opcions = { ...user_selected_opcions, user_name }
    renderTypeofHouse()
})

const renderTypeofHouse = () => {
    budgetContainer.innerHTML = `
        <h2>¿Qué tipo de casa desea?</h2>
        <div id="typeNorden"><p>Norden</p></div>
        <div id="typePampa"><p>Pampa</p></div>
    `
    const typeNorden = document.getElementById("typeNorden")
    const typePampa = document.getElementById("typePampa")

    typeNorden.addEventListener("click", () => {
        user_selected_opcions = { ...user_selected_opcions, typeofHouse: "Norden" }
        renderTypeofNorden()
    })
    typePampa.addEventListener("click", () => {
        user_selected_opcions = { ...user_selected_opcions, typeofHouse: "Pampa" }
        renderTypeofPampa()
    })
}
/* Norden */
const renderTypeofNorden = () => {
    budgetContainer.innerHTML = `
        <h2>¿Qué modelo de casa desea?</h2>
        <div id="nm1"><p>Modelo 1</p></div>
        <div id="nm2"><p>Modelo 2</p></div>
        <div id="nm3"><p>Modelo 3</p></div>
    `
    const nm1 = document.getElementById("nm1")
    const nm2 = document.getElementById("nm2")
    const nm3 = document.getElementById("nm3")
    nm1.addEventListener("click", () => {
        user_selected_opcions = { ...user_selected_opcions, houseModel: "nm1" }
        renderVariantOfnm1()
    })
    nm2.addEventListener("click", () => {
        user_selected_opcions = { ...user_selected_opcions, houseModel: "nm2" }
        renderVariantOfnm2()
    })
    nm3.addEventListener("click", () => {
        user_selected_opcions = { ...user_selected_opcions, houseModel: "nm3" }
        renderVariantOfnm3()
    })
}

/* Norden Modelo 1 */
const renderVariantOfnm1 = () => {
    budgetContainer.innerHTML = `
        <h2>¿Qué variante desea?</h2>
        <div id="nm1a"><p>Modelo 1A</p></div>
        <div id="nm1b"><p>Modelo 1B</p></div>
        <div id="nm1c"><p>Modelo 1C</p></div>
        <div id="nm1d"><p>Modelo 1D</p></div>
    `
    const nm1a = document.getElementById("nm1a")
    const nm1b = document.getElementById("nm1b")
    const nm1c = document.getElementById("nm1c")
    const nm1d = document.getElementById("nm1d")
    nm1a.addEventListener("click", () => {
        user_selected_opcions = { ...user_selected_opcions, houseVariant: "nm1a" }
        renderHouseFacade()
    })
    nm1b.addEventListener("click", () => {
        user_selected_opcions = { ...user_selected_opcions, houseVariant: "nm1b" }
        renderHouseFacade()
    })
    nm1c.addEventListener("click", () => {
        user_selected_opcions = { ...user_selected_opcions, houseVariant: "nm1c" }
        renderHouseFacade()
    })
    nm1d.addEventListener("click", () => {
        user_selected_opcions = { ...user_selected_opcions, houseVariant: "nm1d" }
        renderHouseFacade()
    })
}
/* Norden Modelo 2 */
const renderVariantOfnm2 = () => {
    budgetContainer.innerHTML = `
        <h2>¿Qué variante desea?</h2>
        <div id="nm2a"><p>Modelo 2A</p></div>
        <div id="nm2b"><p>Modelo 2B</p></div>
    `
    const nm2a = document.getElementById("nm2a")
    const nm2b = document.getElementById("nm2b")
    nm2a.addEventListener("click", () => {
        user_selected_opcions = { ...user_selected_opcions, houseVariant: "nm2a" }
        renderHouseFacade()
    })
    nm2b.addEventListener("click", () => {
        user_selected_opcions = { ...user_selected_opcions, houseVariant: "nm2b" }
        renderHouseFacade()
    })
}
/* Norden Modelo 3 */
const renderVariantOfnm3 = () => {
    budgetContainer.innerHTML = `
        <h2>¿Qué variante desea?</h2>
        <div id="nm3a"><p>Modelo 3A</p></div>
        <div id="nm3b"><p>Modelo 3B</p></div>
    `
    const nm3a = document.getElementById("nm3a")
    const nm3b = document.getElementById("nm3b")
    nm3a.addEventListener("click", () => {
        user_selected_opcions = { ...user_selected_opcions, houseVariant: "nm3a" }
        renderHouseFacade()
    })
    nm3b.addEventListener("click", () => {
        user_selected_opcions = { ...user_selected_opcions, houseVariant: "nm3b" }
        renderHouseFacade()
    })
}

/* pampa */
const renderTypeofPampa = () => {
    budgetContainer.innerHTML = `
        <h2>¿Qué modelo de casa desea?</h2>
        <div id="nm1"><p>Modelo 1</p></div>
        <div id="nm2"><p>Modelo 2</p></div>
        <div id="nm3"><p>Modelo 3</p></div>
    `
    const pm1 = document.getElementById("pm1")
    const pm2 = document.getElementById("pm2")
    const pm3 = document.getElementById("pm3")
    pm1.addEventListener("click", () => {
        user_selected_opcions = { ...user_selected_opcions, modelHouse: "pm1" }
        renderVariantOfpm1()
    })
    pm2.addEventListener("click", () => {
        user_selected_opcions = { ...user_selected_opcions, modelHouse: "pm2" }
        renderVariantOfpm2()
    })
    pm3.addEventListener("click", () => {
        user_selected_opcions = { ...user_selected_opcions, modelHouse: "pm3" }
        renderVariantOfpm3()
    })
}

/* Pampa Modelo 1 */
const renderVariantOfpm1 = () => {
    budgetContainer.innerHTML = `
        <h2>¿Qué variante desea?</h2>
        <div id="pm1a"><p>Modelo 1A</p></div>
        <div id="pm1b"><p>Modelo 1B</p></div>
        <div id="pm1c"><p>Modelo 1C</p></div>
        <div id="pm1d"><p>Modelo 1D</p></div>
    `
    const pm1a = document.getElementById("pm1a")
    const pm1b = document.getElementById("pm1b")
    const pm1c = document.getElementById("pm1c")
    const pm1d = document.getElementById("pm1d")
    pm1a.addEventListener("click", () => {
        user_selected_opcions = { ...user_selected_opcions, houseVariant: "pm1a" }
        renderHouseFacade()
    })
    pm1b.addEventListener("click", () => {
        user_selected_opcions = { ...user_selected_opcions, houseVariant: "pm1b" }
        renderHouseFacade()
    })
    pm1c.addEventListener("click", () => {
        user_selected_opcions = { ...user_selected_opcions, houseVariant: "pm1c" }
        renderHouseFacade()
    })
    pm1d.addEventListener("click", () => {
        user_selected_opcions = { ...user_selected_opcions, houseVariant: "pm1d" }
        renderHouseFacade()
    })
}
/* Pampa Modelo 2 */
const renderVariantOfpm2 = () => {
    budgetContainer.innerHTML = `
        <h2>¿Qué variante desea?</h2>
        <div id="pm2a"><p>Modelo 2A</p></div>
        <div id="pm2b"><p>Modelo 2B</p></div>
        <div id="pm2c"><p>Modelo 2C</p></div>
    `
    const pm2a = document.getElementById("pm2a")
    const pm2b = document.getElementById("pm2b")
    const pm2c = document.getElementById("pm2c")
    pm2a.addEventListener("click", () => {
        user_selected_opcions = { ...user_selected_opcions, houseVariant: "pm2a" }
        renderHouseFacade()
    })
    pm2b.addEventListener("click", () => {
        user_selected_opcions = { ...user_selected_opcions, houseVariant: "pm2b" }
        renderHouseFacade()
    })
    pm2c.addEventListener("click", () => {
        user_selected_opcions = { ...user_selected_opcions, houseVariant: "pm2c" }
        renderHouseFacade()
    })
}
/* Pampa Modelo 3 */
const renderVariantOfpm3 = () => {
    budgetContainer.innerHTML = `
        <h2>¿Qué variante desea?</h2>
        <div id="pm3a"><p>Modelo 3A</p></div>
        <div id="pm3b"><p>Modelo 3B</p></div>
    `
    const pm3a = document.getElementById("pm3a")
    pm3a.addEventListener("click", () => {
        user_selected_opcions = { ...user_selected_opcions, houseVariant: "pm3a" }
        renderHouseFacade()
    })
}

/* Fachada de la casa */
const renderHouseFacade = () => {
    const houseVariant = user_selected_opcions.houseVariant
    if (houseVariant === "nm1a" || houseVariant === "nm1b" || houseVariant === "nm1c" || houseVariant === "nm1d" || houseVariant === "pm1a" || houseVariant === "pm1b" || houseVariant === "pm1c" || houseVariant === "pm1d") {
        budgetContainer.innerHTML = `
            <h2>¿Qué fachada desea?</h2>
            <div id="chapaBlanca"><p>Chapa Blanca</p></div>
            <div id="chapaNegra"><p>Chapa Negra</p></div>
            <div id="wood"><p>Madera</p></div>
        `
        const chapaBlanca = document.getElementById("chapaBlanca")
        const chapaNegra = document.getElementById("chapaNegra")
        const wood = document.getElementById("wood")
        chapaBlanca.addEventListener("click", () => {
            user_selected_opcions.houseFacade = "Chapa Blanca"
        })
        chapaNegra.addEventListener("click", () => {
            user_selected_opcions.houseFacade = "Chapa Negra"
        })
        wood.addEventListener("click", () => {
            user_selected_opcions.houseFacade = "Madera"
        })
    } else if (houseVariant === "nm2a" || houseVariant === "nm2b" || houseVariant === "nm3a" || houseVariant === "nm3b") {
        budgetContainer.innerHTML = `
        <h2>¿Qué fachada desea?</h2>
        <div id="chapaBlanca"><p>Chapa Blanca</p></div>
        <div id="chapaNegra"><p>Chapa Negra</p></div>
        <div id="chapaBlancaYMadera"><p>Chapa Blanca y Madera</p></div>
        <div id="chapaNegraYMadera"><p>Chapa Negra y Madera</p></div>
    `
        const chapaBlanca = document.getElementById("chapaBlanca")
        const chapaNegra = document.getElementById("chapaNegra")
        const chapaBlancaYMadera = document.getElementById("chapaBlancaYMadera")
        const chapaNegraYMadera = document.getElementById("chapaNegraYMadera")
        chapaBlanca.addEventListener("click", () => {
            user_selected_opcions.houseFacade = "Chapa Blanca"
        })
        chapaNegra.addEventListener("click", () => {
            user_selected_opcions.houseFacade = "Chapa Negra"
        })
        chapaBlancaYMadera.addEventListener("click", () => {
            user_selected_opcions.houseFacade = "Chapa Blanca y Madera"
        })
        chapaNegraYMadera.addEventListener("click", () => {
            user_selected_opcions.houseFacade = "Chapa Negra y Madera"
        })
    } else if (houseVariant === "pm2a" || houseVariant === "pm2b") {
        budgetContainer.innerHTML = `
        <h2>¿Qué fachada desea?</h2>
        <div id="chapaBlanca"><p>Chapa Blanca</p></div>
        <div id="chapaNegra"><p>Chapa Negra</p></div>
    `
        const chapaBlanca = document.getElementById("chapaBlanca")
        const chapaNegra = document.getElementById("chapaNegra")
        chapaBlanca.addEventListener("click", () => {
            user_selected_opcions.houseFacade = "Chapa Blanca"
        })
        chapaNegra.addEventListener("click", () => {
            user_selected_opcions.houseFacade = "Chapa Negra"
        })
    } else if (houseVariant === "pm2c" || houseVariant === "pm3a") {
        budgetContainer.innerHTML = `
        <h2>¿Qué fachada desea?</h2>
        <div id="chapaBlancaYMadera"><p>Chapa Blanca y Madera</p></div>
        <div id="chapaNegraYMadera"><p>Chapa Negra y Madera</p></div>
    `
        const chapaBlancaYMadera = document.getElementById("chapaBlancaYMadera")
        const chapaNegraYMadera = document.getElementById("chapaNegraYMadera")
        chapaBlancaYMadera.addEventListener("click", () => {
            user_selected_opcions.houseFacade = "Chapa Blanca y Madera"
        })
        chapaNegraYMadera.addEventListener("click", () => {
            user_selected_opcions.houseFacade = "Chapa Negra y Madera"
        })
    }
}