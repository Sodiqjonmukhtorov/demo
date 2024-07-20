document.getElementById('speakBtn').addEventListener('click', function() {
    const text = document.getElementById('textInput').value;
    if (text.trim() === '') {
        alert('Please enter some text');
        return;
    }
    
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
});
