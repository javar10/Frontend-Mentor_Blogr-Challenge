const dropdownsBtns = document.querySelectorAll('.dropbtn');

dropdownsBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const menu = btn.nextElementSibling;

    // Close all menus first
    document.querySelectorAll('.dropdown-content').forEach((d) => {
      if (d !== menu) d.style.display = 'none';
    });

    // Toggle the clicked menu
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
  });
});

// Optional: close if clicking outside
window.addEventListener('click', (e) => {
  if (![...dropdownsBtns].some(btn => btn.contains(e.target))) {
    document.querySelectorAll('.dropdown-content').forEach(d => d.style.display = 'none');
  }
});
