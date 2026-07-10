let count = 10;

const funnyPhrases = [
    "Wait, there's another box inside?",
    "Seriously? Another one?! Keep opening!",
    "Is this joke getting old yet? Unbox it!",
    "I promise there is a real gift eventually...",
    "Layer number 5. Halfway there!",
    "Your fingers must be getting tired.",
    "Almost there, don't give up now!",
    "Okay, this is getting ridiculous.",
    "The absolute final layer! Click it!!!",
];

const colors = ["#ff4757", "#2ed573", "#1e90ff", "#ffa502", "#9b59b6", "#1abc9c", "#e67e22", "#fd79a8"];
const ribbonColors = ["#ffa502", "#ffffff", "#ff4757", "#2ed573", "#f1c40f", "#341f97"];

const giftBox = document.getElementById('gift-box');
const boxCountElement = document.getElementById('box-count');
const messageElement = document.getElementById('message');
const gameUi = document.getElementById('game-ui');
const finalGift = document.getElementById('final-gift');

giftBox.addEventListener('click', () => {
    count--;
    
    if (count <= 0) {
        gameUi.classList.add('hidden');
        finalGift.classList.remove('hidden');
        return;
    }

    boxCountElement.textContent = count;
    
    const phraseIdx = 10 - count - 1;
    messageElement.textContent = funnyPhrases[phraseIdx] || "Keep unwrapping!";

    const randomBoxColor = colors[Math.floor(Math.random() * colors.length)];
    const randomRibbonColor = ribbonColors[Math.floor(Math.random() * ribbonColors.length)];
    
    document.querySelector('.box').style.backgroundColor = randomBoxColor;
    document.querySelectorAll('.ribbon-v, .ribbon-h').forEach(ribbon => {
        ribbon.style.backgroundColor = randomRibbonColor;
    });

    const dynamicScaleFactor = (count / 10) + 0.35; 
    const newDimensionSize = Math.floor(220 * dynamicScaleFactor);
    giftBox.style.width = newDimensionSize + 'px';
    giftBox.style.height = newDimensionSize + 'px';
});
