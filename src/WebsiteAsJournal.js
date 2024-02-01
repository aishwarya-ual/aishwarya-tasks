function showBox(message) {
    const boxText = document.getElementById('boxText');
    boxText.textContent = message;
    document.getElementById('blackBox').style.display = 'block';
}

function hideBox() {
    document.getElementById('blackBox').style.display = 'none';
}