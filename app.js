document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const cardContainer = document.getElementById('cardContainer');
    const flashcard = document.getElementById('flashcard');
    const questionText = document.getElementById('questionText');
    const answerText = document.getElementById('answerText');
    const frontCategory = document.getElementById('frontCategory');
    const frontDifficulty = document.getElementById('frontDifficulty');
    const backCategory = document.getElementById('backCategory');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const progressText = document.getElementById('progressText');
    const categoryFilter = document.getElementById('categoryFilter');
    const difficultyFilter = document.getElementById('difficultyFilter');

    // State
    let currentQuestions = [...flashcardsData];
    let currentIndex = 0;
    let isFlipped = false;

    // Initialize
    function init() {
        shuffle(currentQuestions);
        updateCard();
        attachEventListeners();
    }

    // Shuffle Function (Fisher-Yates)
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // Filter Logic
    function applyFilters() {
        const cat = categoryFilter.value;
        const diff = difficultyFilter.value;

        currentQuestions = flashcardsData.filter(q => {
            const catMatch = cat === 'All' || q.category === cat;
            const diffMatch = diff === 'All' || q.difficulty === diff;
            return catMatch && diffMatch;
        });

        currentIndex = 0;
        
        if(currentQuestions.length > 0) {
            flashcard.style.display = 'block';
            updateCard(true);
        } else {
            flashcard.style.display = 'none';
            progressText.innerText = 'No questions match your criteria.';
            prevBtn.disabled = true;
            nextBtn.disabled = true;
        }
    }

    // Update UI
    function updateCard(resetAnimation = false) {
        if(currentQuestions.length === 0) return;

        const q = currentQuestions[currentIndex];
        
        if (isFlipped) {
            flashcard.classList.remove('flipped');
            isFlipped = false;
            // Wait for flip to finish before updating text to prevent answer reveal on front
            setTimeout(() => setContent(q), 300);
        } else {
            setContent(q);
        }

        // Apply slide animation safely to container to avoid transform conflicts
        if (resetAnimation) {
            cardContainer.classList.remove('slide-in-right', 'slide-in-left');
            void cardContainer.offsetWidth; // trigger reflow
            cardContainer.classList.add('slide-in-right');
        }

        // Update progress
        progressText.innerText = `Question ${currentIndex + 1} of ${currentQuestions.length}`;
        
        // Button states
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex === currentQuestions.length - 1;
    }

    function setContent(q) {
        questionText.innerText = q.question;
        answerText.innerText = q.answer;
        
        frontCategory.innerText = q.category;
        backCategory.innerText = q.category;
        
        frontDifficulty.innerText = q.difficulty;
        frontDifficulty.className = `tag tag-difficulty diff-${q.difficulty}`;
    }

    // Event Listeners
    function attachEventListeners() {
        flashcard.addEventListener('click', () => {
            isFlipped = !isFlipped;
            flashcard.classList.toggle('flipped');
        });

        nextBtn.addEventListener('click', () => {
            if (currentIndex < currentQuestions.length - 1) {
                currentIndex++;
                updateCard(true);
            }
        });

        prevBtn.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateCard(true);
                // Override the default right slide forced by updateCard
                cardContainer.classList.replace('slide-in-right', 'slide-in-left');
            }
        });

        // Add keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.code === 'Space' || e.code === 'Enter') {
                isFlipped = !isFlipped;
                flashcard.classList.toggle('flipped');
            } else if (e.code === 'ArrowRight' && !nextBtn.disabled) {
                nextBtn.click();
            } else if (e.code === 'ArrowLeft' && !prevBtn.disabled) {
                prevBtn.click();
            }
        });

        categoryFilter.addEventListener('change', applyFilters);
        difficultyFilter.addEventListener('change', applyFilters);
    }

    // Run
    init();
});
