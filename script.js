/*About Me Section */

document.addEventListener("DOMContentLoaded", function () {
    const text = `
    Welcome to Skye Codes! I’m a final-year Computer Science student with a passion for developing websites and web apps that combine functionality with style. I believe that neither should be sacrificed for the other.

    In my career, I like to think of myself as an all-rounder. C# was my first language, but data science has captured my heart. I’m dedicated to leveraging its technologies to build models, analyze data, and create real-world solutions.

    I have a deep love for developing software that solves problems, and whether I’m designing efficient systems or diving into data analysis, my goal is to always make an impact. With experience working with clusters and Linux, I enjoy integrating that knowledge into my projects to optimize performance and reliability.
    `;

    const words = text.split(' '); // Split text into words
    let index = 0;
    const speed = 200; // Typing speed in milliseconds (per word)
    const typedTextElement = document.getElementById('typed-text');

    function typeText() {
        if (index < words.length) {
            typedTextElement.innerHTML += words[index] + ' ';
            index++;
            setTimeout(typeText, speed);
        }
    }

    typeText(); // Start typing effect
});


    