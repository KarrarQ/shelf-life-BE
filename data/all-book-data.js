const allBooksData = [
  {
    isbn: "9781250278210",
    description:
      "The 54th book of the In Death series. Eve Dallas investigates a homicide and the disappearance of other women who resemble that victim.",
    title: "ABANDONED IN DEATH",
    author: "J.D. Robb",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9781250278210.jpg",
    amazon_link: "https://www.amazon.com/dp/125027821X?tag=NYTBSREV-20",
  },
  {
    isbn: "9780525559474",
    description:
      "Nora Seed finds a library beyond the edge of the universe that contains books with multiple possibilities of the lives one could have lived.",
    title: "THE MIDNIGHT LIBRARY",
    author: "Matt Haig",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9780525559474.jpg",
    amazon_link: "https://www.amazon.com/dp/0525559477?tag=NYTBSREV-20",
  },
  {
    isbn: "9781501171345",
    description:
      "Hannah Hall discovers truths about her missing husband and bonds with his daughter from a previous relationship.",
    title: "THE LAST THING HE TOLD ME",
    author: "Laura Dave",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9781501171345.jpg",
    amazon_link: "https://www.amazon.com/dp/1501171348?tag=NYTBSREV-20",
  },
  {
    isbn: "9780735222359",
    description:
      "Two friends who escaped from a juvenile work farm take Emmett Watson on an unexpected journey to New York City in 1954.",
    title: "THE LINCOLN HIGHWAY",
    author: "Amor Towles",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9780735222359.jpg",
    amazon_link: "https://www.amazon.com/dp/0735222355?tag=NYTBSREV-20",
  },
  {
    isbn: "9780593356159",
    description:
      "When a wealthy man is found dead in his room, a maid at the Regency Grand Hotel becomes a lead suspect.",
    title: "THE MAID",
    author: "Nita Prose",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9780593356159.jpg",
    amazon_link: "https://www.amazon.com/dp/0593356152?tag=NYTBSREV-20",
  },
  {
    isbn: "9781250274618",
    description:
      "Miss Nan O’Dea becomes the mistress of Agatha Christie’s husband.",
    title: "THE CHRISTIE AFFAIR",
    author: "Nina de Gramont",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9781250274618.jpg",
    amazon_link: "https://www.amazon.com/dp/1250274613?tag=NYTBSREV-20",
  },
  {
    isbn: "9780525618584",
    description:
      "The 37th book in the Alex Delaware series. Delaware and Sturgis investigate a double homicide.",
    title: "CITY OF THE DEAD",
    author: "Jonathan Kellerman",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9780525618584.jpg",
    amazon_link: "https://www.amazon.com/dp/0525618589?tag=NYTBSREV-20",
  },
  {
    isbn: "9780385546027",
    description:
      "The second book in the Whistler series. Investigator Lacy Stoltz goes after a serial killer and closes in on a sitting judge.",
    title: "THE JUDGE'S LIST",
    author: "John Grisham",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9780385546027.jpg",
    amazon_link: "https://www.amazon.com/dp/0385546025?tag=NYTBSREV-20",
  },
  {
    isbn: "9780316499774",
    description:
      "As the Paris Olympics draw near, a mother and daughter, who are champion horse riders, compete against each other.",
    title: "THE HORSEWOMAN",
    author: "James Patterson and Mike Lupica",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9780316499774.jpg",
    amazon_link: "https://www.amazon.com/dp/0316499773?tag=NYTBSREV-20",
  },
  {
    isbn: "9781984818416",
    description:
      "Diana O’Toole re-evaluates her seemingly perfect life when a pandemic disrupts her vacation in the Galápagos Islands.",
    title: "WISH YOU WERE HERE",
    author: "Jodi Picoult",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9781984818416.jpg",
    amazon_link: "https://www.amazon.com/dp/1984818414?tag=NYTBSREV-20",
  },
  {
    isbn: "9781496447579",
    description:
      "In 1875, a hotelier takes an interest in a woman who takes over her uncle’s newspaper in a mining town in the Sierra Nevadas.",
    title: "THE LADY'S MINE",
    author: "Francine Rivers",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9781496447579.jpg",
    amazon_link: "https://www.amazon.com/dp/1496447573?tag=NYTBSREV-20",
  },
  {
    isbn: "9780062888341",
    description:
      "After a ship explodes, 10 people struggling to survive pull a man who claims to be the Lord out of the sea.",
    title: "THE STRANGER IN THE LIFEBOAT",
    author: "Mitch Albom",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9780062888341.jpg",
    amazon_link: "https://www.amazon.com/dp/006288834X?tag=NYTBSREV-20",
  },
  {
    isbn: "9781982168438",

    description:
      "An interconnected cast of dreamers and outsiders are in dangerous and disparate settings past, present and future.",
    title: "CLOUD CUCKOO LAND",
    author: "Anthony Doerr",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9781982168438.jpg",
    amazon_link: "https://www.amazon.com/dp/1982168439?tag=NYTBSREV-20",
  },
  {
    isbn: "9780593358337",
    description:
      "Eleanor Bennett’s inheritance for her two children challenges what they knew about their lineage and identity.",
    title: "BLACK CAKE",
    author: "Charmaine Wilkerson",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9780593358337.jpg",
    amazon_link: "https://www.amazon.com/dp/0593358333?tag=NYTBSREV-20",
  },
  {
    isbn: "9780593185414",
    description:
      "The second book in the Frankie Elkin series. Frankie searches for a young man who went missing during a bachelor party camping trip.",
    title: "ONE STEP TOO FAR",
    author: "Lisa Gardner",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9780593185414.jpg",
    amazon_link: "https://www.amazon.com/dp/0593185412?tag=NYTBSREV-20",
  },
  {
    isbn: "9780063061149",
    description:
      "The author of “Profiles in Corruption” portrays a conspiracy of how the Chinese government might infiltrate American institutions.",
    title: "RED-HANDED",
    author: "Peter Schweizer",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9780063061149.jpg",
    amazon_link: "https://www.amazon.com/dp/0063061147?tag=NYTBSREV-20",
  },
  {
    isbn: "9780735217959",
    description:
      "An overview of the cultural and historical impact of the 1990s.",
    title: "THE NINETIES",
    author: "Chuck Klosterman",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9780735217959.jpg",
    amazon_link: "https://www.amazon.com/dp/0735217955?tag=NYTBSREV-20",
  },
  {
    isbn: "9780593230572",
    description:
      "Viewing America’s entanglement with slavery and its legacy, in essays adapted and expanded from The New York Times Magazine.",
    title: "THE 1619 PROJECT",
    author:
      "edited  Nikole Hannah-Jones, Caitlin Roper, Ilena Silverman and Jake Silverstein",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9780593230572.jpg",
    amazon_link: "https://www.amazon.com/dp/0593230574?tag=NYTBSREV-20",
  },
  {
    isbn: "9781982159313",
    description:
      "The creator of “The Good Place” incorporates works by various philosophers to examine ethical questions and moral issues.",
    title: "HOW TO BE PERFECT",
    author: "Michael Schur",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9781982159313.jpg",
    amazon_link: "https://www.amazon.com/dp/B09RG2CWBW?tag=NYTBSREV-20",
  },
  {
    isbn: "9780593138519",
    description:
      "Potential causes for diminishing attention spans and how corporations might raid our attention for profit.",
    title: "STOLEN FOCUS",
    author: "Johann Hari",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9780593138519.jpg",
    amazon_link: "https://www.amazon.com/dp/0593138511?tag=NYTBSREV-20",
  },
  {
    isbn: "9781984877925",
    description:
      "The actor, producer and musician tells his life story and lessons he learned along the way.",
    title: "WILL",
    author: "Will Smith with Mark Manson",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9781984877925.jpg",
    amazon_link: "https://www.amazon.com/dp/1984877925?tag=NYTBSREV-20",
  },
  {
    isbn: "9780525657743",
    description:
      "The daughter of a Korean mother and Jewish-American father, and leader of the indie rock project Japanese Breakfast, describes creating her own identity after losing her mother to cancer.",
    title: "CRYING IN H MART",
    author: "Michelle Zauner",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9780525657743.jpg",
    amazon_link: "https://www.amazon.com/dp/0525657746?tag=NYTBSREV-20",
  },
  {
    isbn: "9781538749715",
    description:
      "Using genetic data, an anthropologist traces the lineage of the first people to populate the Americas and the routes that they took.",
    title: "ORIGIN",
    author: "Jennifer Raff",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9781538749715.jpg",
    amazon_link: "https://www.amazon.com/dp/1538749718?tag=NYTBSREV-20",
  },
  {
    isbn: "9780593139134",
    description:
      "The Academy Award-winning actor shares snippets from the diaries he kept over the last 35 years.",
    title: "GREENLIGHTS",
    author: "Matthew McConaughey",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9780593139134.jpg",
    amazon_link: "https://www.amazon.com/dp/0593139135?tag=NYTBSREV-20",
  },
  {
    isbn: "9780062892355",
    description:
      "New technology was used to investigate who revealed the location of Anne Frank and her family to the Nazis.",
    title: "THE BETRAYAL OF ANNE FRANK",
    author: "Rosemary Sullivan",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9780062892355.jpg",
    amazon_link: "https://www.amazon.com/dp/0062892355?tag=NYTBSREV-20",
  },
  {
    isbn: "9780063076099",
    description:
      "A memoir by the musician known for his work with Foo Fighters and Nirvana.",
    title: "THE STORYTELLER",
    author: "Dave Grohl",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9780063076099.jpg",
    amazon_link: "https://www.amazon.com/dp/0063076098?tag=NYTBSREV-20",
  },
  {
    isbn: "9781984801258",
    description:
      "The activist and public speaker describes her journey of listening to her inner voice.",
    title: "UNTAMED",
    author: "Glennon Doyle",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9781984801258.jpg",
    amazon_link: "https://www.amazon.com/dp/1984801252?tag=NYTBSREV-20",
  },
  {
    isbn: "9780063209787",
    description:
      "The Maryland congressman describes leading the impeachment effort against the former president shortly after his son’s death by suicide and the insurrection at the Capitol.",
    title: "UNTHINKABLE",
    author: "Jamie Raskin",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9780063209787.jpg",
    amazon_link: "https://www.amazon.com/dp/0063209780?tag=NYTBSREV-20",
  },
  {
    isbn: "9780358567363",
    description:
      "The actress and TV personality describes her personal setbacks and difficult journey to self-acceptance.",
    title: "ENOUGH ALREADY",
    author: "Valerie Bertinelli",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9780358567363.jpg",
    amazon_link: "https://www.amazon.com/dp/035856736X?tag=NYTBSREV-20",
  },
  {
    isbn: "9781510766808",
    description:
      "The anti-vaccine advocate gives his take on the chief medical advisor to the president.",
    title: "THE REAL ANTHONY FAUCI",
    author: "Robert F. Kennedy Jr",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9781510766808.jpg",
    amazon_link: "https://www.amazon.com/dp/1510766804?tag=NYTBSREV-20",
  },
  {
    isbn: "9781501110368",
    description:
      "A battered wife raised in a violent home attempts to halt the cycle of abuse.",
    title: "IT ENDS WITH US",
    author: "Colleen Hoover",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9781501110375.jpg",
    amazon_link:
      "http://www.amazon.com/Ends-Us-Novel-Colleen-Hoover-ebook/dp/B0176M3U10?tag=NYTBSREV-20",
  },
  {
    isbn: "9781538724736",
    description:
      "Lowen Ashleigh is hired by the husband of an injured writer to complete her popular series and uncovers a horrifying truth.",
    title: "VERITY",
    author: "Colleen Hoover",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9781791392796.jpg",
    amazon_link: "https://www.amazon.com/dp/1791392792?tag=NYTBSREV-20",
  },
  {
    isbn: "9781501161933",
    description:
      "A movie icon recounts stories of her loves and career to a struggling magazine writer.",
    title: "THE SEVEN HUSBANDS OF EVELYN HUGO",
    author: "Taylor Jenkins Reid",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9781501161933.jpg",
    amazon_link: "https://www.amazon.com/dp/1501161938?tag=NYTBSREV-20",
  },
  {
    isbn: "9781476753188",
    description:
      "A casual sexual relationship between Tate and Miles becomes more complicated than they expected.",
    title: "UGLY LOVE",
    author: "Colleen Hoover",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9781476753195.jpg",
    amazon_link:
      "http://www.amazon.com/Ugly-Love-Novel-Colleen-Hoover-ebook/dp/B00HB62MC0?tag=NYTBSREV-20",
  },
  {
    isbn: "9780593336823",
    description:
      "A young professor agrees to pretend to be a third-year Ph.D. candidate’s boyfriend.",
    title: "THE LOVE HYPOTHESIS",
    author: "Ali Hazelwood",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9780593336823.jpg",
    amazon_link: "https://www.amazon.com/dp/0593336828?tag=NYTBSREV-20",
  },
  {
    isbn: "9781668002520",
    description:
      "Catalina’s insufferable colleague Aaron agrees to be her fake date to her sister’s wedding.",
    title: "THE SPANISH LOVE DECEPTION",
    author: "Elena Armas",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9781668002520.jpg",
    amazon_link: "https://www.amazon.com/dp/1668002523?tag=NYTBSREV-20",
  },
  {
    isbn: "9781984806758",
    description:
      "Opposites Poppy and Alex meet to vacation together one more time in hopes of saving their relationship.",
    title: "PEOPLE WE MEET ON VACATION",
    author: "Emily Henry",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9781984806758.jpg",
    amazon_link: "https://www.amazon.com/dp/1984806750?tag=NYTBSREV-20",
  },
  {
    isbn: "9780735219106",
    description:
      "In a quiet town on the North Carolina coast in 1969, a young woman who survived alone in the marsh becomes a murder suspect.",
    title: "WHERE THE CRAWDADS SING",
    author: "Delia Owens",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9780735219090.jpg",
    amazon_link:
      "https://www.amazon.com/Where-Crawdads-Sing-Delia-Owens/dp/0735219095?tag=NYTBSREV-20",
  },
  {
    isbn: "9780062060624",
    description:
      "A reimagining of Homer’s “Iliad” that is narrated by Achilles' companion Patroclus.",
    title: "THE SONG OF ACHILLES",
    author: "Madeline Miller",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9780062060624.jpg",
    amazon_link:
      "http://www.amazon.com/The-Song-Achilles-A-Novel/dp/0062060627?tag=NYTBSREV-20",
  },
  {
    isbn: "9781250301703",
    description:
      "Theo Faber looks into the mystery of a famous painter who stops speaking after shooting her husband.",
    title: "THE SILENT PATIENT",
    author: "Alex Michaelides",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9781250301697.jpg",
    amazon_link:
      "https://www.amazon.com/Silent-Patient-Alex-Michaelides/dp/1250301696?tag=NYTBSREV-20",
  },
  {
    isbn: "9781501110344",
    description:
      "Ben and Fallon meet on the same day each year but a possible untruth might spoil their relationship.",
    title: "NOVEMBER 9",
    author: "Colleen Hoover",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9781501110351.jpg",
    amazon_link:
      "http://www.amazon.com/November-9-Novel-Colleen-Hoover-ebook/dp/B00UDCI1S8?tag=NYTBSREV-20",
  },
  {
    isbn: "9780525536963",
    description:
      "The lives of twin sisters who run away from a Southern Black community at age 16 diverge as one returns and the other takes on a different racial identity but their fates intertwine.",
    title: "THE VANISHING HALF",
    author: "Brit Bennett",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9780525536291.jpg",
    amazon_link: "https://www.amazon.com/dp/0525536299?tag=NYTBSREV-20",
  },
  {
    isbn: "9780778311935",
    description:
      "A true crime writer working in an isolated farmhouse takes in a small child during a deadly snowstorm.",
    title: "THE OVERNIGHT GUEST",
    author: "Heather Gudenkauf",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9780778311935.jpg",
    amazon_link: "https://www.amazon.com/dp/0778311937?tag=NYTBSREV-20",
  },
  {
    isbn: "9781984806734",
    description:
      "A relationship develops between a literary fiction author and a romance novelist as they both try to overcome writer’s block.",
    author: "Emily Henry",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9781984806734.jpg",
    amazon_link: "https://www.amazon.com/dp/1984806734?tag=NYTBSREV-20",
  },
  {
    isbn: "9780316556323",
    description:
      "Zeus banishes Helios' daughter to an island, where she must choose between living with gods or mortals.",
    title: "CIRCE",
    author: "Madeline Miller",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9780316556347.jpg",
    amazon_link:
      "https://www.amazon.com/Circe-Madeline-Miller/dp/0316556343?tag=NYTBSREV-20",
  },
  {
    isbn: "9780143127741",
    description:
      "How trauma affects the body and mind, and innovative treatments for recovery.",
    title: "THE BODY KEEPS THE SCORE",
    author: "Bessel van der Kolk",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9780670785933.jpg",
    amazon_link:
      "http://www.amazon.com/The-Body-Keeps-Score-Healing/dp/0670785938?tag=NYTBSREV-20",
  },
  {
    isbn: "9780060959470",
    description:
      "The late feminist icon explores the causes of a polarized society and the meaning of love.",
    title: "ALL ABOUT LOVE",
    author: "bell hooks",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9780060959470.jpg",
    amazon_link: "https://www.amazon.com/dp/0060959479?tag=NYTBSREV-20",
  },
  {
    isbn: "9780399590528",
    description:
      "The daughter of survivalists, who is kept out of school, educates herself enough to leave home for university.",
    title: "EDUCATED",
    author: "Tara Westover",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9780399590504.jpg",
    amazon_link:
      "https://www.amazon.com/Educated-Memoir-Tara-Westover/dp/0399590501?tag=NYTBSREV-20",
  },
  {
    isbn: "9781571313560",
    description:
      "A botanist and member of the Citizen Potawatomi Nation espouses having an understanding and appreciation of plants and animals.",
    title: "BRAIDING SWEETGRASS",
    author: "Robin Wall Kimmerer",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9781571313560.jpg",
    amazon_link:
      "https://www.amazon.com/Braiding-Sweetgrass-Indigenous-Scientific-Knowledge/dp/1571313567?tag=NYTBSREV-20",
  },
  {
    isbn: "9780316299220",
    description:
      "Famous examples of miscommunication serve as the backdrop to explain potential conflicts and misunderstandings.",
    title: "TALKING TO STRANGERS",
    author: "Malcolm Gladwell",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9780316478526.jpg",
    amazon_link:
      "https://www.amazon.com/Talking-Strangers-Should-about-People/dp/0316478520?tag=NYTBSREV-20",
  },
  {
    isbn: "9780399588198",
    description:
      "A memoir about growing up biracial in apartheid South Africa by the host of “The Daily Show.”",
    title: "BORN A CRIME",
    author: "Trevor Noah",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9780399588181.jpg",
    amazon_link:
      "https://www.amazon.com/Born-Crime-Stories-African-Childhood-ebook/dp/B01DHWACVY?tag=NYTBSREV-20",
  },
  {
    isbn: "9780374533557",
    description:
      "When we can and cannot trust our intuitions in making business and personal decisions.",
    title: "THINKING, FAST AND SLOW",
    author: "Daniel Kahneman",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9781429969352.jpg",
    amazon_link:
      "http://www.amazon.com/Thinking-Fast-Slow-Daniel-Kahneman-ebook/dp/B00555X8OA?tag=NYTBSREV-20",
  },
  {
    isbn: "9781984855015",
    description:
      "The story of an enslaved woman whose daughter was separated from her and sold is passed down through generations.",
    title: "ALL THAT SHE CARRIED",
    author: "Tiya Miles",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9781984855015.jpg",
    amazon_link: "https://www.amazon.com/dp/1984855018?tag=NYTBSREV-20",
  },
  {
    isbn: "9780063159983",
    description:
      "An account of the murder of Maurizio Gucci in 1995; the basis of the film.",
    title: "THE HOUSE OF GUCCI",
    author: "Sara Gay Forden",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9780063159983.jpg",
    amazon_link: "https://www.amazon.com/dp/0063159988?tag=NYTBSREV-20",
  },
  {
    isbn: "9781400078431",
    description:
      "Winner of the National Book Award in 2005. The late writer recounts her daughter’s illness and husband’s death.",
    title: "THE YEAR OF MAGICAL THINKING",
    author: "Joan Didion",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9781400078431.jpg",
    amazon_link: "https://www.amazon.com/dp/1400078431?tag=NYTBSREV-20",
  },
  {
    isbn: "9780593312193",
    description:
      "A collection of 12 pieces written between 1968 and 2000 that includes observations on the underground press and the act of writing.",
    title: "LET ME TELL YOU WHAT I MEAN",
    author: "Joan Didion",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9780593318485.jpg",
    amazon_link: "https://www.amazon.com/dp/059331848X?tag=NYTBSREV-20",
  },
  {
    isbn: "9780525509585",
    description:
      "The chair of the board of the racial justice organization Color of Change analyzes the impact of racism on the economy.",
    title: "THE SUM OF US",
    author: "Heather McGhee",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9780525509561.jpg",
    amazon_link: "https://www.amazon.com/dp/0525509569?tag=NYTBSREV-20",
  },
  {
    isbn: "9781501111112",
    description:
      "The MacArthur Fellow argues that passion and perseverance are more important than innate talent in creating success.",
    title: "GRIT",
    author: "Angela Duckworth",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9781501111129.jpg",
    amazon_link:
      "http://www.amazon.com/Grit-The-Power-Passion-Perseverance-ebook/dp/B010MH9V3W?tag=NYTBSREV-20",
  },
  {
    isbn: "9780307742483",
    description:
      "The story of a murder spree in 1920s Oklahoma that targeted Osage Indians, whose lands contained oil. The fledgling F.B.I. intervened, ineffectively.",
    title: "KILLERS OF THE FLOWER MOON",
    author: "David Grann",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9780385534246.jpg",
    amazon_link:
      "https://www.amazon.com/Killers-Flower-Moon-Osage-Murders/dp/0385534248?tag=NYTBSREV-20",
  },
  {
    isbn: "9780063030930",
    description:
      "Twenty-five young inmates of the Auschwitz-Birkenau concentration camp made garments for elite Nazi women.",
    title: "THE DRESSMAKERS OF AUSCHWITZ",
    author: "Lucy Adlington",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9780063030930.jpg",
    amazon_link: "https://www.amazon.com/dp/0063030934?tag=NYTBSREV-20",
  },
  {
    isbn: "9781455522712",

    description: "Easy, healthy, sugar-free recipes.",
    title: "IT'S ALL GOOD",
    author: "Gwyneth Paltrow and Julia Turshen",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9781455522712.jpg",
    amazon_link:
      "http://www.amazon.com/Its-All-Good-Delicious-Recipes/dp/1455522716?tag=NYTBSREV-20",
  },
  {
    isbn: "9781476734941",
    description:
      "A diet that calls for eating normally five days a week and fasting for the other two days.",
    title: "THE FASTDIET",
    author: "Michael Mosley and Mimi Spencer",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9781476734941.jpg",
    amazon_link:
      "http://www.amazon.com/The-FastDiet-Healthy-Intermittent-Fasting-ebook/dp/B00ALYY6ZA?tag=NYTBSREV-20",
  },
  {
    isbn: "9781592407330",
    description:
      "How the courage to be vulnerable transforms the way we live, love, parent and lead.",
    title: "DARING GREATLY",
    author: "Brené Brown",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9781592407330.jpg",
    amazon_link:
      "http://www.amazon.com/Daring-Greatly-Courage-Vulnerable-Transforms/dp/1592407331?tag=NYTBSREV-20",
  },
  {
    isbn: "9780985462734",
    description:
      "How to “win in the real world,” regardless of people who try to exploit you.",
    title: "LIFE CODE",
    author: "Phil McGraw",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9780985462734.jpg",
    amazon_link:
      "http://www.amazon.com/Life-Code-Rules-Winning-World/dp/0985462736?tag=NYTBSREV-20",
  },
  {
    isbn: "9781401939410",
    description:
      "Repeating phrases and touching pressure points on the body to ease stress. ",
    title: "THE TAPPING SOLUTION",
    author: "Nick Ortner",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9781401939410.jpg",
    amazon_link:
      "http://www.amazon.com/The-Tapping-Solution-Revolutionary-Stress-Free/dp/1401939414?tag=NYTBSREV-20",
  },
  {
    isbn: "9781250035868",
    description:
      "A six-week system that combines meal spacing and other elements.",
    title: "SHRED: THE REVOLUTIONARY DIET",
    author: "Ian K Smith",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9781250035868.jpg",
    amazon_link:
      "http://www.amazon.com/Shred-Revolutionary-Weeks-Inches-Sizes/dp/1250035864?tag=NYTBSREV-20",
  },
  {
    isbn: "9781609611545",

    description: "An examination of wheat in modern diets.",
    title: "WHEAT BELLY",
    author: "William Davis",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9781609614799.jpg",
    amazon_link:
      "http://www.amazon.com/Wheat-Belly-Lose-Weight-Health/dp/1609614798?tag=NYTBSREV-20",
  },
  {
    isbn: "9781455517381",
    description: " Practicing 14 behaviors to create positive new routines.",

    title: "MAKING GOOD HABITS, BREAKING BAD HABITS",
    author: "Joyce Meyer",

    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9781455517381.jpg",

    amazon_link:
      "http://www.amazon.com/Making-Good-Habits-Breaking-Bad/dp/1455517380?tag=NYTBSREV-20",
  },
  {
    isbn: "9780451240316",
    description: "A daughter draws on her mother’s wisdom. ",
    title: "THE KEY IS LOVE",
    author: "Marie Osmond with Marcia Wilkie",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9780451240316.jpg",
    amazon_link:
      "http://www.amazon.com/The-Key-Love-Daughters-Gratitude/dp/0451240316?tag=NYTBSREV-20",
  },
  {
    isbn: "9781885167774",
    description: "Narrowing your concentration and becoming more productive. ",
    title: "ONE THING",
    author: "Gary Keller with Jay Papasan",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9781885167774.jpg",
    amazon_link:
      "http://www.amazon.com/The-ONE-Thing-Surprisingly-Extraordinary/dp/1885167776?tag=NYTBSREV-20",
  },
  {
    isbn: "9780307956392",
    description: "Strategies for making better choices in life and work.",

    title: "DECISIVE",
    author: "Chip Heath and Dan Heath",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9780307956392.jpg",
    amazon_link:
      "http://www.amazon.com/Decisive-Make-Better-Choices-Life/dp/0307956393?tag=NYTBSREV-20",
  },
  {
    isbn: "9780307886293",
    description:
      "Two brothers discuss their struggles in finding a lasting Christian faith.",
    title: "FIRSTHAND",
    author: "Ryan and Josh Shook",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9780307886293.jpg",
    amazon_link:
      "http://www.amazon.com/Firsthand-Ditching-Secondhand-Religion-Faith/dp/0307886298?tag=NYTBSREV-20",
  },
  {
    isbn: "9781616550417",
    description: "Historical information on the franchise.",
    title: "THE LEGEND OF ZELDA, HYRULE HISTORIA",
    author: "Patrick Thorpe and Michael Gombos, et al",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9781616550417.jpg",
    amazon_link:
      "http://www.amazon.com/The-Legend-Zelda-Hyrule-Historia/dp/1616550414?tag=NYTBSREV-20",
  },
  {
    isbn: "9781609619367",
    description:
      'This "Wheat Belly" companion contains 150 recipes that are free of modern wheat.',
    title: "WHEAT BELLY COOKBOOK",
    author: "William Davis",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9781609619367.jpg",
    amazon_link:
      "http://www.amazon.com/Wheat-Belly-Cookbook-Recipes-Weight/dp/1609619366?tag=NYTBSREV-20",
  },
  {
    isbn: "9781616200466",
    description: "The connection between plants and alcoholic spirits.",
    title: "THE DRUNKEN BOTANIST",
    author: "Amy Stewart",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9781616200466.jpg",
    amazon_link:
      "http://www.amazon.com/The-Drunken-Botanist-Plants-Create/dp/1616200464?tag=NYTBSREV-20",
  },
  {
    isbn: "9780893348625",
    description:
      "An explanation of and arguments against the Affordable Care Act.",
    title: "OBAMACARE SURVIVAL GUIDE",
    author: "Nick Tate",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9780893348625.jpg",
    amazon_link:
      "http://www.amazon.com/ObamaCare-Survival-Guide-Nick-Tate/dp/0893348627?tag=NYTBSREV-20",
  },
  {
    isbn: "9780802473158",
    description: "How to communicate love in a way a spouse will understand.",
    title: "THE FIVE LOVE LANGUAGES",
    author: "Gary Chapman",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9780802473158.jpg",
    amazon_link:
      "http://www.amazon.com/The-Love-Languages-Secret-Lasts/dp/0802473156?tag=NYTBSREV-20",
  },
  {
    isbn: "9780373892648",
    description:
      "Fifty foods, none of them meat, for transforming your body; with recipes.",
    title: "THE BEAUTY DETOX FOODS",
    author: "Kimberly Snyder",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9780373892648.jpg",
    amazon_link:
      "http://www.amazon.com/The-Beauty-Detox-Foods-Transform/dp/0373892640?tag=NYTBSREV-20",
  },
  {
    isbn: "9780761148579",
    description: "Advice for parents-to-be.",
    title: "WHAT TO EXPECT WHEN YOU'RE EXPECTING",
    author: "Heidi Murkoff and Sharon Mazel",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9780761148579.jpg",
    amazon_link:
      "http://www.amazon.com/What-Expect-Youre-Expecting-Edition/dp/0761148574?tag=NYTBSREV-20",
  },
  {
    isbn: "9781592858491",
    description:
      "Letting go of who you think you’re supposed to be to embrace who you are.",
    title: "THE GIFTS OF IMPERFECTION",
    author: "Brené Brown",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9781592858491.jpg",
    amazon_link:
      "http://www.amazon.com/The-Gifts-Imperfection-Supposed-Embrace/dp/159285849X?tag=NYTBSREV-20",
  },
  {
    isbn: "9781615190614",
    description: "A companion cookbook, with over 300 plant-based recipes.",
    title: "FORKS OVER KNIVES: THE COOKBOOK",
    author: "Del Sroufe",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9781615190614.jpg",
    amazon_link:
      "http://www.amazon.com/Forks-Over-Knives-Cookbook-Plant-Based/dp/1615190619?tag=NYTBSREV-20",
  },
  {
    isbn: "9780316120913",
    description: "A plan for achieving fast and sustained weight loss.",
    title: "EAT TO LIVE",
    author: "Joel Fuhrman",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9780316206648.jpg",
    amazon_link:
      "http://www.amazon.com/Eat-Live-Amazing-Nutrient-Rich-Sustained/dp/B008YE8B82?tag=NYTBSREV-20",
  },
  {
    isbn: "9781609619114",
    description:
      "Making nontoxic choices, from diet to home materials to beauty products. ",
    title: "THE HONEST LIFE",
    author: "Jessica Alba",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9781609619114.jpg",
    amazon_link:
      "http://www.amazon.com/The-Honest-Life-Living-Naturally/dp/1609619110?tag=NYTBSREV-20",
  },
  {
    isbn: "9780062201669",
    description: "A program to rid the body of a multitude of toxins.",
    title: "CLEAN",
    author: "Alejandro Junger with Amely Greeven",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9780061735325.jpg",
    amazon_link:
      "http://www.amazon.com/Clean-Enhanced-Edition-Revolutionary-Program-ebook/dp/B003YL4KPS?tag=NYTBSREV-20",
  },
  {
    isbn: "9780061583261",
    description:
      "In a hunt for happiness, the author consulted science, ancient wisdom and pop culture.",
    title: "THE HAPPINESS PROJECT",
    author: "Gretchen Rubin",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9780061583261.jpg",
    amazon_link:
      "http://www.amazon.com/The-Happiness-Project-Aristotle-Generally/dp/006158326X?tag=NYTBSREV-20",
  },
  {
    isbn: "9781936608751",
    description: "A customized approach to health and a whole-foods lifestyle.",
    title: "PRACTICAL PALEO",
    author: "Diane Sanfilippo",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9781936608751.jpg",
    amazon_link:
      "http://www.amazon.com/Practical-Paleo-Customized-Whole-Foods-Lifestyle/dp/1936608758?tag=NYTBSREV-20",
  },
  {
    isbn: "9781572245372",
    description:
      "The answer to who we are is said to be found in our consciousness. Originally published in 2012.",
    title: "THE UNTETHERED SOUL",
    author: "Michael A Singer",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9781572245372.jpg",
    amazon_link:
      "http://www.amazon.com/The-Untethered-Soul-Journey-Yourself/dp/1572245379?tag=NYTBSREV-20",
  },
  {
    isbn: "9780307731715",
    description:
      "A spiritual journey the author experienced after a kayak accident. ",
    title: "TO HEAVEN AND BACK",
    author: "Mary C Neal",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9780307731715.jpg",
    amazon_link:
      "http://www.amazon.com/To-Heaven-Back-Doctors-Extraordinary/dp/0307731715?tag=NYTBSREV-20",
  },
  {
    isbn: "9780071799799",
    description:
      "The benefits of outsourcing while staying competitive and freeing up more time for self.",
    title: "OUTSOURCE SMART",
    author: "Daven Michaels",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9780071799799.jpg",
    amazon_link:
      "http://www.amazon.com/Outsource-Smart-Without-Letting-Business/dp/0071799796?tag=NYTBSREV-20",
  },
  {
    isbn: "9780345536631", //NEED THIS
    description:
      "Reduced-fat Southern comfort food, including Charleston shrimp and grits.", //NEED THIS
    title: "FROM MAMA'S TABLE TO MINE", //title
    author: "Bob Deen", //NEED THIS
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9780345536631.jpg", //NEED THIS
    amazon_link:
      "http://www.amazon.com/From-Mamas-Table-Mine-Everybodys/dp/0345536630?tag=NYTBSREV-20",
  },
];

module.exports = allBooksData;
