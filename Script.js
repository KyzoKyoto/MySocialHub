let clickCount = {
    youtube: 0,
    tiktok: 0,
    whatsapp: 0
};

let currentPlatform = '';
let currentUrl = '';

// Function untuk buka popup custom
function openLink(url, platform) {
    currentPlatform = platform;
    currentUrl = url;

    document.getElementById('popupMessage').innerText = `Jangan lupa Follow/Subscribe, link ni akan bawak kau ke ${platform}.`;
    document.getElementById('customPopup').style.display = 'flex';
}

// Kalau user confirm
document.getElementById('confirmBtn').addEventListener('click', () => {
    clickCount[currentPlatform]++;
    console.log(`Butang ${currentPlatform} dah ditekan ${clickCount[currentPlatform]} kali.`);

    // Loading animation
    let loadingDiv = document.createElement('div');
    loadingDiv.innerText = `Loading ${currentPlatform}...`;
    loadingDiv.classList.add('loading');

    document.body.appendChild(loadingDiv);

    // Tutup popup
    document.getElementById('customPopup').style.display = 'none';

    // Delay sebelum buka link
    setTimeout(() => {
        window.open(currentUrl, '_blank');
        loadingDiv.remove();
    }, 1500);
});

// Kalau user cancel
document.getElementById('cancelBtn').addEventListener('click', () => {
    console.log(`User batalkan buka ${currentPlatform}.`);
    document.getElementById('customPopup').style.display = 'none';
});