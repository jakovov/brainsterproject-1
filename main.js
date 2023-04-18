$(document).ready(function () {
  function handleRoute() {
    if (location.hash == ("")) {
      $(".frontpage").css('display', "block");
      $(".frontimg").css('display', "block");
      $(".akademii").css('display', "none");
      $(".prostorzanastani").css('display', "none");
      $(".spaceblog").css('display', "none");
      $(".nastani").css('display', "none");
      $(".aborder").css('borderBottom', "2px solid yellow");
      $(".aborder2").css('borderBottom', "none");
      $(".aborder3").css('borderBottom', "none");
      $(".aborder4").css('borderBottom', "none");
    }
    else if (location.hash.includes("#akademii")) {
      $(".frontpage").css('display', "none");
      $(".frontimg").css('display', "none");
      $(".akademii").css('display', "block");
      $(".spaceblog").css('display', "none");
      $(".prostorzanastani").css('display', "none");
      $(".nastani").css('display', "none");
      $(".aborder").css('borderBottom', "2px solid yellow");
      $(".aborder2").css('borderBottom', "none");
      $(".aborder3").css('borderBottom', "none");
      $(".aborder4").css('borderBottom', "none");
    }
    else if (location.hash == ("#prostorzanastani")) {
      $(".frontpage").css('display', "none");
      $(".frontimg").css('display', "none");
      $(".akademii").css('display', "none");
      $(".prostorzanastani").css('display', "block");
      $(".spaceblog").css('display', "none");
      $(".nastani").css('display', "none");
      $(".aborder").css('borderBottom', "none");
      $(".aborder2").css('borderBottom', "2px solid yellow");
      $(".aborder3").css('borderBottom', "none");
      $(".aborder4").css('borderBottom', "none");
    }
    else if (location.hash == ("#spaceblog")) {
      $(".frontpage").css('display', "none");
      $(".frontimg").css('display', "none");
      $(".akademii").css('display', "none");
      $(".prostorzanastani").css('display', "none");
      $(".spaceblog").css('display', "block");
      $(".nastani").css('display', "none");
      $(".aborder").css('borderBottom', "none");
      $(".aborder2").css('borderBottom', "none");
      $(".aborder3").css('borderBottom', "2px solid yellow");
      $(".aborder4").css('borderBottom', "none");
    }
    else if (location.hash == ("#nastani")) {
      $(".frontpage").css('display', "none");
      $(".frontimg").css('display', "none");
      $(".akademii").css('display', "none");
      $(".prostorzanastani").css('display', "none");
      $(".nastani").css('display', "block");
      $(".spaceblog").css('display', "none");
      $(".aborder").css('borderBottom', "none");
      $(".aborder2").css('borderBottom', "none");
      $(".aborder3").css('borderBottom', "none");
      $(".aborder4").css('borderBottom', "2px solid yellow");
    }
  }
  


window.addEventListener("hashchange", handleRoute);
window.addEventListener("load", handleRoute);


  //karticki za homepage
  var mokData = [{
    category: "Едукација",
    id: '1',
    name: 'Научи практични вештини за транформација во кариерата. Нашата специјалност е да ти помогнеме да го најдеш правилниот skill set кој ќе одговори на реалните потреби на пазарот на трудот. Организираме курсеви, академии и персоналнизирани обуки кои одговараат на реалните потреби на денешницата',
    image: 'edukacija1.jpg',
    link: 'https://brainster.co'
  },
  {
    category: "Настани",
    id: '2',
    name: 'Специјално курирани и организирани настани кои ги поврзуваат правите таленти со иновативните компании. Идејата е да нашата tech заедница расте, се инспирира и креира преку овие настани.',
    image: 'nastani.jpg',
    link: '#nastani"'
  },
  {
    category: "Coworking",
    id: '3',
    name: 'Биди дел од tech заедницата на иноватори, креативци и претприемачи. Резервирај стол во нашата shared office. Пичирај го твојот бизнис и нашиот тим заедно ќе одлучи секој месец со кого да ги дели своите канцеларии.',
    image: 'coworking.jpg',
    link: ''
  },
      {
      category: "Простор за настани",
      id: '4',
      name: 'Имаш идеја за обука или настан од tech областата? Ние имаме простор за реализација. Нашиот тим внимателно ги одбира и курира сите настани.',
      image: 'prostorzanastani.jpg',
      link: '#prostorzanastani' 
    },
    {
      category: "Партнерства со Tech компании",
      id: '5',
      name: 'Целта и идејата е креирање на tech заедница која ќе се негува, расте и креира подобро утро за сите нас. Преку директно и индиректно поврзување на tech талентите со компаниите.',
      image: 'partnerstvasotechkomp.jpg',
      link: '' 
    },
    {
      category: "Иновации за компании",
      id: '6',
      name: 'Нов концепт кој ќе им помогне на компаниите да преминат од стариот во новиот начин на работење. Подгответе ја вашата компанија за дигитална трансформација.',
      image: 'inovaciizakompanii.jpg',
      link: '#stranazanastani.html' 
    },
  ];
  $.each(mokData, function (i) {
    var templateString =
      '<div class="col-sm-6 col-md-4 card-holder design cardpop"><a href="'+ mokData[i].link +'" style="text-decoration: none;"  class="thumbnail"><img class="zanasimg"src="images/Za_Nas/' + mokData[i].image + '"><div class="caption"><h3><strong>' + mokData[i].category + '</strong></h3><h5>' + mokData[i].name + '</h5><p class="farp"><i class="far fa-arrow-alt-circle-right" style="font-size:60px;"></i></p></div></a></div>';
    $('.cards1').append(templateString);
  })

    var mokData2 = [{
      category: "Codeworks",
      id: '1',
      name: 'Вистинискиот настан за сите tech таленти кои сакаат да кодираат и да научат што е ново во tech заедницата. Настан кој ги поврзува mid програмерите со IT компаниите. Deep Dive Intensive Seminar Ексклузивни семинари кои комбинираат три различни техники на учење.',
      image: 'IMG_7481.jpg',
      link: '#'
    },
    {
      category: "Deep Dive into Marketing",
      id: '2',
      name: 'Deep Dive into Marketing се серија од интезивни семинари кои се наменски подготвени да ти помогнат да ги совладиш и предвидиш современите промени, предизвици и идните трендови во областа во маркетингот.',
      image: 'instruktori.jpg',
      link: '#'
    },
    {
      category: "Deep Dive into Data Science",
      id: '3',
      name: 'Deep Dive into Data Science се серија од интезивни семинари кои се наменски подготвени да ти помогнат да ги совладиш и предвидиш современите промени, предизвици и идните трендови во областа во Data Science.',
      image: 'HristijanNosecka.jpg',
      link: '#'
    },
  ];
  $.each(mokData2, function (i) {
    var templateString =
      '<div class="col-sm-6 col-md-4 card-holder design cardpop"><a href="'+ mokData2[i].link +'" style="text-decoration: none;"  class="thumbnail"><img style="min-height: 280px";"; class="zanasimg"src="images/Nastani/' + mokData2[i].image + '"><div class="caption"><h3><strong>' + mokData2[i].category + '</strong></h3><h5>' + mokData2[i].name + '</h5><p class="farp"><i class="far fa-arrow-alt-circle-right" style="font-size:60px;"></i></p></div></a></div>';
    $('.cards3').append(templateString);
  })

//buttons change
$(function () {
  $("li").click(function() {
    $(".aborder").css('border-bottom', "solid 2px yellow");  
  });
});
$(function () {
  $(".edubutton").click(function() {
    $("#companyimg").attr("src", "images/Za_Nas/edukacija1.jpg");
    $(this).css('backgroundColor', "black");
    $(this).css('color', "rgb(234, 195, 46)");
    $(".companybutton").css('backgroundColor', "rgb(234, 195, 46)");
    $(".companybutton").css('color', "black");
  });
});
$(function () {
  $(".companybutton").click(function() {
    $("#companyimg").attr("src", "images/IMG_7707.jpg");
    $(this).css('backgroundColor', "black");
    $(this).css('color', "rgb(234, 195, 46)");
    $(".edubutton").css('backgroundColor', "rgb(234, 195, 46)");
    $(".edubutton").css('color', "black");
  });
});



    $(".reservespot").click(function(){
      var popup = document.getElementById("myPopup");
      popup.classList.toggle("show");
      setTimeout(function() { popup.classList.toggle("show"); }, 3000);
    }) 
    



// card animate
$('.thumbnail').hover(
  function(){
    $(this).animate({
      marginTop: "-=1%",
    },200);
  },
  function(){
    $(this).animate({
      marginTop: "0%"
    },200);
  }
);

//modals
$('#myModal').on('shown.bs.modal', function () {
  $('button1').focus()
})


var mokData3 = [{
  category: "Академија за графички дизајн",
  icon1: 'glyphicon glyphicon-user',
  icon2: 'glyphicon glyphicon-calendar',
  icon3: 'glyphicon glyphicon-time',
  icon4: 'glyphicon glyphicon-hand-right',
  id: 'https://marketpreneurs.brainster.co/?utm_source=brainster.co&utm_medium=academies&utm_campaign=website&utm_content=mkt',
  slots: 'Слободни места: 4',
  image: 'karticka1.jpg',
  date: 'Уписи до 26.08.2019',
  design: 'Стани дизајнер за 7 месеци',
  partners: 'Партнери за вработување: 5'
},
{
  category: "Академија за дигитален маркетинг",
  icon1: 'glyphicon glyphicon-user',
  icon2: 'glyphicon glyphicon-calendar',
  icon3: 'glyphicon glyphicon-time',
  icon4: 'glyphicon glyphicon-hand-right',
  id: 'https://design.brainster.co/?utm_source=brainster.co&utm_medium=academies&utm_campaign=website&utm_content=design',
  slots: 'Слободни места: 4',
  image: 'karticka2.png',
  date: 'Уписи до 26.08.2019',
  design: 'Стани дизајнер за 7 месеци',
  partners: 'Партнери за вработување: 5'
},
{
  category: "Академија за Front-end програмирање",
  icon1: 'glyphicon glyphicon-user',
  icon2: 'glyphicon glyphicon-calendar',
  icon3: 'glyphicon glyphicon-time',
  icon4: 'glyphicon glyphicon-hand-right',
  id: 'http://codepreneurs.brainster.co/?utm_source=brainster.co&utm_medium=academies&utm_campaign=website&utm_content=frontend',
  slots: 'Слободни места: 4',
  image: 'karticka3.png',
  date: 'Уписи до 26.08.2019',
  design: 'Стани дизајнер за 7 месеци',
  partners: 'Партнери за вработување: 5'
},
{
  category: "Академија за Full-stack програмирање",
  icon1: 'glyphicon glyphicon-user',
  icon2: 'glyphicon glyphicon-calendar',
  icon3: 'glyphicon glyphicon-time',
  icon4: 'glyphicon glyphicon-hand-right',
  id: 'https://codepreneurs.brainster.co/?utm_source=brainster.co&utm_medium=academies&utm_campaign=website&utm_content=fullstack',
  slots: 'Слободни места: 4',
  image: 'karticka4.png',
  date: 'Уписи до 26.08.2019',
  design: 'Стани дизајнер за 7 месеци',
  partners: 'Партнери за вработување: 5'
},
{
  category: "Академија за   Data science",
  icon1: 'glyphicon glyphicon-user',
  icon2: 'glyphicon glyphicon-calendar',
  icon3: 'glyphicon glyphicon-time',
  icon4: 'glyphicon glyphicon-hand-right',
  id: 'https://datascience.brainster.co/?utm_source=brainster.co&utm_medium=academies&utm_campaign=website&utm_content=data_science',
  slots: 'Слободни места: 4',
  image: 'karticka5.png',
  date: 'Уписи до 26.08.2019',
  design: 'Стани дизајнер за 7 месеци',
  partners: 'Партнери за вработување: 5'
},
{
  category: "Академија за software testing",
  icon1: 'glyphicon glyphicon-user',
  icon2: 'glyphicon glyphicon-calendar',
  icon3: 'glyphicon glyphicon-time',
  icon4: 'glyphicon glyphicon-hand-right',
  id: 'https://qa.brainster.co/?utm_source=brainster.co&utm_medium=academies&utm_campaign=website&utm_content=qa',
  slots: 'Слободни места: 4',
  image: 'karticka6.png',
  date: 'Уписи до 26.08.2019',
  design: 'Стани дизајнер за 7 месеци',
  partners: 'Партнери за вработување: 5'
},
];

$.each(mokData3, function (i) {
var templateString =
'<div class="col-sm-6 col-md-4 card-holder design cardpop"><a href="' + mokData3[i].id + '" class="bop"><div class="dop"><img style="width:100%; height:100%"; class="slikicka"src="images/karticki/' + mokData3[i].image + '"></div> <header class="eop"><h2>' + mokData3[i].category +'</h2></header> <div class="content fop"> <div class="IconandText frop"> <span class="icon ' + mokData3[i].icon1 + '"></span><p id="pp">'+ mokData3[i].slots +'</p></div><div class="IconandText frop"> <span class="icon ' + mokData3[i].icon2 + '"></span><p id="pp">'+ mokData3[i].date +'</p></div> <div class="IconandText frop"> <span class="icon ' + mokData3[i].icon3 + ' gop"></span><p>'+ mokData3[i].design +'</p></div> <div class="IconandText frop"> <span class="icon ' + mokData3[i].icon1 + ' gop"></span><p>'+ mokData3[i].partners +'</p></div>  </div> </a></div>';
$('.cards4').append(templateString);
})
$('.bop').hover(
  function(){
    $(this).animate({
      paddingTop: "-=10px",
    },200);
  },
  function(){
    $(this).animate({
      paddingTop: "+=10px",
    },200);
  }
);


$('#myCollapsible').on('hidden.bs.collapse', function () {

})
$('.carousel').carousel({
  interval: 1000 * 7
});

var mokData4 = [{
  category: "Deep Dive семинари кои ќе овозможуваат брз кариерен напредок",
  id: 'КАРИЕРА',
  name: 'Нов продукт од Brainster во Brainster Space. Интезивни дводневни семинари кои ќе ти помогнат од Mid level брзо да го постигниш твојот Senior напредок',
  image: 'prva.jpg',
  link: 'brainster.co'
},
{
  category: "Ако не те бива за програмирање дали можеш да имаш кариера во Tech",
  id: 'КАРИЕРА',
  name: 'Tech индустријата е најпосакуваната област за работа, заради големата побарувачка, секојдневните промени и големиот инкам.',
  image: 'vtora.jpg',
  link: '#stranazanastani.html'
},
{
  category: "Што значи денес, твојата канцеларија да е смарт?",
  id: 'ТЕХНОЛОГИЈА',
  name: 'На отварањето на Brainster Space, добивме супер подарок- smart home уред. Голем дел од нас беа збунети за тоа што се можеме да добиеме со него.',
  image: 'treta.jpg',
  link: ''
},
    {
    category: "Како до кариера во Data Science?",
    id: 'DATA SCIENCE',
    name: 'Од искуството на студентите на нашата академија, решивме да ви помогнеме со неколку tips за потребните skills за да започнете да работите во Data Science.',
    image: 'cetvrta.jpeg',
    link: '#stranazanastani.html' 
  },
  {
    category: "Интервју со Николај Ванчев, арт директор во Tank, Estonia. #SpaceFamily",
    id: 'МАРКЕТИНГ',
    name: 'Николај Ванчев е Creative director во TANK (Естонија). Неговата успешна 12 годишна кариера како арт директор тој ја гради во реномирани агенции...',
    image: 'peta.jpg',
    link: '#stranazanastani.html' 
  },
  {
    category: "Зошто дизајн, најкратко со Дијана Димитриевска #SpaceFamily",
    id: 'ДИЗАЈН',
    name: 'Интервју со Дијана Димитриевска, графички дизајнер, DJ и инструктор на Академијата за графички дизајн во Brainster.',
    image: 'shesta.jpg',
    link: '#stranazanastani.html' 
  },
  {
  category: "Што е потребен за добар мобилен дизајн",
    id: 'ДИЗАЈН',
    name: 'UX/UI дизајнерите се дигитални продукт дизајнери. Нивната задача е да создадат корисен, релевантен и едноставен за корисниците продукт.',
    image: 'sedma.jpg',
    link: '#stranazanastani.html' 
  },
  {
  category: "Македонско-американската компанија Upshift доби инвестиција од 3.7 милиони...",
    id: 'IMPACT',
    name: 'Од-дименд платформата за работа се шири со нова рунда финансирање предводена од Recruit која е најголемата HR Tech компанија во светот...',
    image: 'osma.jpg',
    link: '#stranazanastani.html' 
  },
  {
  category: "Локалната апликација Challenger и нејзиниот импакт. #SpaceFamily",
    id: 'IMPACT',
    name: 'Мисијата на Challenger e до создавање општествено одговорна заедница која создава позитивна промена преку развивање на подобри индивидуални навики...',
    image: 'devetta.jpg',
    link: '#stranazanastani.html' 
  },
];


window.setActive = function setActive(name) {
  const cardContainer = $('.cards5'); 

  cardContainer.empty();
  console.log(name);
  mokData4
    .filter(o => name == 'СИТЕ' ? true : o.id == name)
    .forEach(card => {
      const template = '<div class="col-sm-6 col-md-4 card-holder design cardpop fuji" style="height: 600px;"><a href="'+ card.link +'" style="text-decoration: none;"  class="card"><img style="height: 250px; width: 100%;     border: 1px solid #ddd;"; class="card-img-top"src="images/Space_Blog_Kartici/' + card.image + '"><div class="card-body text-left" style="border: 1px solid #ddd; height:280px";><h3 class="card-title" style="min-height: 80px; margin-left:15px; margin-right:15px; color:black;";><strong>' + card.category + '</strong></h3><h5 style="min-height: 80px;margin-left:15px; margin-right:10px; color:rgb(124,124,124); font-size:15px;">' + card.name + '</h5><a  class=" button2 testtest" style="float:left; margin-left:15px;"; role="button"><strong class="textbtn">' + card.id + '</strong></a><p class="farp"><i class="far fa-arrow-alt-circle-right" style="font-size:60px; float:right; margin-right:15px;"></i></p></div></a></div>';
      cardContainer.append(template);
    });
}

setActive('СИТЕ');

$('.fuji').hover(
  function(){
    $(this).animate({
      marginTop: "-=1%",
    },200);
  },
  function(){
    $(this).animate({
      marginTop: "0%"
    },200);
  }
);
//bukiraj ne
$(".bukirajne").click(function() {
  $('html,body').animate({
      scrollTop: $(".eventhost").offset().top},
      'slow');
});

const numdimeBtnNames = [
  'Простор', 'Space Kitchen', 'Логистика', 'Техничка подршка', 'Звук', 'Светло', 'Помош при Организација', 'Видео и Фотографија', 'Промоција на Социјални Мрежи'
];

const nudimeContainer = $('#nudimeBtns');

numdimeBtnNames.forEach(btnName => {
  const btnTemplate = `
    <div>
    <h1 style="font-size:35px; width:auto; height:auto; margin-left:30px;"; class=" button1 companybutton" role="button"><strong class="textbtn">${btnName}</strong></h1>
    </div>
  `;
  nudimeContainer.append(btnTemplate);
});

$('body').on('click', '.filtercard', function() {
  $('.filtercard.activefilter').removeClass('activefilter');
  $(this).addClass('activefilter');
});



$(function () {
  $(".checkprostor1").click(function() {
    window.scrollTo(0, 0);
  });
});
    let next = $(".nextnext");
    let prev = $(".prevprev");
    
    next.click(function() {
      let newScore = document.getElementsByClassName(".whichslide").innerHTML;
      let value = parseInt(newScore,10) + 1;
      document.getElementsByClassName(".whichslide").innerHTML = value;
      console.log("hhh");
    }); 
    prev.click(function() {
      let newScore = document.getElementsByClassName(".whichslide").innerHTML;  
      let value = parseInt(newScore,10) - 1;
      document.getElementsByClassName(".whichslide").innerHTML = value;
    });

})
let today = new Date(); 
let currentMonth = today.getMonth(); 
let currentYear = today.getFullYear(); 
let months = ['Јануари', 'Февруари', 'Март', 'Април', 'Maј', 'Јуни', 'Јули', 'Август', 'Септември', 'Октомвмри', 'Ноември', 'Декември'] // define months array


let nextBtn = document.querySelector('#nextBtn');
let prevBtn = document.querySelector('#prevBtn');


nextBtn.addEventListener('click', next);
prevBtn.addEventListener('click', prev);


const eventsData = [
    {
        date: new Date(2020, 3, 4),
        title: 'Deep dive into Data Science',
        time: '10:00 - 18:00',
        bgColor: 'blue',
        color: 'white'
    },
    {
        date: new Date(2020, 3, 5),
        title: 'Deep dive into Data Science',
        time: '10:00 - 18:00',
        bgColor: 'blue',
        color: 'white'
    },
    {
        date: new Date(2020, 3, 25),
        title: 'Deep dive into Marketing',
        time: '10:00 - 18:00',
        bgColor: 'red',
        color: 'white'
    },
    {
        date: new Date(2020, 3, 26),
        title: 'Deep dive into Marketing',
        time: '10:00 - 18:00',
        bgColor: 'red',
        color: 'white'
    }
]


renderCalendar(currentMonth, currentYear, eventsData);

function next() {
    currentYear = (currentMonth == 11) ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12;
    renderCalendar(currentMonth, currentYear, eventsData);
}


function prev() {
    currentYear = (currentMonth == 0) ? currentYear - 1 : currentYear;
    currentMonth = (currentMonth == 0) ? 11 : currentMonth - 1;
    renderCalendar(currentMonth, currentYear, eventsData);
}


function renderCalendar(month, year, events) {

    let renderToday = new Date();


    let firstDay = new Date(year, month).getDay();


    let daysInMonth = 32 - new Date(year, month, 32).getDate();


    let calendar = document.querySelector('#calendar-body');
    let monthAndYear = document.querySelector('#montyAndYear')

    monthAndYear.innerHTML = `${months[month]} ${year}`;

    calendar.innerHTML = '';


    let thisYearAndMonthEvents = events.filter(event => event.date.getFullYear() == year && event.date.getMonth() == month);


    let date = 1;


    for (let i = 0; i < 6; i++) {
        let week = document.createElement('div');
        week.classList.add('calendar-week');
        for (let j = 0; j < 7; j++) {
            if (i == 0 && j < firstDay) {
                let emptyCell = document.createElement('div');
                emptyCell.classList.add('empty-cell');
                week.appendChild(emptyCell);
            } else if (date <= daysInMonth) {
                let dayCell = document.createElement('div');
                dayCell.classList.add('day-cell');

                if (date == renderToday.getDate() && month == renderToday.getMonth() && year == renderToday.getFullYear()) {
                    dayCell.classList.add('today');
                }
                let dayCellHTML = '';
                if (thisYearAndMonthEvents.length) {
                    let todayEvent = thisYearAndMonthEvents.filter(event => event.date.getDate() == date);
                    if (todayEvent.length) {
                        dayCell.classList.add('event-day');

                        todayEvent.forEach(ev => {
                            dayCellHTML += `<div class="event" style="border-left:4px solid ${ev.bgColor}"><div>${ev.title}</div><div>${ev.time}</div></div><span>${date}</span>`;
                            dayCell.style.backgroundColor = ev.bgColor;
                            dayCell.style.color = ev.color;
                        });
                    }
                }

                dayCell.innerHTML = (dayCellHTML == '') ? `<span>${date}</span>` : dayCellHTML;

                week.appendChild(dayCell);

                date++;
            } else if (date > daysInMonth) {
                let emptyCell = document.createElement('div');
                emptyCell.classList.add('empty-cell');
                week.appendChild(emptyCell);
            }
        }
        calendar.appendChild(week);
    }
}



