const npcMessages = [
    "Bad things are going to happen...",
    "Someone will contact you soon. Be prepared.",
    "I don't think there is any time for explanations or questions...",
    "Why would you want to know who I am?",
    "Curiosity brings no good, did you know that?",
    "Be patient... and don't say I did not warn you..."
];

const optionsList = [
    ["What?", "Bad things always happen unfortunately", "Who are you?"],
    ["Who is this 'someone'?", "Could you maybe elaborate?", "What are you talking about?"],
    ["This is freaking me out a bit so... TELL ME WHO YOU ARE!", "If you're hiding yourself like this, that means you're ugly, right?", "Show up already then."],
    ["Because why not?", "I'm just curious.", "If you want me to trust you then how should I if  I don't know you!"],
    ["Maybe...", "Do I look like I care? I'm always watching my own back so.", "Nothing scares me!"],
    ["Pf, yea sure", "You're mad crazy.", "I still got questions though..."]
];

const npcMessageSound = new Audio("sunete/npc-message.mp3");
const optionClickSound = new Audio("sunete/click-option.mp3");

let messageIndex = 0;
const chatBox = document.getElementById("chat-box");
const typing = document.getElementById("typing");
const options = document.getElementById("options");

function addMessage(text, isNPC = true) {
    let messageDiv = document.createElement("div");
    messageDiv.innerText = text;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;

    if (isNPC) {
        npcMessageSound.play();
    }
}

function selectOption(index) {
    optionClickSound.play();
    addMessage("> " + optionsList[messageIndex][index], false);
    messageIndex++;
    if (messageIndex < npcMessages.length) {
        setTimeout(() => npcResponse(), 1000);
    } else {
        startGame();
    }
}

function npcResponse() {
    typing.style.display = "block";
    setTimeout(() => {
        typing.style.display = "none";
        addMessage(npcMessages[messageIndex]);
        showOptions();
    }, 2000);
}

function startGame() {
    chatBox.innerHTML = "<h3>The conversation has ended.</h3><p>Now, let's play a game!</p>";
    setTimeout(() => {
        window.location.href = "game.html";
    }, 3000);
}

npcResponse();
