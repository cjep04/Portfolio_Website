document.addEventListener("DOMContentLoaded", () => {
    const scrollLine = document.querySelector('.scroll-line');

    if (scrollLine) {
        window.addEventListener('scroll', () => {
            const scrollTop = window.scrollY; // Pixels scrolled from the top
            const docHeight = document.body.scrollHeight - window.innerHeight; // Total scrollable height
            const scrollPercent = (scrollTop / docHeight) * 100; // Scroll percentage

            console.log("Scroll Percent:", scrollPercent); // Debug log
            scrollLine.style.width = scrollPercent + '%';
        });
    } else {
        console.error("Scroll-line element not found!");
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const skillFills = document.querySelectorAll('.skill-fill');

    const animateSkills = () => {
        skillFills.forEach(skill => {
            const width = skill.style.width;
            skill.style.width = width; // Trigger the animation
        });
    };

    // Observe when the skills section is visible
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkills();
            }
        });
    });

    observer.observe(document.querySelector('#skills_section'));
});

document.addEventListener("DOMContentLoaded", () => {
    // Scroll-to-Top Button
    const scrollToTopBtn = document.querySelector("#scroll-to-top");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add("show");
        } else {
            scrollToTopBtn.classList.remove("show");
        }
    });

    scrollToTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Existing Scroll Line and Skills Animation Logic
    const scrollLine = document.querySelector('.scroll-line');
    if (scrollLine) {
        window.addEventListener('scroll', () => {
            const scrollTop = window.scrollY;
            const docHeight = document.body.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            scrollLine.style.width = scrollPercent + '%';
        });
    }

    const skillFills = document.querySelectorAll('.skill-fill');
    const skillsSection = document.querySelector('#skills_section');
    if (skillsSection) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    skillFills.forEach(skill => {
                        const width = skill.getAttribute('style').match(/width:\s*(\d+)%/)[1];
                        skill.style.width = `${width}%`;
                    });
                }
            });
        });
        observer.observe(skillsSection);
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const comingTexts = document.querySelectorAll('.coming-text');
    const phrases = ["Coming Soon...", "Exciting Projects Loading...", "Stay Tuned!"];

    comingTexts.forEach((text, index) => {
        let charIndex = 0;
        let phraseIndex = 0;

        const type = () => {
            const phrase = phrases[phraseIndex];
            if (charIndex < phrase.length) {
                text.textContent += phrase[charIndex];
                charIndex++;
                setTimeout(type, 100);
            } else {
                setTimeout(() => {
                    erase();
                }, 1500); // Wait before erasing
            }
        };

        const erase = () => {
            if (charIndex > 0) {
                text.textContent = text.textContent.slice(0, -1);
                charIndex--;
                setTimeout(erase, 50);
            } else {
                phraseIndex = (phraseIndex + 1) % phrases.length; // Move to the next phrase
                setTimeout(type, 500); // Wait before typing again
            }
        };

        type();
    });
});

const skillFills = document.querySelectorAll('.skill-fill');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            skillFills.forEach(skill => {
                const width = skill.getAttribute('style').match(/width:\s*(\d+)%/)[1];
                skill.style.width = `${width}%`;
            });
        }
    });
});

observer.observe(document.querySelector('#skills_section'));

function toggleMenu() {
    const navItems = document.querySelector('.nav_items');
    navItems.classList.toggle('show');
}