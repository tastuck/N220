// https://digimon-api.vercel.app/api/digimon

const digimonListRef = document.querySelector("#digimon-list");
async function getDigimon() {
//     fetch("https://digimon-api.vercel.app/api/digimon")
//         .then(function (digiResp) {
//             return digiResp.json();
//         })
//         .then((digiData) => {
//             console.log(digiData);
//         }).catch(function (error) {
//         console.warn(error)
//     }).finally(() => {
//         console.log("fetch complete")
//     });
// }

    try {

        const digiResp = await fetch("https://api.digimon.com/v1/digimon");

        const digiData = await digiResp.json();

        digimonListRef.innerHTML = "";

        for (let i = 0; i < digiData.length; i++) {
            const currentDigimon = digiData[i];

            const newCard = document.createElement("div");
            newCard.classList.add("digimon-card");
            newCard.innerHTML += `
            <img src="${currentDigimon.img}" alt="${currentDigimon.name}" />
            <h4>${currentDigimon.name}</h4>
            <button class="like">&hearts;</button>
        `;

            digimonListRef.appendChild(newCard);
        }
    } catch (e) {
        console.warn(e);
    }

console.log("end of function");
}

    getDigimon();



