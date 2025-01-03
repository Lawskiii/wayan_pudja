const hidden = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle('show', entry.isIntersecting)
        if(entry.isIntersecting) observer.unobserve(entry.target)
    })
    
},
{
    threshold:0.2
});

hidden.forEach(hidden => {
    observer.observe(hidden);
})
