/* ============== Furniro - dashboard.js ============== */
document.addEventListener('DOMContentLoaded', () => {
  if (!document.querySelector('[data-dash]')) return;
  const user = window.Auth?.requireAuth?.();
  if (!user) return;

  // Fill user info
  document.querySelectorAll('[data-user-name]').forEach(el => el.textContent = user.name);
  document.querySelectorAll('[data-user-mail]').forEach(el => el.textContent = user.email);
  document.querySelectorAll('[data-user-initial]').forEach(el => el.textContent = user.name.charAt(0).toUpperCase());

  // Sidebar toggle mobile
  const toggle = document.getElementById('dashToggle');
  const side = document.querySelector('.sidebar');
  if (toggle && side) toggle.onclick = () => side.classList.toggle('open');

  // Logout
  document.querySelectorAll('[data-logout]').forEach(b => b.onclick = e => { e.preventDefault(); window.Auth.logout(); });

  // Stats
  const orders = JSON.parse(localStorage.getItem('furniro_orders') || '[]');
  const wish = JSON.parse(localStorage.getItem('furniro_wish') || '[]');
  const cart = JSON.parse(localStorage.getItem('furniro_cart') || '[]');
  const set = (sel, v) => { const el = document.querySelector(sel); if (el) el.textContent = v };
  set('[data-stat-orders]', orders.length);
  set('[data-stat-wish]', wish.length);
  set('[data-stat-cart]', cart.reduce((s, i) => s + i.qty, 0));
  set('[data-stat-spent]', 'Rp ' + orders.reduce((s, o) => s + (o.total || 0), 0).toLocaleString('id-ID'));

  // Profile form
  const pf = document.getElementById('profileForm');
  if (pf) {
    pf.name.value = user.name; pf.email.value = user.email;
    pf.addEventListener('submit', e => {
      e.preventDefault();
      const { validateForm, V } = window.Validate;
      if (!validateForm(pf, {
        name: { required: true, pattern: V.name, label: 'Name' },
        email: { required: true, pattern: V.email, label: 'Email' }
      })) return;
      const users = window.Auth.users();
      const u = users.find(x => x.id === user.id);
      if (u) { u.name = pf.name.value.trim(); u.email = pf.email.value.trim(); window.Auth.saveUsers(users); }
      const newSession = { ...user, name: u.name, email: u.email };
      localStorage.setItem('furniro_auth', JSON.stringify(newSession));
      Furniro.Toast.show('Profile updated', 'success');
      setTimeout(() => location.reload(), 800);
    });
  }

  // Change password
  const cp = document.getElementById('passForm');
  if (cp) {
    cp.addEventListener('submit', e => {
      e.preventDefault();
      const { validateForm, V } = window.Validate;
      if (!validateForm(cp, {
        current: { required: true, label: 'Current password' },
        password: { required: true, pattern: V.pass, label: 'New password', message: '8+ chars with a letter and number' },
        confirm: { required: true, match: 'password', label: 'Confirm' }
      })) return;
      const users = window.Auth.users();
      const u = users.find(x => x.id === user.id);
      if (u.password !== cp.current.value) { Furniro.Toast.show('Current password is incorrect', 'error'); return; }
      u.password = cp.password.value; window.Auth.saveUsers(users);
      cp.reset();
      Furniro.Toast.show('Password changed', 'success');
    });
  }

  // Settings
  const sf = document.getElementById('settingsForm');
  if (sf) {
    const prefs = JSON.parse(localStorage.getItem('furniro_prefs') || '{}');
    sf.notif.checked = prefs.notif ?? true;
    sf.newsletter.checked = prefs.newsletter ?? true;
    sf.dark.checked = prefs.dark ?? false;
    if (prefs.dark) document.body.classList.add('dark-mode');
    sf.addEventListener('change', () => {
      const p = { notif: sf.notif.checked, newsletter: sf.newsletter.checked, dark: sf.dark.checked };
      localStorage.setItem('furniro_prefs', JSON.stringify(p));
      document.body.classList.toggle('dark-mode', p.dark);
      Furniro.Toast.show('Settings saved', 'success');
    });
  }
});
