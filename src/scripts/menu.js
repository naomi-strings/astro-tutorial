        navIcon.addEventListener('click', function () {
            console.log('Clicked!');
            document.querySelector('.navbar').classList.toggle('open');
            console.log('Navbar classes:', document.querySelector('.navbar').classList);
        });