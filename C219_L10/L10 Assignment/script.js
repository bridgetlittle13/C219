// Full Page
$(document).ready(function () {
    $('#fullpage').fullpage({
        sectionsColor: ['#F0F0F2', '#E9EBF2', '#F0F0F2'],
        navigation: true,
        navigationPosition: 'right'
    })
})

//Data Table
$(document).ready(function() {
    $('#centres').DataTable();
    pageLength: 5
});

//Total Cases (Animation - Counter)
anime({
    targets: '.cases', 
    innerHTML: [0, 257510], //start and end values
    easing: 'linear',
    round: 1, //rounds off to zero decimal places
    duration: 1000
    });

//Currently in Hospital (Animation - Counter)
anime({
    targets: '.hospital', 
    innerHTML: [0, 1365], //start and end values
    easing: 'linear',
    round: 1, //rounds off to zero decimal places
    duration: 1000
    });

//Deaths (Animation - Counter)
anime({
    targets: '.deaths', 
    innerHTML: [0, 678], //start and end values
    easing: 'linear',
    round: 1, //rounds off to zero decimal places
    duration: 1000
    });

//9 out of 10 animation
anime({
    targets: '.animated',
    opacity: [0, 1],
    translateY: [-20, 0],
    duration: 1000,
    easing: 'easeInOutQuad',
    delay: anime.stagger(200),
});
