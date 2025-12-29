document.addEventListener('DOMContentLoaded', () => {
    const targetDate = new Date('December 25, 2026 00:00:00').getTime();
    const digitElements = document.querySelectorAll('.digit');

    if (digitElements.length !== 9) {
        console.error('Expected 9 digit elements (3 for days + 2x3 for H/M/S), found:', digitElements.length);
        return;
    }

    function updateCountdown() {
        const now = new Date().getTime();
        const diff = targetDate - now;

        let timeString;
        if (diff <= 0) {
            timeString = '000000000';
        } else {
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);

            const paddedDays = String(days).padStart(3, '0');
            const paddedHours = String(hours).padStart(2, '0');
            const paddedMinutes = String(minutes).padStart(2, '0');
            const paddedSeconds = String(seconds).padStart(2, '0');

            timeString = paddedDays + paddedHours + paddedMinutes + paddedSeconds;
        }

        for (let i = 0; i < 9; i++) {
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