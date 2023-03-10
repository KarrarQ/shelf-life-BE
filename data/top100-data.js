const allBooksData = [
    {
      isbn: "9781250278210",
      title: "ABANDONED IN DEATH",
      description:
        "The 54th book of the In Death series. Eve Dallas investigates a homicide and the disappearance of other women who resemble that victim.",
      amazon_link: "https://www.amazon.com/dp/125027821X?tag=NYTBSREV-20",
      author: "J.D. Robb",
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
      book_image:
        "https://storage.googleapis.com/du-prd/books/images/9780593356159.jpg",
    },
    {
      isbn: "9781250274618",
      title: "THE CHRISTIE AFFAIR",
      description:
        "Miss Nan O???Dea becomes the mistress of Agatha Christie???s husband.",
      amazon_link: "https://www.amazon.com/dp/1250274613?tag=NYTBSREV-20",
      author: "Nina de Gramont",
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
      book_image:
        "https://storage.googleapis.com/du-prd/books/images/9780316499774.jpg",
    },
    {
      isbn: "9781984818416",
      title: "WISH YOU WERE HERE",
      description:
        "Diana O???Toole re-evaluates her seemingly perfect life when a pandemic disrupts her vacation in the Gal??pagos Islands.",
      amazon_link: "https://www.amazon.com/dp/1984818414?tag=NYTBSREV-20",
      author: "Jodi Picoult",
      book_image:
        "https://storage.googleapis.com/du-prd/books/images/9781984818416.jpg",
    },
    {
      isbn: "9781496447579",
      title: "THE LADY'S MINE",
      description:
        "In 1875, a hotelier takes an interest in a woman who takes over her uncle???s newspaper in a mining town in the Sierra Nevadas.",
      amazon_link: "https://www.amazon.com/dp/1496447573?tag=NYTBSREV-20",
      author: "Francine Rivers",
      book_image:
        "https://storage.googleapis.com/du-prd/books/images/9781496447579.jpg",
    },
    {
      isbn: "9780062888341",
      title: "THE STRANGER IN THE LIFEBOAT",
      description:
        "After a ship explodes, 10 people struggling to survive pull a man who claims to be the Lord out of the sea.",
      amazon_link: "https://www.amazon.com/dp/006288834X?tag=NYTBSREV-20",
      author: "Mitch Albom",
      book_image:
        "https://storage.googleapis.com/du-prd/books/images/9780062888341.jpg",
    },
    {
      isbn: "9781982168438",
  
      title: "CLOUD CUCKOO LAND",
      description:
        "An interconnected cast of dreamers and outsiders are in dangerous and disparate settings past, present and future.",
      amazon_link: "https://www.amazon.com/dp/1982168439?tag=NYTBSREV-20",
      author: "Anthony Doerr",
      book_image:
        "https://storage.googleapis.com/du-prd/books/images/9781982168438.jpg",
    },
    {
      isbn: "9780593358337",
      title: "BLACK CAKE",
      description:
        "Eleanor Bennett???s inheritance for her two children challenges what they knew about their lineage and identity.",
      amazon_link: "https://www.amazon.com/dp/0593358333?tag=NYTBSREV-20",
      author: "Charmaine Wilkerson",
      book_image:
        "https://storage.googleapis.com/du-prd/books/images/9780593358337.jpg",
    },
    {
      isbn: "9780593185414",
      title: "ONE STEP TOO FAR",
      description:
        "The second book in the Frankie Elkin series. Frankie searches for a young man who went missing during a bachelor party camping trip.",
      amazon_link: "https://www.amazon.com/dp/0593185412?tag=NYTBSREV-20",
      author: "Lisa Gardner",
      book_image:
        "https://storage.googleapis.com/du-prd/books/images/9780593185414.jpg",
    },
    {
      isbn: "9780063061149",
      title: "RED-HANDED",
      description:
        "The author of ???Profiles in Corruption??? portrays a conspiracy of how the Chinese government might infiltrate American institutions.",
      amazon_link: "https://www.amazon.com/dp/0063061147?tag=NYTBSREV-20",
      author: "Peter Schweizer",
      book_image:
        "https://storage.googleapis.com/du-prd/books/images/9780063061149.jpg",
    },
    {
      isbn: "9780735217959",
      title: "THE NINETIES",
      description:
        "An overview of the cultural and historical impact of the 1990s.",
      amazon_link: "https://www.amazon.com/dp/0735217955?tag=NYTBSREV-20",
      author: "Chuck Klosterman",
      book_image:
        "https://storage.googleapis.com/du-prd/books/images/9780735217959.jpg",
    },
    {
      isbn: "9780593230572",
      title: "THE 1619 PROJECT",
      description:
        "Viewing America???s entanglement with slavery and its legacy, in essays adapted and expanded from The New York Times Magazine.",
      amazon_link: "https://www.amazon.com/dp/0593230574?tag=NYTBSREV-20",
      author:
        "edited  Nikole Hannah-Jones, Caitlin Roper, Ilena Silverman and Jake Silverstein",
      book_image:
        "https://storage.googleapis.com/du-prd/books/images/9780593230572.jpg",
    },
    {
      isbn: "9781982159313",
      title: "HOW TO BE PERFECT",
      description:
        "The creator of ???The Good Place??? incorporates works by various philosophers to examine ethical questions and moral issues.",
      amazon_link: "https://www.amazon.com/dp/B09RG2CWBW?tag=NYTBSREV-20",
      author: "Michael Schur",
      book_image:
        "https://storage.googleapis.com/du-prd/books/images/9781982159313.jpg",
    },
    {
      isbn: "9780593138519",
      title: "STOLEN FOCUS",
      description:
        "Potential causes for diminishing attention spans and how corporations might raid our attention for profit.",
      amazon_link: "https://www.amazon.com/dp/0593138511?tag=NYTBSREV-20",
      author: "Johann Hari",
      book_image:
        "https://storage.googleapis.com/du-prd/books/images/9780593138519.jpg",
    },
    {
      isbn: "9781984877925",
      title: "WILL",
      description:
        "The actor, producer and musician tells his life story and lessons he learned along the way.",
      amazon_link: "https://www.amazon.com/dp/1984877925?tag=NYTBSREV-20",
      author: "Will Smith with Mark Manson",
      book_image:
        "https://storage.googleapis.com/du-prd/books/images/9781984877925.jpg",
    },
    {
      isbn: "9780525657743",
      title: "CRYING IN H MART",
      description:
        "The daughter of a Korean mother and Jewish-American father, and leader of the indie rock project Japanese Breakfast, describes creating her own identity after losing her mother to cancer.",
      amazon_link: "https://www.amazon.com/dp/0525657746?tag=NYTBSREV-20",
      author: "Michelle Zauner",
      book_image:
        "https://storage.googleapis.com/du-prd/books/images/9780525657743.jpg",
    },
    {
      isbn: "9781538749715",
      title: "ORIGIN",
      description:
        "Using genetic data, an anthropologist traces the lineage of the first people to populate the Americas and the routes that they took.",
      amazon_link: "https://www.amazon.com/dp/1538749718?tag=NYTBSREV-20",
      author: "Jennifer Raff",
      book_image:
        "https://storage.googleapis.com/du-prd/books/images/9781538749715.jpg",
    },
    {
      isbn: "9780593139134",
      title: "GREENLIGHTS",
      description:
        "The Academy Award-winning actor shares snippets from the diaries he kept over the last 35 years.",
      amazon_link: "https://www.amazon.com/dp/0593139135?tag=NYTBSREV-20",
      author: "Matthew McConaughey",
      book_image:
        "https://storage.googleapis.com/du-prd/books/images/9780593139134.jpg",
    },
    {
      isbn: "9780062892355",
      title: "THE BETRAYAL OF ANNE FRANK",
      description:
        "New technology was used to investigate who revealed the location of Anne Frank and her family to the Nazis.",
      amazon_link: "https://www.amazon.com/dp/0062892355?tag=NYTBSREV-20",
      author: "Rosemary Sullivan",
      book_image:
        "https://storage.googleapis.com/du-prd/books/images/9780062892355.jpg",
    },
    {
      isbn: "9780063076099",
      title: "THE STORYTELLER",
      description:
        "A memoir by the musician known for his work with Foo Fighters and Nirvana.",
      amazon_link: "https://www.amazon.com/dp/0063076098?tag=NYTBSREV-20",
      author: "Dave Grohl",
      book_image:
        "https://storage.googleapis.com/du-prd/books/images/9780063076099.jpg",
    },
    {
      isbn: "9781984801258",
      title: "UNTAMED",
      description:
        "The activist and public speaker describes her journey of listening to her inner voice.",
      amazon_link: "https://www.amazon.com/dp/1984801252?tag=NYTBSREV-20",
      author: "Glennon Doyle",
      book_image:
        "https://storage.googleapis.com/du-prd/books/images/9781984801258.jpg",
    },
    {
      isbn: "9780063209787",
      title: "UNTHINKABLE",
      description:
        "The Maryland congressman describes leading the impeachment effort against the former president shortly after his son???s death by suicide and the insurrection at the Capitol.",
      amazon_link: "https://www.amazon.com/dp/0063209780?tag=NYTBSREV-20",
      author: "Jamie Raskin",
      book_image:
        "https://storage.googleapis.com/du-prd/books/images/9780063209787.jpg",
    },
    {
      isbn: "9780358567363",
      title: "ENOUGH ALREADY",
      description:
        "The actress and TV personality describes her personal setbacks and difficult journey to self-acceptance.",
      amazon_link: "https://www.amazon.com/dp/035856736X?tag=NYTBSREV-20",
      author: "Valerie Bertinelli",
      book_image:
        "https://storage.googleapis.com/du-prd/books/images/9780358567363.jpg",
    },
    {
      isbn: "9781510766808",
      title: "THE REAL ANTHONY FAUCI",
      description:
        "The anti-vaccine advocate gives his take on the chief medical advisor to the president.",
      amazon_link: "https://www.amazon.com/dp/1510766804?tag=NYTBSREV-20",
      author: "Robert F. Kennedy Jr",
      book_image:
        "https://storage.googleapis.com/du-prd/books/images/9781510766808.jpg",
    },
    {
      isbn: "9781501110368",
      title: "IT ENDS WITH US",
      description:
        "A battered wife raised in a violent home attempts to halt the cycle of abuse.",
      amazon_link:
        "http://www.amazon.com/Ends-Us-Novel-Colleen-Hoover-ebook/dp/B0176M3U10?tag=NYTBSREV-20",
      author: "Colleen Hoover",
      book_image:
        "https://storage.googleapis.com/du-prd/books/images/9781501110375.jpg",
    },
    {
      isbn: "9781538724736",
      title: "VERITY",
      description:
        "Lowen Ashleigh is hired by the husband of an injured writer to complete her popular series and uncovers a horrifying truth.",
      amazon_link: "https://www.amazon.com/dp/1791392792?tag=NYTBSREV-20",
      author: "Colleen Hoover",
      book_image:
        "https://storage.googleapis.com/du-prd/books/images/9781791392796.jpg",
    },
    {
      isbn: "9781501161933",
      title: "THE SEVEN HUSBANDS OF EVELYN HUGO",
      description:
        "A movie icon recounts stories of her loves and career to a struggling magazine writer.",
      amazon_link: "https://www.amazon.com/dp/1501161938?tag=NYTBSREV-20",
      author: "Taylor Jenkins Reid",
      book_image:
        "https://storage.googleapis.com/du-prd/books/images/9781501161933.jpg",
    },
    {
      isbn: "9781476753188",
      title: "UGLY LOVE",
      description:
        "A casual sexual relationship between Tate and Miles becomes more complicated than they expected.",
      amazon_link:
        "http://www.amazon.com/Ugly-Love-Novel-Colleen-Hoover-ebook/dp/B00HB62MC0?tag=NYTBSREV-20",
      author: "Colleen Hoover",
      book_image:
        "https://storage.googleapis.com/du-prd/books/images/9781476753195.jpg",
    },
    {
      isbn: "9780593336823",
      title: "THE LOVE HYPOTHESIS",
      description:
        "A young professor agrees to pretend to be a third-year Ph.D. candidate???s boyfriend.",
      amazon_link: "https://www.amazon.com/dp/0593336828?tag=NYTBSREV-20",
      author: "Ali Hazelwood",
      book_image:
        "https://storage.googleapis.com/du-prd/books/images/9780593336823.jpg",
    },
    {
      isbn: "9781668002520",
      title: "THE SPANISH LOVE DECEPTION",
      description:
        "Catalina???s insufferable colleague Aaron agrees to be her fake date to her sister???s wedding.",
      amazon_link: "https://www.amazon.com/dp/1668002523?tag=NYTBSREV-20",
      author: "Elena Armas",
      book_image:
        "https://storage.googleapis.com/du-prd/books/images/9781668002520.jpg",
    },
    {
      isbn: "9781984806758",
      title: "PEOPLE WE MEET ON VACATION",
      description:
        "Opposites Poppy and Alex meet to vacation together one more time in hopes of saving their relationship.",
      amazon_link: "https://www.amazon.com/dp/1984806750?tag=NYTBSREV-20",
      author: "Emily Henry",
      book_image:
        "https://storage.googleapis.com/du-prd/books/images/9781984806758.jpg",
    },
    {
      isbn: "9780735219106",
      title: "WHERE THE CRAWDADS SING",
      description:
        "In a quiet town on the North Carolina coast in 1969, a young woman who survived alone in the marsh becomes a murder suspect.",
      amazon_link:
        "https://www.amazon.com/Where-Crawdads-Sing-Delia-Owens/dp/0735219095?tag=NYTBSREV-20",
      author: "Delia Owens",
      book_image:
        "https://storage.googleapis.com/du-prd/books/images/9780735219090.jpg",
    },
    {
      isbn: "9780062060624",
      title: "THE SONG OF ACHILLES",
      description:
        "A reimagining of Homer???s ???Iliad??? that is narrated by Achilles' companion Patroclus.",
      amazon_link:
        "http://www.amazon.com/The-Song-Achilles-A-Novel/dp/0062060627?tag=NYTBSREV-20",
      author: "Madeline Miller",
      book_image:
        "https://storage.googleapis.com/du-prd/books/images/9780062060624.jpg",
    },
    {
      isbn: "9781250301703",
      title: "THE SILENT PATIENT",
      description:
        "Theo Faber looks into the mystery of a famous painter who stops speaking after shooting her husband.",
      amazon_link:
        "https://www.amazon.com/Silent-Patient-Alex-Michaelides/dp/1250301696?tag=NYTBSREV-20",
      author: "Alex Michaelides",
      book_image:
        "https://storage.googleapis.com/du-prd/books/images/9781250301697.jpg",
    },
    {
      isbn: "9781501110344",
      title: "NOVEMBER 9",
      description:
        "Ben and Fallon meet on the same day each year but a possible untruth might spoil their relationship.",
      amazon_link:
        "http://www.amazon.com/November-9-Novel-Colleen-Hoover-ebook/dp/B00UDCI1S8?tag=NYTBSREV-20",
      author: "Colleen Hoover",
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
      book_image:
        "https://storage.googleapis.com/du-prd/books/images/9780778311935.jpg",
    },
    {
      isbn: "9781984806734",
      description:
        "A relationship develops between a literary fiction author and a romance novelist as they both try to overcome writer???s block.",
      amazon_link: "https://www.amazon.com/dp/1984806734?tag=NYTBSREV-20",
      author: "Emily Henry",
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
      book_image:
        "https://storage.googleapis.com/du-prd/books/images/9780316478526.jpg",
    },
    {
      isbn: "9780399588198",
      title: "BORN A CRIME",
      description:
        "A memoir about growing up biracial in apartheid South Africa by the host of ???The Daily Show.???",
      amazon_link:
        "https://www.amazon.com/Born-Crime-Stories-African-Childhood-ebook/dp/B01DHWACVY?tag=NYTBSREV-20",
      author: "Trevor Noah",
      book_image:
        "https://storage.googleapis.com/du-prd/books/images/9780399588181.jpg",
    },
    {
      isbn: "9780374533557",
      title: "THINKING, FAST AND SLOW",
      description:
        "When we can and cannot trust our intuitions in making business and personal decisions.",
      amazon_link:
        "http://www.amazon.com/Thinking-Fast-Slow-Daniel-Kahneman-ebook/dp/B00555X8OA?tag=NYTBSREV-20",
      author: "Daniel Kahneman",
      book_image:
        "https://storage.googleapis.com/du-prd/books/images/9781429969352.jpg",
    },
    {
      isbn: "9781984855015",
      title: "ALL THAT SHE CARRIED",
      description:
        "The story of an enslaved woman whose daughter was separated from her and sold is passed down through generations.",
      amazon_link: "https://www.amazon.com/dp/1984855018?tag=NYTBSREV-20",
      author: "Tiya Miles",
      book_image:
        "https://storage.googleapis.com/du-prd/books/images/9781984855015.jpg",
    },
    {
      isbn: "9780063159983",
      title: "THE HOUSE OF GUCCI",
      description:
        "An account of the murder of Maurizio Gucci in 1995; the basis of the film.",
      amazon_link: "https://www.amazon.com/dp/0063159988?tag=NYTBSREV-20",
      author: "Sara Gay Forden",
      book_image:
        "https://storage.googleapis.com/du-prd/books/images/9780063159983.jpg",
    },
    {
      isbn: "9781400078431",
      title: "THE YEAR OF MAGICAL THINKING",
      description:
        "Winner of the National Book Award in 2005. The late writer recounts her daughter???s illness and husband???s death.",
      amazon_link: "https://www.amazon.com/dp/1400078431?tag=NYTBSREV-20",
      author: "Joan Didion",
      book_image:
        "https://storage.googleapis.com/du-prd/books/images/9781400078431.jpg",
    },
    {
      isbn: "9780593312193",
      title: "LET ME TELL YOU WHAT I MEAN",
      description:
        "A collection of 12 pieces written between 1968 and 2000 that includes observations on the underground press and the act of writing.",
      amazon_link: "https://www.amazon.com/dp/059331848X?tag=NYTBSREV-20",
      author: "Joan Didion",
      book_image:
        "https://storage.googleapis.com/du-prd/books/images/9780593318485.jpg",
    },
    {
      isbn: "9780525509585",
      title: "THE SUM OF US",
      description:
        "The chair of the board of the racial justice organization Color of Change analyzes the impact of racism on the economy.",
      amazon_link: "https://www.amazon.com/dp/0525509569?tag=NYTBSREV-20",
      author: "Heather McGhee",
      book_image:
        "https://storage.googleapis.com/du-prd/books/images/9780525509561.jpg",
    },
    {
      isbn: "9781501111112",
      title: "GRIT",
      description:
        "The MacArthur Fellow argues that passion and perseverance are more important than innate talent in creating success.",
      amazon_link:
        "http://www.amazon.com/Grit-The-Power-Passion-Perseverance-ebook/dp/B010MH9V3W?tag=NYTBSREV-20",
      author: "Angela Duckworth",
      book_image:
        "https://storage.googleapis.com/du-prd/books/images/9781501111129.jpg",
    },
    {
      isbn: "9780307742483",
      title: "KILLERS OF THE FLOWER MOON",
      description:
        "The story of a murder spree in 1920s Oklahoma that targeted Osage Indians, whose lands contained oil. The fledgling F.B.I. intervened, ineffectively.",
      amazon_link:
        "https://www.amazon.com/Killers-Flower-Moon-Osage-Murders/dp/0385534248?tag=NYTBSREV-20",
      author: "David Grann",
      book_image:
        "https://storage.googleapis.com/du-prd/books/images/9780385534246.jpg",
    },
    {
      isbn: "9780063030930",
      title: "THE DRESSMAKERS OF AUSCHWITZ",
      description:
        "Twenty-five young inmates of the Auschwitz-Birkenau concentration camp made garments for elite Nazi women.",
      amazon_link: "https://www.amazon.com/dp/0063030934?tag=NYTBSREV-20",
      author: "Lucy Adlington",
      book_image:
        "https://storage.googleapis.com/du-prd/books/images/9780063030930.jpg",
    },
    {
      isbn: "9781455522712",
      title: "IT'S ALL GOOD",
  
      description: "Easy, healthy, sugar-free recipes.",
      amazon_link:
        "http://www.amazon.com/Its-All-Good-Delicious-Recipes/dp/1455522716?tag=NYTBSREV-20",
      author: "Gwyneth Paltrow and Julia Turshen",
      book_image:
        "https://storage.googleapis.com/du-prd/books/images/9781455522712.jpg",
    },
    {
      isbn: "9781476734941",
      title: "THE FASTDIET",
      description:
        "A diet that calls for eating normally five days a week and fasting for the other two days.",
      amazon_link:
        "http://www.amazon.com/The-FastDiet-Healthy-Intermittent-Fasting-ebook/dp/B00ALYY6ZA?tag=NYTBSREV-20",
      author: "Michael Mosley and Mimi Spencer",
      book_image:
        "https://storage.googleapis.com/du-prd/books/images/9781476734941.jpg",
    },
    {
      isbn: "9781592407330",
      title: "DARING GREATLY",
      description:
        "How the courage to be vulnerable transforms the way we live, love, parent and lead.",
      amazon_link:
        "http://www.amazon.com/Daring-Greatly-Courage-Vulnerable-Transforms/dp/1592407331?tag=NYTBSREV-20",
      author: "Bren?? Brown",
      book_image:
        "https://storage.googleapis.com/du-prd/books/images/9781592407330.jpg",
    },
    {
      isbn: "9780985462734",
      title: "LIFE CODE",
      description:
        "How to ???win in the real world,??? regardless of people who try to exploit you.",
      amazon_link:
        "http://www.amazon.com/Life-Code-Rules-Winning-World/dp/0985462736?tag=NYTBSREV-20",
      author: "Phil McGraw",
      book_image:
        "https://storage.googleapis.com/du-prd/books/images/9780985462734.jpg",
    },
    {
      isbn: "9781401939410",
      title: "THE TAPPING SOLUTION",
      description:
        "Repeating phrases and touching pressure points on the body to ease stress. ",
      amazon_link:
        "http://www.amazon.com/The-Tapping-Solution-Revolutionary-Stress-Free/dp/1401939414?tag=NYTBSREV-20",
      author: "Nick Ortner",
      book_image:
        "https://storage.googleapis.com/du-prd/books/images/9781401939410.jpg",
    },
    {
      isbn: "9781250035868",
      title: "SHRED: THE REVOLUTIONARY DIET",
      description:
        "A six-week system that combines meal spacing and other elements.",
      amazon_link:
        "http://www.amazon.com/Shred-Revolutionary-Weeks-Inches-Sizes/dp/1250035864?tag=NYTBSREV-20",
      author: "Ian K Smith",
      book_image:
        "https://storage.googleapis.com/du-prd/books/images/9781250035868.jpg",
    },
    {
      isbn: "9781609611545",
      title: "WHEAT BELLY",
  
      description: "An examination of wheat in modern diets.",
      amazon_link:
        "http://www.amazon.com/Wheat-Belly-Lose-Weight-Health/dp/1609614798?tag=NYTBSREV-20",
      author: "William Davis",
      book_image:
        "https://storage.googleapis.com/du-prd/books/images/9781609614799.jpg",
    },
    {
      isbn: "9781455517381",
      title: "MAKING GOOD HABITS, BREAKING BAD HABITS",
      description: " Practicing 14 behaviors to create positive new routines.",
      amazon_link:
        "http://www.amazon.com/Making-Good-Habits-Breaking-Bad/dp/1455517380?tag=NYTBSREV-20",
      author: "Joyce Meyer",
      book_image:
        "https://storage.googleapis.com/du-prd/books/images/9781455517381.jpg",
    },
    {
      title: "THE KEY IS LOVE",
      isbn: "9780451240316",
      description: "A daughter draws on her mother???s wisdom. ",
      amazon_link:
        "http://www.amazon.com/The-Key-Love-Daughters-Gratitude/dp/0451240316?tag=NYTBSREV-20",
      author: "Marie Osmond with Marcia Wilkie",
      book_image:
        "https://storage.googleapis.com/du-prd/books/images/9780451240316.jpg",
    },
    {
      title: "ONE THING",
      isbn: "9781885167774",
      description: "Narrowing your concentration and becoming more productive. ",
      amazon_link:
        "http://www.amazon.com/The-ONE-Thing-Surprisingly-Extraordinary/dp/1885167776?tag=NYTBSREV-20",
      author: "Gary Keller with Jay Papasan",
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
      book_image:
        "https://storage.googleapis.com/du-prd/books/images/9780307886293.jpg",
    },
    {
      title: "THE LEGEND OF ZELDA, HYRULE HISTORIA",
      isbn: "9781616550417",
      description: "Historical information on the franchise.",
      amazon_link:
        "http://www.amazon.com/The-Legend-Zelda-Hyrule-Historia/dp/1616550414?tag=NYTBSREV-20",
      author: "Patrick Thorpe and Michael Gombos, et al",
      book_image:
        "https://storage.googleapis.com/du-prd/books/images/9781616550417.jpg",
    },
    {
      isbn: "9781609619367",
      title: "WHEAT BELLY COOKBOOK",
      description:
        'This "Wheat Belly" companion contains 150 recipes that are free of modern wheat.',
      amazon_link:
        "http://www.amazon.com/Wheat-Belly-Cookbook-Recipes-Weight/dp/1609619366?tag=NYTBSREV-20",
      author: "William Davis",
      book_image:
        "https://storage.googleapis.com/du-prd/books/images/9781609619367.jpg",
    },
    {
      title: "THE DRUNKEN BOTANIST",
      isbn: "9781616200466",
      description: "The connection between plants and alcoholic spirits.",
      amazon_link:
        "http://www.amazon.com/The-Drunken-Botanist-Plants-Create/dp/1616200464?tag=NYTBSREV-20",
      author: "Amy Stewart",
      book_image:
        "https://storage.googleapis.com/du-prd/books/images/9781616200466.jpg",
    },
    {
      isbn: "9780893348625",
      title: "OBAMACARE SURVIVAL GUIDE",
      description:
        "An explanation of and arguments against the Affordable Care Act.",
      amazon_link:
        "http://www.amazon.com/ObamaCare-Survival-Guide-Nick-Tate/dp/0893348627?tag=NYTBSREV-20",
      author: "Nick Tate",
      book_image:
        "https://storage.googleapis.com/du-prd/books/images/9780893348625.jpg",
    },
    {
      title: "THE FIVE LOVE LANGUAGES",
      isbn: "9780802473158",
      description: "How to communicate love in a way a spouse will understand.",
      amazon_link:
        "http://www.amazon.com/The-Love-Languages-Secret-Lasts/dp/0802473156?tag=NYTBSREV-20",
      author: "Gary Chapman",
      book_image:
        "https://storage.googleapis.com/du-prd/books/images/9780802473158.jpg",
    },
    {
      isbn: "9780373892648",
      title: "THE BEAUTY DETOX FOODS",
      description:
        "Fifty foods, none of them meat, for transforming your body; with recipes.",
      amazon_link:
        "http://www.amazon.com/The-Beauty-Detox-Foods-Transform/dp/0373892640?tag=NYTBSREV-20",
      author: "Kimberly Snyder",
      book_image:
        "https://storage.googleapis.com/du-prd/books/images/9780373892648.jpg",
    },
    {
      title: "WHAT TO EXPECT WHEN YOU'RE EXPECTING",
      isbn: "9780761148579",
      description: "Advice for parents-to-be.",
      amazon_link:
        "http://www.amazon.com/What-Expect-Youre-Expecting-Edition/dp/0761148574?tag=NYTBSREV-20",
      author: "Heidi Murkoff and Sharon Mazel",
      book_image:
        "https://storage.googleapis.com/du-prd/books/images/9780761148579.jpg",
    },
    {
      isbn: "9781592858491",
      title: "THE GIFTS OF IMPERFECTION",
      description:
        "Letting go of who you think you???re supposed to be to embrace who you are.",
      amazon_link:
        "http://www.amazon.com/The-Gifts-Imperfection-Supposed-Embrace/dp/159285849X?tag=NYTBSREV-20",
      author: "Bren?? Brown",
      book_image:
        "https://storage.googleapis.com/du-prd/books/images/9781592858491.jpg",
    },
    {
      title: "FORKS OVER KNIVES: THE COOKBOOK",
      isbn: "9781615190614",
      description: "A companion cookbook, with over 300 plant-based recipes.",
      amazon_link:
        "http://www.amazon.com/Forks-Over-Knives-Cookbook-Plant-Based/dp/1615190619?tag=NYTBSREV-20",
      author: "Del Sroufe",
      book_image:
        "https://storage.googleapis.com/du-prd/books/images/9781615190614.jpg",
    },
    {
      title: "EAT TO LIVE",
      isbn: "9780316120913",
      description: "A plan for achieving fast and sustained weight loss.",
      amazon_link:
        "http://www.amazon.com/Eat-Live-Amazing-Nutrient-Rich-Sustained/dp/B008YE8B82?tag=NYTBSREV-20",
      author: "Joel Fuhrman",
      book_image:
        "https://storage.googleapis.com/du-prd/books/images/9780316206648.jpg",
    },
    {
      isbn: "9781609619114",
      title: "THE HONEST LIFE",
      description:
        "Making nontoxic choices, from diet to home materials to beauty products. ",
      amazon_link:
        "http://www.amazon.com/The-Honest-Life-Living-Naturally/dp/1609619110?tag=NYTBSREV-20",
      author: "Jessica Alba",
      book_image:
        "https://storage.googleapis.com/du-prd/books/images/9781609619114.jpg",
    },
    {
      title: "CLEAN",
      isbn: "9780062201669",
      description: "A program to rid the body of a multitude of toxins.",
      amazon_link:
        "http://www.amazon.com/Clean-Enhanced-Edition-Revolutionary-Program-ebook/dp/B003YL4KPS?tag=NYTBSREV-20",
      author: "Alejandro Junger with Amely Greeven",
      book_image:
        "https://storage.googleapis.com/du-prd/books/images/9780061735325.jpg",
    },
    {
      isbn: "9780061583261",
      title: "THE HAPPINESS PROJECT",
      description:
        "In a hunt for happiness, the author consulted science, ancient wisdom and pop culture.",
      amazon_link:
        "http://www.amazon.com/The-Happiness-Project-Aristotle-Generally/dp/006158326X?tag=NYTBSREV-20",
      author: "Gretchen Rubin",
      book_image:
        "https://storage.googleapis.com/du-prd/books/images/9780061583261.jpg",
    },
    {
      title: "PRACTICAL PALEO",
      isbn: "9781936608751",
      description: "A customized approach to health and a whole-foods lifestyle.",
      amazon_link:
        "http://www.amazon.com/Practical-Paleo-Customized-Whole-Foods-Lifestyle/dp/1936608758?tag=NYTBSREV-20",
      author: "Diane Sanfilippo",
      book_image:
        "https://storage.googleapis.com/du-prd/books/images/9781936608751.jpg",
    },
    {
      isbn: "9781572245372",
      title: "THE UNTETHERED SOUL",
      description:
        "The answer to who we are is said to be found in our consciousness. Originally published in 2012.",
      amazon_link:
        "http://www.amazon.com/The-Untethered-Soul-Journey-Yourself/dp/1572245379?tag=NYTBSREV-20",
      author: "Michael A Singer",
      book_image:
        "https://storage.googleapis.com/du-prd/books/images/9781572245372.jpg",
    },
    {
      isbn: "9780307731715",
      title: "TO HEAVEN AND BACK",
      description:
        "A spiritual journey the author experienced after a kayak accident. ",
      amazon_link:
        "http://www.amazon.com/To-Heaven-Back-Doctors-Extraordinary/dp/0307731715?tag=NYTBSREV-20",
      author: "Mary C Neal",
      book_image:
        "https://storage.googleapis.com/du-prd/books/images/9780307731715.jpg",
    },
    {
      isbn: "9780071799799",
      title: "OUTSOURCE SMART",
      description:
        "The benefits of outsourcing while staying competitive and freeing up more time for self.",
      amazon_link:
        "http://www.amazon.com/Outsource-Smart-Without-Letting-Business/dp/0071799796?tag=NYTBSREV-20",
      author: "Daven Michaels",
      book_image:
        "https://storage.googleapis.com/du-prd/books/images/9780071799799.jpg",
    },
    {
      isbn: "9780345536631", //NEED THIS
      title: "FROM MAMA'S TABLE TO MINE", //title
      description:
        "Reduced-fat Southern comfort food, including Charleston shrimp and grits.", //NEED THIS
      amazon_link:
        "http://www.amazon.com/From-Mamas-Table-Mine-Everybodys/dp/0345536630?tag=NYTBSREV-20",
      author: "Bob Deen", //NEED THIS
      book_image:
        "https://storage.googleapis.com/du-prd/books/images/9780345536631.jpg", //NEED THIS
    },
  ];
  
  module.exports = allBooksData;