/* ============== Furniro - auth.js ============== */
const AUTH_KEY = 'furniro_auth';
const USERS_KEY = 'furniro_users';

const Auth = {
  users(){ return JSON.parse(localStorage.getItem(USERS_KEY) || '[]') },
  saveUsers(u){ localStorage.setItem(USERS_KEY, JSON.stringify(u)) },
  session(){ try{ return JSON.parse(localStorage.getItem(AUTH_KEY)) } catch { return null } },
  login(email, pass, remember){
    const u = this.users().find(x => x.email.toLowerCase() === email.toLowerCase());
    if(!u || u.password !== pass) return { ok:false, error:'Invalid email or password' };
    const s = { id:u.id, name:u.name, email:u.email, ts:Date.now() };
    (remember ? localStorage : sessionStorage).setItem(AUTH_KEY, JSON.stringify(s));
    if(!remember) localStorage.removeItem(AUTH_KEY);
    else sessionStorage.removeItem(AUTH_KEY);
    return { ok:true, user:s };
  },
  signup({name, email, password}){
    const users = this.users();
    if(users.find(u => u.email.toLowerCase() === email.toLowerCase()))
      return { ok:false, error:'Email already registered' };
    const user = { id:'u_'+Date.now(), name, email, password, createdAt:Date.now() };
    users.push(user); this.saveUsers(users);
    localStorage.setItem(AUTH_KEY, JSON.stringify({ id:user.id, name, email, ts:Date.now() }));
    return { ok:true, user };
  },
  resetPassword(email, newPass){
    const users = this.users();
    const u = users.find(x => x.email.toLowerCase() === email.toLowerCase());
    if(!u) return { ok:false, error:'No account with that email' };
    u.password = newPass; this.saveUsers(users);
    return { ok:true };
  },
  logout(){
    localStorage.removeItem(AUTH_KEY);
    sessionStorage.removeItem(AUTH_KEY);
    location.href = 'login.html';
  },
  requireAuth(){
    const s = this.session() || JSON.parse(sessionStorage.getItem(AUTH_KEY)||'null');
    if(!s){ location.href = 'login.html'; return null; }
    return s;
  },
  current(){ return this.session() || JSON.parse(sessionStorage.getItem(AUTH_KEY)||'null') }
};

document.addEventListener('DOMContentLoaded', () => {
  const { validateForm, V } = window.Validate || {};

  // Login
  const login = document.getElementById('loginForm');
  if(login){
    login.addEventListener('submit', e => {
      e.preventDefault();
      if(!validateForm(login, {
        email:{required:true, pattern:V.email, label:'Email', message:'Enter a valid email'},
        password:{required:true, min:8, label:'Password'}
      })) return;
      const r = Auth.login(login.email.value.trim(), login.password.value, login.remember?.checked);
      if(!r.ok){ Furniro.Toast.show(r.error, 'error'); return; }
      Furniro.Toast.show('Welcome back, '+r.user.name, 'success');
      setTimeout(()=> location.href='dashboard.html', 600);
    });
  }

  // Signup
  const su = document.getElementById('signupForm');
  if(su){
    su.addEventListener('submit', e => {
      e.preventDefault();
      if(!validateForm(su, {
        name:{required:true, pattern:V.name, label:'Full name'},
        email:{required:true, pattern:V.email, label:'Email'},
        password:{required:true, pattern:V.pass, label:'Password', message:'8+ chars with a letter and number'},
        confirm:{required:true, match:'password', label:'Confirm'}
      })) return;
      const r = Auth.signup({name:su.name.value.trim(), email:su.email.value.trim(), password:su.password.value});
      if(!r.ok){ Furniro.Toast.show(r.error,'error'); return; }
      Furniro.Toast.show('Account created', 'success');
      setTimeout(()=> location.href='dashboard.html', 600);
    });
  }

  // Forgot
  const fp = document.getElementById('forgotForm');
  if(fp){
    fp.addEventListener('submit', e => {
      e.preventDefault();
      if(!validateForm(fp, { email:{required:true, pattern:V.email, label:'Email'} })) return;
      // simulate email link — encode email in query
      const link = 'reset-password.html?email='+encodeURIComponent(fp.email.value.trim());
      Furniro.Toast.show('Reset link generated. Redirecting…', 'success');
      setTimeout(()=> location.href = link, 900);
    });
  }

  // Reset
  const rp = document.getElementById('resetForm');
  if(rp){
    rp.addEventListener('submit', e => {
      e.preventDefault();
      if(!validateForm(rp, {
        password:{required:true, pattern:V.pass, label:'Password', message:'8+ chars with a letter and number'},
        confirm:{required:true, match:'password', label:'Confirm'}
      })) return;
      const email = new URLSearchParams(location.search).get('email') || '';
      const r = Auth.resetPassword(email, rp.password.value);
      if(!r.ok){ Furniro.Toast.show(r.error,'error'); return; }
      Furniro.Toast.show('Password updated. Please log in.', 'success');
      setTimeout(()=> location.href='login.html', 800);
    });
  }
});

window.Auth = Auth;
