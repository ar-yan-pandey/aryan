// Minimal JavaScript for smooth interactions

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add fade-in animation on load
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.3s ease';

    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 50);
});

// AI Widget Logic
const aiLauncher = document.getElementById('ai-launcher');
const aiModal = document.getElementById('ai-modal');
const closeAi = document.getElementById('close-ai');
const verifyHuman = document.getElementById('verify-human');
const aiContent = document.getElementById('ai-content');

if (aiLauncher && aiModal && closeAi) {
    aiLauncher.addEventListener('click', () => {
        aiModal.classList.remove('hidden');
    });

    closeAi.addEventListener('click', () => {
        aiModal.classList.add('hidden');
    });

    if (verifyHuman) {
        verifyHuman.addEventListener('click', function() {
            if (this.classList.contains('loading') || aiContent.querySelector('.prank-text')) return;

            // Show loading on the checkbox
            this.classList.add('loading');
            
            // Wait 1.2 seconds for dramatic effect
            setTimeout(() => {
                // Directly replace content with prank text without ever showing a tick
                aiContent.innerHTML = `
                    <div class="prank-text">
                        wtf are you doing, is this a life you imagined? <br><br>
                        proving an ai that you are human? <br><br>
                        you should have an existential crisis
                    </div>
                `;
            }, 1200);
        });
    }
}
