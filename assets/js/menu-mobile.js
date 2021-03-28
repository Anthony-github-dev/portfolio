export default function toggleMenu(menu, toggle, links) {
    const _menu = document.querySelector(menu),
        _toggle = document.querySelector(toggle),
        _links = document.querySelectorAll(links);

    window.addEventListener('click', e => {
        if (e.target === _toggle) {
            _menu.classList.toggle('active');
        };

        _links.forEach(i => {
            if (e.target === i) {
                _menu.classList.remove('active');
            };
        });

        if (e.target.matches('main *')) {
            _menu.classList.remove('active');
        };
    });
};