export const THEME = {
  home: {
    color: '#00000000',
  },
  about: {
    color: '#0DD269',
  },
  projects: {
    color: '#3399FF',
  },
  cooking: {
    color: '#FF5F5F',
  },
  contact: {
    color: '#913CFF',
  },
}

export function getStartingPage(link) {
  let splitLink = link.split('/');
  let currentPage = splitLink[splitLink.length - 1]
  return currentPage !== '' ? currentPage : 'home';
}
