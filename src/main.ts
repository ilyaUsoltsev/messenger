import './style.css';
import Handlebars from 'handlebars';
import * as Components from './components';
import * as Pages from './pages';
import { chatsFixture } from './fixtures/chats-fixture';

const pages = {
  login: [Pages.LoginPage],
  register: [Pages.RegisterPage],
  error: [Pages.ErrorPage, { code: '404/501', message: 'Error message' }],
  chats: [Pages.ChatPage, { chats: chatsFixture }],
  navigation: [
    Pages.NavigatePage,
    { pages: ['chats', 'error', 'login', 'register', 'navigation'] },
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

document.addEventListener('DOMContentLoaded', () => navigate('chats'));

document.addEventListener('click', (e) => {
  //@ts-ignore
  const page = e.target.getAttribute('page');
  if (page) {
    navigate(page);

    e.preventDefault();
    e.stopImmediatePropagation();
  }
});
