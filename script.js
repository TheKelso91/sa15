document.querySelectorAll('article').forEach(article => {
    article.addEventListener('mouseenter', () => {
        article.style.backgroundColor = "#e0e0e0";
    });
    article.addEventListener('mouseleave', () => {
        article.style.backgroundColor = "white";
    });
});
