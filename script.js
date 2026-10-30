/* =========================================
   12 DAYS FOR VEGA
   Made with love by Deneb ♡
========================================= */

// SETTINGS

const TEST_MODE = true;

const START_DATE = new Date(2026, 10, 1, 0, 0, 0);
const BIRTHDAY = new Date(2026, 10, 12, 0, 0, 0);

const VEGA_WEBSITE = "https://vega-birthday.vercel.app";

const PUZZLE_IMAGE = "images/jpg.png.png";
const FAMILY_IMAGE = "family.png";


// DAY CONTENT

const daysData = [

    {
        day: 1,
        date: "November 1",
        title: "A Little Beginning",
        subtitle: "Letter 01",
        password: "Vega",

        content: `
            <div class="letter-content">
                <p>Hey Jadduuu,</p>

                <p>
                    Aa 12 days tari birthday sudhi na countdown karta
                    ghana special chhe. Aaje bas ek nani vaat kehvi chhe:
                    tu mara mate genuinely special chhe.
                </p>

                <p>
                    Taro way of being, tari little habits, tari smile
                    ane tari sathe ni nani nani moments — badhu j
                    mara mate meaningful chhe.
                </p>

                <p>And this is just the beginning. ♡</p>

                <p class="signature">With love, Deneb ✨</p>
            </div>
        `
    },

    {
        day: 2,
        date: "November 2",
        title: "The Vega Files",
        subtitle: "Classified Mission 002",
        password: "Jabbaa",
        type: "mission"
    },

    {
        day: 3,
        date: "November 3",
        title: "The Little Things",
        subtitle: "Letter 02",
        password: "iloveyou",

        content: `
            <div class="letter-content">
                <p>Dear Jaddu,</p>

                <p>
                    Sometimes it's not the big things that make someone
                    special. It's the little things.
                </p>

                <p>
                    The way you talk, the way you react to things,
                    your expressions, your random moments and all
                    those little things that you probably don't even notice.
                </p>

                <p>
                    I notice them. And honestly, those little things
                    make you YOU.
                </p>

                <p class="signature">Always, Deneb ♡</p>
            </div>
        `
    },

    {
        day: 4,
        date: "November 4",
        title: "Put Us Together",
        subtitle: "A little puzzle",
        password: "iykyk",
        type: "puzzle"
    },

    {
        day: 5,
        date: "November 5",
        title: "His Universe & Our Future Dreams",
        subtitle: "A little glimpse of our dreams",
        password: "1111",
        type: "dreamPhoto"
    },

    {
        day: 6,
        date: "November 6",
        title: "Our Little Playlist",
        subtitle: "Songs that feel like us",
        password: "Note",
        type: "playlist"
    },

    {
        day: 7,
        date: "November 7",
        title: "Things I Admire",
        subtitle: "Letter 04",
        password: "proud",

        content: `
            <div class="letter-content">
                <p>Jadduuu,</p>

                <p>
                    I hope you know how much there is to admire about you.
                    Your personality, your strength, your way of handling
                    things and the person you are becoming.
                </p>

                <p>
                    I admire the little efforts you make, even the ones
                    nobody notices. I admire your ability to keep going
                    and your own unique way of looking at life.
                </p>

                <p>
                    Never underestimate yourself.
                    You have so much potential.
                </p>

                <p class="signature">I'm proud of you. ♡</p>
            </div>
        `
    },

    {
        day: 8,
        date: "November 8",
        title: "The Jaddu Awards",
        subtitle: "A very serious award ceremony",
        password: "kesarmodak",
        type: "awards"
    },

    {
        day: 9,
        date: "November 9",
        title: "The Person You Are",
        subtitle: "Letter 05",
        password: "BT",

        content: `
            <div class="letter-content">
                <p>Dear Jaddu,</p>

                <p>
                    One thing I really appreciate about you is the person
                    you are with the people around you.
                </p>

                <p>
                    Your family, your friends and the people who are part
                    of your life all contribute to the person you are today.
                </p>

                <p>
                    I hope you always stay connected to the people who
                    genuinely matter to you. I hope you keep creating
                    beautiful memories with them.
                </p>

                <p>
                    Never forget how much you mean to the people
                    who care about you.
                </p>

                <p class="signature">With love, Deneb ♡</p>
            </div>
        `
    },

    {
        day: 10,
        date: "November 10",
        title: "A Little Constellation",
        subtitle: "Find us among the stars",
        password: "Altair",
        type: "constellation"
    },

    {
        day: 11,
        date: "November 11",
        title: "One More Thing",
        subtitle: "Letter 06",
        password: "Finale",

        content: `
            <div class="letter-content">
                <p>My Jaddu,</p>

                <p>
                    Tomorrow is your day, but before it arrives,
                    I want you to know something.
                </p>

                <p>
                    I'm really glad our paths crossed.
                    I'm glad for the memories, the laughter,
                    the conversations and all the little moments
                    that have become special.
                </p>

                <p>
                    I don't know what every tomorrow will look like,
                    but I hope yours is filled with happiness,
                    peace, adventures and everything your heart wishes for.
                </p>

                <p>You deserve beautiful things.</p>

                <p class="signature">See you tomorrow, Vega. ❤️</p>
            </div>
        `
    },

    {
        day: 12,
        date: "November 12",
        title: "Happy Birthday, Vega!",
        subtitle: "The final reveal",
        password: "Happybirthday",
        type: "final"
    }

];


// ELEMENTS

const daysGrid = document.getElementById("daysGrid");

const passwordModal = document.getElementById("passwordModal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const passwordForm = document.getElementById("passwordForm");
const dayPassword = document.getElementById("dayPassword");
const passwordError = document.getElementById("passwordError");

const surpriseModal = document.getElementById("surpriseModal");
const surpriseBody = document.getElementById("surpriseBody");

let selectedDay = null;


// DATE HELPERS

function isDayAvailable(dayNumber) {

    if (TEST_MODE) return true;

    const today = new Date();

    const unlockDate = new Date(
        2026,
        10,
        dayNumber,
        0,
        0,
        0
    );

    return today >= unlockDate;
}


// COUNTDOWN

function updateCountdown() {

    const now = new Date();

    // UPDATED: Countdown till November 12, 2026
    const difference = BIRTHDAY.getTime() - now.getTime();

    const daysElement = document.getElementById("days");
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");
    const caption = document.getElementById("countdownCaption");

    if (!daysElement || !hoursElement ||
        !minutesElement || !secondsElement) {
        return;
    }

    if (difference <= 0) {

        daysElement.textContent = "00";
        hoursElement.textContent = "00";
        minutesElement.textContent = "00";
        secondsElement.textContent = "00";

        if (caption) {
            caption.textContent = "The 12 days have begun! ✨";
        }

        return;
    }

    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (difference / 1000) % 60
    );

    daysElement.textContent = String(days).padStart(2, "0");
    hoursElement.textContent = String(hours).padStart(2, "0");
    minutesElement.textContent = String(minutes).padStart(2, "0");
    secondsElement.textContent = String(seconds).padStart(2, "0");

    if (caption) {
        caption.textContent = "Until the journey begins...";
    }
}

updateCountdown();
setInterval(updateCountdown, 1000);


// CREATE DAY CARDS

function renderDays() {

    if (!daysGrid) return;

    daysGrid.innerHTML = "";

    daysData.forEach((day) => {

        const available = isDayAvailable(day.day);

        const card = document.createElement("button");

        card.type = "button";
        card.className = "day-card";

        card.innerHTML = `
            <div class="day-card-top">
                <span class="day-number">
                    DAY ${String(day.day).padStart(2, "0")}
                </span>

                <span class="day-lock">
                    ${available ? "🔒" : "🔐"}
                </span>
            </div>

            <h3>${day.title}</h3>

            <p>${day.date}</p>

            <span class="day-card-link">
                ${available ? "ENTER YOUR DAY →" : "COMING SOON"}
            </span>
        `;

        if (!available) {

            card.classList.add("locked");
            card.disabled = true;

        } else {

            card.addEventListener("click", () => {
                openPasswordModal(day);
            });

        }

        daysGrid.appendChild(card);

    });
}

renderDays();


// PASSWORD MODAL

function openPasswordModal(day) {

    selectedDay = day;

    modalTitle.textContent =
        `DAY ${String(day.day).padStart(2, "0")}`;

    modalDescription.textContent =
        "Every little secret has a key. Enter yours to unlock this day.";

    dayPassword.value = "";
    passwordError.textContent = "";

    passwordModal.classList.add("active");

    dayPassword.focus();
}

function hidePasswordModal() {

    passwordModal.classList.remove("active");

    selectedDay = null;
}

document.querySelector("[data-close-password]")
    .addEventListener("click", hidePasswordModal);

passwordForm.addEventListener("submit", (event) => {

    event.preventDefault();

    if (!selectedDay) return;

    const enteredPassword = dayPassword.value.trim();

    if (
        enteredPassword.toLowerCase() ===
        selectedDay.password.toLowerCase()
    ) {

        const day = selectedDay;

        hidePasswordModal();

        openSurprise(day);

    } else {

        passwordError.textContent =
            "Not quite, Jaddu! Try again. ♡";

        dayPassword.value = "";
        dayPassword.focus();

    }

});


// SURPRISE MODAL

function openSurprise(day) {

    if (!surpriseModal) return;

    let content = "";

    if (day.type === "puzzle") {

        content = createPuzzleHTML();

    } else if (day.type === "mission") {

        content = createMissionHTML();

    } else if (day.type === "dreamPhoto") {

        content = createDreamPhotoHTML();

    } else if (day.type === "playlist") {

        content = createPlaylistHTML();

    } else if (day.type === "awards") {

        content = createAwardsHTML();

    } else if (day.type === "constellation") {

        content = createConstellationHTML();

    } else if (day.type === "final") {

        content = createFinalHTML();

    } else {

        content = day.content;

    }

    surpriseBody.innerHTML = `
        <p class="eyebrow">
            DAY ${String(day.day).padStart(2, "0")} · ${day.subtitle}
        </p>

        <h2>${day.title}</h2>

        ${content}
    `;

    surpriseModal.classList.add("active");

    if (day.type === "puzzle") {
        setupPuzzle();
    }

    if (day.type === "mission") {
        setupMission();
    }
}

function hideSurpriseModal() {

    surpriseModal.classList.remove("active");
}

document.querySelector("[data-close-surprise]")
    .addEventListener("click", hideSurpriseModal);


// DAY 2: THE VEGA FILES

function createMissionHTML() {

    return `
        <div class="mission-content">

            <p class="mission-label">
                CLASSIFIED FILE · MISSION 002
            </p>

            <p>
                Agent Jaddu, your mission has officially begun.
                Solve all three clues to unlock your secret message.
            </p>

            <div class="mission-progress" id="missionProgress">
                CLUE 01 OF 03
            </div>

            <div class="mission-clue">

                <h3 id="clueTitle">CLUE 01</h3>

                <p id="clueQuestion"></p>

                <input
                    type="text"
                    id="missionAnswer"
                    class="mission-input"
                    placeholder="Enter your answer"
                    autocomplete="off"
                >

                <button
                    type="button"
                    id="missionSubmit"
                    class="mission-button">
                    SUBMIT ANSWER →
                </button>

                <p
                    id="missionFeedback"
                    class="mission-feedback">
                </p>

            </div>

            <div id="missionResult"></div>

        </div>
    `;
}

function setupMission() {

    const clues = [

        {
            question:
                "I shine in the constellation Lyra and I am one of the brightest stars in the night sky. Who am I?",

            answer: "vega"
        },

        {
            question:
                "Vega's birthday is on November __. Which number completes the date?",

            answer: "12"
        },

        {
            question:
                "Deneb is the star name of the person who created this little universe. Who is she?",

            answer: "deneb"
        }

    ];

    let currentClue = 0;

    const question = document.getElementById("clueQuestion");
    const title = document.getElementById("clueTitle");
    const progress = document.getElementById("missionProgress");

    const input = document.getElementById("missionAnswer");
    const submit = document.getElementById("missionSubmit");
    const feedback = document.getElementById("missionFeedback");

    const result = document.getElementById("missionResult");

    function showClue() {

        title.textContent =
            `CLUE 0${currentClue + 1}`;

        question.textContent =
            clues[currentClue].question;

        progress.textContent =
            `CLUE 0${currentClue + 1} OF 03`;

        input.value = "";
        feedback.textContent = "";

        input.focus();
    }

    submit.addEventListener("click", () => {

        const answer = input.value.trim().toLowerCase();

        if (!answer) {

            feedback.textContent = "Enter your answer first!";

            return;
        }

        if (answer === clues[currentClue].answer) {

            feedback.textContent = "Correct! ✨";

            currentClue++;

            if (currentClue < clues.length) {

                setTimeout(showClue, 650);

            } else {

                document.querySelector(".mission-clue").style.display =
                    "none";

                progress.textContent = "ALL CLUES SOLVED";

                result.innerHTML = `
                    <div class="mission-complete">

                        <h2>MISSION COMPLETED! ✨</h2>

                        <p>
                            AGENT JADDU, YOU DID IT!
                        </p>

                        <p>
                            You have been selected for a very
                            special universe.
                        </p>

                        <p>
                            Your next mission is simple:
                            keep being YOU.
                        </p>

                        <p class="signature">
                            With love, Deneb ♡
                        </p>

                    </div>
                `;

            }

        } else {

            feedback.textContent =
                "Incorrect answer, Agent! Try again. ♡";

        }

    });

    input.addEventListener("keydown", (event) => {

        if (event.key === "Enter") {
            submit.click();
        }

    });

    showClue();
}


// DAY 4: PHOTO PUZZLE

function createPuzzleHTML() {

    return `
        <div class="puzzle-content">

            <p>Every little piece belongs somewhere.</p>

            <p>
                Complete this little puzzle to reveal something special.
            </p>

            <p class="puzzle-instruction">
                Tap two pieces to swap them and complete the picture!
            </p>

            <div id="puzzleBoard" class="puzzle-board"></div>

            <p id="puzzleMessage" class="puzzle-message"></p>

        </div>
    `;
}

function setupPuzzle() {

    const board = document.getElementById("puzzleBoard");
    const message = document.getElementById("puzzleMessage");

    if (!board) return;

    const totalPieces = 16;

    let pieces = Array.from(
        { length: totalPieces },
        (_, index) => index
    );

    let selectedPiece = null;
    let completed = false;

    do {

        for (let i = pieces.length - 1; i > 0; i--) {

            const j = Math.floor(Math.random() * (i + 1));

            [pieces[i], pieces[j]] =
                [pieces[j], pieces[i]];

        }

    } while (pieces.every((piece, index) => piece === index));


    function drawPuzzle() {

        board.innerHTML = "";

        pieces.forEach((piece, index) => {

            const tile = document.createElement("button");

            tile.type = "button";
            tile.className = "puzzle-piece";

            const row = Math.floor(piece / 4);
            const column = piece % 4;

            tile.style.backgroundImage =
                `url("${PUZZLE_IMAGE}")`;

            tile.style.backgroundSize = "400% 400%";

            tile.style.backgroundPosition =
                `${column * 100 / 3}% ${row * 100 / 3}%`;

            if (selectedPiece === index) {
                tile.classList.add("selected");
            }

            tile.addEventListener("click", () => {

                if (completed) return;

                if (selectedPiece === null) {

                    selectedPiece = index;
                    drawPuzzle();

                    return;
                }

                if (selectedPiece === index) {

                    selectedPiece = null;
                    drawPuzzle();

                    return;
                }

                [pieces[selectedPiece], pieces[index]] =
                    [pieces[index], pieces[selectedPiece]];

                selectedPiece = null;

                drawPuzzle();
                checkPuzzle();

            });

            board.appendChild(tile);

        });

    }

    function checkPuzzle() {

        const isComplete = pieces.every(
            (piece, index) => piece === index
        );

        if (isComplete) {

            completed = true;

            message.innerHTML = `
                <h2>I LOVE YOU, JADDUUU! ❤️</h2>

                <p>
                    Every little piece belongs somewhere.
                    I'm glad our paths crossed.
                </p>

                <p>♡ VEGA & DENEB ♡</p>
            `;

        }

    }

    const imageTest = new Image();

    imageTest.onload = () => {
        drawPuzzle();
    };

    imageTest.onerror = () => {

        board.innerHTML = `
            <p class="puzzle-error">
                Image could not load.
                Check the image path: ${PUZZLE_IMAGE}
            </p>
        `;

    };

    imageTest.src = PUZZLE_IMAGE;
}


// DAY 5: HIS UNIVERSE & OUR FUTURE DREAMS

function createDreamPhotoHTML() {

    return `
        <div class="dream-photo-content">

            <p>
                A little glimpse of the people,
                memories and moments that make life beautiful.
            </p>

            <div class="dream-photo-wrap">

                <img
                    src="${FAMILY_IMAGE}"
                    alt="His Universe and Our Future Dreams"
                    class="dream-photo"
                >

            </div>

            <p class="dream-caption">
                His Universe & Our Future Dreams ♡
            </p>

            <p class="dream-subtitle">
                SOME DREAMS ARE EVEN MORE BEAUTIFUL WHEN SHARED.
            </p>

        </div>
    `;
}


// DAY 6: PLAYLIST

function createPlaylistHTML() {

    const songs = [

        {
            name: "Be My Baby",
            artist: "The Ronettes",
            link: "https://www.youtube.com/watch?v=0NXnRmoILSs"
        },

        {
            name: "Reflections",
            artist: "The Neighbourhood",
            link: "https://www.youtube.com/watch?v=hejXc_FSYb8"
        },

        {
            name: "Humsafar",
            artist: "Saiyaara",
            link: "https://www.youtube.com/watch?v=4tPJPE4uOEo"
        },

        {
            name: "Tere Bin",
            artist: "Simmba",
            link: "https://www.youtube.com/watch?v=GJNdR_MKuDM"
        }

    ];

    return `
        <div class="playlist-content">

            <p>Some songs just feel different.</p>

            <p>Here are a few for you, Jaddu. ♡</p>

            <div class="playlist">

                ${songs.map((song, index) => `

                    <a
                        class="song-card"
                        href="${song.link}"
                        target="_blank"
                        rel="noopener noreferrer">

                        <span class="song-number">
                            ${String(index + 1).padStart(2, "0")}
                        </span>

                        <span class="song-info">
                            <strong>${song.name}</strong>
                            <small>${song.artist}</small>
                        </span>

                        <span class="song-play">▶</span>

                    </a>

                `).join("")}

            </div>

            <p class="playlist-footer">
                PRESS PLAY AND ENJOY YOUR LITTLE PLAYLIST 🎧
            </p>

        </div>
    `;
}


// DAY 8: JADDU AWARDS

function createAwardsHTML() {

    const awards = [

        {
            title: "The Main Character Award",
            description: "For making even ordinary moments memorable."
        },

        {
            title: "The Certified Jabbaa Award",
            description: "Because being Jaddu is a full-time personality."
        },

        {
            title: "The Best Smile Award",
            description: "No explanation needed. You know why."
        },

        {
            title: "The Kesar Modak Award",
            description: "A very exclusive award. Only for you!"
        },

        {
            title: "The One & Only Award",
            description: "Because there is no replacement for you."
        }

    ];

    return `
        <div class="awards-content">

            <p>
                Welcome to the most prestigious award ceremony ever.
            </p>

            <h2>THE JADDU AWARDS 🏆</h2>

            ${awards.map((award, index) => `

                <div class="award-card">

                    <span class="award-number">
                        AWARD ${String(index + 1).padStart(2, "0")}
                    </span>

                    <h3>${award.title}</h3>

                    <p>${award.description}</p>

                </div>

            `).join("")}

            <p class="signature">
                Congratulations, Jaddu. You deserve them all! ♡
            </p>

        </div>
    `;
}


// DAY 10: CONSTELLATION

function createConstellationHTML() {

    return `
        <div class="constellation-content">

            <p>
                Three stars. Three names. One little universe.
            </p>

            <div class="constellation">

                <svg viewBox="0 0 340 280"
                     role="img"
                     aria-label="Vega, Deneb and Altair constellation">

                    <line x1="75" y1="205" x2="170" y2="45"></line>

                    <line x1="170" y1="45" x2="270" y2="205"></line>

                    <line x1="75" y1="205" x2="270" y2="205"></line>

                    <circle cx="75" cy="205" r="7"></circle>

                    <circle cx="170" cy="45" r="7"></circle>

                    <circle cx="270" cy="205" r="7"></circle>

                    <text x="75" y="235">DENEB</text>

                    <text x="170" y="23">VEGA</text>

                    <text x="270" y="235">ALTAIR</text>

                </svg>

            </div>

            <div class="star-details">

                <p><strong>VEGA</strong> — Nihar</p>

                <p><strong>DENEB</strong> — Me</p>

                <p><strong>ALTAIR</strong> — Ira</p>

            </div>

            <p>
                Different stars, connected in one constellation.
                Some connections are just written in the stars. ✨
            </p>

        </div>
    `;
}


// DAY 12: FINAL REVEAL

function createFinalHTML() {

    return `
        <div class="final-content">

            <div class="final-stars">✦ ✧ ✦</div>

            <h1>HAPPY BIRTHDAY!</h1>

            <h2>MY VEGA, YOU'RE 19! ❤️</h2>

            <p class="final-access">
                ACCESS GRANTED.
            </p>

            <p>
                One last door. One entire universe.
            </p>

            <p class="final-message">
                YOUR VEGA IS WAITING.
            </p>

            <a
                class="final-link"
                href="${VEGA_WEBSITE}"
                target="_blank"
                rel="noopener noreferrer">

                ENTER YOUR UNIVERSE ✨

            </a>

            <p class="signature">
                Made with love by Deneb ♡
            </p>

        </div>
    `;
}


// CLOSE MODALS ON BACKGROUND CLICK

passwordModal.addEventListener("click", (event) => {

    if (event.target === passwordModal) {
        hidePasswordModal();
    }

});

surpriseModal.addEventListener("click", (event) => {

    if (event.target === surpriseModal) {
        hideSurpriseModal();
    }

});


// ESCAPE KEY

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        hidePasswordModal();
        hideSurpriseModal();

    }

});


// END

console.log("12 Days for Vega — Ready for launch! ✨");