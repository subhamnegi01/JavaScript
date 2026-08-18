/* =========================
    CREATE DAY OPTIONS
========================= */

const birthDate = document.getElementById("birthDate");
const birthYear = document.getElementById("birthYear");

for (let day = 1; day <= 31; day++) {

    const option = document.createElement("option");

    option.value = day;
    option.textContent = day;

    birthDate.appendChild(option);
}


/* =========================
    CREATE YEAR OPTIONS
========================= */

const currentYear = new Date().getFullYear();

for (let year = currentYear; year >= 1900; year--) {

    const option = document.createElement("option");

    option.value = year;
    option.textContent = year;

    birthYear.appendChild(option);
}


/* =========================
   ZODIAC DATA
========================= */

const zodiacData = {

    Aries: {
        symbol: "♈",
        element: "Fire",
        title: "The Fearless Pioneer",

        description:
            "You are naturally courageous, energetic and driven. You enjoy taking initiative and are not afraid to explore new paths.",

        luckyNumber: 9,
        luckyColor: "Red",
        luckyStone: "Diamond",

        traits: [
            "Courageous",
            "Energetic",
            "Independent",
            "Confident",
            "Ambitious"
        ],

        love:
            "You bring passion and honesty into relationships. You value excitement, loyalty and a partner who respects your independence.",

        career:
            "Leadership, entrepreneurship, technology and competitive environments can bring out your strongest qualities.",

        finance:
            "You can be ambitious with money, but thoughtful planning can help turn your energy into long-term financial stability."
    },


    Taurus: {
        symbol: "♉",
        element: "Earth",
        title: "The Steady Builder",

        description:
            "You value stability, comfort and meaningful relationships. Your patience allows you to build things that last.",

        luckyNumber: 6,
        luckyColor: "Green",
        luckyStone: "Emerald",

        traits: [
            "Patient",
            "Reliable",
            "Loyal",
            "Practical",
            "Determined"
        ],

        love:
            "You prefer deep and stable connections. Trust and emotional security are especially important to you.",

        career:
            "You perform well when consistency, creativity and practical thinking are valued.",

        finance:
            "You naturally appreciate financial security. Consistent saving and long-term planning can work well for you."
    },


    Gemini: {
        symbol: "♊",
        element: "Air",
        title: "The Curious Messenger",

        description:
            "Your mind is active, curious and adaptable. You enjoy learning, communication and discovering new perspectives.",

        luckyNumber: 5,
        luckyColor: "Yellow",
        luckyStone: "Agate",

        traits: [
            "Curious",
            "Adaptable",
            "Social",
            "Creative",
            "Intelligent"
        ],

        love:
            "Mental connection and communication are important to you. You enjoy relationships where conversation never becomes boring.",

        career:
            "Communication, software, media, marketing and creative fields can suit your flexible mind.",

        finance:
            "Multiple interests can create multiple opportunities, but maintaining a clear financial plan is important."
    },


    Cancer: {
        symbol: "♋",
        element: "Water",
        title: "The Emotional Guardian",

        description:
            "You are intuitive, caring and deeply connected to the people you love. Your emotional intelligence is one of your strengths.",

        luckyNumber: 2,
        luckyColor: "Silver",
        luckyStone: "Pearl",

        traits: [
            "Caring",
            "Intuitive",
            "Loyal",
            "Protective",
            "Sensitive"
        ],

        love:
            "You seek emotional security and genuine connection. Once you trust someone, you can be deeply devoted.",

        career:
            "People-focused careers and environments where empathy matters can allow you to thrive.",

        finance:
            "You tend to value security. Building savings and avoiding unnecessary financial risks can support your goals."
    },


    Leo: {
        symbol: "♌",
        element: "Fire",
        title: "The Radiant Leader",

        description:
            "You naturally attract attention through confidence, creativity and warmth. You are motivated by meaningful achievement.",

        luckyNumber: 1,
        luckyColor: "Gold",
        luckyStone: "Ruby",

        traits: [
            "Confident",
            "Creative",
            "Generous",
            "Ambitious",
            "Charismatic"
        ],

        love:
            "You love wholeheartedly and appreciate affection, loyalty and appreciation from your partner.",

        career:
            "Leadership, public-facing roles, entrepreneurship and creative work can bring out your natural confidence.",

        finance:
            "You may enjoy spending on experiences and quality. Balancing generosity with planning can strengthen your finances."
    },


    Virgo: {
        symbol: "♍",
        element: "Earth",
        title: "The Thoughtful Analyst",

        description:
            "You are analytical, organized and observant. You often notice details that others overlook.",

        luckyNumber: 5,
        luckyColor: "Green",
        luckyStone: "Sapphire",

        traits: [
            "Analytical",
            "Organized",
            "Practical",
            "Focused",
            "Helpful"
        ],

        love:
            "You show love through actions and reliability. You appreciate honesty and consistency.",

        career:
            "Technology, analysis, research, medicine and organized professional environments may suit you well.",

        finance:
            "Your practical nature can help you manage resources carefully and build financial discipline."
    },


    Libra: {
        symbol: "♎",
        element: "Air",
        title: "The Harmonious Diplomat",

        description:
            "You appreciate balance, beauty and cooperation. You often try to understand different perspectives before making decisions.",

        luckyNumber: 6,
        luckyColor: "Pink",
        luckyStone: "Opal",

        traits: [
            "Balanced",
            "Diplomatic",
            "Charming",
            "Social",
            "Fair"
        ],

        love:
            "Harmony and communication are important to you. You prefer relationships where both people feel respected.",

        career:
            "Design, law, communication, business and people-oriented professions can match your strengths.",

        finance:
            "You appreciate quality and aesthetics. Creating a spending structure can help balance enjoyment and saving."
    },


    Scorpio: {
        symbol: "♏",
        element: "Water",
        title: "The Intense Strategist",

        description:
            "You are determined, focused and emotionally powerful. Once you commit to something, you can pursue it intensely.",

        luckyNumber: 8,
        luckyColor: "Maroon",
        luckyStone: "Topaz",

        traits: [
            "Focused",
            "Passionate",
            "Determined",
            "Intuitive",
            "Strategic"
        ],

        love:
            "You prefer deep and meaningful relationships. Trust and loyalty are essential for emotional connection.",

        career:
            "Research, technology, psychology, investigation and strategic roles can suit your focused nature.",

        finance:
            "You can be strategic with resources. Patience and careful evaluation can help with major financial decisions."
    },


    Sagittarius: {
        symbol: "♐",
        element: "Fire",
        title: "The Adventurous Explorer",

        description:
            "You are optimistic, adventurous and curious about the world. You enjoy freedom and personal growth.",

        luckyNumber: 3,
        luckyColor: "Purple",
        luckyStone: "Turquoise",

        traits: [
            "Adventurous",
            "Optimistic",
            "Independent",
            "Curious",
            "Honest"
        ],

        love:
            "You value honesty and freedom. You enjoy relationships where both partners encourage each other's growth.",

        career:
            "Travel, education, technology, entrepreneurship and international environments can be exciting for you.",

        finance:
            "Your optimistic nature can encourage risk-taking. Combining ambition with research can improve financial decisions."
    },


    Capricorn: {
        symbol: "♑",
        element: "Earth",
        title: "The Determined Achiever",

        description:
            "You are disciplined, responsible and focused on long-term goals. You understand the value of consistent effort.",

        luckyNumber: 8,
        luckyColor: "Brown",
        luckyStone: "Garnet",

        traits: [
            "Disciplined",
            "Responsible",
            "Ambitious",
            "Patient",
            "Focused"
        ],

        love:
            "You take commitment seriously. Trust develops gradually, but once established your loyalty can be strong.",

        career:
            "Management, technology, finance, engineering and structured professional environments can suit you.",

        finance:
            "Long-term planning and disciplined saving can become major strengths in your financial life."
    },


    Aquarius: {
        symbol: "♒",
        element: "Air",
        title: "The Visionary Thinker",

        description:
            "You enjoy original ideas and independent thinking. You are naturally attracted to innovation and new possibilities.",

        luckyNumber: 4,
        luckyColor: "Blue",
        luckyStone: "Amethyst",

        traits: [
            "Innovative",
            "Independent",
            "Original",
            "Intellectual",
            "Visionary"
        ],

        love:
            "You appreciate friendship and intellectual connection within relationships. Personal freedom is important to you.",

        career:
            "Technology, innovation, science, startups and creative problem-solving can match your personality.",

        finance:
            "You may be interested in unconventional opportunities. Research and diversification can help manage risk."
    },


    Pisces: {
        symbol: "♓",
        element: "Water",
        title: "The Dreamy Empath",

        description:
            "You are imaginative, compassionate and intuitive. Your creativity and emotional sensitivity can be powerful strengths.",

        luckyNumber: 7,
        luckyColor: "Sea Green",
        luckyStone: "Aquamarine",

        traits: [
            "Creative",
            "Compassionate",
            "Intuitive",
            "Imaginative",
            "Empathetic"
        ],

        love:
            "You value emotional depth and meaningful connection. You tend to give a lot when you feel emotionally safe.",

        career:
            "Creative fields, design, music, writing, psychology and people-focused professions may suit you.",

        finance:
            "Your generous nature is admirable, but clear financial boundaries can help you maintain stability."
    }

};


/* =========================
   ZODIAC CALCULATION
========================= */

function getZodiac(day, month) {

    if ((month === 3 && day >= 21) || (month === 4 && day <= 19))
        return "Aries";

    if ((month === 4 && day >= 20) || (month === 5 && day <= 20))
        return "Taurus";

    if ((month === 5 && day >= 21) || (month === 6 && day <= 20))
        return "Gemini";

    if ((month === 6 && day >= 21) || (month === 7 && day <= 22))
        return "Cancer";

    if ((month === 7 && day >= 23) || (month === 8 && day <= 22))
        return "Leo";

    if ((month === 8 && day >= 23) || (month === 9 && day <= 22))
        return "Virgo";

    if ((month === 9 && day >= 23) || (month === 10 && day <= 22))
        return "Libra";

    if ((month === 10 && day >= 23) || (month === 11 && day <= 21))
        return "Scorpio";

    if ((month === 11 && day >= 22) || (month === 12 && day <= 21))
        return "Sagittarius";

    if ((month === 12 && day >= 22) || (month === 1 && day <= 19))
        return "Capricorn";

    if ((month === 1 && day >= 20) || (month === 2 && day <= 18))
        return "Aquarius";

    if ((month === 2 && day >= 19) || (month === 3 && day <= 20))
        return "Pisces";
}


/* =========================
   CALCULATE PROFILE
========================= */

function calculateZodiac() {

    const day = Number(birthDate.value);
    const month = Number(
        document.getElementById("birthMonth").value
    );
    const year = Number(birthYear.value);

    const error = document.getElementById("errorMessage");

    error.textContent = "";


    if (!day || !month || !year) {

        error.textContent =
            "Please enter your complete date of birth.";

        return;
    }


    /* Validate actual date */

    const selectedDate =
        new Date(year, month - 1, day);

    if (
        selectedDate.getFullYear() !== year ||
        selectedDate.getMonth() !== month - 1 ||
        selectedDate.getDate() !== day
    ) {

        error.textContent =
            "Please enter a valid date of birth.";

        return;
    }


    /* Prevent future date */

    const today = new Date();

    if (selectedDate > today) {

        error.textContent =
            "Birth date cannot be in the future.";

        return;
    }


    const sign =
        getZodiac(day, month);

    const data =
        zodiacData[sign];


    /* Update result */

    document.getElementById("resultSign").textContent =
        sign;

    document.getElementById("resultSymbol").textContent =
        data.symbol;

    document.getElementById("resultElement").textContent =
        data.element.toUpperCase() + " SIGN";

    document.getElementById("resultTitle").textContent =
        data.title;

    document.getElementById("resultDescription").textContent =
        data.description;

    document.getElementById("luckyNumber").textContent =
        data.luckyNumber;

    document.getElementById("luckyColor").textContent =
        data.luckyColor;

    document.getElementById("luckyStone").textContent =
        data.luckyStone;

    document.getElementById("elementName").textContent =
        data.element;

    document.getElementById("loveText").textContent =
        data.love;

    document.getElementById("careerText").textContent =
        data.career;

    document.getElementById("financeText").textContent =
        data.finance;


    /* Date */

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    document.getElementById("resultDate").textContent =
        `Born ${day} ${months[month - 1]} ${year}`;


    /* Traits */

    const traitsContainer =
        document.getElementById("traitsContainer");

    traitsContainer.innerHTML = "";

    data.traits.forEach(trait => {

        const element =
            document.createElement("span");

        element.classList.add("trait");

        element.textContent =
            trait;

        traitsContainer.appendChild(element);

    });


    /* Show result */

    const result =
        document.getElementById("resultSection");

    result.classList.add("show");

    setTimeout(() => {

        result.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }, 100);

}


/* =========================
   RESET
========================= */

function resetProfile() {

    birthDate.value = "";
    document.getElementById("birthMonth").value = "";
    birthYear.value = "";

    document.getElementById("resultSection")
        .classList.remove("show");

    document.getElementById("errorMessage")
        .textContent = "";

    window.scrollTo({
        top: document.getElementById("discover").offsetTop - 50,
        behavior: "smooth"
    });
}


/* =========================
   NAVIGATION
========================= */

function scrollToDiscover() {

    document.getElementById("discover")
        .scrollIntoView({
            behavior: "smooth"
        });

}