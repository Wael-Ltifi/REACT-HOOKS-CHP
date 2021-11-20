const MoviesData = [ 
    {   
        id:1,
        title: "Forrest Gump 1940",
        description: "A few decades of American history, from the 1940s to the end of the twentieth century, through the gaze and strange odyssey of a simple and pure man, Forrest Gump.",
        Image:"https://fr.web.img4.acsta.net/pictures/15/10/13/15/12/514297.jpg",
        rate: 5
    },
    {
        id:2,
        title: "Schindler's List",
        description: "Evocation of the war years of Oskar Schindler, Austrian industrialist who returned to Krakow in 1939 with German troops. Throughout the war, he would protect Jews by making them work in his factory.",
        Image:"https://www.u-buy.com.tw/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvODErSDRsWlZ3K0wuX1NMMTUwMF8uanBn.jpg",
        rate: 2
    },
    {
        id:3,
        title: "The Godfather",
        description: "In 1945, in New York, the Corleones are one of the five mafia families. Don Vito Corleone marries his daughter to a bookmaker. Sollozzo, Godfather of the Tattaglia family, proposes to Don Vito an association in the drug trade..",
        Image:"https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
        rate: 3
    }, 
    {
        id:4, 
        title: "The Lord of the Rings",
        description: "As darkness spreads across Middle-earth, Aragorn is revealed to be the hidden heir of the ancient kings. As for Frodo, always tempted by the Ring, he travels through the enemy lands, relying on Sam and Gollum",
        Image:"https://2img.net/h/wtfbabe.files.wordpress.com/2012/11/two-towers-poster.jpg",
        rate: 5
    }, 
    {
        id:5,
        title: "The Lion King",
        description: "The long struggle of Simba the lion cub to reach his rank as king of animals, after the deceitful Scar, his uncle, killed his father and took his place.        ",
        Image:"data:image/jpeg;base64,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",
        rate: 4
    },
    {
        id:6,
        title: "The Dark Knight",
        description: "Batman sets out to dismantle the last criminal organizations in Gotham. But he soon comes up against a new genius of crime who spreads terror and chaos in the city: the Joker",
        Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiotskdRwsqkA50EJ3tvLwgVyag1O27eYXRuEXOrFEcLyDXb9e",
        rate: 4
    },
    {
        id:7,
        title: "Sweet Girl",
        description: "A man vows to avenge those responsible for his wife's death, while protecting his daughter, the only family he has left. ",
        Image:"https://fr.web.img4.acsta.net/pictures/21/08/04/12/34/5035523.jpg",
        rate: 1
    },
    {
        id:8,
        title: "Palmer",
        description: "An ex-inmate, former college football star, Eddie Palmer, befriends a young boy abandoned by his junkie mother.",
        Image:"https://fr.web.img6.acsta.net/c_310_420/pictures/20/12/18/10/24/4751126.jpg",
        rate: 5
    },{
        id:9,
        title: "PIG",
        description: "A truffle hunter lives as a hermit in the Oregon wilderness, when the abduction of his truffle sow pushes him to return to civilization in Portland where he will have to face the demons of his past.        ",
        Image:"https://fr.web.img6.acsta.net/pictures/21/06/18/07/55/3847741.jpg",
        rate: 3
    },
]
    export default MoviesData