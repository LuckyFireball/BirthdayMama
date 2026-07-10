let currentLevel = 1;
const levelLayers =;
let count = levelLayers[0];

const funnyPhrases = [
    "Wait, another box inside?!",
    "Keep clicking, keep unwrapping!",
    "Is this package endless?!",
    "Wow, you are highly determined!",
    "Are your fingers getting tired yet?",
    "I promise a real gift is coming...",
    "So many layers, so much paper!",
    "Keep going! Don't give up!",
    "Unbelievable, another wrapper!",
    "The boxes just keep changing size!",
    "You are unlocking this super fast!",
    "This is becoming legendary!",
    "The ultimate test of endurance!",
    "Almost through this stack!",
    "Brace yourself, the inner layer awaits!"
];

const colors = ["crimson", "limegreen", "dodgerblue", "orange", "purple", "teal", "darkorange", "hotpink"];
const ribbonColors = ["orange", "white", "crimson", "limegreen", "gold", "indigo"];

const giftBox = document.getElementById('gift-box');
const boxCountElement = document.getElementById('box-count');
const messageElement = document.getElementById('message');
const levelBadge = document.getElementById('level-badge');
const gameUi = document.getElementById('game-ui');
const finalGift = document.getElementById('final-gift');

boxCountElement.textContent = count;

giftBox.addEventListener('click', () => {
    count--;
    
    if (count <= 0) {
        if (currentLevel < 5) {
            currentLevel++;
            count = levelLayers[currentLevel - 1];
            levelBadge.textContent = currentLevel === 5 ? "FINAL LEVEL" : "LEVEL " + currentLevel;
            boxCountElement.textContent = count;
            messageElement.textContent = "🚀 LEVEL UP! Welcome to Level " + currentLevel + "!";
            return;
        } else {
            gameUi.classList.add('hidden');
            finalGift.classList.remove('hidden');
            return;
        }
    }

    boxCountElement.textContent = count;
    
    const totalForLevel = levelLayers[currentLevel - 1];
    const progressIndex = Math.floor(((totalForLevel - count) / totalForLevel) * funnyPhrases.length);
    messageElement.textContent = funnyPhrases[progressIndex] || "Keep unwrapping!";

    const randomBoxColor = colors[Math.floor(Math.random() * colors.length)];
    const randomRibbonColor = ribbonColors[Math.floor(Math.random() * ribbonColors.length)];
    
    document.querySelector('.box').style.backgroundColor = randomBoxColor;
    document.querySelectorAll('.ribbon-v, .ribbon-h').forEach(ribbon => {
        ribbon.style.backgroundColor = randomRibbonColor;
    });

    const dynamicScaleFactor = (count / totalForLevel) + 0.35; 
    const newDimensionSize = Math.floor(250 * dynamicScaleFactor);
    giftBox.style.width = newDimensionSize + 'px';
    giftBox.style.height = newDimensionSize + 'px';
});
