// Get DOM element
const elem = (selector) => {
    return document.querySelector(selector);
};

// Get DOM elements
const elems = (selector) => {
    return document.querySelectorAll(selector);
};

const language = {
    en: {
        aboutUs: "About us",
        rentsSales: "Rents-sales",
        rents: "Rents",
        tours: "Tours",
        contacts: "Contacts",
        offRoadCars: "Off-road cars",
        offRoadMotorcycles: "Off-road motorcycles",
        tires: "Tires",
        oil: "Oil",
        menu: "Menu",
        silkWayRoadTour: "Silk-way road tour",
        narynTour: "Naryn tour",
        pamirTour: "Pamir tour",
        tienShanTour: "Tien-Shan tour",
        kyrgyzstanMongoliaTour: "Kyrgyzstan-Mongolia tour",
        tosorTour: "Tosor tour",
        bartangTour: "Bartang tour",
        motorcycles: "Motorcycles",
        repairShop: "Repair Shop",
        housing: "Housing",
        saveBudget: "Save budget",
        kyrgyzstan: "Kyrgyzstan",
        discoverWithUs: "Discover with us",
        natureTravelAndEngineering: "Nature travel and engineering",
        carRent: "Car rent",
        motorcycleRent: "Motorcycle rent",
        countriesWeVisit: "Countries we visit",
        aboutKyrgyzstan: "About Kyrgyzstan",
        aboutTajikistan: "About Tajikistan",
        aboutMongolia: "About Mongolia",
        aboutChina: "About China",
        info: "Info",
        phone: "Phone: +996555550146 ",
        addressOshKyrgyzstan: "Address: Osh, Kyrgyzstan",
        index: "Index: 723500 ",
        ourPartners: "Our partners",
        allRightsReserved: "Copyright© 2021 Nte All Rights Reserved",
        // About Kyrgyzstan
        aboutKyrgyzstanPH1: "Kyrgyzstan is a mountainous country in Central Asia. It is located along the Great Silk Road, an ancient trade route between China and the Mediterranean. Snow leopards, lynxes and sheep inhabit the Tien Shan Mountains, which surround this caravan route and occupy most of the country. In the south of the country, there is the city of Osh, which has a history of more than a thousand years. It is famous for its huge bazaar, where merchants who followed the Great Silk Road once stayed.",
        aboutKyrgyzstanPH2: "Kyrgyzstan (General information)",
        aboutKyrgyzstanP1: "Location Kyrgyzstan — a small mountainous country in the center of the Asian continent, on one latitude with the south of Italy, Spain, Japan occupies the territory of 198,5 thousand square km. The total length of the borderline is 4500 km. In the north it borders on Kazakhstan, in the west — Uzbekistan and Tajikistan, and more than 900 km with China in the south.",

        aboutKyrgyzstanP2: "Mountains occupy 90% of the territory, high mountains — 70%, valleys — 10%. The south-eastern part of the country is located in the region of Karakorum highway and north-western China, where the mainstream of tourists come to Kyrgyzstan and further to Uzbekistan and Kazakhstan.",
        aboutKyrgyzstanP3: "Capital — Bishkek (former Frunze) 1,053,915 (2020) inhabitants. Bishkek is situated at the foothills of the Kyrgyz Ala-Too mountain range in the center of the Chu valley, 250 km away from Almaty and 600 km away from Tashkent.",
        aboutKyrgyzstanP5: "Population — 6,586,600 inhabitants. (2020)",
        aboutKyrgyzstanP9: "Languages — Kyrgyz, Russian.",
        aboutKyrgyzstanP10: "Religions — Islam, Christianity.",
        aboutKyrgyzstanP11: "National currency — 1 som = 100 tyin 1USD = 84.6 som (July 2021).",
        aboutKyrgyzstanP4: "Towns — Osh (1,368,054), Jalal-Abad (1,238,750) Karakol (463,900). (2020)",
        aboutKyrgyzstanP8: "Nationalities — Kyrgyz — 60%, Russian — 5%, Uzbek — 14%, Dungans, Kazakh, Tajik, Uigur, Korean — 2%.",
        aboutKyrgyzstanP6: "Climate — average: January — 4-14 degrees below zero, July — 12-37 degrees above zero. The climate is continental.",
        aboutKyrgyzstanP7: "Best travel time — from May to October.",
        aboutKyrgyzstanP12: "Time — 4 hours ahead of GMT.",
        kochkor: "Kochkor",
        kolTorLake: "Kol-Tor lake",
        barskoonWaterfall: "Barskoon waterfall",
        konorchekConyons: "Konorchek conyons",
        kegeti: "Kegeti",
        sonKolLakeWinter: "Son-kol lake winter",
        // About Tajikistan
        aboutTajikistanPH1: "Tajikistan is a country in Central Asia bordering Afghanistan, China, Kyrgyzstan and Uzbekistan. The mountainous landscape attracts lovers of mountaineering and hiking here. The Fan Mountains are located near the capital of Tajikistan. Their height is more than 5000 meters, and snow constantly lies on the peaks. In the nature, reserve there is a glacial lake Iskanderkul with turquoise water. You can see different birds here.",
        aboutTajikistanPH2: "Tajikistan (General information)",
        aboutTajikistanP1: "The border of Tajikistan is 700 kilometres long from east to west and 350 kilometres long from north to south. The country shares borders to the west and north with Uzbekistan (910 kilometers) and Kyrgyzstan (630 kilometers); to the south with Afghanistan (1,030 kilometers); and to the east with China (430 kilometers).",
        aboutTajikistanP2: "Capital — Dushanbe 846,400 (2020) inhabitants. Dushanbe City is the capital of the Republic of Tajikistan. As a political and administrative center, it was listed on the world map at the beginning of the XX century. it is located in the scenic and fertile Gissar Valley, at an altitude of 750 — 930 meters above sea level. From the north to the south it is crossed by the Varzob River, from east to the west — by the Kofarnikhon River.",
        aboutTajikistanP3: "Towns — Khujand (2,658,400), Khorugh (226,900) Qurghonteppa (3,274,900). (2020)",
        aboutTajikistanP4: "Population- 9,537,645 inhabitants. (2020)",
        aboutTajikistanP5: "Climate — average: January — 4-14 degrees below zero, July — 12-37 degrees above zero. The climate is continental.",
        aboutTajikistanP6: "Best travel time — from May to October.",
        aboutTajikistanP7: "Nationalities — Tajiks — 84%, Russian — 0, 5%, Uzbek — 8%, Dungans, Kazakh, Uigur.",
        aboutTajikistanP8: "Languages — Tajik, Russian.",
        aboutTajikistanP9: "Religions — Islam, Christianity and others.",
        aboutTajikistanP10: "National currency — Somoni (TJS) 1USD = 11.39 somoni (July 2021).",
        aboutTajikistanP11: "Time — 5 hours ahead of GMT.",
        // About Mongolia
        aboutMongoliaPH1: "Mongolia, the country of adventure, land of steppe nomads with real freedom and great history behind. Pieceful Mongol nation tribes here in Central Asia for thousands of years. Mongolians are welcome hospitality nation to introduce our nomadic lifestyle to you and proud to share their amazing history with you.",
        aboutMongoliaPH2: "Mongolia (General information)",
        aboutMongoliaP1: "Mongolia is a state in East Asia bordering Russia to the north and China to the south. Landlocked. The state is a member of almost all UN structures, as well as some CIS structures as an observer. The official language is Mongolian with Cyrillic (earlier, the old Mongolian script was used for writing).",
        aboutMongoliaP2: "Ulaanbaatar formerly anglicised as Ulan Bator is the capital and most populous city of Mongolia. The municipality is located in north-central Mongolia at an elevation of about 1,300 metres (4,300 ft) in a valley on the Tuul River. The city was originally founded in 1639 as a nomadic Buddhist monastic centre, changing location 28 times, and was permanently settled at its current location in 1778.",
        aboutMongoliaP3: "Towns — Erdenet (86,866), Darkhan (74,300). (2020)",
        aboutMongoliaP4: "Population- 3,353,470 inhabitants. (2020)",
        aboutMongoliaP5: "Climate — average: January — 15, -30 degrees below zero, July — 12-37 degrees above zero.",
        aboutMongoliaP6: "Best travel time — from May to October.",
        aboutMongoliaP7: "Nationalities — mongols — 94%, kazakhs — 0,5%, and others",
        aboutMongoliaP8: "Languages — mongolian",
        aboutMongoliaP9: "Religions — Buddhism, Islam and others",
        aboutMongoliaP10: "National currency — Tögrög (mnt) 1USD = 2856.8 Tögrög (July 2021).",
        aboutMongoliaP11: "Time — 7-8 hours ahead of GMT.",
        // About China
        aboutChinaPH1: "China is a densely populated country in East Asia with varied landscapes and topography. Here you can find meadows, deserts, mountains, lakes, rivers and coasts with a length of more than 14 thousand km. China is one of the oldest cultures on the planet, and has made famed contributions to all kinds of art, literature, architecture, engineering, and more.",
        aboutChinaPH2: "China (General information)",
        aboutChinaP1: "The capital of the country, Beijing, is famous for its modern architecture and ancient monuments, including the Forbidden City palace complex and Tiananmen Square. To the east is the world financial center Shanghai, whose silhouette is shaped by countless skyscrapers. The Great Wall of China crosses northern China, crossing it from east to west.",
        aboutChinaP2: "Capital — beijing 21,893,095 (2020) inhabitants. Beijing is a global city and one of the world’s leading centres for culture, diplomacy and politics, business and economics, education, language, and science and technology. It is the world’s most populous national capital city within an administrative area of 16,410.5 km². It is located in Northern China, and is governed as a municipality under the direct administration of the State Council with 16 urban, suburban, and rural districts.",
        aboutChinaP3: "Towns — Shanghai (24,237,800), Guangzhou (13,154,200) Shenzhen (13,026,600). (2020)",
        aboutChinaP4: "Population- 1,411,778,724 inhabitants. (2020)",
        aboutChinaP5: "Climate — The climate is changeable.",
        aboutChinaP6: "Best travel time — from May to October.",
        aboutChinaP11: "Time — 8 hours ahead of GMT.",
        aboutChinaP7: " Nationalities — Han Chinese — 91%, Zhuang — 1,27%, Uyghur — 0,75%, uzbeks, kyrgyzs, ",
        aboutChinaP8: " Languages — chinese, uyghur, mongolian, tibetan. ",
        aboutChinaP9: " Religions — 75% is non religion, 18% buddhism, 5,2% Christianity and others. ",
        aboutChinaP10: " National currency — Renminbi (CNY) 1USD = 6.47 Renminbi (July 2021).",
        // Off-road motorcycles
        offRoadMotorcyclesPH1: "quality and reliability begin with us.",
        offRoadMotorcyclesCarsPH2: "feel the extreme",
        offRoadMotorcyclesP1: "The Yamaha XTZ 660 Tenere touring enduro model appeared in 1991, replacing the obsolete Yamaha XT600Z Tenere. The Yamaha XTZ 660 Tenere was based on a 1-cylinder liquid-cooled 660 cc engine. see, delivering 48 hp. Other features of the Yamaha XTZ660 Tenere include a steel frame, advanced long-travel suspension in the form of a 43 mm telescopic fork and an adjustable (preload + rebound) monoshock, disc brakes front and rear, a 20-liter fuel tank and only 195 kg of curb weight.",
        offRoadMotorcyclesP2: "Without a doubt, this is one of the most versatile motorcycles ever made. It is durable. It looks great. A reliable air-cooled, 4-stroke 595cc engine powers the XT600. The 4-valve system and the clever YDIS carburetor block give the bike high torque and smooth, powerful acceleration in any frequency range, which gives it an advantage both on and off the road. The electric starter allows the motorcycle to be started at the push of a button. The robust front suspension includes all dimension changes made in 1996 to improve the stability of the motorcycle when traveling at high speed.",
        // Off-road cars
        offRoadCarsPH1: "quality and reliability begin with us.",
        offRoadCarsP1: "toyota land cruiser 105",
        offRoadCarsP2: "The car is very comfortable, capable of overcoming such obstacles and places where, it would seem, it is already impossible to pass. Not killed in the literal sense of the word 'not split' bridges give the car a sense of the presence of 'independent' suspension. Smooth when accelerating and stable on the road. Sometimes it seems that it is very slow, but remembering that this is not a racing car, but an SUV and its weight is huge, you calm down and feel confident. Especially when it comes to a country road and a country road.",
        offRoadCarsP3: "Toyota Land cruiser 76",
        offRoadCarsP4:`Toyota Land cruiser 76 
Engine volume: 4.2 Fuel 
type: Diesel Transmission: Manual 
Drive unit: Full (4WD) 
Fuel consumption: (urban) L / 100 km 19.9L 
Fuel consumption: (extra-urban) 10.2L 
Fuel consumption: (combined) 11.9L 
Fuel tank volume: 100L`,
        offRoadCarsP5: "Toyota Land cruiser 78",
        offRoadCarsP6:`Toyota Land cruiser 78
Engine volume: 4.2
Fuel type: Diesel
Transmission: Manual
Drive unit: Full (4WD)
Fuel consumption: (urban) L / 100 km
19.9L Fuel consumption: (extra-urban)
10.2L
Fuel consumption: (combined) 11.9L
Fuel tank volume: 100L`,
        offRoadCarsP7: "toyota raf 4",
        offRoadCarsP8:`Toyota RAV4
Engine volume: 2.0
Fuel type: Petrol
Transmission: Manual
Drive unit: 4WD
Fuel consumption: (urban) L / 100 km
12L Fuel consumption: (extra-urban)
9L
Fuel consumption: (combined) 10L
Fuel tank volume: 70L`,
        offRoadCarsP9: "Mitsubishi Montero Sport",
        offRoadCarsP10:`
Mitsubishi Montero Sport
Engine volume: 3.5
Fuel type: Petrol
Transmission: Automatic
Drive unit: Full(4WD)
Fuel consumption: (urban) L / 100 km
15L Fuel consumption: (extra-urban)
11L
Fuel consumption: (combined) 13L
Fuel tank volume: 90L`,
//Tours
        uniqueSensationsAwaitYou: "unique sensations await you",
        silkRoadTour: "SILK ROAD TOUR (MAY 2022)",
        silkRoadTour2: "02 MAY - 01 JUNE 2022",
        pamirTour: "PAMIR TOUR (MAY / JUNE 2022)",
        pamirTour2: "29 MAY - 11 JUNE 2022",
        mongoliaTour: "MONGOLIA TOUR 2022",
        mongoliaTour2: "JULY 10 - AUGUST 1, 2022",
        narynTour: "NARYN TOUR (JULY 2022)",
        narynTour2: "03 - 09 JULY 2022",
        bartangTour: "BARTANG TOUR 2022",
        bartangTour2: "04 - 17 SEPTEMBER 2022",
        tosorTour: "TOSOR TOUR (AUGUST 2022)",
        tosorTour2: "14 - 27 AUGUST 2022",
        tyanShanTour: "TYAN-SHAN TOUR (JUNE 2022)",
        tyanShanTour2: "05 - 18 JUNE 2022",
        learnMore: "learn more",
//Silk road tour
        silkRoadTourP1: "From Switzerland to Kyrgyzstan by motorcycle. Along the Silk Road. Ride your own motorcycle (organized return transport with a freight forwarder) or a Yamaha XT660Z with us. The reserve motorcycle (in case of a breakdown) is transported in a pickup truck along with the luggage behind the group.",
        travelDescription: "TRAVEL DESCRIPTION",
        silkRoadTourP2: "Switzerland — Italy — Greece 4 days | 1580 km. Like Marco Polo, we embark on a journey through Italy along the Silk Road. In Ancona, we take a ferry that will take us to Igoumenitsa in Greece. At 8 o’clock in the morning, we dock in Greece and, having rested, drive through Thessaloniki to Kavala and spend the night in a cosy hotel.",
        silkRoadTourP3: "Turkey 7 days | 2460 km The very next day we cross the southern part of the Sea of Marmara in Canakkale and already in Asia. We will cross all of Turkey and visit, among other things, the caravanserai in Sultan Hani, Cappadocia, with its world-famous cave dwellings and churches. There is also the opportunity to take part in an impressive hot air balloon ride in Goreme. During our journey to the east, we will see the Anatolian plateau from its most beautiful side. We spend the night in good hotels.",
        silkRoadTourP4: "Iran 10 days | 2780 km Tehran, the capital of Iran, will bypass a large area in the south. To do this, we will get to know oriental fabulous cities such as Isfahan, Yazd and Mashhad during our 10-day trip to Iran. The people are very open, friendly and very helpful.",
        silkRoadTourP5: "Turkmenistan 3 days | 760 km After Ashgabat, the capital of Turkmenistan, with its magnificent buildings and unsuitable water bodies, we will visit a gas crater on our way to Khiva — in the middle of the desert. To really see the spectacle, we try to spend the night nearby, because this «hellhole» only makes a real impression in the dark.",
        silkRoadTourP6: "Uzbekistan 6 days | 1080 km In Uzbekistan, we will visit the cities of Khiva, Bukhara and Samarkand, pearls of the Silk Road. In Bukhara, a German-speaking Uzbek will tell us about the sights of this old city with its imposing buildings and minarets. We will spend the night in a traditional boutique hotel in the center of the historic Old Town and in a guesthouse in Samarkand, famous for its beautiful garden and rich breakfast.",
        silkRoadTourP7: "Uzbekistan — Kyrgyzstan 1 day | 410 km our final stage takes us from the capital of Uzbekistan, Tashkent, along a well-developed pass to the Fergana Valley and immediately after the border with Kyrgyzstan to Osh. We use the day before flying home to visit the big bazaar in Osh and see the city. On the eve of departure, we will sit down again in comfort, taste a juicy barbecue (shashlik) with a cold beer and tell each other about the exciting journey that awaits us ahead and will be remembered for a lifetime!",
// Pamir tour

        pamirTourP1: "A very varied tour of the lowlands, river valleys and high mountains (including 1 week at an altitude of 4000 m). Riding in deserted places in the high mountains.",
        pamirTourP2: "Day 1 Arrival in Osh After the flight, you land in Osh, the second-largest city in Kyrgyzstan. You will be met and you can relax for a few hours in our hotel. After lunch, we will take a short excursion outside the city to get acquainted with motorcycles. We will spend the night in Osh.",
        pamirTourP3: "Day 2 Day trip to Lake Papan with pass Today's one-day tour (about 150 km) will first take us to Lake Papan, Osh reservoir. We drive on gravel dirt roads through a green valley and then along with one of the many passes south of the city. In the afternoon we will return to Osh along a well-developed road.",
        pamirTourP4: "Day 3 drive through the Fergana Valley of Kyrgyzstan to Khujand in Tajikistan Today's disk is long and dusty. But we are rewarded with many new, unexplored experiences that make us forget about all the efforts. And in the evening in our beautiful hotel beer is tastier.",
        pamirTourP5: "Day 4 Drive to the pass in Dushanbe. While our escort car drives through the frightening Anzob tunnel on the way to Dushanbe, we cross a 3000-meter-high pass. Since all traffic passes through a dark and wet tunnel, we have an impressive passage. We will spend the night in Dushanbe.",
        pamirTourP6: "Day 5 Kalaikum, the starting point of the Pamirs. There are two ways to get to Kalaikum: either along the winter route in southern Tajikistan or along the M41 highway through the mountains, along bumpy roads that are partially interrupted by streams. If possible, we choose the second, more difficult, but all the more attractive route. We live in a family. We have the opportunity to get to know the daily life of the Tajik family and enjoy their generous hospitality.",
        pamirTourP7: "Day 6 Transfer to Khorog. The mighty Pansch River leads us to Khorog. The river and road meander through a mesmerizing rocky gorge. On the other side of the river, almost every green spot is used as a site for an Afghan village. Khorog, a university town in the middle of the Pamirs, offers us a cosy hotel and a good dinner.",
        pamirTourP8: "Day 7 Continue to Bibi Fatima Our journey continues through the Wakhan Valley, along the Afghan border to Bibi Fatima. A separate ethnic group lives in the Bacchante Valley. These people differ from Tajiks not only in their native language but also outwardly and culturally. At Bibi Fatima, we have a beautiful view of the Wakhan Valley. Of course, we also use the hot spring, which is idyllically located in the rock crypt and invites you to take a wonderful bath with water with a temperature of over 40 degrees. We will spend the night in Bibi Fatima.",
        pamirTourP9: "Day 8 Transfer to the Pamir plateau at an altitude of 4000 m. On the way to the Pamir plateau, the air becomes thinner and thinner, but the view becomes clearer. Wild camels, yaks and a few shepherds aside, we are alone in this solitude. We spend the night in a guest house on Lake Bulunkul, we manage to visit hot springs and a 'mini-geyser'.",
        pamirTourP10: "Day 9 + 10 Along the Pamir highway Now we are on the legendary Pamir highway or M41. The road was built by the Soviet Union along the Afghan and Chinese borders. It is still partially used by Chinese vehicles today. We cross four passes at an altitude of over 4000 m. The Ak-Baital pass with a height of 4655 m is the highest of them. In Murghab, a former coal-mining town, we spend the night in a hotel and, in addition to hot springs, we can take a shower again for several days.",
        pamirTourP11: "11 + 12 days To the Karakul lake and through the Kyzyl-Art pass to Kyrgyzstan Our further journey will lead us to the picturesquely located Karakul lake. We spend the night in Karakul right on the lake. The next day we cross the last Kyzyl-Art pass with a height of 4200 m. Here we come to the border with Kyrgyzstan.",
        pamirTourP12: "Day 13 Base Camp Lenin Peak, return to Osh Before returning to Osh, we make a detour to the base camp of Lenin Peak at an altitude of over 3500 m and in good weather, we enjoy a fantastic view of this giant mountain.",
        pamirTourP13: "14-15 day Osh and travel home The last day of our Pamir tour belongs to the city of Osh. We have enough time for a city tour or a visit to the bazaar. Early the next morning we will be transferred from the hotel to the airport, from where we will head back home.",
        // Mongolia tour
        mongoliaTourP1: "We drive to Tenerife via Mongelli. We get to know a huge country, impressive rivers and lakes, endless expanses.",
        mongoliaTourP2: "Day 1 Arrival in Ulaanbaatar. We fly to Ulan Bator via Berlin or Frankfurt. After driving to the hotel, we will start with a city tour with a visit to the Gandan Monastery. We continue on to Tsongjin Boldog, 57 km east of Ulaanbaatar, where the largest equestrian monument in the world is located. Then we return to the hotel and enjoy a typical Mongolian dinner.",
        mongoliaTourP3: "Day 2 Ulan Bator — Amarbayasgalant After breakfast, we meet with our Mongolian partner. After a short acquaintance and handover of motorcycles, we drive north out of the city. The first 80 km we drive on a good tarmac road to get used to the motorcycles. A good descent takes us about 130 km to the Amarbayasgalant monastery. This monastery is one of 7 original monasteries that have survived to this day. We spend the night in a yurt camp.",
        mongoliaTourP4: "Day 3 Squad Amarbayasgalant We start the first 40 km off-road. Then along the tar road 60 km around the city of Erdenet to our goal for the day — the village of Unit. Towards evening we reach Unit through a pass on a good slope. On today’s stage, we can immerse ourselves in the typical daily life of the Mongols. We drive past yaks, yurts and meet nomads. We spend the night in a yurt camp.",
        mongoliaTourP5: "Part 4 of the day — Selenga River Today the route leads towards Lake Khubsugul. The landscape today is said to be similar to South Africa. We drive along a good natural road along the Selenga River, Mongolia’s third-largest river. Picnic by the river, overnight in a tent.",
        mongoliaTourP6: "Day 5 and 6 Selenga River — Lake Khubsugul Today we are driving along the Selenga River to Northern Mongolia. Our goal is Lake Khubsugul, to which we arrive via Murun in the late afternoon. Today is our first day of rest and we have the opportunity to swim in the lake or rent a boat. We spend the night in a yurt camp.",
        mongoliaTourP7: "Day 7 Lake Khovsgul — Tavan-Gol We are heading south again. Today’s shorter stage will take us to Tavan-Gol, where we spend the night in a yurt camp.",
        mongoliaTourP8: "Day 8 Tavan Gol — Tavan Go River Lounge In the next largest city, Murine, we make a short stop to restock. We drive first south and then back east to Ulaanbaatar. The arrival point is Tavan Gol River Lounge. Here, five rivers meet in one place. This is an interesting and beautiful area. We will drive along the river and, perhaps, have time to go fishing or boating.",
        mongoliaTourP9: "Day 9 Tavan Gol - Horgon National Park After about 150 km of trails, we will have a picnic. In the late afternoon, we will arrive at our destination in the Horgon National Park. What's special about this national park is the young volcanic mountain that erupted 8000 years ago and the Weissensee (White Lake).",
        mongoliaTourP10: "Day 10 Horgon National Park - Zencher Tsenkher Hot Springs is located southwest of Lake Ugii in a beautiful place between the steppes and wooded hills at the foot of the Khangai Mountains. On this varied journey, we sometimes cross small streams and rivers.",
        mongoliaTourP11: "Day 11 Zencher (rest day) Today we embark on a day trip to the valley that will leave a lasting impression on everyone. Riding a motorcycle through green pastures, along streams, through forests - and the nomads continue to wave at us. If you wish, you can stop at a yurt camp and pamper yourself with a massage and hot spring water.",
        mongoliaTourP12: "Day 12 Zencher - Uurtiin Tohoy Today's route of about 120 km to our day destination at Curtain Tohoy will be interesting. We pass small mountains, wide valleys and shallow running waters. A paradise for every off-road driver - you feel like unlimited freedom.",
        mongoliaTourP13: "Day 13 Uurtiin Tohoy - Hogno Haan Early in the morning, we head to Erdene Zuu monastery. It was the first Buddhist monastery in Mongolia. Further east we reach the foothills of the Gobi Desert. Our camp is located at the foot of granite rock with a magnificent view. A few kilometres from the hotel there is a magical landscape of sand dunes where you can let off some steam in the afternoon.",
        mongoliaTourP14: "Day 14 and 15 Hogno Khaan - Ulan Bator We reach our final destination Ulaanbaatar around noon on a good tarmac road. The day is free. In the early evening, we drive to the folklore centre, where folk dances, folk music, and mystical singing of the larynx are performed, and at the end of our trip, we enjoy Mongolian cuisine for the last time.",
        // Tien Shan tour
        tienShanTourP1: "Discover the most beautiful regions of Kyrgyzstan by motorcycle in two weeks.",
        tienShanTourP2: "Day 1 Arrival in Osh and test drive. Upon arrival in Osh and after a few hours of rest at the hotel, we get to know motorcycles on a short tour. We will spend the night in Osh.",
        tienShanTourP3: "Day 2 Excursion to Lake Papan with a travel card. Today's day tour will take us first to Lake Papan, Osh reservoir. We drive on gravel dirt roads through a green valley and then along with one of the many passes south of the city. On a well-developed road from China and Tajikistan, in the afternoon we return to our hotel in Osh.",
        tienShanTourP4: "Day 3 Osh via Osgon to Arslanbob Today we are the first on the main road from Osh to Bishkek before reaching the intersection with Arslanbob. This village is located in the largest walnut forest in the world. From our idyllic family, we can take a walk to the waterfall in the evening.",
        tienShanTourP5: "Day 4 To Toktogul lake After a lovely breakfast on the veranda overlooking the mountains, we say goodbye to our friendly hosts. Our goal for the day is a hotel right on the huge Toktogul reservoir. Its warm temperature invites you to take a bath.",
        tienShanTourP6: "Day 5 Transfer to Kyzyl-Oy. Having conquered the Alabel pass with a height of 3400 m, we admire the vastness of the Suusamir plateau. From there we will drive to Kyzyl-Oy to the guest house.",
        tienShanTourP7: "Day 6 Continue to Kochkor. Today's route runs from Kyzyl-Oy to Kochkor. If you wish, you can go to the old uranium mine in the city of Ming Kush. This remote location is especially useful for photographers.",
        tienShanTourP8: "Day 7 Today is a day of rest. Who wants to visit the Kyrgyz carpet production. These felt carpets, called shyrdak, are mainly made at home in the area.",
        tienShanTourP9: "If you don't want to miss out on a motorcycle ride, you can head to nearby Issyk-Kul, the world's second-largest freshwater source.",
        tienShanTourP10: "Day 8 To Naryn Early in the morning we leave the beautiful living room and set off for Naryn. We make a useful detour and follow the Naryn River through secluded valleys and gorges. The Jalpak pass 3300 m high invites you to a picnic!",
        tienShanTourP11: "Day 9 Songkol Lake, the 'pearl' of Kyrgyzstan. On this day we are going to Songkol. This wonderful lake is located on a giant plateau at an altitude of 3000 m above sea level. M., Where Kyrgyz shepherds graze their flocks in the summer months. The nights here are mostly cold and clear with stars, it is worth looking at the sky. We spend the night in comfortable yurts.",
        tienShanTourP12: "Day 10 Return to Naryn. On a different, but no less exciting route, we return to Naryn, where the day before yesterday's comfortable rooms is located.",
        tienShanTourP13: "Day 11 To the caravanserai Tash-Rabat On a good road and through a valley with many marmots, we get to Tash-Rabat, an old caravan stop at an altitude of 3000 m above sea level. We spend the night in a cosy yurt. Our host family heats up the sauna for us.",
        tienShanTourP14: "Day 12: Trekking overlooking the Naryn Valley. Today, the landscape, colours and mountain ranges change almost every hour! The highlight is the Kulak-Ashuu pass with a height of 3400 m.",
        tienShanTourP15: "We are located in the centre of the Tien Shan. This mountain range is on the border with China and gave the name to our tour. Today's stage ends in Kazarman, a gold mining town. We can shower again.",
        tienShanTourP16: "Day 13 Through the Kaldam pass to Osh The way back to Osh is long but varied. On the Kaldam Pass, 3062 meters high, snow often remains on the side of the road. We are looking forward to a comfortable hotel in Osh and a great dinner.",
        tienShanTourP17: "14 -15 day Osh and departure We spend the last day of the tour in Osh. We have time to visit the bazaar or city tour and then celebrate a successful tour. The next morning we will be taken to the airport.",
        // Tosor tour
        tosorTourP1: "Discover the most beautiful regions of Kyrgyzstan by motorcycle in two weeks. With trips through difficult terrain.",
        tosorTourP2: "Day 1 Arrival in Osh After the flight, you land in Osh, the second largest city in Kyrgyzstan. You will be picked up and you can relax for a few hours in our hotel. After lunch, we will take a short excursion outside the city to get acquainted with motorcycles. We will spend the night in Osh.",
        tosorTourP3: "Day 2 Drive to Lake Papan and the first transfer. A day tour (about 150 km) will take us to Lake Papan, Osh reservoir. We drive on gravel dirt roads through a green valley and through one of the many passes south of the city. We return along a well-developed road. We will spend the night in Osh.",
        tosorTourP4: "Day 3 Through the Kaldam pass towards Kazarman Our goal today is Kazarman, a gold rush city in central Kyrgyzstan. We choose roads with low traffic and cross the Kaldam pass with a height of 3000 m. We spend the night in a guest house with a Kyrgyz family.",
        tosorTourP5: "Day 4 Pass to the caravanserai Tash-Rabat Today the program includes two passes with a height of more than 3000 m. We enjoy the vastness and solitude of Kyrgyzstan and look at the Naryn valley. We drive along steep mountain roads, cross dry rivers and see herds of grazing sheep and yaks. Our yurt camp is located in close proximity to the caravanserai in Tash-Rabat.",
        tosorTourP6: "Day 5  F AHRT to Chatyr-Kul lake and Naryn. We make a detour to Naryn, a university town at an altitude of 2000 m, along the Chinese border to Chatyr-Kul Lake. Enduro riding on this bumpy, adventurous slope is a lot of fun. After 210 km we will have a shower and a wonderful dinner in Naryn.",
        tosorTourP7: "Day 6 Through the Tosor pass to the Issyk-Kul lake Today’s trip will take us along the Naryn River. We cross wide valleys, narrow and steep gorges and pass the 3800 m high Tosor pass, which gave the name to this journey. This unsafe route ends at Lake Issyk-Kul. It is ten times the size of Lake Constance and invites us to cool off in crystal clear waters. We will spend the night in a beautiful hostel right on the shore of the lake.",
        tosorTourP8: "Day 7 Continue to Kochkor. After the last difficult days, we relaxed a bit today. Our stage is Kochkor, famous for the production of Kyrgyz felt carpets.",
        tosorTourP9: "Day 8 Through the pass Karakul to Kyzyl-Oy The landscape of Kyrgyzstan is extremely diverse. After almost every turn, we see a new fantastic landscape. This is especially true for today’s scene. He takes us through the rarely visited pass Karakul 3400 m high to Kyzyl-Oi, located on a wild mountain river. There we enjoy Kyrgyz family hospitality.",
        tosorTourP10: "Day 9 Day tour or day of rest in Kyzyl-Oy Today is a good day for enduro riders who love steep slopes. The steep and rocky mountain trail requires maximum concentration and good driving skills from us. This one-day tour takes place in a completely deserted area. Those who prefer to relax on this day can stay in Kyzyl-Oy.",
        tosorTourP11: "Day 10 To Songkol Lake Lake Songkol is located on a huge plateau at an altitude of 3000 m and is considered the pearl of Kyrgyzstan. We reach the yurt camp right by the lake around noon. So we have plenty of time to enjoy this idyllic place and watch the shepherds walk.",
        tosorTourP12: "Day 11 Along the northern route to Kazarman. We go to Kazarman again, but this time along the northern route and enjoy a fantastic view of the Naryn valley.",
        tosorTourP13: "Day 12 Drive to Gulcha Today’s trip to Gulcha will take us through Osgon and through a wonderful gorge. This gives us a lot of opportunities to ride off-piste.",
        tosorTourP14: "Day 13 Panoramic drive and return to Osh At the end of the tour, a hefty dessert awaits us today. We drive past beautiful pastures and narrow gorges, reaching an altitude of 3500 m. We stay at this altitude for a long time and enjoy the endless panorama. Overlooking the snow-capped mountains of Kichig-Alai. Then we go down to the Ak-Buura river, along which we go back to Osh.",
        tosorTourP15: "Day 14 + 15, rest day in Osh and return flight. We use the last day to visit the bazaar or just to relax after a busy excursion. We spend the evening in a good restaurant, enjoy a juicy barbecue (barbecue) and toasts for a successful and successful tour. Early the next morning we will be transferred from the hotel to the airport for our return flight home.",
        // Bartang tour
        bartangTourP1: "A difficult tour in the centre of the Pamirs. Part of the tour is the same as the Pamir tour, but technically it is much more difficult. The tour takes place in high mountains and difficulties. We are compensated for by very secluded and unspoiled areas, breathtaking mountains and rivers.",
        bartangTourP2: "Day 1 Arrival in Osh After the flight, you land in Osh, the second-largest city in Kyrgyzstan. You will be picked up and you can relax for a few hours in our hotel. After lunch, we will take a short excursion outside the city to get acquainted with motorcycles. We will spend the night in Osh.",
        bartangTourP3: "Day 2 Transfer to Sary-Tash. A trip to Sary-Tash will take us along the Ak Bura river to a wild and romantic valley. Then continue along the fantastic panoramic road at an altitude of 3000 m to the active coal mine. We climb through a narrow gorge, cross two more passes with a height of 3500 m and get to Chon Alai (big valley), where we spend the night in Sary-Tash in a guest house.",
        bartangTourP4: "Day 3 To the lakes at the foot of Lenin Peak and Sary-Mogol. Weather permitting, today we will make a detour to the foot of Lenin Peak with its proud height of 7134 meters. This gives us the opportunity to get used to the height. In bad weather, we make this detour at the end of our tour. We will spend the night in a yurt in Sary-Mogul.",
        bartangTourP5: "Day 4 Crossing the border with Tajikistan, Karakul lake Today we are crossing the border with Tajikistan. The Kyrgyz customs post is located at the entrance to the Kyzyl-Art pass, and the Tajik customs post is about 30 km away, shortly after the top of the pass. No one seems to be in charge of the intermediate route, the road is neglected, but ideal for good motorcyclists. We are now at an altitude of almost 4000 m. Our family is located right on the shores of Lake Karakul.",
        bartangTourP6: "Day 5 Pamir plateau We are going west along the Pamir Highway. In about an hour we turn off to nowhere. There is no road here, only a 5 km wide valley with several lanes. This is our way to the Bartang Valley.",
        bartangTourP7: "Day 6 At Roshorw in the Bartang Valley To get to the Bartang Valley, you need to descend into the valley along narrow, fun and gentle gravel roads. Our support mechanism succeeds. This section requires maximum concentration without mistakes. As soon as we reached the Bartang Valley, to our surprise, we saw small villages again. I wonder how and with what to survive here. We pitch our tents in an idyllic location by the river.",
        bartangTourP8: "Day 7 Transfer to Khorog Moving to Khorog, the capital of Gorno Badakhshan, as this part of Tajikistan is called, will take us along the Bartang River. It floods the street regularly. Wet feet are guaranteed. Fortunately, it is warmer here than it was the day before, and we can count on a comfortable hotel bed, warm showers and a wonderful civilized dinner.",
        bartangTourP9: "Day 8 To Lake Turumtai at an altitude of 4200 m. From Khorog, there are three ways to get to the east: the direct route M41, the Wakhan valley in the south or between them, the so-called Karl-Marx-Straße. We choose the latter option and enjoy the white mountain giants, of which Marx Peak is the most famous and highest. We set up tents on Lake Turumtai. Beautiful scenery and starry nights make this camp special.",
        bartangTourP10: "Day 9 Along the Pamir highway to Khorog We return to the hotel in Khorog along the M41 highway, have a good rest and gain strength for the next adventure.",
        bartangTourP11: "Day 10 Through the Wakhan Valley to Bibi Fatima Our further journey will take us through the Wakhan Valley, along the border with Afghanistan to Bibi Fatima. A separate ethnic group lives in the Wakhan Valley. These people differ from Tajiks not only in their native language but also outwardly and culturally. At Bibi Fatima, we have a beautiful view of the Wakhan Valley. Of course, we also use the hot spring, which is idyllically located in the rock crypt and invites you to take a wonderful bath with water with a temperature of over 40 degrees. We will spend the night in a guest house in Bibi Fatima.",
        bartangTourP12: "Day 11 To Bulunkul Lake On the way to the Pamir plateau, the air becomes thinner and thinner, but the view becomes clearer and clearer. Wild camels, yaks and a few shepherds aside, we are alone in this solitude. We spend the night in a guest house on Lake Bulunkul, we manage to visit hot springs and a 'mini-geyser'.",
        bartangTourP13: "Day 12 Transfer to Murghab. We are again on the Pamir Highway or M41. The road was built by the Soviet Union along the Afghan and Chinese borders. It is still partially used by Chinese vehicles today. In Murghab, a former military base, we spend the night in a hotel, and in addition to hot springs, we can take a shower.",
        bartangTourP14: "Day 13 Return to Osh The way back goes through the Ak-Baital pass. At an altitude of 4655 m, this is the highest pass in the Pamirs. Then we cross the last pass of the tour: Kyzyl-Art 4200 m high. Here we reach the border with Kyrgyzstan and drive back to Osh via Sary-Tash.",
        bartangTourP15: "Day 14 + 15 Rest day in Osh, return flight On our last day, there is still time to visit the bazaar or just relax after a busy excursion. We will spend the evening in a good restaurant, taste a juicy shish kebab (shashlik) and fry a successful and successful tour. Early the next morning we will be transferred from the hotel to the airport for our return flight home.",
        // Naryn tour
        narynTourP1: "Drive through some of the most beautiful regions of Kyrgyzstan on a motorcycle in one week.",
        narynTourP2: "1. Arrival in Osh Kyrgyzstan After the flight, you land in Osh, the second-largest city in Kyrgyzstan. You will be picked up and you can relax for a few hours in our hotel. After lunch, we will take a short excursion outside the city to get acquainted with motorcycles. We will spend the night in Osh.",
        narynTourP3: "Day 2 Transfer to Toktogul lake. Today we are on the main road from Osh to Bishkek. First, we cross the fertile Fergana Depression, and then we are pleased with the countless bends of the Naryn River. Our goal for the day is a hotel right on the huge Toktogul reservoir. In the summer, it invites you to swim with its warm temperature.",
        narynTourP4: "Day 3 Along the Naryn river to Kyzyl-Oy After we have conquered the Alabel pass with a height of 3400 m, we admire the vastness of the Suusamir plateau, and the most daring of us taste 'Kumiz', fermented mare's milk, which is offered on the bike along the way. On a good gravel road, we drive along the picturesque Kökemeren River towards Kyzyl-Oy, to a Kyrgyz family who provides us with their home for the night.",
        narynTourP5: "Day 4 Ascent to Songkol Lake Our path lies through beautiful hills, forests and meadows. We pass a coal mine and soon see the beautiful Songkol Lake from afar. It sits on a giant plateau 3,000 meters above sea level, where Kyrgyz shepherds graze their flocks during the summer months. The nights are mostly cold and clear with stars: it is worth looking up to the sky. We spend the night in comfortable yurts. If you're lucky, you can eat freshly caught fried fish from the lake for dinner.",
        narynTourP6: "Day 5 To the caravanserai in Tash-Rabat Our destination today is the caravanserai in Tash Rabat. The road winds down the mountain in countless serpentines. We replenish stocks in Naryn. After a fantastic ride accompanied by 4000m mountains on both sides and through a valley full of marmots, we arrive at Tash Rabat, an old caravan site at 3000m above sea level. A local shower can be found in the bathhouse (local sauna). We spend the night in a cosy yurt.",
        narynTourP7: "Day 6 Crossing two passes to Kazarman Today, the landscape, colours and mountain ranges change almost every hour! The highlights of our trip are the two Kulak-Ashuu passes at 3400 m and the Kayun pass at 2930 m. Today's stage ends in Kazarman, a gold mining town.",
        narynTourP8: "Day 7 Through the Kaldam pass and back to Osh Return trip to Osh is long but varied. On the 3062 m high Kaldam Pass, snow larvae often lie along the road until June. And then we look forward to the already familiar hotel in Osh and the last wonderful dinner in Kyrgyzstan.",
        narynTourP9: "Day 8 Osh and departure Early the next morning, we are driven to the airport to fly home to the west.",
        // Repair shop
        repairShopPH1: "quality and reliable service",
        serviceDescription: "service description",
        repairShopP1: "Our company consists exclusively of professionals. We, like you, are very fond of motorcycles and off-road vehicles, and we also know many of the subtleties of its work. Like-minded people gathered under our roof, for us repairing or improving transport is not a daily routine work, but a favourite and interesting activity. You can be sure that all bolts and working parts will be of high quality and reliable. On the contrary, we will fix the faulty elements and it will work like new for further operation. We will not wind up frantic costs for repairs and do not come up with additional malfunctions. We work not for quantity but for quality, so most of our clients come to us on the recommendation of family and friends. If your transport breaks down, our service doors are always open for you.",
        selfServing: "self-serving",
        nteRepairShop: "nte repair shop",
        oilChange: "oil change",
        tiresChange: "tires change",
        tigWelding: "tig welding",
        mmaWelding: "mma welding",
        // About us
        aboutUsP1: "Company nature travel and engineering have over 20 years of experience in the marketplace. We are providing reliable, safe, quality service. The only place where you can fix or upgrade your motorcycle, car, any kind of vehicle, trusting the best mechanics in the field. Also, you can easily rent a car or motorcycle.",
        aboutUsP2: "We cooperate with Swiss tourist company Alatoo-Moto which provides an amazing, adventure tours over Middle Asia",
        aboutUsP3: "Our target",
        aboutUsP4: "Create comfort",
        aboutUsP5: "Give an unforgettable feeling",
        aboutUsP6: "Ensure safety",
        aboutUsP7: "To make you feel the whole nature of Kyrgyzstan",
        aboutUsP8: "Reach worthy heights",
        ourTeam: "our team",
        aboutUsP9: "Shohrux",
        aboutUsP10: "(Manager)",
        aboutUsP11: "Kamil",
        aboutUsP12: "(Mechanic)",
        aboutUsP13: "Kolya",
        aboutUsP14: " (Mechanic)",
        aboutUsP15: "Nafisa",
        aboutUsP16: "(chief accountant)",
        // Contacts
        contactDescription: "contact description",
        contactsAddress:`Address: Osh, Kyrgyzstan
Besh Kapa Street-101, 14
Osh postal code – 723500
Tel: +996555550146
WhatsApp: +996556356666
Email: naturetravel.osh@gmail.com`,
        // Tires
        description: "DESCRIPTION",
        tiresShinko: "shinko",
        tiresMitas: "mitas",
        // Housing
        housingP1: "24 / 7 – securety",
        housingP2: "24/7- free wi-fi",
        housingP3: "laundry",
        housingP4: "parking",
        housingP5: "bathroom",
        housingP6: "lavatory",
        housingP7: "kitchen",
        // 404
        error404: "ERROR 404",
        errorDescription: "It seems that something went wrong! The page you are requesting does not exist. It may be outdated, deleted, or an incorrect address was entered in the address bar.",
        // Save Budget
        saveBudgetP1: "Every person who wants to travel always thinks about the expenses of the trip or tour. That is, we all want to save our budget. Company Nature Travel Engineering, thinking about its customers, provides not only car or motorcycle rental, but also equipment rental for vehicle repair or tuning.",
        saveBudgetP2: "Nature Travel Engineering cooperates with many hotels in the city. If you want to get discounts on hotels, you can book a room with us. However, our company provides its rooms next to the office. Which in it you can park your vehicle or repair your car or motorcycle.",
    },
    ru: {
// Home
        aboutUs: "О нас",
        rentsSales: " Аренда-продажа",
        rents: "Аренда",
        tours: "Туры",
        contacts: "Контакты",
        offRoadCars: "Внедорожники",
        offRoadMotorcycles: "Внедорожные мотоциклы",
        tires: "Шины",
        oil: "Масло",
        menu: "Меню",
        silkWayRoadTour: "Тур по шелковому пути",
        narynTour: "Нарын тур",
        pamirTour: "Памир тур",
        tienShanTour: "Тянь Шань тур",
        kyrgyzstanMongoliaTour: "Кыргызстан-Монголия тур",
        tosorTour: "Тосор тур",
        bartangTour: "Бартанг тур",
        motorcycles: "Мотоциклы",
        repairShop: "Ремонтная мастерская",
        housing: "Жилье",
        saveBudget: "Сэкономить бюджет",
        kyrgyzstan: "Кыргызстан",
        discoverWithUs: "Узнавайте вместе с нами",
        natureTravelAndEngineering: "Путешествие на природе и инженерия",
        carRent: "Аренда авто",
        motorcycleRent: "Аренда мотоциклов",
        countriesWeVisit: "Страны, которые мы посещаем",
        aboutKyrgyzstan: "О Кыргызстане",
        aboutTajikistan: "О Таджикистане",
        aboutMongolia: "О Монголии",
        aboutChina: "О Китае",
        info: "Инфо",
        phone: "Телефон: +996555550146 ",
        addressOshKyrgyzstan: "Адрес: Ош, Кыргызстан",
        index: "Индекс: 723500",
        oilChange: "Замена масла",
        ourPartners: "Наши партнеры",
        allRightsReserved: " Copyright© 2021 Nte Все права защищены",
// About Kyrgyzstan
        aboutKyrgyzstanPH1: "Кыргызстан - горная страна в Центральной Азии. Он расположен вдоль Великого шелкового пути, древнего торгового пути между Китаем и Средиземным морем. Снежные барсы, рыси и овцы обитают в горах Тянь-Шаня, которые окружают этот караванный путь и занимают большую часть страны. На юге страны находится город Ош, история которого насчитывает более тысячи лет. Он знаменит своим огромным базаром, где когда-то останавливались купцы, следовавшие по Великому шелковому пути.",
        aboutKyrgyzstanPH2: "Кыргызстан (Общая информация)",
        aboutKyrgyzstanP1: "Расположение Кыргызстан - небольшая горная страна в центре азиатского континента, на одной широте с югом Италии, Испании, Японии, занимает территорию 198,5 тыс. Кв. Км. Общая протяженность пограничной полосы составляет 4500 км. На севере граничит с Казахстаном, на западе с Узбекистаном и Таджикистаном, а на юге с Китаем более 900 км.",
        aboutKyrgyzstanP2: "Горы занимают 90 % территории, высокие горы - 70 %, долины - 10 %. Юго - восточная часть страны расположена в районе Каракорумского шоссе и северо - западного Китая, откуда основной поток туристов приезжает в Кыргызстан и далее в Узбекистан и Казахстан.",
        aboutKyrgyzstanP3: " Столица - Бишкек (бывший Фрунзе) 1 053,915 (2020 г.) жителей. Бишкек расположен у подножия горного хребта Кыргызский Ала-Тоо в центре Чуйской долины, в 250 км от Алматы и в 600 км от Ташкента.",
        aboutKyrgyzstanP5: " Население - 6 586 600 жителей. (2020)",
        aboutKyrgyzstanP9: " Языки - кыргызский, русский.",
        aboutKyrgyzstanP10: " Религии - ислам, христианство.",
        aboutKyrgyzstanP11: " Национальная валюта - 1 сом = 100 тыин 1USD = 84,6 сома (июль 2021).",
        aboutKyrgyzstanP4: " Города - Ош (1368 054), Джалал-Абад (1 238 750), Каракол (463 900). (2020)",
        aboutKyrgyzstanP8: "Национальности - кыргызы - 60%, русские - 5%, узбеки - 14%, дунгане, казахи, таджыки, уйгуры, корейцы - 2%.",
        aboutKyrgyzstanP6: "Климат - средний: январь - 4-14 градусов ниже нуля, июль 12-37 градусов выше нуля. Климат континентальный.",
        aboutKyrgyzstanP7: "Лучшее время в пути - с мая по октябрь.",
        aboutKyrgyzstanP12: "Время - на 4 часа опережает время по Гринвичу.",
        kochkor: "Кочкор",
        kolTorLake: "Озеро Коль-Тор",
        barskoonWaterfall: "Барскоонский водопад",
        konorchekConyons: "Каньон Конорчек",
        kegeti: "Кегети",
        sonKolLakeWinter: "Озеро сон-коль зима",
// About Tajikistan
        aboutTajikistanPH1: "Таджикистан - государство в Центральной Азии, граничащее с Афганистаном, Китаем, Кыргызстаном и Узбекистаном. Горный пейзаж привлекает сюда любителей альпинизма и пеших прогулок. Фанские горы находятся недалеко от столицы Таджикистана. Их высота более 5000 метров, а на вершинах постоянно лежит снег. В природе на территории заповедника находится ледниковое озеро Искандеркуль с бирюзовой водой. Вы можете увидеть различных птиц здесь.",
        aboutTajikistanPH2: "Таджикистан (Общая информация)",
        aboutTajikistanP1: "Граница Таджикистана находится в 700 км длиной с востока на запад и 350 км длиной с севера на юг. Страна граничит на западе и севере с Узбекистаном (910 км) и Кыргызстаном (630 км); на юге с Афганистаном (1,030 км); и на восток с Китаем (430 км).",
        aboutTajikistanP2: "Столица - Душанбе 846400 (2020 г.) жителей. Город Душанбе является столицей Республики Таджикистан. Как политический и административный центр, он был перечислен на карте мира в начале XX века. Он расположен в живописной и плодородной Гиссарской долине, на высоте 750 - 930 метров над уровнем моря. С севера на юг его пересекает река Варзоб, с востока на запад - река Кофарнихон.",
        aboutTajikistanP3: "Города - Худжанд (2 658 400), Хорог (226 900), Курган-Тюбе (3 274 900). (2020)",
        aboutTajikistanP4: "Население - 9 537 645 человек. (2020)",
        aboutTajikistanP5: "Климат - средний: январь - 4-14 градусов ниже нуля, июль 12-37 градусов выше нуля. Климат континентальный.",
        aboutTajikistanP6: "Лучшее время в пути - с мая по октябрь.",
        aboutTajikistanP7: "Национальности - таджики - 84%, русские - 0,5%, узбеки - 8%, дунгане, казахи, уйгуры.",
        aboutTajikistanP8: "Языки - таджикский, русский.",
        aboutTajikistanP9: "Религии - ислам, христианство и другие.",
        aboutTajikistanP10: "Национальная валюта - сомони (TJS) 1USD = 11,39 сомони (июль 2021 г.)",
        aboutTajikistanP11: "Время - на 5 часов опережает время по Гринвичу.",
// About Mongolia
        aboutMongoliaPH1: " Монголия, страна приключений, страна степных кочевников с настоящей свободой и великой историей. Сочлененные племена монгольской нации здесь, в Средней Азии, на протяжении тысячелетий. Монголы - желанная нация гостеприимства, чтобы познакомить вас с нашим кочевым образом жизни и с гордостью поделиться с вами своей удивительной историей.",
        aboutMongoliaPH2: " Монголия (Общая информация)",
        aboutMongoliaP1: " Монголия - государство в Восточной Азии, граничащее с Россией на севере и Китаем на юге. Не имеет выхода к морю. Государство является членом практически всех структур ООН, а также некоторых структур СНГ в качестве наблюдателя. Официальный язык - монгольский с кириллицей (ранее для письма использовалась старая монгольская письменность).",
        aboutMongoliaP2: " Улаанбаатар, ранее англизированный в Улан-Батор, является столицей и самым густонаселенным городом Монголии. Муниципалитет расположен в северо-центральной части Монголии на высоте около 1300 метров (4300 футов) в долине реки Туул. Первоначально город был основан в 1639 году как буддийский монастырский центр кочевников, который 28 раз менял свое местоположение и обосновался на нынешнем месте в 1778 году.",
        aboutMongoliaP3: " Города - Эрдэнэт (86 866), Дархан (74 300). (2020)",
        aboutMongoliaP4: " Население - 3 353 470 человек. (2020)",
        aboutMongoliaP5: " Климат - средний: январь - 15, -30 градусов ниже нуля, июль 12-37 градусов выше нуля.",
        aboutMongoliaP6: " Лучшее время в пути - с мая по октябрь.",
        aboutMongoliaP7: " Национальности - монголы - 94%, казахи - 0,5% и др.",
        aboutMongoliaP8: " Языки - монгольский ",
        aboutMongoliaP9: " Религии - буддизм, ислам и др.",
        aboutMongoliaP10: " Национальная валюта - тугрик (mnt) 1USD = 2856,8 тугрик (июль 2021 г.).",
        aboutMongoliaP11: " Время - на 7-8 часов опережает время по Гринвичу.",
// About China
        aboutChinaPH1: "Китай - густонаселенная страна в Восточной Азии с разнообразным ландшафтом и топографией. Здесь есть луга, пустыни, горы, озёра, реки и побережья протяженностью более 14 тысяч км. Китай - один из древнейших культур на планете, внесший прославленный вклад во все виды искусств, литературы, архитектуры, инженерии и многое другое.",
        aboutChinaPH2: "Китай (Общая информация)",
        aboutChinaP1: "Столица страны, Пекин, славится своей современной архитектурой и древними памятниками, включая дворцовый комплекс Запретный город и площадь Тяньаньмэнь. На востоке находится мировой финансовый центр Шанхай, силуэт которого формируют бесчисленные небоскребы. Великая Китайская стена пересекает север Китая, пересекая его с востока на запад.",
        aboutChinaP2: "Столица - Пекин 21 893 095 (2020 г.) жителей. Пекин - глобальный город и один из ведущих мировых центров культуры, дипломатии и политики, бизнеса и экономики, образования, языка, науки и технологий. Это самая густонаселенная столица в мире с административной площадью 16 410,5 км². Он расположен в Северном Китае и управляется как муниципали,тет под прямым управлением Государственного совета с 16 городскими, пригородными и сельскими округами.",
        aboutChinaP3: "Города - Шанхай (24 237 800), Гуанчжоу (13 154 200), Шэньчжэнь (13 026 600). (2020)",
        aboutChinaP4: "Население - 1 411 778 724 человека. (2020)",
        aboutChinaP5: "Климат изменчив.",
        aboutChinaP6: "Лучшее время в пути - с мая по октябрь.",
        aboutChinaP11: "Время - на 8 часов опережает время по Гринвичу",
        aboutChinaP7: "Национальности - ханского Китая - 91%, Чжуан - 1,27%, уйгуры - 0,75%, узбеки, кыргызы,",
        aboutChinaP8: "Языки - китайский, уйгурский, монгольский, тибетский.",
        aboutChinaP9: "Религии - 75% нерелигиозные, 18% буддизм, 5,2% христианство и другие.",
        aboutChinaP10: "Национальная валюта - юань (CNY) 1USD = 6,47 Renminbi (июль 2021).",
//Off-road motorcycles
        offRoadMotorcyclesPH1: "качество и надежность начинаются с нас.",
        offRoadMotorcyclesCarsPH2: "Почувствуй экстрим",
        offRoadMotorcyclesP1: "Туристическая модель эндуро Yamaha XTZ 660 Tenere появилась в 1991 году, заменив устаревшую Yamaha XT600Z Tenere. Yamaha XTZ 660 Tenere базировался на 1-цилиндровом двигателе объемом 660 куб. См с жидкостным охлаждением. см, доставляя 48 лошадиных сил. Другие особенности Yamaha XTZ660 Tenere включают стальную раму, усовершенствованную длинноходную подвеску в виде телескопической вилки 43 мм и регулируемый (предварительная нагрузка + отскок) моноамортизатор, дисковые тормоза спереди и сзади, 20-литровый топливный бак, и всего 195 кг снаряженной массы.",
        offRoadMotorcyclesP2: "Без сомнения, это один из самых универсальных мотоциклов из когда-либо созданных. Он прочный. Это выглядит здорово. XT600 оснащен надежным 4-тактным двигателем объемом 595 куб. См с воздушным охлаждением. 4-клапанная система и продуманный карбюраторный блок YDIS придают байку высокий крутящий момент и плавное, мощное ускорение в любом частотном диапазоне, что дает ему преимущество как на дороге, так и вне ее. Электрический стартер позволяет запускать мотоцикл одним нажатием кнопки. Прочная передняя подвеска включает в себя все изменения размеров, внесенные в 1996 году для повышения устойчивости мотоцикла при движении на высокой скорости.",
//Off-road cars
        offRoadCarsPH1: "качество и надежность начинаются с нас.",
        offRoadCarsP1: "Тойота Ленд Крузер 105",
        offRoadCarsP2: "Автомобиль очень комфортный, способен преодолевать такие препятствия и места, где, казалось бы, проехать уже невозможно. Неубитые в прямом смысле слова «неразрезные» мосты придают автомобилю ощущение наличия «независимой» подвески. Плавный при разгоне и стабильный на дороге. Иногда кажется, что он очень медленный, но, вспомнив, что это не гоночная машина, а внедорожник и его вес огромен, успокаиваешься и чувствуешь себя уверенно. Особенно если речь идет о проселочной дороге и проселочной дороге.",
        offRoadCarsP3: "Тойота Ленд Крузер 76",
        offRoadCarsP4:`Тойота Ленд Крузер 76
Объем двигателя: 4.2
Тип топлива: Дизель
Трансмиссия: Механическая
Привод: Полный (4WD)
Расход топлива: (городской) л / 100 км
19,9л Расход топлива: (загородный)
10,2л
Расход топлива: (смешанный) 11.9л
Объем топливного бака: 100л`,
        offRoadCarsP5: "Тойота Ленд Крузер 78",
        offRoadCarsP6:`Тойота Ленд Крузер 78
Объем двигателя: 4.2
Тип топлива: Дизель
Трансмиссия: Механическая
Привод: Полный (4WD)
Расход топлива: (городской) л / 100 км
19,9л Расход топлива: (загородный)
10,2л
Расход топлива: (смешанный) 11.9л
Объем топливного бака: 100л`,
        offRoadCarsP7: " Тойота рав4",
        offRoadCarsP8:`Тойота рав4
Объем двигателя: 2.0
Тип топлива: Бензин
Трансмиссия: Механическая
Привод: Полный (4WD)
Расход топлива: (городской) л / 100 км
12л Расход топлива: (загородный)
9л
Расход топлива: (смешанный) 10л
Объем топливного бака: 70л`,
        offRoadCarsP9: "Митсубиси Монтеро Спорт",
        offRoadCarsP10:`Митсубиси Монтеро Спорт
Объем двигателя: 3.5
Тип топлива: Бензин
Трансмиссия: Автоматический
Привод: Полный (4WD)
Расход топлива: (городской) л / 100 км
15л Расход топлива: (загородный)
11л
Расход топлива: (смешанный) 13л
Объем топливного бака: 90л`,
// Tours
        uniqueSensationsAwaitYou: "вас ждут неповторимые ощущения",
        silkRoadTour: "Шелковый путь тур (май 2022)",
        silkRoadTour2: "02 май - 01 июнь 2022",
        pamirTour: "Памир тур (май / июнь 2022)",
        pamirTour2: "29 май - 11 июнь 2022",
        mongoliaTour: "Монголия тур 2022",
        mongoliaTour2: "Июль 10 - август 1, 2022",
        narynTour: "Нарын тур (Июль 2022)",
        narynTour2: "03 - 09 Июль 2022",
        bartangTour: "Бартанг тур 2022",
        bartangTour2: "04 - 17 SEPTEMBER 2022",
        tosorTour: "Тосор тур (август 2022)",
        tosorTour2: "14 - 27 август 2022",
        tyanShanTour: "Тянь-Шань тур (июнь 2022)",
        tyanShanTour2: "05 - 18 июнь 2022",
        learnMore: "Узнать больше",
//Silk road tour
        silkRoadTourP1: "Из Швейцарии в Кыргызстан на мотоцикле. По Великому шелковому пути. Прокатитесь на собственном мотоцикле (организованный обратный транспорт с экспедитором) или на Yamaha XT660Z вместе с нами. Резервный мотоцикл (на случай поломки) перевозится на пикапе вместе с багажом позади группы.",
        travelDescription: "ОПИСАНИЕ ПУТЕШЕСТВИЯ",
        silkRoadTourP2: "Швейцария - Италия - Греция 4 дня | 1580 км. Подобно Марко Поло, мы отправляемся в путешествие по Италии по Великому шелковому пути. В Анконе мы сядем на паром, который доставит нас в Игуменицу в Греции. В 8 часов утра причаливаем к Греции и, отдохнув, едем через Салоники в Кавалу и ночуем в уютном отеле.",
        silkRoadTourP3: "Турция 7 дней | 2460 км Уже на следующий день мы пересекаем южную часть Мраморного моря в Чанаккале и уже в Азии. Мы проедем всю Турцию и посетим, среди прочего, караван-сарай в Султан-Хани, Каппадокия, с его всемирно известными пещерными жилищами и церквями. Есть также возможность принять участие в впечатляющей поездке на воздушном шаре в Гереме. Во время нашего путешествия на восток мы увидим Анатолийское плато с его самой красивой стороны. Ночуем в хороших отелях.",
        silkRoadTourP4: "Иран 10 дней | 2780 км Тегеран, столица Ирана, обойдет большую территорию на юге. Для этого мы познакомимся с восточными сказочными городами, такими как Исфахан, Йезд и Мешхед во время нашей 10-дневной поездки в Иран. Люди очень открытые, дружелюбные и отзывчивые.",
        silkRoadTourP5: "Туркменистан 3 дня | 760 км после столицы Туркменистана Ашхабада с его великолепными зданиями и неподходящими водоемами мы посетим газовый кратер по пути в Хиву - посреди пустыни. Чтобы по-настоящему увидеть зрелище, мы стараемся переночевать поблизости, потому что эта «адская дыра» производит настоящее впечатление только в темноте.",
        silkRoadTourP6: "Узбекистан 6 дней | 1080 км. В Узбекистане мы посетим города Хива, Бухара и Самарканд, жемчужины Шелкового пути. В Бухаре немецкоязычный узбек расскажет нам о достопримечательностях этого старого города с его внушительными зданиями и минаретами. Мы проведем ночь в традиционном бутик-отеле в центре исторического Старого города и в гостевом доме в Самарканде, известном своим красивым садом и обильным завтраком.",
        silkRoadTourP7: "Узбекистан - Кыргызстан 1 день | 410 км. Наш заключительный этап ведет нас из столицы Узбекистана Ташкента по хорошо развитому перевалу в Ферганскую долину и сразу после границы с Кыргызстаном в Ош. Мы используем день перед вылетом домой, чтобы посетить большой базар в Оше и посмотреть город. Накануне отъезда мы снова сядем с комфортом, попробуем сочный шашлык (шашлык) с холодным пивом и расскажем друг другу о захватывающем путешествии, которое ждет нас впереди и запомнится на всю жизнь!",
//Pamir tour
        pamirTourP1: "Очень разнообразный тур по низинам, речным долинам и высоким горам (включая 1 неделю на высоте 4000 м). Катание по безлюдным местам в высоких горах.",
        pamirTourP2: "День 1 Прибытие в Ош. После полета вы приземлитесь в Оше, втором по величине городе Кыргызстана. Вас встретят и вы сможете отдохнуть несколько часов в нашем отеле. После обеда мы совершим небольшую экскурсию за город, чтобы познакомиться с мотоциклами. Ночуем в Оше.",
        pamirTourP3: "День 2 Однодневная поездка на озеро Папан с пропуском. Сегодняшний однодневный тур (около 150 км) сначала приведет нас к озеру Папан, Ошскому водохранилищу. Мы едем по гравийным грунтовым дорогам через зеленую долину, а затем по одному из многочисленных перевалов к югу от города. Во второй половине дня возвращение в Ош по хорошо развитой дороге.",
        pamirTourP4: "День 3 поездка по Ферганской долине в Кыргызстане в Худжанд в Таджикистане. Сегодняшний диск длинный и пыльный. Но нас вознаграждают множеством новых неизведанных впечатлений, которые заставляют нас забыть обо всех усилиях. А вечером в нашем прекрасном отеле пиво вкуснее.",
        pamirTourP5: "День 4 Переезд на перевал в Душанбе. Пока наша машина сопровождения проезжает устрашающий Анзобский тоннель по дороге в Душанбе, мы пересекаем перевал высотой 3000 метров. Поскольку весь транспорт проходит через темный и мокрый туннель, мы получаем впечатляющий проход. Ночуем в Душанбе.",
        pamirTourP6: "День 5 Калайкум, отправная точка Памира. Добраться до Калайкума можно двумя способами: либо по зимнему маршруту на юге Таджикистана, либо по трассе М41 через горы, по ухабистым дорогам, частично изрезанным ручьями. По возможности выбираем второй, более сложный, но тем более привлекательный маршрут. Мы живем в семье. У нас есть возможность познакомиться с повседневной жизнью таджикской семьи и насладиться их щедрым гостеприимством.",
        pamirTourP7: "День 6 Переезд в Хорог. Могучая река Панш ведет нас в Хорог. Река и дорога петляют в завораживающем скалистом ущелье. На другом берегу реки почти каждое зеленое пятно используется как место для афганской деревни. Хорог, университетский городок посреди Памира, предлагает нам уютный отель и хороший ужин.",
        pamirTourP8: "День 7 Продолжение пути в Биби Фатима. Наше путешествие продолжается через Ваханскую долину вдоль афганской границы до Биби Фатима. Отдельная этническая группа проживает в долине вакханок. Эти люди отличаются от таджиков не только родным языком, но и внешне, и культурно. В Биби Фатима у нас есть прекрасный вид на Ваханскую долину. Конечно, мы также пользуемся горячим источником, который идиллически расположен в скальном склепе и приглашает принять чудесную ванну с водой с температурой более 40 градусов. Ночуем в Биби Фатима.",
        pamirTourP9: "День 8 Переезд на плато Памир на высоте 4000 м.По пути к плато Памир воздух становится все тоньше и тоньше, но вид становится яснее. Если не считать диких верблюдов, яков и нескольких пастухов, мы одни в этом уединении. Ночуем в гостевом доме на озере Булункуль, успеваем посетить горячие источники и «мини-гейзер.",
        pamirTourP10: "День 9 + 10 По Памирскому тракту.Теперь мы на легендарном Памирском тракте или М41. Дорога была построена Советским Союзом вдоль афганской и китайской границ. Он и сегодня частично используется китайскими автомобилями. Мы пересекаем четыре перевала на высоте более 4000 м. Перевал Ак-Байтал высотой 4655 м - самый высокий из них. В Мургабе, бывшем угольном городке, мы ночуем в отеле и, помимо горячих источников, можем снова принять душ на несколько дней.",
        pamirTourP11: "11 + 12 дней к озеру Каракуль и через перевал Кызыл-Арт в Кыргызстан Наше дальнейшее путешествие приведет нас к живописно расположенному озеру Каракуль. Ночуем в Каракуле прямо на озере. На следующий день пересекаем последний перевал Кызыл-Арт высотой 4200 м. Вот мы и подходим к границе с Кыргызстаном.",
        pamirTourP12: "День 13 Базовый лагерь Пик Ленина, возвращение в Ош Перед возвращением в Ош мы совершаем объезд в базовый лагерь пика Ленина на высоте более 3500 м и в хорошую погоду наслаждаемся фантастическим видом на эту гигантскую гору.",
        pamirTourP13: "14-15 день Ош и путешествие домой Последний день нашего тура по Памиру принадлежит городу Ош. У нас достаточно времени на экскурсию по городу или посещение базара. Рано утром следующего дня нас отвезут из отеля в аэропорт, откуда мы отправимся домой.",
//Mongolia tour
        mongoliaTourP1: "Мы едем на Тенерифе через Монжелли. Узнаем огромную страну, впечатляющие реки и озера, бескрайние просторы.",
        mongoliaTourP2: "День 1 Прибытие в Улан-Батор. Летим в Улан-Батор через Берлин или Франкфурт. После поездки в отель мы начнем с экскурсии по городу с посещением монастыря Гандан. Мы продолжим путь к Цонджин Болдог, в 57 км к востоку от Улан-Батора, где находится самый большой конный памятник в мире. Затем мы возвращаемся в отель и наслаждаемся типичным монгольским ужином.",
        mongoliaTourP3: "День 2 Улан-Батор - Амарбаясгалант После завтрака встречаемся с нашим монгольским партнером. После непродолжительного знакомства и передачи мотоциклов мы выезжаем на север за город. Первые 80 км проезжаем по хорошей асфальтированной дороге, чтобы привыкнуть к мотоциклам. Хороший спуск приведет нас примерно в 130 км к монастырю Амарбаясгалант. Этот монастырь - один из 7 оригинальных монастырей, сохранившихся до наших дней. Ночуем в юрточном лагере.",
        mongoliaTourP4: "День 3 Команда Амарбаясгалант Стартуем первые 40 км бездорожья. Далее по асфальтовой дороге 60 км вокруг города Эрдэнэт до нашей цели на день - села Юнит. Ближе к вечеру добираемся до Юнита через перевал на хорошем спуске. На сегодняшней сцене мы можем погрузиться в типичную повседневную жизнь монголов. Проезжаем мимо яков, юрт и встречаем кочевников. Ночуем в юрточном лагере.",
        mongoliaTourP5: "Часть 4 дня - река Селенга. Сегодня маршрут ведет к озеру Хубсугул. Говорят, что сегодняшний ландшафт похож на Южную Африку. Мы едем по хорошей естественной дороге вдоль реки Селенга, третьей по величине реки Монголии. Пикник у реки, ночевка в палатке.",
        mongoliaTourP6: "День 5 и 6 Река Селенга - озеро Хубсугул. Сегодня едем по реке Селенга в Северную Монголию. Наша цель - озеро Хубсугул, к которому мы прибудем через Мурун ближе к вечеру. Сегодня наш первый день отдыха, и у нас есть возможность искупаться в озере или арендовать лодку. Ночуем в юрточном лагере.",
        mongoliaTourP7: "День 7 Озеро Хубсугул - Таван-Гол. Мы снова идем на юг. Сегодняшний более короткий этап приведет нас на Таван-Гол, где мы ночуем в юрточном лагере.",
        mongoliaTourP8: "День 8 Таван-Гол - Зал Tavan Go River. В следующем по величине городе, Мурине, мы делаем небольшую остановку, чтобы пополнить запасы. Мы едем сначала на юг, а затем обратно на восток в Улан-Батор. Пункт прибытия - зал ожидания на реке Таван-Гол. Здесь пять рек встречаются в одном месте. Это интересная и красивая местность. Мы проедем по реке и, возможно, успеем порыбачить или покататься на лодке.",
        mongoliaTourP9: "День 9 Таван-Гол - Национальный парк Хоргон. Примерно через 150 км троп у нас будет пикник. Ближе к вечеру мы прибудем в пункт назначения в национальном парке Хоргон. Что особенного в этом национальном парке, так это молодая вулканическая гора, извергавшаяся 8000 лет назад, и Вайсензее (Белое озеро).",
        mongoliaTourP10: "День 10 Национальный парк Хоргон - Зенчер. Горячие источники Ценхер расположены к юго-западу от озера Угии в красивом месте между степями и лесистыми холмами у подножия Хангайских гор. В этом разнообразном путешествии мы иногда пересекаем небольшие ручьи и реки.",
        mongoliaTourP11: "День 11 Зенчер (день отдыха). Сегодня мы отправляемся в однодневную поездку в долину, которая произведет на всех неизгладимое впечатление. Едем на мотоцикле по зеленым пастбищам, вдоль ручьев, через леса - и кочевники продолжают нам махать руками. При желании можно остановиться в юрточном лагере и побаловать себя массажем и водой из горячего источника.",
        mongoliaTourP12: "День 12 Зенчер - Ууртин Тохой. Сегодняшний маршрут протяженностью около 120 км до нашего дневного пункта назначения в Curtain Tohoy будет интересен. Мы проезжаем небольшие горы, широкие долины и мелководье. Рай для каждого водителя по бездорожью - чувствуешь себя безграничной свободой.",
        mongoliaTourP13: "День 13 Ууртин Тохой - Хогно Хаан. Рано утром направляемся в монастырь Эрдэнэ Зуу. Это был первый буддийский монастырь в Монголии. Дальше на восток мы достигаем предгорья пустыни Гоби. Наш лагерь расположен у подножия гранитной скалы с великолепным видом. В нескольких километрах от отеля находится волшебный пейзаж песчаных дюн, где вы можете выпустить пар во второй половине дня.",
        mongoliaTourP14: "День 14 и 15 Хогно Хаан - Улан-Батор. Мы достигаем конечного пункта назначения Улан-Батор около полудня по хорошей асфальтированной дороге. День свободный. Ранним вечером мы едем в фольклорный центр, где исполняются народные танцы, народная музыка и мистическое пение гортани, а в конце поездки мы в последний раз наслаждаемся монгольской кухней.",
//Tien Shan tour
        tienShanTourP1: " Откройте для себя самые красивые регионы Кыргызстана на мотоцикле за две недели",
        tienShanTourP2: " День 1 Прибытие в Ош и тест-драйв.По прибытии в Ош и после нескольких часов отдыха в отеле мы знакомимся с мотоциклами в короткой экскурсии. Ночуем в Оше.",
        tienShanTourP3: " День 2 Экскурсия на озеро Папан с проездным.Сегодняшний дневной тур приведет нас сначала к озеру Папан, Ошскому водохранилищу. Мы едем по гравийным грунтовым дорогам через зеленую долину, а затем по одному из многочисленных перевалов к югу от города. По хорошо развитой дороге из Китая и Таджикистана во второй половине дня возвращаемся в наш отель в Оше.",
        tienShanTourP4: "День 3 Ош через Осгон в Арсланбоб. Сегодня мы первые на главной дороге из Оша в Бишкек, не дойдя до перекрестка с Арсланбобом. Эта деревня расположена в самом большом ореховом лесу в мире. Из нашей идиллической семьи мы можем совершить вечернюю прогулку к водопаду.",
        tienShanTourP5: "День 4 К озеру Токтогул. После прекрасного завтрака на веранде с видом на горы мы прощаемся с нашими гостеприимными хозяевами. Наша цель на день - отель прямо на огромном Токтогульском водохранилище. Его теплая температура приглашает вас принять ванну.",
        tienShanTourP6: "День 5 Переезд в Кызыл-Ой. Покорив перевал Алабель высотой 3400 м, мы восхищаемся просторами Суусамирского плато. Оттуда мы поедем в Кызыл-ой к гостевому дому.",
        tienShanTourP7: "День 6 Продолжение пути в Кочкор. Сегодняшний маршрут пролегает от Кызыл-ой до Кочкор. При желании можно отправиться на старую урановую шахту в городе Минг Куш. Это удаленное место особенно полезно для фотографов.",
        tienShanTourP8: "День 7 Сегодня день отдыха. Кто хочет побывать на кыргызском ковровом производстве. Эти войлочные ковры, называемые шырдаками, в основном производятся в домашних условиях.",
        tienShanTourP9: "Если вы не хотите пропустить поездку на мотоцикле, вы можете отправиться на близлежащий Иссык-Куль, второй по величине источник пресной воды в мире.",
        tienShanTourP10: "День 8 В Нарын. Рано утром выходим из красивой гостиной и отправляемся в Нарын. Мы делаем полезный объезд и следуем по реке Нарын через укромные долины и ущелья. Перевал Джалпак высотой 3300 м приглашает на пикник!",
        tienShanTourP11: "День 9 «Жемчужина» Кыргызстана - озеро Сонгколь. В этот день мы собираемся на Сонгколь. Это чудесное озеро расположено на гигантском плато на высоте 3000 м над уровнем моря. М., где киргизские пастухи пасут свои стада в летние месяцы. Ночи здесь в основном холодные и ясные со звездами, стоит посмотреть на небо. Ночуем в комфортабельных юртах.",
        tienShanTourP12: "День 10 Возвращение в Нарын. По другому, но не менее увлекательному маршруту мы возвращаемся в Нарын, где позавчерашние комфортабельные номера расположены.",
        tienShanTourP13: "День 11 В караван-сарай Таш-Рабат. По хорошей дороге через долину с множеством сурков мы попадаем в Таш-Рабат, старую стоянку для караванов на высоте 3000 м над уровнем моря. Ночуем в уютной юрте. Наша принимающая семья нагревает для нас сауну.",
        tienShanTourP14: "День 12: Треккинг с видом на Нарынскую долину. Сегодня ландшафт, цвета и горные хребты меняются почти каждый час! Изюминкой является перевал Кулак-Ашуу высотой 3400 м.",
        tienShanTourP15: "Мы находимся в центре Тянь-Шаня. Этот горный массив находится на границе с Китаем и дал название нашему туру. Сегодняшний этап заканчивается в Казармане, золотодобывающем городке. Мы снова можем принять душ.",
        tienShanTourP16: "День 13 Через перевал Калдам в Ош. Обратный путь в Ош долог, но разнообразен. На Калдамском перевале высотой 3062 метра часто остается снег на обочине дороги. Ждем комфортабельный отель в Оше и отличный ужин.",
        tienShanTourP17: "14-15 день Ош и отъезд. Последний день тура проводим в Оше. У нас есть время посетить базар или экскурсию по городу, а затем отпраздновать успешную экскурсию. На следующее утро нас отвезут в аэропорт.",
//Tosor tour
        tosorTourP1: "Откройте для себя самые красивые регионы Кыргызстана на мотоцикле за две недели. С поездками по труднопроходимой местности.",
        tosorTourP2: " День 1 Прибытие в Ош. После полета вы приземлитесь в Оше, втором по величине городе Кыргызстана. Вас заберут, и вы сможете отдохнуть несколько часов в нашем отеле. После обеда мы совершим небольшую экскурсию за город, чтобы познакомиться с мотоциклами. Ночуем в Оше.",
        tosorTourP3: "День 2 Переезд на озеро Папан и первый переезд. Дневной тур (около 150 км) приведет нас к озеру Папан, Ошскому водохранилищу. Мы едем по гравийным грунтовым дорогам через зеленую долину и через один из многочисленных перевалов к югу от города. Возвращаемся по хорошо развитой дороге. Ночуем в Оше.",
        tosorTourP4: "День 3 Через перевал Калдам в сторону Казармана. Наша цель сегодня - Казарман, город золотой лихорадки в центральном Кыргызстане. Выбираем дороги с низкой проходимостью и пересекаем перевал Калдам высотой 3000 м. Ночуем в гостевом доме с киргизской семьей.",
        tosorTourP5: "День 4 Переход в караван-сарай Таш-Рабат. Сегодня в программе два перевала высотой более 3000 м. Наслаждаемся просторами и уединением Кыргызстана и смотрим на Нарынскую долину. Едем по крутым горным дорогам, пересекаем высохшие реки и видим стада пасущихся овец и яков. Наш юрточный лагерь находится в непосредственной близости от караван-сарая в Таш-Рабате.",
        tosorTourP6: "День 5 F AHRT к озеру Чатыр-Куль и Нарын. Сделаем объезд в Нарын, университетский городок на высоте 2000 м, вдоль китайской границы до озера Чатыр-Куль. Езда на эндуро по ухабистому склону, полному приключений, доставляет массу удовольствия. Через 210 км нас ждёт душ и чудесный ужин в Нарыне.",
        tosorTourP7: "День 6 Через перевал Тосор к озеру Иссык-Куль. Сегодняшняя поездка проведет нас по реке Нарын. Мы пересекаем широкие долины, узкие и крутые ущелья и проходим перевал Тосор высотой 3800 м, который дал название этому путешествию. Этот опасный маршрут заканчивается у озера Иссык-Куль. Оно в десять раз больше Боденского озера и приглашает нас освежиться в кристально чистой воде. Ночуем в красивом хостеле прямо на берегу озера.",
        tosorTourP8: "День 7 Продолжение пути в Кочкор. После последних тяжелых дней мы сегодня немного расслабились. Наша сцена - Кочкор, известный производством кыргызских войлочных ковров.",
        tosorTourP9: "День 8 Через перевал Каракуль до Кызыл-Ой Ландшафт Кыргызстана чрезвычайно разнообразен. Практически после каждого поворота мы видим новый фантастический пейзаж. Это особенно актуально для сегодняшней сцены. Он ведет нас через редко посещаемый перевал Каракуль высотой 3400 м в Кызыл-Ой, расположенный на дикой горной реке. Здесь мы наслаждаемся кыргызским семейным гостеприимством.",
        tosorTourP10: "День 9 Дневной тур или день отдыха в Кызыл-Ой Сегодня удачный день для эндуро-райдеров, любящих крутые склоны. Крутая и каменистая горная тропа требует от нас максимальной концентрации и хороших навыков вождения. Этот однодневный тур проходит в совершенно безлюдной местности. Те, кто предпочитает отдыхать в этот день, могут остановиться в Кызыл-Ой.",
        tosorTourP11: "День 10 К озеру Сонгколь. Сонгколь расположен на огромном плато на высоте 3000 м и считается жемчужиной Кыргызстана. Около полудня доезжаем до юрточного лагеря прямо на берегу озера. Так что у нас есть достаточно времени, чтобы насладиться этим идиллическим местом и понаблюдать за прогулкой пастухов.",
        tosorTourP12: "День 11 По северному маршруту до Казармана. Мы снова едем в Казарман, но на этот раз по северному маршруту и наслаждаемся фантастическим видом на Нарынскую долину.",
        tosorTourP13: "День 12 Переезд в Гульчу. Сегодняшняя поездка в Гульчу проведет нас через Осгон и через чудесное ущелье. Это дает нам много возможностей кататься вне трасс.",
        tosorTourP14: "День 13 Панорамный переезд и возвращение в Ош. В конце экскурсии нас сегодня ждет здоровенный десерт. Проезжаем мимо красивых пастбищ и узких ущелий, достигая высоты 3500 м. Мы надолго остаемся на этой высоте и наслаждаеся бескрайней панорамой. С видом на заснеженные горы Кичиг-Алая. Далее спускаемся к реке Ак-Буура, по которой возвращаемся в Ош.",
        tosorTourP15: "День 14 + 15, день отдыха в Оше и обратный вылет. Последний день мы используем, чтобы побывать на базаре или просто расслабиться после насыщенной экскурсии. Вечер проводим в хорошем ресторане, наслаждаемся сочным шашлыком (шашлыком) и тостами за удачную и удачную экскурсию. Рано утром следующего дня нас отвезут из отеля в аэропорт для нашего обратного рейса домой.",
//Bartang tour
        bartangTourP1: " Непростой тур по центру Памира. Часть тура такая же, как и тур по Памиру, но технически намного сложнее. Тур проходит в условиях высоких гор и трудностей. Нам компенсируют очень уединенные и нетронутые районы, захватывающие дух горы и реки.",
        bartangTourP2: " День 1 Прибытие в Ош. После полета вы приземлитесь в Оше, втором по величине городе Кыргызстана. Вас заберут, и вы сможете отдохнуть несколько часов в нашем отеле. После обеда мы совершим небольшую экскурсию за город, чтобы познакомиться с мотоциклами. Ночуем в Оше.",
        bartangTourP3: "День 2 Переезд в Сары-Таш. Поездка в Сары-Таш приведет нас вдоль реки Ак Бура в дикую и романтическую долину. Затем продолжайте движение по фантастической панорамной дороге на высоте 3000 м до действующей угольной шахты. Поднимаемся по узкому ущелью, пересекаем еще два перевала высотой 3500 м и попадаем в Чон Алай (большая долина), где ночуем в Сары-Таше в гостевом доме.",
        bartangTourP4: "День 3 К озерам у подножия пика Ленина и Сары-Могола. В хорошую погоду сегодня мы совершим объезд к подножию пика Ленина с его гордой высотой 7134 метра. Это дает нам возможность привыкнуть к высоте. В плохую погоду мы делаем этот объезд в конце нашей экскурсии. Ночуем в юрте в Сары-Могуле.",
        bartangTourP5: "День 4 Переход границы с Таджикистаном, озеро Каракуль. Сегодня мы пересекаем границу с Таджикистаном. Кыргызский таможенный пост расположен у въезда на перевал Кызыл-Арт, а таджикский таможенный пост находится примерно в 30 км, вскоре после вершины перевала. Промежуточный маршрут вроде бы никто не контролирует, дорога заброшена, но идеально подходит для хороших мотоциклистов. Мы сейчас на высоте почти 4000 м. Наша семья находится прямо на берегу озера Каракуль.",
        bartangTourP6: "День 5 Памирское плато. Едем на запад по Памирскому тракту. Примерно через час сворачиваем в никуда. Дороги здесь нет, только долина шириной 5 км с несколькими переулками. Это наш путь в долину Бартанг.",
        bartangTourP7: "День 6 В Рошорве в долине Бартанг. Чтобы попасть в долину Бартанг, вам нужно спуститься в долину по узким, веселым и пологим гравийным дорогам. Наш механизм поддержки работает успешно. Этот раздел требует максимальной концентрации без ошибок. Как только мы достигли долины Бартанг, к нашему удивлению, мы снова увидели маленькие деревушки. Интересно, как и с чем здесь выжить. Мы ставим наши палатки в идиллическом месте у реки.",
        bartangTourP8: "День 7 Переезд в Хорог. Переезд в Хорог, столицу Горного Бадахшана, как называется эта часть Таджикистана, проведет нас вдоль реки Бартанг. Улицу затапливает регулярно. Мокрые ноги гарантированы. К счастью, здесь теплее, чем было накануне, и мы можем рассчитывать на удобную гостиничную кровать, теплый душ и чудесный цивилизованный ужин.",
        bartangTourP9: "День 8 К озеру Турумтай на высоте 4200 м. Из Хорога на восток можно попасть тремя способами: прямой маршрут M41, долина Вахана на юге или между ними, так называемая Карл-Маркс-штрассе. Выбираем последний вариант и наслаждаемся белыми горными гигантами, из которых пик Маркса является самым известным и самым высоким. Ставим палатки на озере Турумтай. Прекрасные пейзажи и звездные ночи делают этот лагерь особенным.",
        bartangTourP10: "День 9 По Памирскому тракту в Хорог. Возвращаемся в гостиницу в Хороге по трассе М41, отдыхаем и набираемся сил для следующего приключения.",
        bartangTourP11: "День 10 Через Ваханскую долину до Биби Фатима. Наше дальнейшее путешествие проведет нас через Ваханскую долину, вдоль границы с Афганистаном до Биби Фатима. Отдельная этническая группа проживает в Ваханской долине. Эти люди отличаются от таджиков не только родным языком, но и внешне, и культурно. В Биби Фатима у нас есть прекрасный вид на Ваханскую долину. Конечно, мы также пользуемся горячим источником, который идиллически расположен в скальном склепе и приглашает принять чудесную ванну с водой с температурой более 40 градусов. Ночуем в гостевом доме в Биби Фатима.",
        bartangTourP12: "День 11 К озеру Булункуль. По пути к плато Памир воздух становится все тоньше и тоньше, но вид становится все яснее и яснее. Если не считать диких верблюдов, яков и нескольких пастухов, мы одни в этом уединении. Ночуем в гостевом доме на озере Булункуль, успеваем посетить горячие источники и «мини-гейзер».",
        bartangTourP13: "День 12 Переезд в Мургаб. Мы снова на Памирском тракте или М41. Дорога была построена Советским Союзом вдоль афганской и китайской границ. Он и сегодня частично используется китайскими автомобилями. В Мургабе, бывшей военной базе, ночуем в гостинице, а кроме горячих источников можем принять душ.",
        bartangTourP14: "День 13 Возвращение в Ош. Обратный путь проходит через перевал Ак-Байтал. На высоте 4655 м это самый высокий перевал Памира. Затем мы пересекаем последний перевал экскурсии: Кызыл-Арт высотой 4200 м. Здесь мы доходим до границы с Кыргызстаном и едем обратно в Ош через Сары-Таш.",
        bartangTourP15: "День 14 + 15 День отдыха в Оше, обратный вылет. В наш последний день еще есть время посетить базар или просто расслабиться после насыщенной экскурсии. Вечер проведем в хорошем ресторане, попробуем сочный шашлык (шашлык) и зажарим удачный и успешный тур. Рано утром следующего дня нас отвезут из отеля в аэропорт для нашего обратного рейса домой.",
//Naryn tour
        narynTourP1: "Проезжайте через одни из самых красивых регионов Кыргызстана на мотоцикле за одну неделю.",
        narynTourP2: "1. Прибытие в Ош Кыргызстан. После полета вы приземлитесь в Оше, втором по величине городе Кыргызстана. Вас заберут, и вы сможете отдохнуть несколько часов в нашем отеле. После обеда мы совершим небольшую экскурсию за город, чтобы познакомиться с мотоциклами. Ночуем в Оше.",
        narynTourP3: "День 2 Переезд на озеро Токтогул. Сегодня мы находимся на главной дороге из Оша в Бишкек. Сначала мы пересекаем плодородную Ферганскую впадину, а потом наслаждаетесь бесчисленными излучинами реки Нарын. Наша цель на день - отель прямо на огромном Токтогульском водохранилище. Летом он приглашает вас поплавать с его теплой температурой.",
        narynTourP4: "День 3 По реке Нарын до Кызыл-Ой. Покорив перевал Алабель высотой 3400 м, мы любуемся просторами Суусамирского плато, а самые смелые из нас пробуют «Кумиз», кисломолочное кобылье молоко, которое предлагают на велосипеде по пути. По хорошей гравийной дороге мы едем вдоль живописной реки Кёкемерен в сторону Кызыл-Ой к кыргызской семье, которая предоставляет нам свой дом на ночь.",
        narynTourP5: "День 4 Восхождение на озеро Сонгколь. Наш путь лежит через красивые холмы, леса и луга. Мы проезжаем угольную шахту и вскоре увидим красивое озеро Сонгколь издалека. Он расположен на гигантском плато на высоте 3000 метров над уровнем моря, где киргизские пастухи пасут свои стада в летние месяцы. Ночи в основном холодные и ясные со звездами: стоит посмотреть в небо. Ночуем в комфортабельных юртах. Если повезет, на ужин можно съесть свежевыловленную жареную из озера рыбу.",
        narynTourP6: "День 5 В караван-сарай в Таш-Рабате. Наша цель сегодня - караван-сарай в Таш-Рабате. Дорога спускается с горы бесчисленными серпантинами. Пополняем складские запасы в Нарыне. После фантастической поездки в сопровождении 4000-метровых гор с обеих сторон и через долину, полную сурков, мы прибываем в Таш Рабат, старое место для караванов на высоте 3000 метров над уровнем моря. Местный душ можно найти в бане (местная баня). Ночуем в уютной юрте.",
        narynTourP7: "День 6 Переход через два перевала в Казарман. Сегодня ландшафт, цвета и горные хребты меняются почти каждый час! Основные моменты нашей поездки - два перевала Кулак-Ашуу на высоте 3400 м и перевал Каюн на высоте 2930 м. Сегодняшний этап заканчивается в Казармане, золотодобывающем городке.",
        narynTourP8: "День 7 Через перевал Калдам и обратно в Ош. Обратный путь до Оша долго, но разнообразно. На Калдамском перевале высотой 3062 м личинки снега часто лежат вдоль дороги до июня. А дальше нас ждут уже знакомая гостиница в Оше и последний замечательный ужин в Кыргызстане.",
        narynTourP9: "День 8 Ош и отъезд. Рано утром следующего дня нас отвезут в аэропорт, чтобы вылететь домой на запад.",
//Repair shop
        repairShopPH1: "качественный и надежный сервис",
        serviceDescription: "Описание услуг",
        repairShopP1: "Наша компания состоит исключительно из профессионалов. Мы, как и вы, очень любим мотоциклы и внедорожники, а также знаем многие тонкости его работы. Под нашей крышей собрались единомышленники, для нас ремонт или улучшение транспорта - это не повседневная рутинная работа, а любимое и интересное занятие. Вы можете быть уверены, что все болты и рабочие детали будут качественными и надежными. Наоборот, мы исправим неисправные элементы, и он будет работать как новый для дальнейшей эксплуатации. Мы не будем накручивать бешеные затраты на ремонт и не придумывать дополнительных неисправностей. Мы работаем не на количество, а на качество, поэтому большинство наших клиентов приходят к нам по рекомендации семьи и друзей. Если ваш транспорт сломается, наши сервисные двери всегда открыты для вас.",
        selfServing: "самообслуживание",
        nteRepairShop: "ремонтная мастерская nte",
        tiresChange: "замена шин",
        tigWelding: "ТИГ сварки",
        mmaWelding: "ММА сварка",
//About us
        aboutUsP1: "Компания Nature Travel and Engineering имеет более чем 20-летний опыт работы на рынке. Мы предоставляем надежный, безопасный и качественный сервис. Единственное место, где вы можете починить или улучшить свой мотоцикл, автомобиль, любой вид транспорта, доверяя лучшим механикам в этой области. Также вы без труда сможете арендовать автомобиль или мотоцикл.",
        aboutUsP2: "Мы сотрудничаем со швейцарской туристической компанией Alatoo-Moto, которая предлагает удивительные приключенческие туры по Средней Азии.",
        aboutUsP3: "Наша цель",
        aboutUsP4: "• Создать комфорт",
        aboutUsP5: "• Подарить незабываемые ощущения",
        aboutUsP6: "• Обеспечение безопасности",
        aboutUsP7: "• Чтобы вы почувствовали всю природу Кыргызстана",
        aboutUsP8: "• Достичь достойных высот",
        ourTeam: "Наша команда",
        aboutUsP9: "Шохрух",
        aboutUsP10: "(Менеджер)",
        aboutUsP11: "Камил",
        aboutUsP12: "(Механик)",
        aboutUsP13: "Коля",
        aboutUsP14: "(Механик)",
        aboutUsP15: "Нафиса",
        aboutUsP16: "(Главный Бухгалтер)",
//Contacts
        contactDescription: "описание контакта",
        contactsAddress:`Адрес: Ош, Кыргызстан
Беш Капа Улица -101, 14
Почтовый индекс Ош - 723500
Тел: : +996555550146
WhatsApp: +996556356666
Email: naturetravel.osh@gmail.com`,
//Tires
        description: "Описание",
        tiresShinko: "Шинко",
        tiresMitas: "Митас",
//Housing
        housingP1: "24/7 – охрана",
        housingP2: "24/7 - бесплатный wi-fi",
        housingP3: "прачечная",
        housingP4: "стоянка",
        housingP5: "ванная",
        housingP6: "уборная",
        housingP7: "кухня",
//404
        error404: "Ошибка 404",
        errorDescription: "Похоже, что-то пошло не так! Страница, которую вы запрашиваете не существует. Он может быть устаревшим, удаленным или в адресной строке был введен неверный адрес.",
//Save Budget
        saveBudgetP1: "Каждый, кто хочет путешествовать, всегда думает о расходах на поездку или тур. То есть мы все хотим сэкономить наш бюджет. Компания Nature Travel Engineering, заботясь о своих клиентах, предоставляет не только аренду автомобилей или мотоциклов, но и аренду оборудования для ремонта или тюнинга автомобилей.",
        saveBudgetP2: "Nature Travel Engineering сотрудничает со многими отелями города. Если вы хотите получить скидки на отели, вы можете забронировать номер у нас. Однако наша компания предоставляет свои помещения рядом с офисом. Которые в нем можно припарковать или отремонтировать машину или мотоцикл.",


    },

};

function changePageLang(lang) {
    const langKey = elems("[lang-key]");

    langKey.forEach((key) => {
        const attrValue = key.getAttribute("lang-key");
        key.textContent = language[lang][attrValue];
    });
}

const selectLang = elem("#lang");

selectLang.addEventListener('click', (e) => {

  const langUrlKey = e.target.getAttribute('lang-value');

  e.target.classList.contains('selected')
   ? ''
   :(location.href = window.location.pathname + "#" + langUrlKey,
    location.reload());

  
});

const removeClass = (arr, str) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i].classList.contains(str)
     ? arr[i].classList.remove(str)
     : '';
  }
}

const activatedLang = (arg) => {
  const selectedLanguage = elem(`p[lang-value="${arg}"]`),
        langsList = selectLang.children;

  removeClass(langsList, 'selected');
  elem('#activeLanguage').innerText = selectedLanguage.textContent;
  selectedLanguage.classList.add('selected');
}

// Язык страницы по умолчанию
function defaultPageLang() {
    const availableLangs = Object.keys(language);

    let userLang = navigator.language || navigator.userLanguage;
    userLang = userLang.split("-")[0];

    !availableLangs.includes(userLang)
        ? ''
        : (changePageLang(userLang), activatedLang(userLang));
}

defaultPageLang();


// Изменение при выборе языка
const selectLangChange = () => {
    const hashKey = window.location.hash;
    const hashLang = hashKey.slice(1);

    !hashKey
        ? ''
        : (changePageLang(hashLang), activatedLang(hashLang));
};

selectLangChange()