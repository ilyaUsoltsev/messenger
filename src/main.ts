import './style.css';
import Handlebars from 'handlebars';
import * as Components from './components';
import * as Pages from './pages';

const pages = {
  login: [Pages.LoginPage],
  register: [Pages.RegisterPage],
  error: [Pages.ErrorPage, { code: '404/501', message: 'Error message' }],
  navigation: [
    Pages.NavigatePage,
    { pages: ['error', 'login', 'register', 'navigation'] },
  ],
};

Object.entries(Components).forEach(([name, template]) => {
  Handlebars.registerPartial(name, template);
});

function navigate(page: string) {
  //@ts-ignore
  const [source, context] = pages[page];
  const container = document.getElementById('app')!;

  const temlpatingFunction = Handlebars.compile(source);
  container.innerHTML = temlpatingFunction(context);
}

document.addEventListener('DOMContentLoaded', () => navigate('navigation'));

document.addEventListener('click', (e) => {
  //@ts-ignore
  const page = e.target.getAttribute('page');
  if (page) {
    navigate(page);

    e.preventDefault();
    e.stopImmediatePropagation();
  }
});
