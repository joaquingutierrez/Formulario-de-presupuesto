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
const facade_wood = {
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
    <div class="question">
    <h2>¿Qué tipo de casa desea?</h2>
    <div class="choiceContainer">
    <div id="typeNorden"><img src="./img/facade/nm3a_chapa_negra_madera.jpg"><p>Norden</p></div>
    <div id="typePampa"><img src="./img/facade/pm3a_chapa_negra_madera.jpg"><p>Pampa</p></div>
    </div>
    <div id="goBackButton"><p>Atras</p></div>
    </div>
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

    const goBackButton = document.getElementById("goBackButton")
    goBackButton.addEventListener("click", () => {
        window.location.reload()
    })
}
/* Norden */
const renderTypeofNorden = () => {
    budgetContainer.innerHTML = `
    <div class="question">
    <h2>¿Qué modelo de casa desea?</h2>
    <div class="choiceContainer">
    <div id="nm1"><img src="./img/facade/nm1a_madera.jpg"><p>Modelo 1</p></div>
    <div id="nm2"><img src="./img/facade/nm2a_chapa_negra_madera.jpg"><p>Modelo 2</p></div>
    <div id="nm3"><img src="./img/facade/nm3a_chapa_negra_madera.jpg"><p>Modelo 3</p></div>
    </div>
    <div id="goBackButton"><p>Atras</p></div>
    </div>
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

    const goBackButton = document.getElementById("goBackButton")
    goBackButton.addEventListener("click", () => {
        renderTypeofHouse()
    })
}

/* Norden Modelo 1 */
const renderVariantOfnm1 = () => {
    budgetContainer.innerHTML = `
    <div class="question">
    <h2>¿Qué variante desea?</h2>
    <div class="choiceContainer">
    <div id="nm1a"><img src="./img/facade/nm1a_madera.jpg"><p>Modelo 1A <br> (US$ ${house_price.nm1a})</p></div>
    <div id="nm1b"><img src="./img/facade/nm1b_madera.jpg"><p>Modelo 1B <br> (US$ ${house_price.nm1b})</p></div>
    <div id="nm1c"><img src="./img/facade/nm1c_madera.jpg"><p>Modelo 1C <br> (US$ ${house_price.nm1c})</p></div>
    <div id="nm1d"><img src="./img/facade/nm1d_madera.jpg"><p>Modelo 1D <br> (US$ ${house_price.nm1d})</p></div>
    </div>
    <div id="goBackButton"><p>Atras</p></div>
    </div>
    `
    const nm1a = document.getElementById("nm1a")
    const nm1b = document.getElementById("nm1b")
    const nm1c = document.getElementById("nm1c")
    const nm1d = document.getElementById("nm1d")
    nm1a.addEventListener("click", () => {
        user_selected_opcions = { ...user_selected_opcions, houseVariant: "nm1a", subTotal: [house_price.nm1a] }
        renderHouseFacade()
    })
    nm1b.addEventListener("click", () => {
        user_selected_opcions = { ...user_selected_opcions, houseVariant: "nm1b", subTotal: [house_price.nm1b] }
        renderHouseFacade()
    })
    nm1c.addEventListener("click", () => {
        user_selected_opcions = { ...user_selected_opcions, houseVariant: "nm1c", subTotal: [house_price.nm1c] }
        renderHouseFacade()
    })
    nm1d.addEventListener("click", () => {
        user_selected_opcions = { ...user_selected_opcions, houseVariant: "nm1d", subTotal: [house_price.nm1d] }
        renderHouseFacade()
    })

    const goBackButton = document.getElementById("goBackButton")
    goBackButton.addEventListener("click", () => {
        renderTypeofNorden()
    })
}
/* Norden Modelo 2 */
const renderVariantOfnm2 = () => {
    budgetContainer.innerHTML = `
    <div class="question">
    <h2>¿Qué variante desea?</h2>
    <div class="choiceContainer">
    <div id="nm2a"><img src="./img/facade/nm2a_chapa_negra_madera.jpg"><p>Modelo 2A <br> (US$ ${house_price.nm2a})</p></div>
    <div id="nm2b"><img src="./img/facade/nm2b_chapa_negra_madera.jpg"><p>Modelo 2B <br> (US$ ${house_price.nm2b})</p></div>
    </div>
    <div id="goBackButton"><p>Atras</p></div>
    </div>
    `
    const nm2a = document.getElementById("nm2a")
    const nm2b = document.getElementById("nm2b")
    nm2a.addEventListener("click", () => {
        user_selected_opcions = { ...user_selected_opcions, houseVariant: "nm2a", subTotal: [house_price.nm2a] }
        renderHouseFacade()
    })
    nm2b.addEventListener("click", () => {
        user_selected_opcions = { ...user_selected_opcions, houseVariant: "nm2b", subTotal: [house_price.nm2b] }
        renderHouseFacade()
    })

    const goBackButton = document.getElementById("goBackButton")
    goBackButton.addEventListener("click", () => {
        renderTypeofNorden()
    })
}
/* Norden Modelo 3 */
const renderVariantOfnm3 = () => {
    budgetContainer.innerHTML = `
    <div class="question">
    <h2>¿Qué variante desea?</h2>
    <div class="choiceContainer">
    <div id="nm3a"><img src="./img/facade/nm3a_chapa_negra_madera.jpg"><p>Modelo 3A <br> (US$ ${house_price.nm3a})</p></div>
    <div id="nm3b"><img src="./img/facade/nm3b_chapa_negra_madera.jpg"><p>Modelo 3B <br> (US$ ${house_price.nm3b})</p></div>
    </div>
    <div id="goBackButton"><p>Atras</p></div>
    </div>
    `
    const nm3a = document.getElementById("nm3a")
    const nm3b = document.getElementById("nm3b")
    nm3a.addEventListener("click", () => {
        user_selected_opcions = { ...user_selected_opcions, houseVariant: "nm3a", subTotal: [house_price.nm3a] }
        renderHouseFacade()
    })
    nm3b.addEventListener("click", () => {
        user_selected_opcions = { ...user_selected_opcions, houseVariant: "nm3b", subTotal: [house_price.nm3b] }
        renderHouseFacade()
    })

    const goBackButton = document.getElementById("goBackButton")
    goBackButton.addEventListener("click", () => {
        renderTypeofNorden()
    })
}

/* pampa */
const renderTypeofPampa = () => {
    budgetContainer.innerHTML = `
    <div class="question">
    <h2>¿Qué modelo de casa desea?</h2>
    <div class="choiceContainer">
    <div id="pm1"><img src="./img/facade/pm1a_madera.jpg"><p>Modelo 1</p></div>
    <div id="pm2"><img src="./img/facade/pm2c_chapa_negra_madera.jpg"><p>Modelo 2</p></div>
    <div id="pm3"><img src="./img/facade/pm3a_chapa_negra_madera.jpg"><p>Modelo 3</p></div>
    </div>
    <div id="goBackButton"><p>Atras</p></div>
    </div>
    `
    const pm1 = document.getElementById("pm1")
    const pm2 = document.getElementById("pm2")
    const pm3 = document.getElementById("pm3")
    pm1.addEventListener("click", () => {
        user_selected_opcions = { ...user_selected_opcions, houseModel: "pm1" }
        renderVariantOfpm1()
    })
    pm2.addEventListener("click", () => {
        user_selected_opcions = { ...user_selected_opcions, houseModel: "pm2" }
        renderVariantOfpm2()
    })
    pm3.addEventListener("click", () => {
        user_selected_opcions = { ...user_selected_opcions, houseModel: "pm3" }
        renderVariantOfpm3()
    })

    const goBackButton = document.getElementById("goBackButton")
    goBackButton.addEventListener("click", () => {
        renderTypeofHouse()
    })
}

/* Pampa Modelo 1 */
const renderVariantOfpm1 = () => {
    budgetContainer.innerHTML = `
    <div class="question">
    <h2>¿Qué variante desea?</h2>
    <div class="choiceContainer">
    <div id="pm1a"><img src="./img/facade/pm1a_madera.jpg"><p>Modelo 1A <br> (US$ ${house_price.pm1a})</p></div>
    <div id="pm1b"><img src="./img/facade/pm1b_madera.jpg"><p>Modelo 1B <br> (US$ ${house_price.pm1b})</p></div>
    <div id="pm1c"><img src="./img/facade/pm1c_madera.jpg"><p>Modelo 1C <br> (US$ ${house_price.pm1c})</p></div>
    <div id="pm1d"><img src="./img/facade/pm1d_madera.jpg"><p>Modelo 1D <br> (US$ ${house_price.pm1d})</p></div>
    </div>
    <div id="goBackButton"><p>Atras</p></div>
    </div>
    `
    const pm1a = document.getElementById("pm1a")
    const pm1b = document.getElementById("pm1b")
    const pm1c = document.getElementById("pm1c")
    const pm1d = document.getElementById("pm1d")
    pm1a.addEventListener("click", () => {
        user_selected_opcions = { ...user_selected_opcions, houseVariant: "pm1a", subTotal: [house_price.pm1a] }
        renderHouseFacade()
    })
    pm1b.addEventListener("click", () => {
        user_selected_opcions = { ...user_selected_opcions, houseVariant: "pm1b", subTotal: [house_price.pm1b] }
        renderHouseFacade()
    })
    pm1c.addEventListener("click", () => {
        user_selected_opcions = { ...user_selected_opcions, houseVariant: "pm1c", subTotal: [house_price.pm1c] }
        renderHouseFacade()
    })
    pm1d.addEventListener("click", () => {
        user_selected_opcions = { ...user_selected_opcions, houseVariant: "pm1d", subTotal: [house_price.pm1d] }
        renderHouseFacade()
    })

    const goBackButton = document.getElementById("goBackButton")
    goBackButton.addEventListener("click", () => {
        renderTypeofPampa()
    })
}
/* Pampa Modelo 2 */
const renderVariantOfpm2 = () => {
    budgetContainer.innerHTML = `
    <div class="question">
    <h2>¿Qué variante desea?</h2>
    <div class="choiceContainer">
    <div id="pm2a"><img src="./img/facade/pm2a_chapa_negra.jpg"><p>Modelo 2A <br> (US$ ${house_price.pm2a})</p></div>
    <div id="pm2b"><img src="./img/facade/pm2b_chapa_negra.jpg"><p>Modelo 2B <br> (US$ ${house_price.pm2b})</p></div>
    <div id="pm2c"><img src="./img/facade/pm2c_chapa_negra_madera.jpg"><p>Modelo 2C</p></div>
    </div>
    <div id="goBackButton"><p>Atras</p></div>
    </div>
    `
    const pm2a = document.getElementById("pm2a")
    const pm2b = document.getElementById("pm2b")
    const pm2c = document.getElementById("pm2c")
    pm2a.addEventListener("click", () => {
        user_selected_opcions = { ...user_selected_opcions, houseVariant: "pm2a", subTotal: [house_price.pm2a] }
        renderHouseFacade()
    })
    pm2b.addEventListener("click", () => {
        user_selected_opcions = { ...user_selected_opcions, houseVariant: "pm2b", subTotal: [house_price.pm2b] }
        renderHouseFacade()
    })
    pm2c.addEventListener("click", () => {
        user_selected_opcions = { ...user_selected_opcions, houseVariant: "pm2c", subTotal: [house_price.pm2c] }
        renderHouseFacade()
    })

    const goBackButton = document.getElementById("goBackButton")
    goBackButton.addEventListener("click", () => {
        renderTypeofPampa()
    })
}
/* Pampa Modelo 3 */
const renderVariantOfpm3 = () => {
    budgetContainer.innerHTML = `
    <div class="question">
    <h2>¿Qué variante desea?</h2>
    <div class="choiceContainer">
    <div id="pm3a"><img src="./img/facade/pm3a_chapa_negra_madera.jpg"><p>Modelo 3A <br> (US$ ${house_price.pm3a})</p></div>
    </div>
    <div id="goBackButton"><p>Atras</p></div>
    </div>
    `
    const pm3a = document.getElementById("pm3a")
    pm3a.addEventListener("click", () => {
        user_selected_opcions = { ...user_selected_opcions, houseVariant: "pm3a", subTotal: [house_price.pm3a] }
        renderHouseFacade()
    })

    const goBackButton = document.getElementById("goBackButton")
    goBackButton.addEventListener("click", () => {
        renderTypeofPampa()
    })
}

/* Fachada de la casa */
const renderHouseFacade = () => {
    const houseVariant = user_selected_opcions.houseVariant
    if (houseVariant === "nm1a" || houseVariant === "nm1b" || houseVariant === "nm1c" || houseVariant === "nm1d" || houseVariant === "pm1a" || houseVariant === "pm1b" || houseVariant === "pm1c" || houseVariant === "pm1d") {
        budgetContainer.innerHTML = `
        <div class="question">
        <h2>¿Qué fachada desea?</h2>
        <h3>Subtotal: US$ ${totalCal()}</h3>
        <div class="choiceContainer">
        <div id="chapaBlanca"><img src="./img/facade/${houseVariant}_chapa_blanca.jpg"><p>Chapa Blanca <br> (US$ 0)</p></div>
        <div id="chapaNegra"><img src="./img/facade/${houseVariant}_chapa_negra.jpg"><p>Chapa Negra <br> (US$ 0)</p></div>
        <div id="wood"><img src="./img/facade/${houseVariant}_madera.jpg"><p>Madera <br> (US$ ${facade_wood[houseVariant]})</p></div>
        </div>
        <div id="goBackButton"><p>Atras</p></div>
        </div>
        `
        const chapaBlanca = document.getElementById("chapaBlanca")
        const chapaNegra = document.getElementById("chapaNegra")
        const wood = document.getElementById("wood")
        chapaBlanca.addEventListener("click", () => {
            user_selected_opcions.houseFacade = "Chapa Blanca"
            user_selected_opcions.subTotal[1] = 0
            renderHouseWall()
        })
        chapaNegra.addEventListener("click", () => {
            user_selected_opcions.houseFacade = "Chapa Negra"
            user_selected_opcions.subTotal[1] = 0
            renderHouseWall()
        })
        wood.addEventListener("click", () => {
            user_selected_opcions.houseFacade = "Madera"
            user_selected_opcions.subTotal[1] = facade_wood[houseVariant]
            renderHouseWall()
        })
    } else if (houseVariant === "nm2a" || houseVariant === "nm2b" || houseVariant === "nm3a" || houseVariant === "nm3b") {
        budgetContainer.innerHTML = `
        <div class="question">
        <h2>¿Qué fachada desea?</h2>
        <h3>Subtotal: US$ ${totalCal()}</h3>
        <div class="choiceContainer">
        <div id="chapaBlanca"><img src="./img/facade/${houseVariant}_chapa_blanca.jpg"><p>Chapa Blanca <br> (US$ 0)</p></div>
        <div id="chapaNegra"><img src="./img/facade/${houseVariant}_chapa_negra.jpg"><p>Chapa Negra <br> (US$ 0)</p></div>
        <div id="chapaBlancaYMadera"><img src="./img/facade/${houseVariant}_chapa_blanca_madera.jpg"><p>Chapa Blanca y Madera <br> (US$ ${facade_wood[houseVariant]})</p></div>
        <div id="chapaNegraYMadera"><img src="./img/facade/${houseVariant}_chapa_negra_madera.jpg"><p>Chapa Negra y Madera <br> (US$ ${facade_wood[houseVariant]})</p></div>
        </div>
        <div id="goBackButton"><p>Atras</p></div>
        </div>
        `
        const chapaBlanca = document.getElementById("chapaBlanca")
        const chapaNegra = document.getElementById("chapaNegra")
        const chapaBlancaYMadera = document.getElementById("chapaBlancaYMadera")
        const chapaNegraYMadera = document.getElementById("chapaNegraYMadera")
        chapaBlanca.addEventListener("click", () => {
            user_selected_opcions.houseFacade = "Chapa Blanca"
            user_selected_opcions.subTotal[1] = 0
            renderHouseWall()
        })
        chapaNegra.addEventListener("click", () => {
            user_selected_opcions.houseFacade = "Chapa Negra"
            user_selected_opcions.subTotal[1] = 0
            renderHouseWall()
        })
        chapaBlancaYMadera.addEventListener("click", () => {
            user_selected_opcions.houseFacade = "Chapa Blanca y Madera"
            user_selected_opcions.subTotal[1] = facade_wood[houseVariant]
            renderHouseWall()
        })
        chapaNegraYMadera.addEventListener("click", () => {
            user_selected_opcions.houseFacade = "Chapa Negra y Madera"
            user_selected_opcions.subTotal[1] = facade_wood[houseVariant]
            renderHouseWall()
        })
    } else if (houseVariant === "pm2a" || houseVariant === "pm2b") {
        budgetContainer.innerHTML = `
        <div class="question">
        <h2>¿Qué fachada desea?</h2>
        <h3>Subtotal: US$ ${totalCal()}</h3>
        <div class="choiceContainer">
        <div id="chapaBlanca"><img src="./img/facade/${houseVariant}_chapa_blanca.jpg"><p>Chapa Blanca <br> (US$ 0)</p></div>
        <div id="chapaNegra"><img src="./img/facade/${houseVariant}_chapa_negra.jpg"><p>Chapa Negra <br> (US$ 0)</p></div>
        </div>
        <div id="goBackButton"><p>Atras</p></div>
        </div>
    `
        const chapaBlanca = document.getElementById("chapaBlanca")
        const chapaNegra = document.getElementById("chapaNegra")
        chapaBlanca.addEventListener("click", () => {
            user_selected_opcions.houseFacade = "Chapa Blanca"
            user_selected_opcions.subTotal[1] = 0
            renderHouseWall()
        })
        chapaNegra.addEventListener("click", () => {
            user_selected_opcions.houseFacade = "Chapa Negra"
            user_selected_opcions.subTotal[1] = 0
            renderHouseWall()
        })
    } else if (houseVariant === "pm2c" || houseVariant === "pm3a") {
        budgetContainer.innerHTML = `
        <div class="question">
        <h2>¿Qué fachada desea?</h2>
        <h3>Subtotal: US$ ${totalCal()}</h3>
        <div class="choiceContainer">
        <div id="chapaBlancaYMadera"><img src="./img/facade/${houseVariant}_chapa_blanca_madera.jpg"><p>Chapa Blanca y Madera <br> (US$ ${facade_wood[houseVariant]})</p></div>
        <div id="chapaNegraYMadera"><img src="./img/facade/${houseVariant}_chapa_negra_madera.jpg"><p>Chapa Negra y Madera <br> (US$ ${facade_wood[houseVariant]})</p></div>
        </div>
        <div id="goBackButton"><p>Atras</p></div>
        </div>
        `
        const chapaBlancaYMadera = document.getElementById("chapaBlancaYMadera")
        const chapaNegraYMadera = document.getElementById("chapaNegraYMadera")
        chapaBlancaYMadera.addEventListener("click", () => {
            user_selected_opcions.houseFacade = "Chapa Blanca y Madera"
            user_selected_opcions.subTotal[1] = facade_wood[houseVariant]
            renderHouseWall()
        })
        chapaNegraYMadera.addEventListener("click", () => {
            user_selected_opcions.houseFacade = "Chapa Negra y Madera"
            user_selected_opcions.subTotal[1] = facade_wood[houseVariant]
            renderHouseWall()
        })
    }

    const goBackButton = document.getElementById("goBackButton")
    goBackButton.addEventListener("click", () => {
        const houseModel = user_selected_opcions.houseModel
        switch (houseModel) {
            case "nm1":
                user_selected_opcions.subTotal[0] = 0
                renderVariantOfnm1()
                break
            case "nm2":
                user_selected_opcions.subTotal[0] = 0
                renderVariantOfnm2()
                break
            case "nm3":
                user_selected_opcions.subTotal[0] = 0
                renderVariantOfnm3()
                break
            case "pm1":
                user_selected_opcions.subTotal[0] = 0
                renderVariantOfpm1()
                break
            case "pm2":
                user_selected_opcions.subTotal[0] = 0
                renderVariantOfpm2()
                break
            case "pm3":
                user_selected_opcions.subTotal[0] = 0
                renderVariantOfpm3()
                break
            default:
                window.location.reload()
                break
        }
    })
}

/* Eleccion de las paredes */
const renderHouseWall = () => {
    const houseVariant = user_selected_opcions.houseVariant
    budgetContainer.innerHTML = `
    <div class="question">
    <h2>¿Qué paredes desea?</h2>
    <h3>Subtotal: US$ ${totalCal()}</h3>
    <div class="choiceContainer">
    <div id="wall_white" class="materialsContainter"><img src="./img/materials/latex_blanco.jpg"><p>Pintura latex interior <br> (US$ 0)</p></div>
    <div id="wall_wood" class="materialsContainter"><img src="./img/materials/melamina_madera.jpg"><p>Melamina simil madera <br> (US$ ${ceiling_wood[houseVariant]})</p></div>
    </div>
    <div id="goBackButton"><p>Atras</p></div>
    </div>
`
    const wall_white = document.getElementById("wall_white")
    const wall_wood = document.getElementById("wall_wood")
    wall_white.addEventListener("click", () => {
        user_selected_opcions.houseWall = "Pintura latex interior"
        user_selected_opcions.subTotal[2] = 0
        renderHouseFloor()
    })
    wall_wood.addEventListener("click", () => {
        user_selected_opcions.houseWall = "Melamina simil madera"
        user_selected_opcions.subTotal[2] = ceiling_wood[houseVariant]
        renderHouseFloor()
    })

    const goBackButton = document.getElementById("goBackButton")
    goBackButton.addEventListener("click", () => {
        user_selected_opcions.subTotal[1] = 0
        renderHouseFacade()
    })
}
/* Eleccion del piso */
const renderHouseFloor = () => {
    const houseVariant = user_selected_opcions.houseVariant
    budgetContainer.innerHTML = `
    <div class="question">
    <h2>¿Qué piso desea?</h2>
    <h3>Subtotal: US$ ${totalCal()}</h3>
    <div class="choiceContainer">
    <div id="floor_gray" class="materialsContainter"><img src="./img/materials/porcellanato_gris.jpg"><p>Porcellanato gris neutro <br> (US$ 0)</p></div>
    <div id="floor_wood" class="materialsContainter"><img src="./img/materials/porcellanato_madera.jpg"><p>Porcellanato simil madera <br> (US$ ${floor_wood[houseVariant]})</p></div>
    </div>
    <div id="goBackButton"><p>Atras</p></div>
    </div>
`
    const gray = document.getElementById("floor_gray")
    const wood = document.getElementById("floor_wood")
    gray.addEventListener("click", () => {
        user_selected_opcions.houseFloor = "Porcellanato gris neutro"
        user_selected_opcions.subTotal[3] = 0
        renderHouseWallAndFloorConfirmation()
    })
    wood.addEventListener("click", () => {
        user_selected_opcions.houseFloor = "Porcellanato simil madera"
        user_selected_opcions.subTotal[3] = floor_wood[houseVariant]
        renderHouseWallAndFloorConfirmation()
    })

    const goBackButton = document.getElementById("goBackButton")
    goBackButton.addEventListener("click", () => {
        user_selected_opcions.subTotal[2] = 0
        renderHouseWall()
    })
}

/* Confirmacion de las paredes y el piso */
const renderHouseWallAndFloorConfirmation = () => {
    const houseVariant = user_selected_opcions.houseVariant
    let modelSelection
    if (houseVariant === "nm1a" || houseVariant === "nm1b" || houseVariant === "nm1c" || houseVariant === "nm2a" || houseVariant === "nm3a") {
        modelSelection = "modelo1"
    } else if (houseVariant === "nm1d") {
        modelSelection = "modelo2"
    } else if (houseVariant === "nm2b") {
        modelSelection = "modelo3"
    } else if (houseVariant === "nm3b") {
        modelSelection = "modelo4"
    } else if (houseVariant === "pm1a" || houseVariant === "pm1b" || houseVariant === "pm1c") {
        modelSelection = "modelo5"
    } else if (houseVariant === "pm1d") {
        modelSelection = "modelo6"
    } else if (houseVariant === "pm2a" || houseVariant === "pm2b" || houseVariant === "pm2c") {
        modelSelection = "modelo7"
    } else if (houseVariant === "pm3a") {
        modelSelection = "modelo8"
    }
    let floor
    let wall
    let imgName
    if (user_selected_opcions.houseFloor === "Porcellanato gris neutro") {
        floor = "gris"
    } else {
        floor = "madera"
    }
    if (user_selected_opcions.houseWall === "Pintura latex interior") {
        wall = "blanco"
    } else {
        wall = "madera"
    }
    imgName = "interior_" + wall + "_piso_" + floor + ".jpg"
    budgetContainer.innerHTML = `
    <div class="question">
    <h2>¡Así se ve su elección! ¿Desea continuar?</h2>
    <h3>Subtotal: US$ ${totalCal()}</h3>
    <img class="floor_wall_image" src="./img/floor_wall/${modelSelection}/${imgName}">
    <div class="choiceContainer">
    <div id="goForward"><p>Me gusta</p></div>
    <div id="goBack"><p>Volver a elegir las paredes y el piso</p></div>
    </div>
    <div id="goBackButton"><p>Atras</p></div>
    </div>
        `
    const goForward = document.getElementById("goForward")
    const goBack = document.getElementById("goBack")
    goForward.addEventListener("click", () => {
        renderUserElections()
    })
    goBack.addEventListener("click", () => {
        renderHouseWall()
    })

    const goBackButton = document.getElementById("goBackButton")
    goBackButton.addEventListener("click", () => {
        user_selected_opcions.subTotal[3] = 0
        renderHouseFloor()
    })
}

/* Slide con todas las eleciones */
const renderUserElections = () => {
    const total = totalCal()
    budgetContainer.innerHTML = `
    <div class="infoContainer">
    <h2>${user_selected_opcions.user_name}, ¡Aquí puedes ver tu presupuesto!</h2>
    <div><h3>Tipo de casa: ${user_selected_opcions.typeofHouse}</h3></div>
    <div><h3>Modelo de casa: ${user_selected_opcions.houseVariant}</h3></div>
    <div><h3>Fachada: ${user_selected_opcions.houseFacade}</h3></div>
    <div><h3>Paredes: ${user_selected_opcions.houseWall}</h3></div>
    <div><h3>Piso: ${user_selected_opcions.houseFloor}</h3></div>
    <div><h3>Total: $${total}</h3></div>
    <h4 id="pdfButton">Descargar PDF</h4>
    </div>
    <img class="plano_de_la_casa" src="./img/plano/${user_selected_opcions.houseVariant}.jpg">
    <div id="goBackButton"><p>Atras</p></div>
`
    const pdfButton = document.getElementById("pdfButton")
    pdfButton.addEventListener("click", () => downloadPDF(user_selected_opcions, total))

    const goBackButton = document.getElementById("goBackButton")
    goBackButton.addEventListener("click", () => {
        renderHouseWallAndFloorConfirmation()
    })
}

/* Funcion para calcular el total */
const totalCal = () => {
    let acum = 0
    user_selected_opcions.subTotal.map((item) => {
        acum += item
    })
    return total = acum
}


/* generando el PDF para descargar */
const downloadPDF = (user_selected_opcions, total) => {
    const doc = new jsPDF();
    const text = `
    
    ${user_selected_opcions.user_name}, ¡Aquí puedes ver tu presupuesto!
    Tipo de casa: ${user_selected_opcions.typeofHouse}
    Modelo de casa: ${user_selected_opcions.houseVariant}
    Fachada: ${user_selected_opcions.houseFacade}
    Paredes: ${user_selected_opcions.houseWall}
    Piso: ${user_selected_opcions.houseFloor}
    Total: $${total}
    `
    doc.text(text, 10, 10);
    var image1 = new Image();
    image1.src = `./img/plano/${user_selected_opcions.houseVariant}.jpg`; /// URL de la imagen
    doc.addImage(image1, 'jpg', 25, 75, 170, 180); // Agregar la imagen al PDF (X, Y, Width, Height)
    doc.save("Presupuesto.pdf");
}