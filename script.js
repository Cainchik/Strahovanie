window.addEventListener('DOMContentLoaded', (event) => {
    const questions = document.querySelectorAll('.question');
    questions.forEach((question) => {
        question.addEventListener('click', () => {
            question.nextElementSibling.classList.toggle('active');
        });
    });
});