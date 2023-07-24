let movies = [
    {
        name: "Loki",
        description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, consequatur incidunt eum in voluptatum ad odio cupiditate magnam quis cum deleniti modi maxime totam omnis, nam quae! Iste, tenetur officiis.",
        image: ""
    },
    {
        name: "Loki",
        description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, consequatur incidunt eum in voluptatum ad odio cupiditate magnam quis cum deleniti modi maxime totam omnis, nam quae! Iste, tenetur officiis.",
        image: ""
    },
    {
        name: "Loki",
        description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, consequatur incidunt eum in voluptatum ad odio cupiditate magnam quis cum deleniti modi maxime totam omnis, nam quae! Iste, tenetur officiis.",
        image: ""
    },
    {
        name: "Loki",
        description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, consequatur incidunt eum in voluptatum ad odio cupiditate magnam quis cum deleniti modi maxime totam omnis, nam quae! Iste, tenetur officiis.",
        image: ""
    },
    {
        name: "Loki",
        description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, consequatur incidunt eum in voluptatum ad odio cupiditate magnam quis cum deleniti modi maxime totam omnis, nam quae! Iste, tenetur officiis.",
        image: ""
    },
    {
        name: "Loki",
        description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, consequatur incidunt eum in voluptatum ad odio cupiditate magnam quis cum deleniti modi maxime totam omnis, nam quae! Iste, tenetur officiis.",
        image: ""
    },
];

const topcontainer=document.querySelector('.top-image-container');

let sliders=[];

let sliderIndex= 0;     //using to track the current slide.

const createSlide = () => {
    if(slideIndex>=movies.length){
        slideIndex = 0;
    }

    //DOM elements
    let slide = document.createElement('div');
    var imgElement = document.createElement('img');
    let content = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');

    //attach elements
    imgElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].description));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(imgElement);
    topcontainer.appendChild(slide);

    //setting images
    imgElement.src=movies[slideIndex].image;
    sliderIndex++

    //setting elment classnames
    slide.className='slider';
    content.className='slide-content';
    h1.className='movie-title';
    p.className='movie-description'

    sliders.push(slide);

    if(sliders.length){
        sliders[0].style.marginLeft = calc(-${100 * (sliders.length - 2)}% - ${
            30 *  (sliders.length - 2)
        }px);
    }
}