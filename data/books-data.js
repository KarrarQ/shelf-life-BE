const books = [
  {
    isbn: "9780451240316",
    title: "THE KEY IS LOVE",
    description: "A daughter draws on her mother’s wisdom. ",
    amazon_link:
      "http://www.amazon.com/The-Key-Love-Daughters-Gratitude/dp/0451240316?tag=NYTBSREV-20",
    author: "Marie Osmond with Marcia Wilkie",
    recommended_by: "John Ammon",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9780451240316.jpg",
  },
  {
    isbn: "9781250278210",
    title: "ABANDONED IN DEATH",
    description:
      "The 54th book of the In Death series. Eve Dallas investigates a homicide and the disappearance of other women who resemble that victim.",
    amazon_link: "https://www.amazon.com/dp/125027821X?tag=NYTBSREV-20",
    author: "J.D. Robb",
    recommended_by: "Karrar Qasim",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9781250278210.jpg",
  },
  {
    isbn: "9780525559474",
    title: "THE MIDNIGHT LIBRARY",
    description:
      "Nora Seed finds a library beyond the edge of the universe that contains books with multiple possibilities of the lives one could have lived.",
    amazon_link: "https://www.amazon.com/dp/0525559477?tag=NYTBSREV-20",
    author: "Matt Haig",
    recommended_by: "Karrar Qasim",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9780525559474.jpg",
  },
  {
    isbn: "9781501171345",
    title: "THE LAST THING HE TOLD ME",
    description:
      "Hannah Hall discovers truths about her missing husband and bonds with his daughter from a previous relationship.",
    amazon_link: "https://www.amazon.com/dp/1501171348?tag=NYTBSREV-20",
    author: "Laura Dave",
    recommended_by: "Karrar Qasim",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9781501171345.jpg",
  },
  {
    isbn: "9780735222359",
    title: "THE LINCOLN HIGHWAY",
    description:
      "Two friends who escaped from a juvenile work farm take Emmett Watson on an unexpected journey to New York City in 1954.",
    amazon_link: "https://www.amazon.com/dp/0735222355?tag=NYTBSREV-20",
    author: "Amor Towles",
    recommended_by: "Karrar Qasim",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9780735222359.jpg",
  },
  {
    isbn: "9780593356159",
    title: "THE MAID",
    description:
      "When a wealthy man is found dead in his room, a maid at the Regency Grand Hotel becomes a lead suspect.",
    amazon_link: "https://www.amazon.com/dp/0593356152?tag=NYTBSREV-20",
    author: "Nita Prose",
    recommended_by: "Karrar Qasim",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9780593356159.jpg",
  },
  {
    isbn: "9781250274618",
    title: "THE CHRISTIE AFFAIR",
    description:
      "Miss Nan O’Dea becomes the mistress of Agatha Christie’s husband.",
    amazon_link: "https://www.amazon.com/dp/1250274613?tag=NYTBSREV-20",
    author: "Nina de Gramont",
    recommended_by: "Karrar Qasim",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9781250274618.jpg",
  },
  {
    isbn: "9780525618584",
    title: "CITY OF THE DEAD",
    description:
      "The 37th book in the Alex Delaware series. Delaware and Sturgis investigate a double homicide.",
    amazon_link: "https://www.amazon.com/dp/0525618589?tag=NYTBSREV-20",
    author: "Jonathan Kellerman",
    recommended_by: "Karrar Qasim",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9780525618584.jpg",
  },
  {
    isbn: "9780385546027",
    title: "THE JUDGE'S LIST",
    description:
      "The second book in the Whistler series. Investigator Lacy Stoltz goes after a serial killer and closes in on a sitting judge.",
    amazon_link: "https://www.amazon.com/dp/0385546025?tag=NYTBSREV-20",
    author: "John Grisham",
    recommended_by: "Karrar Qasim",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9780385546027.jpg",
  },
  {
    isbn: "9780316499774",
    title: "THE HORSEWOMAN",
    description:
      "As the Paris Olympics draw near, a mother and daughter, who are champion horse riders, compete against each other.",
    amazon_link: "https://www.amazon.com/dp/0316499773?tag=NYTBSREV-20",
    author: "James Patterson and Mike Lupica",
    recommended_by: "Karrar Qasim",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9780316499774.jpg",
  },
  {
    isbn: "9781984818416",
    title: "WISH YOU WERE HERE",
    description:
      "Diana O’Toole re-evaluates her seemingly perfect life when a pandemic disrupts her vacation in the Galápagos Islands.",
    amazon_link: "https://www.amazon.com/dp/1984818414?tag=NYTBSREV-20",
    author: "Jodi Picoult",
    recommended_by: "Karrar Qasim",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9781984818416.jpg",
  },
  {
    isbn: "9781936608751",
    title: "PRACTICAL PALEO",
    description: "A customized approach to health and a whole-foods lifestyle.",
    amazon_link:
      "http://www.amazon.com/Practical-Paleo-Customized-Whole-Foods-Lifestyle/dp/1936608758?tag=NYTBSREV-20",
    author: "Diane Sanfilippo",
    recommended_by: "Reid Poole",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9781936608751.jpg",
  },
  {
    isbn: "9781616200466",
    title: "THE DRUNKEN BOTANIST",
    description: "The connection between plants and alcoholic spirits.",
    amazon_link:
      "http://www.amazon.com/The-Drunken-Botanist-Plants-Create/dp/1616200464?tag=NYTBSREV-20",
    author: "Amy Stewart",
    recommended_by: "Reid Poole",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9781616200466.jpg",
  },
  {
    isbn: "9780063159983",
    title: "THE HOUSE OF GUCCI",
    description:
      "An account of the murder of Maurizio Gucci in 1995; the basis of the film.",
    amazon_link: "https://www.amazon.com/dp/0063159988?tag=NYTBSREV-20",
    author: "Sara Gay Forden",
    recommended_by: "Reid Poole",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9780063159983.jpg",
  },
  {
    isbn: "9780374533557",
    title: "THINKING, FAST AND SLOW",
    description:
      "When we can and cannot trust our intuitions in making business and personal decisions.",
    amazon_link:
      "http://www.amazon.com/Thinking-Fast-Slow-Daniel-Kahneman-ebook/dp/B00555X8OA?tag=NYTBSREV-20",
    author: "Daniel Kahneman",
    recommended_by: "Reid Poole",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9781429969352.jpg",
  },
  {
    isbn: "9781501110344",
    title: "NOVEMBER 9",
    description:
      "Ben and Fallon meet on the same day each year but a possible untruth might spoil their relationship.",
    amazon_link:
      "http://www.amazon.com/November-9-Novel-Colleen-Hoover-ebook/dp/B00UDCI1S8?tag=NYTBSREV-20",
    author: "Colleen Hoover",
    recommended_by: "Reid Poole",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9781501110351.jpg",
  },
  {
    isbn: "9780525536963",
    title: "THE VANISHING HALF",
    description:
      "The lives of twin sisters who run away from a Southern Black community at age 16 diverge as one returns and the other takes on a different racial identity but their fates intertwine.",
    amazon_link: "https://www.amazon.com/dp/0525536299?tag=NYTBSREV-20",
    author: "Brit Bennett",
    recommended_by: "Reid Poole",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9780525536291.jpg",
  },
  {
    isbn: "9780778311935",
    title: "THE OVERNIGHT GUEST",
    description:
      "A true crime writer working in an isolated farmhouse takes in a small child during a deadly snowstorm.",
    amazon_link: "https://www.amazon.com/dp/0778311937?tag=NYTBSREV-20",
    author: "Heather Gudenkauf",
    recommended_by: "Reid Poole",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9780778311935.jpg",
  },
  {
    isbn: "9781984806734",
    title: "BEACH READ",
    description:
      "A relationship develops between a literary fiction author and a romance novelist as they both try to overcome writer’s block.",
    amazon_link: "https://www.amazon.com/dp/1984806734?tag=NYTBSREV-20",
    author: "Emily Henry",
    recommended_by: "Reid Poole",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9781984806734.jpg",
  },
  {
    isbn: "9780316556323",
    title: "CIRCE",
    description:
      "Zeus banishes Helios' daughter to an island, where she must choose between living with gods or mortals.",
    amazon_link:
      "https://www.amazon.com/Circe-Madeline-Miller/dp/0316556343?tag=NYTBSREV-20",
    author: "Madeline Miller",
    recommended_by: "John Ammon",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9780316556347.jpg",
  },
  {
    isbn: "9780143127741",
    title: "THE BODY KEEPS THE SCORE",
    description:
      "How trauma affects the body and mind, and innovative treatments for recovery.",
    amazon_link:
      "http://www.amazon.com/The-Body-Keeps-Score-Healing/dp/0670785938?tag=NYTBSREV-20",
    author: "Bessel van der Kolk",
    recommended_by: "John Ammon",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9780670785933.jpg",
  },
  {
    isbn: "9780060959470",
    title: "ALL ABOUT LOVE",
    description:
      "The late feminist icon explores the causes of a polarized society and the meaning of love.",
    amazon_link: "https://www.amazon.com/dp/0060959479?tag=NYTBSREV-20",
    author: "bell hooks",
    recommended_by: "John Ammon",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9780060959470.jpg",
  },
  {
    isbn: "9780399590528",
    title: "EDUCATED",
    description:
      "The daughter of survivalists, who is kept out of school, educates herself enough to leave home for university.",
    amazon_link:
      "https://www.amazon.com/Educated-Memoir-Tara-Westover/dp/0399590501?tag=NYTBSREV-20",
    author: "Tara Westover",
    recommended_by: "John Ammon",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9780399590504.jpg",
  },
  {
    isbn: "9781571313560",
    title: "BRAIDING SWEETGRASS",
    description:
      "A botanist and member of the Citizen Potawatomi Nation espouses having an understanding and appreciation of plants and animals.",
    amazon_link:
      "https://www.amazon.com/Braiding-Sweetgrass-Indigenous-Scientific-Knowledge/dp/1571313567?tag=NYTBSREV-20",
    author: "Robin Wall Kimmerer",
    recommended_by: "John Ammon",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9781571313560.jpg",
  },
  {
    isbn: "9780316299220",
    title: "TALKING TO STRANGERS",
    description:
      "Famous examples of miscommunication serve as the backdrop to explain potential conflicts and misunderstandings.",
    amazon_link:
      "https://www.amazon.com/Talking-Strangers-Should-about-People/dp/0316478520?tag=NYTBSREV-20",
    author: "Malcolm Gladwell",
    recommended_by: "John Ammon",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9780316478526.jpg",
  },
  {
    isbn: "9781455517381",
    title: "MAKING GOOD HABITS, BREAKING BAD HABITS",
    description: " Practicing 14 behaviors to create positive new routines.",
    amazon_link:
      "http://www.amazon.com/Making-Good-Habits-Breaking-Bad/dp/1455517380?tag=NYTBSREV-20",
    author: "Joyce Meyer",
    recommended_by: "John Ammon",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9781455517381.jpg",
  },
  {
    isbn: "9781885167774",
    title: "ONE THING",
    description: "Narrowing your concentration and becoming more productive. ",
    amazon_link:
      "http://www.amazon.com/The-ONE-Thing-Surprisingly-Extraordinary/dp/1885167776?tag=NYTBSREV-20",
    author: "Gary Keller with Jay Papasan",
    recommended_by: "John Ammon",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9781885167774.jpg",
  },
  {
    isbn: "9780307956392",
    title: "DECISIVE",
    description: "Strategies for making better choices in life and work.",
    amazon_link:
      "http://www.amazon.com/Decisive-Make-Better-Choices-Life/dp/0307956393?tag=NYTBSREV-20",
    author: "Chip Heath and Dan Heath",
    recommended_by: "John Ammon",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9780307956392.jpg",
  },
  {
    isbn: "9780307886293",
    title: "FIRSTHAND",
    description:
      "Two brothers discuss their struggles in finding a lasting Christian faith.",
    amazon_link:
      "http://www.amazon.com/Firsthand-Ditching-Secondhand-Religion-Faith/dp/0307886298?tag=NYTBSREV-20",
    author: "Ryan and Josh Shook",
    recommended_by: "John Ammon",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9780307886293.jpg",
  },
];

module.exports = books;
