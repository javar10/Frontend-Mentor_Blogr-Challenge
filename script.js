const dropdownsBtns = document.querySelectorAll('.dropbtn');

dropdownsBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();

    const menu = btn.nextElementSibling;
    const arrow = btn.querySelector('img');
    const isOpen = menu.style.display === 'flex';

    // Close all other dropdowns and reset arrows + opacity
    document.querySelectorAll('.dropdown-content').forEach((d) => {
      if (d !== menu) {
        d.style.display = 'none';
        const otherArrow = d.previousElementSibling.querySelector('img');
        if (otherArrow) otherArrow.style.transform = 'rotate(0deg)';
      }
    });

    // If this dropdown was open, close it and reset opacity
    if (isOpen) {
      menu.style.display = 'none';
      arrow.style.transform = 'rotate(0deg)';
      dropdownsBtns.forEach((b) => (b.style.opacity = '1'));
      return;
    }

    // Open this dropdown
    menu.style.display = 'flex';
    arrow.style.transform = 'rotate(180deg)';
    dropdownsBtns.forEach((b) => (b.style.opacity = b === btn ? '1' : '0.75'));
  });
});

// Close all dropdowns when clicking outside
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
