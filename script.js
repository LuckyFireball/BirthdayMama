let count = 65;
const totalLayers = 65;

const funnyPhrases = [
    "Wait, there's another box inside?",
    "Seriously? Another one?! Keep opening!",
    "Is this joke getting old yet? Unbox it!",
    "I promise there is a real gift eventually...",
    "Layer 5... Still standard protocol.",
    "Your fingers must be getting tired.",
    "Almost there... Just kidding, not even close!",
    "Okay, this is getting ridiculous.",
    "Layer 9! Double digits soon!",
    "Welcome to double digits. Box 10!",
    "Are you questioning your life choices yet?",
    "Statistically, you are doing great.",
    "Another fine box added to your collection.",
    "What if the gift is just another box?",
    "Layer 15. Your persistence is legendary.",
    "Clicking simulator 2026.",
    "Mama, please don't be mad at me.",
    "Look at that fresh box color though!",
    "Are we having fun yet?",
    "Layer 20! Woohoo! Passing a milestone!",
    "Breaking news: There is still another box.",
    "The box factory loves you.",
    "Cardio for your index finger.",
    "I should have made it 100 layers.",
    "Layer 25! Keep going, champion!",
    "Error 404: Gift not found yet.",
    "Still wrapper than a rapper.",
    "Unwrap, click, repeat.",
    "Is it a puppy? No, it's a box.",
    "Halfway to 60! Layer 30!",
    "We are approaching the deep lore of boxes.",
    "Box physics are functioning perfectly.",
    "Legend says she is still clicking.",
    "A box inside a box inside a box...",
    "Layer 35! Over the hump!",
    "Your patience is incredible.",
    "I promise I didn't hard-wire it to loop forever.",
    "Box software update complete.",
    "Generating more cardboard...",
    "Layer 40! You are an absolute warrior!",
    "The gift wrapping bill was astronomical.",
    "Are your thumbs okay?",
    "Just a casual 65-layer nesting doll.",
    "Almost in the home stretch!",
    "Layer 45! The horizon is near!",
    "Can you feel the anticipation?",
    "Cardboard levels are reaching critical mass.",
    "Don't look at the counter, look at the colors!",
    "The reward will be worth it!",
    "Layer 50! SINGLE DIGITS REMAINING SOON!",
    "The tension is palpable.",
    "Unboxing level: Expert.",
    "Are you clicking faster now?",
    "We are breaking records here.",
    "Layer 55! Ten more until the final ten!",
    "Only 10 layers left until the absolute final countdown!",
    "Box 57. Solid cardboard.",
    "Box 58. Getting smaller!",
    "Box 59. Tiny but mighty!",
    "Sixty! Only 5 more boxes left!",
    "Four left! The real prize awaits!",
    "Three left! Don't look away!",
    "Two left! Unbelievable determination!",
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
    
    const phraseIdx = totalLayers - count - 1;
    messageElement.textContent = funnyPhrases[phraseIdx] || "Keep unwrapping!";
    
    const randomBoxColor = colors[Math.floor(Math.random() * colors.length)];
    const randomRibbonColor = ribbonColors[Math.floor(Math.random() * ribbonColors.length)];
    
    document.querySelector('.box').style.backgroundColor = randomBoxColor;
    document.querySelectorAll('.ribbon-v, .ribbon-h').forEach(ribbon => {
        ribbon.style.backgroundColor = randomRibbonColor;
    });
    
    const dynamicScaleFactor = (count / totalLayers) * 0.55 + 0.45;
    const newDimensionSize = Math.floor(220 * dynamicScaleFactor);
    
    giftBox.style.width = newDimensionSize + 'px';
    giftBox.style.height = newDimensionSize + 'px';
});
