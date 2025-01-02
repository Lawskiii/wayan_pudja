const hidden = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle('show', entry.isIntersecting)
    })
    console.log(entries);
},
{
    threshold:0.2
});

hidden.forEach(hidden => {
    observer.observe(hidden);
})
