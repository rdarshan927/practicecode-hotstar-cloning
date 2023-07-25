let movies = [
    {
        name: "Loki",
        description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, consequatur incidunt eum in voluptatum ad odio cupiditate magnam quis cum deleniti modi maxime totam omnis, nam quae! Iste, tenetur officiis.",
        image: "/home/rdarshan927/Downloads/drive-download-20230715T162759Z-001/images/slider 1.PNG"
    },
    {
        name: "Winter Soldier",
        description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, consequatur incidunt eum in voluptatum ad odio cupiditate magnam quis cum deleniti modi maxime totam omnis, nam quae! Iste, tenetur officiis.",
        image: "/home/rdarshan927/Downloads/drive-download-20230715T162759Z-001/images/slider 2.PNG"
    },
    {
        name: "Wanda Vision",
        description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, consequatur incidunt eum in voluptatum ad odio cupiditate magnam quis cum deleniti modi maxime totam omnis, nam quae! Iste, tenetur officiis.",
        image: "/home/rdarshan927/Downloads/drive-download-20230715T162759Z-001/images/slider 3.PNG"
    },
    {
        name: "Raya and the last Dragon",
        description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, consequatur incidunt eum in voluptatum ad odio cupiditate magnam quis cum deleniti modi maxime totam omnis, nam quae! Iste, tenetur officiis.",
        image: "/home/rdarshan927/Downloads/drive-download-20230715T162759Z-001/images/slider 4.png"
    },
    {
        name: "Luca",
        description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, consequatur incidunt eum in voluptatum ad odio cupiditate magnam quis cum deleniti modi maxime totam omnis, nam quae! Iste, tenetur officiis.",
        image: "/home/rdarshan927/Downloads/drive-download-20230715T162759Z-001/images/slider 5.PNG"
    },
    //{
        //name: "",
        //description:
          //  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, consequatur incidunt eum in voluptatum ad odio cupiditate magnam quis cum deleniti modi maxime totam omnis, nam quae! Iste, tenetur officiis.",
        //image: "/home/rdarshan927/Downloads/drive-download-20230715T162759Z-001/images/slider 6.PNG"
    //},
];

const topcontainer=document.querySelector('.top-image-container');

let sliders=[];

let sliderIndex= 0;     //using to track the current slide.

const createSlide = () => {
    if(sliderIndex>=movies.length){
        sliderIndex = 0;
    }

    //DOM elements
    let slide = document.createElement('div');
    var imgElement = document.createElement('img');
    let content = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');

    //attach elements
    imgElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[sliderIndex].name));
    p.appendChild(document.createTextNode(movies[sliderIndex].description));
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
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
            30 *  (sliders.length - 2)
        }px)`;
    }
}

for (let i=0; i<3; i++ ){
    createSlide();
}

setInterval(() => {
    createSlide();
}, 3000);