const menuItems = document.querySelectorAll('.showtoggle');
const submenuItems = document.querySelectorAll('.hover-me');

// Function to hide sub-menus
function hideSubMenus() {
    menuItems.forEach(item => {
        const subMenu = item.querySelector('.sub-menu-1');
        if (subMenu.style.display === 'block') {
            subMenu.style.display = 'none';
        }
    });

    submenuItems.forEach(item => {
        const subMenu2 = item.querySelector('.sub-menu-2');
        if (subMenu2.style.display === 'block') {
            subMenu2.style.display = 'none';
        }
    });
}

menuItems.forEach(item => {
    item.addEventListener('click', (event) => {
        event.stopPropagation();

        menuItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.querySelector('.sub-menu-1').style.display = 'none';
            }
        });

        const subMenu = item.querySelector('.sub-menu-1');
        subMenu.style.display = subMenu.style.display === 'block' ? 'none' : 'block';
    });
});


submenuItems.forEach(item => {
    item.addEventListener('click', (event) => {
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

// Event listener for window click
window.addEventListener('click', () => {
    hideSubMenus();
});
