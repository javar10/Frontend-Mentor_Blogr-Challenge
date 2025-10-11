const dropdownsBtns = document.querySelectorAll('.dropbtn');
const primaryBtns = document.querySelectorAll('.btn-primary');

const menuBtn = document.getElementById('header-menu-icon');

menuBtn.addEventListener('click', (e) => {
  e.stopPropagation();

  const isOpen = menuBtn.src.includes('icon-close.svg');
  const menu = document.getElementById('dropdown-div');
  const arrows = document.querySelectorAll('.dropdown-arrow-closed');
  const logOnBtns = document.getElementById('header-top-right');

  if (!isOpen) {
    menu.style.display = 'flex';
    logOnBtns.style.display = 'flex';
    menuBtn.src = 'images/icon-close.svg';
  }
  else {
    menu.style.display = 'none';
    logOnBtns.style.display = 'none';
    menuBtn.src = 'images/icon-hamburger.svg';
  }

  arrows.forEach(arrow => {
    arrow.src = 'images/icon-arrow-dark.svg';
  });
})

dropdownsBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();

    const menu = btn.nextElementSibling;
    const arrow = btn.querySelector('img');
    const isOpen = menu.style.display === 'flex';

    document.querySelectorAll('.dropdown-content').forEach((d) => {
      if (d !== menu) {
        d.style.display = 'none';
        const otherArrow = d.previousElementSibling.querySelector('img');
        if (otherArrow) otherArrow.style.transform = 'rotate(0deg)';
      }
    });

    if (isOpen) {
      menu.style.display = 'none';
      arrow.style.transform = 'rotate(0deg)';
      dropdownsBtns.forEach((b) => (b.style.opacity = '1'));
      return;
    }

    menu.style.display = 'flex';
    arrow.style.transform = 'rotate(180deg)';
    dropdownsBtns.forEach((b) => (b.style.opacity = b === btn ? '1' : '0.75'));
  });
});

window.addEventListener('click', (e) => {
  if (![...dropdownsBtns].some((btn) => btn.contains(e.target))) {
    document.querySelectorAll('.dropdown-content').forEach((d) => {
      d.style.display = 'none';
      const arrow = d.previousElementSibling.querySelector('img');
      if (arrow) arrow.style.transform = 'rotate(0deg)';
    });
    dropdownsBtns.forEach((btn) => (btn.style.opacity = '1'));
  }
});

primaryBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();

    const menu = btn.nextElementSibling;
    const arrow = btn.querySelector('img');
    const isOpen = menu.style.display === 'flex';

    document.querySelectorAll('.dropdown-content').forEach((d) => {
      if (d !== menu) {
        d.style.display = 'none';
        const otherArrow = d.previousElementSibling.querySelector('img');
        if (otherArrow) otherArrow.style.transform = 'rotate(0deg)';
      }
    });

    if (isOpen) {
      menu.style.display = 'none';
      arrow.style.transform = 'rotate(0deg)';
      dropdownsBtns.forEach((b) => (b.style.opacity = '1'));
      return;
    }

    menu.style.display = 'flex';
    arrow.style.transform = 'rotate(180deg)';
    dropdownsBtns.forEach((b) => (b.style.opacity = b === btn ? '1' : '0.75'));
  });
});