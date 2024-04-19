const menuItems = document.querySelectorAll('.showtoggle');

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        menuItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.querySelector('.sub-menu-1').style.display = 'none';
            }
        });

        const subMenu = item.querySelector('.sub-menu-1');
        subMenu.style.display = subMenu.style.display === 'block' ? 'none' : 'block';
    });
});

const submenuItems = document.querySelectorAll('.hover-me');

submenuItems.forEach(item => {
    item.addEventListener('click', (event) => {
        // Stop the click event from propagating to parent elements
        event.stopPropagation();

        submenuItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.querySelector('.sub-menu-2').style.display = 'none';
            }
        });

        const subMenu2 = item.querySelector('.sub-menu-2');
        subMenu2.style.display = subMenu2.style.display === 'block' ? 'none' : 'block';
    });
});
