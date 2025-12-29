document.addEventListener('DOMContentLoaded', () => {
    const targetDate = new Date('February 20, 2026 00:00:00').getTime();
    const digitElements = document.querySelectorAll('.digit');

    if (digitElements.length !== 8) {
        console.error('Expected 8 digit elements, found:', digitElements.length);
        return;
    }

    function updateCountdown() {
        const now = new Date().getTime();
        const diff = targetDate - now;

        let timeString;
        if (diff <= 0) {
            timeString = '00000000'; // Event over
        } else {
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);

            timeString =
                String(days).padStart(2, '0') +
                String(hours).padStart(2, '0') +
                String(minutes).padStart(2, '0') +
                String(seconds).padStart(2, '0');
        }

        // Update each digit individually
        for (let i = 0; i < 8; i++) {
            const currentDigit = digitElements[i];
            const newChar = timeString[i];
            if (currentDigit.textContent !== newChar) {
                currentDigit.textContent = newChar;
            }
        }
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
});