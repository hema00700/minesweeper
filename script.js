let level = 1;
let time = 0;
let timerInterval;
let highScore = localStorage.getItem("highScore") || 0;
document.getElementById("highScore").textContent = highScore;
document.getElementById("level").textContent = level;

document.getElementById("startGameBtn").addEventListener("click", startGame);
document.getElementById("homeBtn").addEventListener("click", goToHome);
document.getElementById("restartBtn").addEventListener("click", restartGame);

function startGame() {
    document.getElementById("mainPage").style.display = "none";  // إخفاء الصفحة الرئيسية
    document.getElementById("gamePage").style.display = "block"; // إظهار اللعبة

    // تنفيذ كل شيء متعلق باللعبة هنا...
    startTimer(); // بدء العداد
    createGameBoard(); // إنشاء اللوحة
}

function goToHome() {
    document.getElementById("mainPage").style.display = "block";  // إظهار الصفحة الرئيسية
    document.getElementById("gamePage").style.display = "none"; // إخفاء اللعبة
    stopTimer();  // إيقاف العداد
}

function restartGame() {
    level = 1;
    time = 0;
    document.getElementById("level").textContent = level;
    document.getElementById("timer").textContent = time;
    startGame();  // إعادة تشغيل اللعبة
}

function startTimer() {
    time = 0;
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        time++;
        document.getElementById("timer").textContent = time;
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function createGameBoard() {
    // هنا تكتب الكود الخاص باللعبة نفسه (توليد الألغام، الخانات، إلخ...)
}
