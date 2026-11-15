//PASSWORD
const SECRET_PASSWORD = "IRISHSECRETSPACE";

//NOTES
const notesData = [
    {
        bg: "images/yellow-card.png",
        title: "Hello!",
        text: "Hello, ma'am Roan! Thank you for visiting my secret space. I hope you enjoy the notes I left for you. <3"
    },
    {
        bg: "images/violet-card.png",
        title: "Mr. And Ms. Charter 2026",
        text: "Sa Charter po yung una nating event together. Working with you was a pleasure po, ma'am! Gaya po ng sinabi ko before, thankful po ako na very supportive and hands on po kayo, hindi lang kina Max at kuya Ian, but also sa amin din pong student coaches. Galing po sa ASFY na halos kami lang po talaga yung nag-asikaso sa sarili namin despite of being only first year students, to handling a big pageant event na may nagsu-supervise na sa amin, iba po yung relief na na-feel namin. Thank you so much po for trusting and guiding us. That will always be a memorable experience for me po, and it's because you're in it. ^_^"
    },
    {
        bg: "images/yellow-card.png",
        title: "Our Most Slayable Mowm",
        text: "To our most slayable Mowm, ma'am Roan! Hindi lang po pagiging faculty coach, adviser, at subject teacher ang ginampanan niyo sa akin, kundi ang pagiging mother figure na rin po sa akin. When there are times when I feel like I couldn't handle my emotions, especially when it's causing stress and anxiety, you were there to give me advice and cheer me up. Thank you so much for lessening the worries off my shoulders, and for listening to me, even though sometimes I feel like I was just blabbering nonsense. Thank you po for being a great listener, not only to me, but also to other people. Thank you for guiding us and helping us view things in different perspectives. Your wisdom will always have a big impact on me, and I will always be grateful to be under your guidance :>"
    },
    {
        bg: "images/violet-card.png",
        title: "Not A Kind Teacher, But A Good One",
        text: "I entered your class as a student thinking na you're one of the teachers po na mahirap kausap at mahirap lapitan because of the words of the people surrounding me. But I didn't judge you based on what they said, and I am grateful that I didn't because you proved them wrong. I may not know your story, but I know that whoever you are right now, I know that all you want is to spread goodness and kindness to the people around you. I hope you know po na I look up to you as a person. And as much as you give people kindness and love, I hope that you also receive the same amount of love and kindness from the people around you. And I hope that your kindness will never be taken for granted ever again. I hope that people with no good intentions stay away from you. I know that you don't trust people easily and you don't need any more people in your life, esp if they're up to no good, but ate sa ate, I understand you, ma'am Roan <3"
    },
    {
        bg: "images/yellow-card.png",
        title: "From Ate Ja",
        text: "Thank you for everything, ma'am Roan. Thank you for being a great teacher, adviser, and coach. Thank you for being a great listener and a great friend. Thank you for guiding me and helping me grow as a person. Thank you for being a great role model. Thank you for being a great person. I hope that I can be like you when I grow up. I hope that I can be as kind, as wise, and as loving as you are. I hope that I can be as good of a person as you are. Thank you for everything, ma'am Roan. I will always be grateful to have met you and to have been under your guidance."
    },
    {
        bg: "images/violet-card.png",
        title: "From Ate Ja",
        text: "I hope that you will always be happy and healthy. I hope that you will always be surrounded by people who love and care for you. I hope that you will always be successful in everything that you do. I hope that you will always be blessed with good health, good fortune, and good friends. I hope that you will always be happy and content with your life. I hope that you will always be at peace with yourself and with the world around you. I hope that you will always be loved and appreciated for the wonderful person that you are."
    }
];

//DOM ELEMENTS
const loginWrapper = document.getElementById("login-wrapper");
const loginForm = document.getElementById("login-form");
const chalkboard = document.getElementById("chalkboard");
const passwordInput = document.getElementById("password");
const errorMsg = document.getElementById("error-msg");

const noteModal = document.getElementById("note-modal");
const popupNoteCard = document.getElementById("popup-note-card");
const modalTitle = document.getElementById("modal-title");
const modalText = document.getElementById("modal-text");
const hotspots = document.querySelectorAll(".note");

//Form Submit Handler (triggers on button click of pressing enter)
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if (passwordInput.value === SECRET_PASSWORD)
    {
        loginWrapper.style.display = "none";
        chalkboard.style.display = "block";
        errorMsg.style.display = "none";
    }
    else {
        errorMsg.style.display = "block"
    }
});

// Open Note Popup
hotspots.forEach((spot) => {
    spot.addEventListener("click", () => {
        const id = spot.getAttribute("data-id");
        const note = notesData[id];

        if (!note) return; // safety check

        popupNoteCard.style.backgroundImage = `url('${note.bg}')`;
        modalTitle.textContent = note.title;
        modalText.textContent = note.text;

        noteModal.style.display = "flex";
    });
});

// Close Popup when clicking anywhere
noteModal.addEventListener("click", () => {
    noteModal.style.display = "none";
});