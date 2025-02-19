console.log("Let's talk arrays");

const zodiacSigns = [
    "Libra",
    "Cancer",
    "Leo",
    "Taurus",
    "Scorpio",
    "Capercorn",
    "Saggitarius",
    "Aquarius",
    "Aries",
    "VIRGO",
    "Pisces",
];

console.log("ZodiacSigns", zodiacSigns);

console.table(zodiacSigns);

console.log("2nd Zodiac:", zodiacSigns[1]);

console.log("# of Zodiacs:", zodiacSigns.length);

const zodiacSignsUlRef = document.getElementById("zodiac-signs");

for (let i = 0; i < zodiacSigns.length; i++) {
    console.log("For Loop", zodiacSigns[i]);
    zodiacSignsUlRef.innerHTML += "<li>" + zodiacSigns[i] + "</li>";
}

let whileI = 0;
    while (whileI < zodiacSigns.length) {
        console.log("While Loop:", zodiacSigns[whileI]);
        whileI++;
    }

    let WhileDoI = 0;
    do {
        whileDoI++;
    } while (whileDoI < zodiacSigns.length);

