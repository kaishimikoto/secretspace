//PASSWORD
const SECRET_PASSWORD = "IRISHSECRETSPACE";

//NOTES
const notesData = [
    {
        bg: "images/yellow-card.png",
        title: "Hello!",
        text: "Hello, ma'am Roan! Thank you for visiting my secret space. I hope you enjoy the notes I left for you. <3\n\n(there's a surprise at the end :>)"
    },
    {
        bg: "images/violet-card.png",
        title: "Mr. And Ms. Charter 2026",
        text: "Sa Charter po yung una nating event together, and working with you was a pleasure, ma'am! Gaya po ng nasabi ko before, I'm really thankful na very supportive and hands-on po kayo, hindi lang kina Max at kuya Ian, kundi pati na rin sa aming mga student coach.\n\nGaling po kami sa ASFY kung saan halos kami lang talaga ang nag-asikaso ng lahat, kahit first year students pa lang kami. Kaya noong napunta kami sa isang malaking pageant event na may nagsu-supervise at gumagabay na sa amin, iba po yung relief na naramdaman namin.\n\nThank you so much po for trusting and guiding us. Isa po ito sa mga pinaka-memorable experiences ko, and it's because you were part of it. ^_^"
    },
    {
        bg: "images/yellow-card.png",
        title: "Our Most Slayable Mowm",
        text: "To our most slayable Mowm, ma'am Roan! Hindi lang po pagiging faculty coach, adviser, at subject teacher ang ginampanan ninyo sa akin, kundi pati na rin ang pagiging isang mother figure.\n\nWhenever I felt like I couldn't handle my emotions, especially when stress and anxiety were taking over, you were there to give me advice and cheer me up. Thank you for lightening the worries on my shoulders, and for listening to me even when I felt like I was just blabbering nonsense.\n\nThank you po for being such a great listener, not only to me but also to the people around you. Thank you for guiding us and helping us see things from different perspectives. Your wisdom will always have a big impact on me, and I will always be grateful to be under your guidance. :>"
    },
    {
        bg: "images/violet-card.png",
        title: "Not A Kind Teacher, But A Good One",
        text: "I entered your class thinking na isa po kayo sa mga teacher na mahirap kausap at mahirap lapitan, because of what other people said. But I didn't judge you based on their words, and I'm grateful that I didn't, because you proved them wrong.\n\nI may not know your whole story, but I know that all you want is to spread goodness and kindness to the people around you. I hope you know po na I look up to you as a person.\n\nAs much as you give people kindness and love, I hope you receive the same amount in return. I hope your kindness will never be taken for granted again, and that people with no good intentions will stay away from you. I know you don't trust people easily, and you don't need more people in your life, especially those who are up to no good. But ate sa ate, I understand you, ma'am Roan. <3"
    },
    {
        bg: "images/yellow-card.png",
        title: "From Ate Ja",
        text: "If there's one thing I'm always thankful for, it's that being your student was one of the most beautiful things my college journey has given me. I knew you as my prof nung first yr second sem, someone who would teach me lessons inside the classroom, but little did I know that you would become someone who would mean so much more to me beyond those four walls. Our bond is not as normal as a student-teacher. Salo lahat ng pagalit, frustrations, and everything. I somehow resonate with you, maybe dahil pareho tayong iyakin and hirap mag-speak for ourselves. You became a friend I could laugh with, a sister I could share my stories with, and a mother I could run to whenever I needed comfort, advice, or simply someone who would understand. You have seen different versions of me, celebrated my little victories, listened to my stories, and made me feel loved in ways that I will probably never be able to put into words.\n\nGraduate na ako pero I still find myself looking back and realizing that some of the greatest things I gained in college weren't written on my diploma. Some of them were the people I met, the memories I made, and the relationships I built along the way. And you, ate maam ko, will always be one of the people I will thank life for."
    },
    {
        bg: "images/violet-card.png",
        title: "From Ate Ja",
        text: "I know that things may be different now. I won't get to see you as often as I used to, and I may no longer have the usual reasons to visit you on campus (diretso na kasi ako sa bahay nyo), but I hope you know that graduating doesn't mean outgrowing the people who have become home to us. \n\nThank you for loving me beyond the title of being your student. Thank you for making room for me in your life, for allowing me to be comfortable around you, and for making me feel that I have another family in someone I never expected to find in college. I hope I have made you feel of how much you mean to me. If I could ask for one thing, it would be that life allows us to keep this kind of relationship for many more years. I still want the random kwentuhans, the laughter, the unsolicited advice, the little updates about life, all the moments that remind me that some connections are truly meant to last and of course our bardagulan at panlalait ng ibang tao.\n\nI love you, ate maam ko! Thank you for being my prof, my friend, my sister, my mother, and one of my favorite people! Here lang ako always for youuuu! 💛"
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

popupNoteCard.addEventListener("click", (e) => e.stopPropagation());
