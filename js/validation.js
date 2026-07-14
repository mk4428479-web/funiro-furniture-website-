/* ============== Furniro - validation.js ============== */
const V = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
  phone: /^\+?[0-9\s\-()]{7,20}$/,
  // 8+ chars, at least one letter and one number
  pass: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&_.\-]{8,}$/,
  name: /^[A-Za-z\s'.\-]{2,60}$/,
  zip: /^[A-Za-z0-9\s\-]{3,10}$/
};

function setError(input, msg){
  const wrap = input.closest('.field') || input.parentElement;
  let err = wrap.querySelector('.field-error');
  if(!err){ err = document.createElement('div'); err.className='field-error'; wrap.appendChild(err); }
  err.textContent = msg || '';
  input.style.borderColor = msg ? 'var(--danger)' : '';
}

function validateForm(form, rules){
  let ok = true;
  for(const [name, rule] of Object.entries(rules)){
    const el = form.querySelector(`[name="${name}"]`);
    if(!el) continue;
    const val = (el.value||'').trim();
    let msg = '';
    if(rule.required && !val) msg = `${rule.label||name} is required`;
    else if(val && rule.pattern && !rule.pattern.test(val)) msg = rule.message || `Invalid ${rule.label||name}`;
    else if(val && rule.min && val.length < rule.min) msg = `${rule.label||name} must be at least ${rule.min} chars`;
    else if(rule.match && form.querySelector(`[name="${rule.match}"]`)?.value !== val) msg = 'Passwords do not match';
    setError(el, msg);
    if(msg) ok = false;
  }
  return ok;
}

/* attach password toggle */
document.addEventListener('click', e => {
  const t = e.target.closest('[data-toggle-pass]');
  if(!t) return;
  const input = t.closest('.pass-wrap').querySelector('input');
  if(input){
    input.type = input.type === 'password' ? 'text' : 'password';
    t.textContent = input.type === 'password' ? '👁' : '🙈';
  }
});

window.Validate = { V, validateForm, setError };
