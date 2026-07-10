let count = 150;
const totalLayers = 150;

const funnyPhrases = [
    "Wait, there's another box inside?",
    "Seriously? Another one?! Keep opening!",
    "Is this joke getting old yet? Unbox it!",
    "Wow, you are determined. Layer 140!",
    "Still going? There are a LOT of boxes left.",
    "I promise there is a real gift eventually...",
    "Layer 120! You are a champ.",
    "Your fingers must be getting tired.",
    "Are you regretting clicking this yet?",
    "Layer 100! Triple digits!",
    "Keep clicking! Layer 80!",
    "Woohoo! Halfway mark passed!",
    "Layer 60! The boxes are getting smaller.",
    "Okay, this is getting ridiculous.",
    "Layer 40! So close now!",
    "Only 20 layers left! Focus!",
    "The absolute final layer! Click it!!!",
];

const colors = ["crimson", "limegreen", "dodgerblue", "orange", "purple", "teal", "darkorange", "hotpink"];
const ribbonColors = ["orange", "white", "crimson", "limegreen", "gold", "indigo"];

const giftBox = document.getElementById('gift-box');
const boxCountElement = document.getElementById('box-count');
const messageElement = document.getElementById('message');
const gameUi = document.getElementById('game-ui');
const finalGift = document.getElementById('final-gift');

boxCountElement.textContent = count;

giftBox.addEventListener('click', () => {
    count--;
    
    if (count <= 0) {
        gameUi.classList.add('hidden');
        finalGift.classList.remove('hidden');
        return;
    }

    boxCountElement.textContent = count;
    
    const progressIndex = Math.floor(((totalLayers - count) / totalLayers) * funnyPhrases.length);
    messageElement.textContent = funnyPhrases[progressIndex] || "Keep unwrapping!";

    const randomBoxColor = colors[Math.floor(Math.random() * colors.length)];
    const randomRibbonColor = ribbonColors[Math.floor(Math.random() * ribbonColors.length)];
    
    document.querySelector('.box').style.backgroundColor = randomBoxColor;
    document.querySelectorAll('.ribbon-v, .ribbon-h').forEach(ribbon => {
        ribbon.style.backgroundColor = randomRibbonColor;
    });

    const dynamicScaleFactor = (count / totalLayers) + 0.35; 
    const newDimensionSize = Math.floor(250 * dynamicScaleFactor);
    giftBox.style.width = newDimensionSize + 'px';
    giftBox.style.height = newDimensionSize + 'px';
});
