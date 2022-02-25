// let dummySongData = [
//   {
//     id: 80,
//     track_name: 'Heart Is a Lonely Hunter, The',
//     artist: 'Dinny Gookey',
//     publishedThe: '12/15/2021',
//     duration: '1:18 PM',
//     isOneOfFav: false,
//   },
//   {
//     id: 81,
//     track_name: 'Road to Morocco',
//     artist: 'Lezley Sprigings',
//     publishedThe: '11/10/2021',
//     duration: '8:48 AM',
//     isOneOfFav: false,
//   },
//   {
//     id: 82,
//     track_name: 'Escape Artist, The',
//     artist: 'Dimitry Catteroll',
//     publishedThe: '11/5/2021',
//     duration: '3:46 PM',
//     isOneOfFav: false,
//   },
//   {
//     id: 83,
//     track_name: 'Kung Pow: Enter the Fist',
//     artist: 'Noami Ranger',
//     publishedThe: '7/12/2021',
//     duration: '7:39 AM',
//     isOneOfFav: false,
//   },
//   {
//     id: 84,
//     track_name: 'Icicle Thief, The (Ladri di saponette)',
//     artist: 'Tobiah Ficken',
//     publishedThe: '12/1/2021',
//     duration: '2:24 PM',
//     isOneOfFav: false,
//   },
//   {
//     id: 85,
//     track_name: 'Clubland (a.k.a. Introducing the Dwights)',
//     artist: 'Dione Gabbatiss',
//     publishedThe: '6/25/2021',
//     duration: '11:42 PM',
//     isOneOfFav: false,
//   },
//   {
//     id: 86,
//     track_name: 'Dilemma, The',
//     artist: 'Lock Winsiowiecki',
//     publishedThe: '3/18/2021',
//     duration: '8:09 AM',
//     isOneOfFav: false,
//   },
//   {
//     id: 87,
//     track_name: 'Endangered Species',
//     artist: 'Luther Willoughey',
//     publishedThe: '3/8/2021',
//     duration: '2:38 AM',
//     isOneOfFav: false,
//   },
//   {
//     id: 88,
//     track_name: 'Green Dolphin Street',
//     artist: 'Lauri Yegorkin',
//     publishedThe: '9/17/2021',
//     duration: '5:30 AM',
//     isOneOfFav: false,
//   },
//   {
//     id: 89,
//     track_name: "Class of Nuke 'Em High",
//     artist: 'Rosalyn Willas',
//     publishedThe: '3/28/2021',
//     duration: '5:34 AM',
//     isOneOfFav: false,
//   },
//   {
//     id: 90,
//     track_name: 'D.O.A.',
//     artist: 'Stirling Lambird',
//     publishedThe: '12/14/2021',
//     duration: '4:29 PM',
//     isOneOfFav: false,
//   },
//   {
//     id: 91,
//     track_name: 'Carey Treatment, The',
//     artist: 'Annette Badwick',
//     publishedThe: '5/13/2021',
//     duration: '2:45 AM',
//     isOneOfFav: false,
//   },
//   {
//     id: 92,
//     track_name: 'Little Italy',
//     artist: 'Philbert Millier',
//     publishedThe: '10/12/2021',
//     duration: '6:48 AM',
//     isOneOfFav: false,
//   },
//   {
//     id: 93,
//     track_name: 'Otello',
//     artist: 'Othella Braitling',
//     publishedThe: '1/21/2022',
//     duration: '4:32 AM',
//     isOneOfFav: false,
//   },
//   {
//     id: 94,
//     track_name: 'Dare',
//     artist: 'Trent Philpotts',
//     publishedThe: '9/27/2021',
//     duration: '4:08 PM',
//     isOneOfFav: false,
//   },
//   {
//     id: 95,
//     track_name: 'How to Train Your Dragon 2',
//     artist: 'Micky Mowbray',
//     publishedThe: '11/6/2021',
//     duration: '8:16 PM',
//     isOneOfFav: false,
//   },
//   {
//     id: 96,
//     track_name: 'Narrow Margin, The',
//     artist: 'Vi MacLise',
//     publishedThe: '3/12/2021',
//     duration: '8:32 PM',
//     isOneOfFav: false,
//   },
//   {
//     id: 97,
//     track_name: "Gun in Betty Lou's Handbag, The",
//     artist: 'Ezekiel Furminger',
//     publishedThe: '10/11/2021',
//     duration: '3:29 AM',
//     isOneOfFav: false,
//   },
//   {
//     id: 98,
//     track_name: 'Day of the Dead 2: Contagium',
//     artist: 'Chiquia Heap',
//     publishedThe: '7/29/2021',
//     duration: '7:00 AM',
//     isOneOfFav: false,
//   },
//   {
//     id: 99,
//     track_name: "Starflight: The Plane That Couldn't Land",
//     artist: 'Willetta Hearn',
//     publishedThe: '4/19/2021',
//     duration: '5:48 PM',
//     isOneOfFav: false,
//   },
//   {
//     id: 100,
//     track_name: 'River, The (Joki)',
//     artist: 'Dorelle Fawkes',
//     publishedThe: '12/22/2021',
//     duration: '4:58 AM',
//     isOneOfFav: false,
//   },
// ];

// class AppConfiguration {
//   language;
//   homepage;
//   theme;

//   getConfigurationForUser() {
//     this.homepage = {
//       tabs: [
//         {
//           title: 'Songs',
//           theme: 'bg-success',
//           itsPage: '/',
//           component: 'SongList',
//         },

//         {
//           title: 'Favorites',
//           theme: 'danger',
//           itsPage: '/favourites',
//           component: 'Favourites',
//         },
//         {
//           title: 'Generator',
//           theme: 'info',
//           itsPage: '/songGenerator',
//           component: 'SongGenerator',
//         },
//       ],
//       font: 'whatever',
//     };
//     this.theme = 'info';
//     return this;
//   }

//   getConfigurationForVisitor() {
//     this.homepage = {
//       tabs: [
//         {
//           title: 'Songs',
//           theme: 'bg-success',
//           itsPage: '/',
//           component: 'SongList',
//         },

//         {
//           title: 'Favorites',
//           theme: 'danger',
//           itsPage: '/favourites',
//           component: 'Favourites',
//         },
//       ],
//       font: 'whatever',
//     };
//     this.theme = 'success';
//     return this;
//   }

//   setLanguage(language) {
//     this.language = language === 'ENG' || language !== 'ITA' ? 'ENG' : 'ITA';
//     return this;
//   }
// }

// export const songCrudMethods = {
//   getSongs: async function () {
//     return await new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(dummySongData);
//       }, 3000);
//     });
//   },

//   getSongById: async function (id) {
//     return await new Promise((resolve) => {
//       setTimeout(() => {
//         const song = dummySongData.find((song) => song.idTrack === id);
//         song ? resolve(song) : resolve(null);
//       }, 3000);
//     });
//   },

//   addSong: async function (songItem) {
//     return await new Promise((resolve) => {
//       setTimeout(() => {
//         dummySongData = [...dummySongData, songItem];
//         resolve(dummySongData);
//       }, 3000);
//     });
//   },

//   removeSong: async function (id) {
//     return await new Promise((resolve) => {
//       setTimeout(() => {
//         dummySongData = dummySongData.filter((song) => song.id !== id);
//         resolve(dummySongData);
//       }, 3000);
//     });
//   },
// };
