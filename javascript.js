let clickMenu = document.getElementById('menu_expand');

clickMenu.addEventListener('click', function() {
  let storeMenu = document.getElementById('menu_mobile');
  storeMenu.style.height = "100vh";
  storeMenu.getElementsByTagName('a')[0].style.visibility = "visible";
  storeMenu.getElementsByTagName('a')[1].style.visibility = "visible";
  document.getElementsByClassName('icon_menu')[0].style.visibility = "hidden";
  document.getElementsByClassName('hide_menu')[0].style.visibility = "visible";
})

let hideMenu = document.getElementById('close_menu');

hideMenu.addEventListener('click', function() {
  document.getElementsByClassName('icon_menu')[0].style.visibility = "visible";
  let storeMenu = document.getElementById('menu_mobile');
  storeMenu.style.height = "100%";
  storeMenu.getElementsByTagName('a')[0].style.visibility = "hidden";
  storeMenu.getElementsByTagName('a')[1].style.visibility = "hidden";
  document.getElementsByClassName('icon_menu')[0].style.visibility = "visible";
  document.getElementsByClassName('hide_menu')[0].style.visibility = "hidden";
})

//This part is dynamically for insert featured HTML and insert data

let arrFeature = [
  {Title: 'Featured Speakers'},
  {
    speakerOne: 'Yochai Benkler',
    speakerSubtitle: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    speakerParagraph: 'Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.'
  },
  {
    speakerOne: 'SohYeong Noh',
    speakerSubtitle: 'Director of Art Centre Nabi and a board member of CC Korea',
    speakerParagraph: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanitites, and the arts.'
  },
  {button: 'MORE'},
  {
    speakerOne: 'Lila Tretikov',
    speakerSubtitle: 'Executive Director of the Wikimedia Foundation',
    speakerParagraph: 'Lila Tretikov is the Executive Director of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely available in 290 languages and used by nearly half billion people around the world every month.'
  },
  {
    speakerOne: 'Kilnam Chon',
    speakerSubtitle: '',
    speakerParagraph: 'Kilnam Chon bring the internet to Asia and is an outspoken advocate for the open web and digital commons. In 2012, he was inducted into the inaugural class of the Internet Societys (ISOC) Internet Hall of Fame.'
  },
  {
    speakerOne: 'Julia Leda',
    speakerSubtitle: 'President of Young Pirates of Europe',
    speakerParagraph: 'European ingetration, political democracy and participation of youth through online as her major condem, Redas report outlining potential changes to EU copyright law was approved bu the Parliament in July.'
  },
  {
    speakerOne: 'Ryan Merkley',
    speakerSubtitle: 'CEO of Creative Commons, ex COO of the Mozilla Foundation',
    speakerParagraph: 'Ryan had been leading open-source projects at the Mozilla Foundation such as the open source movement.'
  }
]

let getScreenSize = window.innerWidth;
functionName();

window.addEventListener('resize', functionName);
function functionName(e) {

  if (e != undefined) {
    var storeScreenSize = e.currentTarget.screen.availWidth;

  } else {
    storeScreenSize = getScreenSize;
  }

  var converToPxSection = storeScreenSize * .53 + "px";
  var moreFontSizeSymbol = (storeScreenSize * 0.002) + "px";
  var fontSizeText = "14px";

  converToPxSection = storeScreenSize * .80;
  document.getElementsByClassName('section_speakers_desktop')[0].style.height = converToPxSection;

  if (storeScreenSize <= 767) {

    for (var i = 0; i < 2; i++) {

      let featureSection =
      `<h2 class="speakers_title">${arrFeature[0].Title}</h2>
      <hr class="section_title_deco">
      <div class="first_speaker">
        <div class="img_speaker_one"></div>
        <article class="article_speaker_one">
          <h3 class="first_speak_title">${arrFeature[1].speakerOne}</h3>
          <p class="first_speak_subti">${arrFeature[1].speakerSubtitle}</p>
          <p class="first_speak_para">${arrFeature[1].speakerParagraph}</p>
        </article>
      </div>
      <div class="first_speaker">
        <div class="img_speaker_two"></div>
        <article class="article_speaker_one">
          <h3 class="first_speak_title">${arrFeature[2].speakerOne}</h3>
          <p class="first_speak_subti">${arrFeature[2].speakerSubtitle}</p>
          <p class="first_speak_para">${arrFeature[2].speakerParagraph}</p>
        </article>
      </div>
      <button type="button" class="final_section">
        <div class="see_more">
          <div class="final_sect_Text">${arrFeature[3].button}</div>
          <div class="final_sect_icon"></div>
        </div>
      </button>`;

      let insertFeatureData = document.getElementById('featured_section_home');
      insertFeatureData.innerHTML = featureSection;
      document.getElementsByClassName('final_sect_icon')[0].style.top = moreFontSizeSymbol;
      document.getElementsByClassName('final_sect_Text')[0].style.fontSize = fontSizeText;
    }
  } else if (storeScreenSize >= 768) {

    for (var j = 0; j < 2; j++) {

      let featureSection =
      `<h2 class="speakers_title">${arrFeature[0].Title}</h2>
      <hr class="section_title_deco">
        <div class="first_speaker">
          <div class="img_speaker_one"></div>
          <article class="article_speaker_one">
            <h3 class="first_speak_title">${arrFeature[1].speakerOne}</h3>
            <p class="first_speak_subti">${arrFeature[1].speakerSubtitle}</p>
            <p class="first_speak_para">${arrFeature[1].speakerParagraph}</p>
          </article>
          <div class="img_speaker_two"></div>
          <article class="article_speaker_one">
            <h3 class="first_speak_title">${arrFeature[5].speakerOne}</h3>
            <p class="first_speak_subti">${arrFeature[5].speakerSubtitle}</p>
            <p class="first_speak_para">${arrFeature[5].speakerParagraph}</p>
          </article>
          <div class="img_speaker_three"></div>
          <article class="article_speaker_one">
            <h3 class="first_speak_title">${arrFeature[2].speakerOne}</h3>
            <p class="first_speak_subti">${arrFeature[2].speakerSubtitle}</p>
            <p class="first_speak_para">${arrFeature[2].speakerParagraph}</p>
          </article>
          <div class="img_speaker_four"></div>
          <article class="article_speaker_one">
            <h3 class="first_speak_title">${arrFeature[6].speakerOne}</h3>
            <p class="first_speak_subti">${arrFeature[6].speakerSubtitle}</p>
            <p class="first_speak_para">${arrFeature[6].speakerParagraph}</p>
          </article>
          <div class="img_speaker_five"></div>
          <article class="article_speaker_one">
            <h3 class="first_speak_title">${arrFeature[4].speakerOne}</h3>
            <p class="first_speak_subti">${arrFeature[4].speakerSubtitle}</p>
            <p class="first_speak_para">${arrFeature[4].speakerParagraph}</p>
          </article>
          <div class="img_speaker_six"></div>
          <article class="article_speaker_one">
            <h3 class="first_speak_title">${arrFeature[7].speakerOne}</h3>
            <p class="first_speak_subti">${arrFeature[7].speakerSubtitle}</p>
            <p class="first_speak_para">${arrFeature[7].speakerParagraph}</p>
          </article>
        </div>`;

      let insertFeatureData = document.getElementById('featured_section_about');
      insertFeatureData.innerHTML = featureSection;
    }
  }
}
