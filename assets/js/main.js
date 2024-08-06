// Alias
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const cd = $(".cd");
const playlist = $(".playlist");

const app = {
  currentIndex: 0,

  songList: [
    {
      name: "A Lot",
      singer: "21 Savage",
      path: "https://www.youtube.com/watch?v=VbrEsOLu75c",
      image: "./assets/img/a lot.jpg",
    },
    {
      name: "Diamonds",
      singer: "Rihanna ",
      path: "https://www.youtube.com/watch?v=lWA2pjMjpBs&list=RDlWA2pjMjpBs&start_radio=1",
      image: "./assets/img/diamonds.jpg",
    },
    {
      name: "FE!N",
      singer: "Travis Scott ft. Playboi Carti",
      path: "https://www.youtube.com/watch?v=U-l4ya3ejko&list=RDGMEMHDXYb1_DDSgDsobPsOFxpAVMU-l4ya3ejko&start_radio=1&rv=lWA2pjMjpBs",
      image: "./assets/img/fe!n.webp",
    },
    {
      name: "Not Like Us",
      singer: "Kendrick Lamar",
      path: "https://www.youtube.com/watch?v=H58vbez_m4E",
      image: "./assets/img/not like us.jpg",
    },
    {
      name: "Drip Too Hard",
      singer: "Lil Baby x Gunna",
      path: "https://www.youtube.com/watch?v=THcVOf1kNh0",
      image: "./assets/img/drip too hard.jpg",
    },
    {
      name: "Mockingbird ",
      singer: "Eminem",
      path: "https://www.youtube.com/watch?v=S9bCLPwzSC0",
      image: "./assets/img/mockingbird.jpg",
    },
    {
      name: "After Hours",
      singer: "The Weekend",
      path: "https://www.youtube.com/watch?v=ygTZZpVkmKg",
      image: "./assets/img/after hours.webp",
    },
    {
      name: "GIAYPHUT",
      singer: "kidsai ",
      path: "https://www.youtube.com/watch?v=lwZ6mRpD62o",
      image: "./assets/img/giayphut.jpg",
    },
    {
      name: "XANGUTNGAN",
      singer: "Young Bo5",
      path: "https://www.youtube.com/watch?v=V2M4rh8w56Y",
      image: "./assets/img/xangutngan.jpg",
    },
    {
      name: "Buồn Hay Vui",
      singer: "VSOUL x MCK x Obito x Ronboogz x Boyzed",
      path: "https://www.youtube.com/watch?v=JV0dEgbX5yk",
      image: "./assets/img/buồn hay vui.jpg",
    },
  ],

  // Render into view
  render: function () {
    const htmls = this.songList.map((song) => {
      return `
            <div class="song">
                <div class="thumb" style="background-image: url('${song.image}')">

                </div>
                <div class="body">
                    <h3 class="title">${song.name}</h3>
                    <p class="author">${song.singer}</p>
                </div>
                <div class="option">
                    <i class="fas fa-ellipsis-h"></i>
                </div>
            </div>
        `;
    });
    playlist.innerHTML = htmls.join("");
  },

  // Define properties for object
  defineProperties: function () {
    // Property currentSong contain current song
    Object.defineProperty(this, "currentSong", {
        get: function () {
            return this.songList[this.currentIndex];
        }
    })
  },

  // Load current song
  loadCurrentSong: function () {
    
  },

  // Handle every events in web
  handleEvents: function () {
    const cdWidth = cd.offsetWidth; // Default width of CD

    // Event scroll
    document.onscroll = function () {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const newCdWidth = cdWidth - scrollTop;

      cd.style.width = newCdWidth > 0 ? newCdWidth + "px" : 0;
      cd.style.opacity = newCdWidth / cdWidth;
    };
  },

  start: function () {
    // Define properties for object
    this.defineProperties();

    // Listen, handle event
    this.handleEvents();

    // Load the first song in list when open web
    this.loadCurrentSong();

    // Render
    this.render();
  },
};

// Run everything in here
app.start();
