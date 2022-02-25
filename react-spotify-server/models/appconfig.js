export default class AppConfigurationOf {
  language;
  homepage;
  theme;

  constructor(userType) {
    if (userType == 'admin') {
      this.setConfigurationForAdmin();
    } else if (userType === 'visitor') {
      this.setConfigurationForVisitor();
    }
  }

  setConfigurationForAdmin() {
    this.homepage = {
      tabs: [
        {
          title: 'Songs',
          theme: 'bg-success',
          itsPage: '/',
          component: 'SongsList',
        },

        {
          title: 'Favorites',
          theme: 'danger',
          itsPage: '/favourites',
          component: 'Favourites',
        },
        {
          title: 'Generator',
          theme: 'info',
          itsPage: '/songGenerator',
          component: 'SongGenerator',
        },
      ],
      font: 'whatever',
    };
    this.theme = 'info';
    return this;
  }

  setConfigurationForVisitor() {
    this.homepage = {
      tabs: [
        {
          title: 'Songs',
          theme: 'bg-success',
          itsPage: '/',
          component: 'SongsList',
        },

        {
          title: 'Favorites',
          theme: 'danger',
          itsPage: '/favourites',
          component: 'Favourites',
        },
      ],
      font: 'whatever',
    };
    this.theme = 'success';
    return this;
  }

  setLanguage(language) {
    this.language = language === 'ENG' || language !== 'ITA' ? 'ENG' : 'ITA';
    return this;
  }
}
