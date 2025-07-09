const elem1 = document.getElementById("elem1");
const elem2 = document.getElementById("elem2");
const elem3 = document.getElementById("elem3");

const options = {
        root: null, 
        rootMargin: '0px', 
        threshold: 0.5 
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__fadeInUp');
                entry.target.classList.add('visible');
            }
        });
    }, options);

observer.observe(elem1);
observer.observe(elem3);
observer.observe(elem2);