/*document.getElementById('hamburger').addEventListener('click', e => {
    document.getElementById('hamburger').classList.toggle('open');
    document.getElementById('nav').classList.toggle('open');
});

*/
let tableCells = [{id:1, available:1},	{id:3, available:1},	{id:5, disabled:1},	{id:11, disabled:1},	{id:13, available:1},	{id:15, available:1},	{id:17, available:1},	{id:20, disabled:1},	{id:26, disabled:1},	{id:29, disabled:1},	{id:31, available:1},	{id:33, available:1},	{id:35, disabled:1},	{id:50, disabled:1},	{id:65, available:1},	{id:81, available:1},	{id:41, available:1},	{id:56, disabled:1},	{id:71, available:1},	{id:85, available:1},	{id:82, disabled:1},	{id:83, disabled:1},	{id:84, disabled:1},	{id:63, disabled:1},	{id:77, available:1},	{id:79, disabled:1},	{id:93, available:1},	{id:43, available:1},	{id:45, available:1},	{id:73, disabled:1},	{id:87, disabled:1},	{id:89, available:1},	{id:103, disabled:1},	{id:97, available:1},	{id:98, available:1},	{id:99, disabled:1}];

let tableTemplate = Handlebars.compile(document.getElementById("hb-template-table").innerHTML);
let cellTemplate = Handlebars.compile(document.getElementById("hb-template-cell").innerHTML);

for (let id = 1; id <= 105; id++) {
    document.getElementById('grid').innerHTML += cellTemplate({id});
}
;

let i = 1;
tableCells.forEach(table => {
    table.numb = i++;
    document.querySelector('.cell[data-id="' + table.id + '"]').innerHTML = tableTemplate(table);
});


var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    //direction: 'vertical',
    slidesPerView: 1,
    loop: true,
    spaceBetween: 40,

    navigation: {
        prevEl: '.arrow-left',
        nextEl: '.arrow-right'
    },
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
    breakpoints: {
        576: {
            slidesPerView: 3,

        }
    }

})