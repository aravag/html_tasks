const prefersDarkTheme = window.matchMedia('(prefers-color-scheme: dark)');
const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const randomChar = () => chars[Math.floor(Math.random() * (chars.length - 1))],
    randomString = length => Array.from(Array(length)).map(randomChar).join("");
const letters = document.querySelector(".card-letters");

if (prefersDarkTheme.matches) {
    document.documentElement.setAttribute('color-scheme', 'dark');
} else {
    document.documentElement.setAttribute('color-scheme', 'light');
}

const schemeToggle = document.querySelector('.scheme-toggle');
schemeToggle.addEventListener('click', () => {
    if (document.documentElement.getAttribute('color-scheme') === 'dark') {
        document.documentElement.setAttribute('color-scheme', 'light');
    } else {
        document.documentElement.setAttribute('color-scheme', 'dark');
    }
})

let interval = setInterval(() => {
    letters.innerText = randomString(3000);
}, 100);

document.querySelectorAll('.cards').forEach((cards) => {
    cards.onmousemove = e => {
        for (const card of document.querySelectorAll('.card')) {
            const rect = card.getBoundingClientRect();
    
            x = e.clientX - rect.left;
            y = e.clientY - rect.top;
    
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        }
    }
});