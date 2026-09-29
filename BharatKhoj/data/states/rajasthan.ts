import { State } from '@/types';

const rajasthan: State = {
  id: 'rajasthan',
  slug: 'rajasthan',
  name: 'Rajasthan',
  capital: 'Jaipur',
  region: 'Northwestern India',
  language: ['Rajasthani', 'Hindi'],
  established: '30 March 1949',
  tagline: 'Land of Kings, Colors & Courage',
  description:
    "Rajasthan is India's largest state by area — a magnificent tapestry of golden deserts, mighty forts, opulent palaces, vibrant folk traditions, and an indomitable spirit forged by centuries of Rajput chivalry and resistance.",
  history:
    "Rajasthan's history is the story of the Rajputs — warrior clans who built some of the most formidable fortresses and most opulent palaces ever seen in South Asia. From the legendary Mewar dynasty under Maharana Pratap to the might of Marwar, Jaipur's Kachwaha clan, and Bikaner's rulers, the region was a mosaic of princely states. The Rajputs famously resisted Mughal expansion for generations, with battles like Haldighati (1576) becoming symbols of undying valor. Rajasthan was integrated into the Indian Union in stages between 1948 and 1956, consolidating 22 princely states into one. Its forts, step-wells (baolis), and havelis stand testament to an architectural golden age.",
  culture:
    'Rajasthani culture is a riot of color, music, and living heritage. The state is renowned for its Ghoomar and Kalbeliya dances — both UNESCO recognized — as well as its rousing Manganiyar and Langa folk music traditions. Puppetry (Kathputli) is a 1,000-year-old storytelling art. Block printing, blue pottery, bandhani tie-dye, and leheriya weaving are craft traditions practiced across generations. The desert architecture — with its jharokhas (latticed windows), step-wells, and mirror-inlaid interiors — is instantly recognizable worldwide.',
  traditions: [
    {
      name: 'Kathputli Puppetry',
      description:
        'Ancient string puppet tradition where Nat community artists narrate epic tales of Rajput heroes through elaborately costumed marionettes',
      image: '/images/states/raj-kathputli.jpg',
    },
    {
      name: 'Turban Tying Ceremony',
      description:
        'The pagri (turban) is central to Rajasthani identity — its color and style indicate caste, region, and occasion; tying ceremonies mark rites of passage',
      image: '/images/states/raj-pagri.jpg',
    },
    {
      name: 'Ghoomar Dance',
      description:
        "UNESCO-listed royal folk dance of Rajasthan, originally performed by Bhil women to welcome brides, now performed at all major celebrations",
      image: '/images/states/raj-ghoomar.jpg',
    },
  ],
  festivals: [
    {
      name: 'Pushkar Camel Fair',
      month: 'October/November',
      description:
        "One of the world's largest camel fairs, held at Pushkar Lake — a week-long spectacle of trading, folk performances, camel races, and religious rituals",
      image: '/images/states/raj-pushkar.jpg',
    },
    {
      name: 'Teej',
      month: 'July/August',
      description:
        'Festival of the monsoon welcoming goddess Parvati — celebrated by women with swings, songs, mehndi, and green attire symbolizing the fertile rains',
      image: '/images/states/raj-teej.jpg',
    },
    {
      name: 'Diwali',
      month: 'October/November',
      description:
        'Festival of lights celebrated with particular grandeur in Rajasthan — forts and palaces are illuminated, creating a magical spectacle against the night sky',
      image: '/images/states/raj-diwali.jpg',
    },
  ],
  food: [
    {
      name: 'Dal Baati Churma',
      description:
        'The quintessential Rajasthani feast — hard wheat rolls (baati) baked over fire, served with five-lentil dal and sweet crumbled churma; sustaining food born in desert campaigns',
      image: '/images/states/raj-dalbaati.jpg',
    },
    {
      name: 'Ghewar',
      description:
        "Rajasthan's iconic honeycomb-textured sweet made from flour, ghee, and sugar syrup — a staple of Teej and Gangaur festivals, often topped with rabdi and silver leaf",
      image: '/images/states/raj-ghewar.jpg',
    },
    {
      name: 'Ker Sangri',
      description:
        'A tangy desert vegetable pickle-curry made from wild ker berries and dried sangri beans — a survival food of the Thar Desert that became a culinary delicacy',
      image: '/images/states/raj-kersangri.jpg',
    },
  ],
  clothing: [
    {
      name: 'Bandhani Odhni',
      gender: 'female',
      description:
        'Tie-dye veil in brilliant reds, yellows, and greens — created through a painstaking process of tying thousands of tiny knots before dyeing; worn by Rajasthani women at festivals and weddings',
      image: '/images/states/raj-bandhani.jpg',
    },
    {
      name: 'Rajasthani Pagri (Turban)',
      gender: 'male',
      description:
        'The saffron or red Rajput turban — a symbol of honor, caste, and regional identity that can stretch up to 9 meters in length when unwound; styles vary across 33 districts',
      image: '/images/states/raj-pagri.jpg',
    },
  ],
  personalities: [
    {
      id: 'maharana-pratap',
      name: 'Maharana Pratap',
      period: '1540–1597',
      role: 'Maharana of Mewar, Symbol of Rajput Resistance',
      description:
        "The legendary warrior-king of Mewar who refused to submit to Mughal Emperor Akbar despite years of relentless pressure. His stand at the Battle of Haldighati (1576) and his years of guerrilla warfare from the Aravalli jungles made him an eternal symbol of Rajput pride, sovereignty, and sacrifice. His horse Chetak is as celebrated as Pratap himself.",
      image: '/images/personalities/maharana-pratap.jpg',
    },
    {
      id: 'mirabai',
      name: 'Mirabai',
      period: '1498–1557',
      role: 'Poet-Saint & Devotee of Krishna',
      description:
        "One of India's greatest poet-saints, Mirabai was a Rajput princess who renounced royal comfort to devote herself entirely to Lord Krishna. Her bhajans (devotional songs), composed in Braj Bhasha and Rajasthani, remain among the most beloved spiritual poetry in the Hindi tradition. She defied social norms and is revered across communities.",
      image: '/images/personalities/mirabai.jpg',
    },
    {
      id: 'rani-padmini',
      name: 'Rani Padmini (Padmavati)',
      period: 'c. 13th–14th century',
      role: 'Queen of Mewar, Symbol of Rajput Honor',
      description:
        "Queen of Chittorgarh and consort of Maharawal Ratan Singh, Rani Padmini is celebrated in legend and poetry for her extraordinary beauty and courage. She led the Jauhar (mass self-immolation) of Rajput women when Alauddin Khilji besieged Chittor in 1303, choosing death over dishonor. Her story is immortalized in Malik Muhammad Jayasi's 16th-century epic poem Padmavat.",
      image: '/images/personalities/rani-padmini.jpg',
    },
  ],
  monuments: [
    {
      id: 'amber-fort',
      name: 'Amber Fort',
      location: 'Jaipur',
      period: '16th–17th century CE',
      description:
        'A majestic hilltop fortress of the Kachwaha Rajputs, blending Rajput and Mughal architectural styles. Its Sheesh Mahal (Palace of Mirrors) — whose ceiling is inlaid with thousands of tiny mirrors — is among the most spectacular interiors in India. Amber Fort is a UNESCO World Heritage Site.',
      image: '/images/monuments/amber-fort.jpg',
    },
    {
      id: 'city-palace-jaipur',
      name: 'City Palace, Jaipur',
      location: 'Jaipur',
      period: '18th century CE',
      description:
        "Built by Maharaja Sawai Jai Singh II — the astronomer-king who also founded the city of Jaipur — the City Palace is a vast complex of courtyards, gardens, and buildings blending Rajput, Mughal, and European architectural elements. The palace houses a museum with royal artifacts, arms, and textiles.",
      image: '/images/monuments/city-palace-jaipur.jpg',
    },
    {
      id: 'mehrangarh-fort',
      name: 'Mehrangarh Fort',
      location: 'Jodhpur',
      period: '1459 CE',
      description:
        'One of the largest forts in India, perched 125 meters above Jodhpur — the Blue City. Founded by Rao Jodha, founder of Jodhpur, its massive walls and imposing gateways with cannonball scars from historic sieges are awe-inspiring. The fort museum contains a priceless collection of Rajput art, palanquins, and royal textiles.',
      image: '/images/monuments/mehrangarh-fort.jpg',
    },
    {
      id: 'hawa-mahal',
      name: 'Hawa Mahal',
      location: 'Jaipur',
      period: '1799 CE',
      description:
        "The iconic 'Palace of Winds' — a five-story facade with 953 small windows (jharokhas) through which royal women could observe street festivals without being seen. Built by Maharaja Sawai Pratap Singh in the shape of Lord Krishna's crown, it is the most photographed monument in Rajasthan.",
      image: '/images/monuments/hawa-mahal.jpg',
    },
  ],
  folkArts: [
    {
      name: 'Kathputli Puppetry',
      description:
        'Over 1,000-year-old string puppet tradition of the Nat community, narrating stories of Rajput heroes and mythology with colorful marionettes',
      image: '/images/states/raj-kathputli.jpg',
    },
    {
      name: 'Ghoomar Dance',
      description:
        "UNESCO-recognized swirling folk dance where women twirl in colorful ghagras (skirts) — originally a royal court tradition of the Bhil community gifted to the Mewar kingdom's Rajput royalty",
      image: '/images/states/raj-ghoomar.jpg',
    },
    {
      name: 'Blue Pottery',
      description:
        "Jaipur's distinctive turquoise-blue glazed pottery made using a Persian-derived technique — uniquely not made from clay but from quartz stone, glass, and Multani mitti, fired at low temperatures",
      image: '/images/states/raj-bluepottery.jpg',
    },
    {
      name: 'Phad Painting',
      description:
        'Large-format narrative scroll paintings on cloth depicting the epic stories of folk deities Pabuji and Devnarayan — used as mobile temples by the Bhopa-Bhopi priest-performers of Rajasthan',
      image: '/images/states/raj-phad.jpg',
    },
  ],
  toys: [
    {
      id: 'kathputli-puppet',
      name: 'Kathputli String Puppet',
      stateId: 'rajasthan',
      stateName: 'Rajasthan',
      period: 'c. 1000 CE (over 1,000 years old)',
      category: 'wooden',
      description:
        "Elaborately costumed string marionettes handcrafted by the Nat community of Rajasthan, depicting Rajput warriors, queens, acrobats, and folk heroes. The wooden head, hands, and feet are carved and painted by hand, then dressed in tiny ghagra-choli or warrior attire with real fabric, mirrors, and beadwork.",
      significance:
        "Kathputli is one of India's oldest and most sophisticated puppet traditions. The Nat community has practiced it for over a millennium, using it to narrate epics of local heroes and the Ramayana across the desert villages of Rajasthan, often as their sole livelihood.",
      materials: [
        'Mango or Babul wood',
        'Cotton and silk fabric',
        'Glass beads and mirrors',
        'Natural dyes',
        'Jute strings',
      ],
      howUsed:
        "Puppeteers (Nats) manipulate the marionettes with a single string attached to a ring worn on their head, using their hands to work the arm strings — a distinctive technique unique to Rajasthani Kathputli. Performances are given at fairs, royal courts, weddings, and festivals.",
      history:
        'Kathputli tradition is believed to be over 1,000 years old. The word comes from Rajasthani — katth (wood) + putli (doll). The Nat community traces their puppetry lineage back many generations, once performing at Rajput courts and later traveling across India and internationally.',
      images: ['/images/toys/kathputli-1.jpg', '/images/toys/kathputli-2.jpg', '/images/toys/kathputli-3.jpg'],
      price: { physical: 650, printed3D: 500 },
      inStock: true,
      relatedToys: ['blue-pottery-figurine', 'rajasthani-camel'],
      badge: 'UNESCO Heritage Craft',
    },
    {
      id: 'blue-pottery-figurine',
      name: 'Blue Pottery Peacock Figurine',
      stateId: 'rajasthan',
      stateName: 'Rajasthan',
      period: 'c. 14th century (Persian influence era)',
      category: 'clay',
      description:
        "A hand-crafted peacock figurine in Jaipur's distinctive turquoise-and-cobalt blue glazed pottery style — featuring delicate floral motifs painted in cobalt oxide before a single firing. The peacock, India's national bird, is a recurring motif symbolizing grace and monsoon.",
      significance:
        "Blue Pottery of Jaipur is a GI-tagged craft recognized globally for its unique Persian-derived technique. Unlike conventional pottery, it uses no clay — instead, it is made from quartz stone powder, glass, and Multani mitti, giving it a distinctive translucent quality. The craft was revived in the 20th century by legendary artist Kripal Singh Shekhawat with support from artist Pupul Jayakar.",
      materials: [
        'Quartz stone powder',
        'Fuller\'s earth (Multani mitti)',
        'Glass powder',
        'Sodium sulphate',
        'Cobalt oxide (for blue)',
        'Copper oxide (for green)',
      ],
      howUsed:
        'Used as home décor, gifted at festivals and weddings, and collected as keepsakes of Rajasthani craft heritage. Small figurines are popular with children as decorative objects.',
      history:
        "Blue Pottery's roots lie in Persian and Central Asian glazed ceramic traditions brought to India by Mughal rulers in the 14th century. It flourished in Delhi before migrating to Jaipur under the patronage of the Kachwaha Maharajas. After a period of decline, it was dramatically revived by Kripal Singh Shekhawat in the 1950s–70s.",
      images: ['/images/toys/blue-pottery-1.jpg', '/images/toys/blue-pottery-2.jpg'],
      price: { physical: 480, printed3D: 380 },
      inStock: true,
      relatedToys: ['kathputli-puppet', 'rajasthani-camel'],
      badge: 'GI Tagged Craft',
    },
    {
      id: 'rajasthani-camel',
      name: 'Rajasthani Camel Toy',
      stateId: 'rajasthan',
      stateName: 'Rajasthan',
      period: 'Traditional (centuries old)',
      category: 'wooden',
      description:
        "A beautifully painted wooden camel toy with articulated legs and a saddle embroidered with tiny mirrors and colorful thread — an iconic souvenir of Rajasthan's desert heritage. The camel is adorned with traditional Rajasthani decorative motifs.",
      significance:
        "The camel is the 'Ship of the Desert' and has been central to Rajasthani culture for millennia — enabling trade, travel, and military campaigns across the Thar Desert. The Pushkar Camel Fair is one of the world's largest, and camel decorating is an art form in itself. Wooden camel toys keep this cultural connection alive.",
      materials: [
        'Sheesham (Indian rosewood)',
        'Acrylic paints',
        'Brass fittings',
        'Embroidered cotton saddle cloth',
        'Mirror work (shisha)',
      ],
      howUsed:
        "Children's toy and decorative showpiece. Artisans craft articulated versions whose legs move when pulled by a string — teaching children about the desert heritage of Rajasthan through play.",
      history:
        'Wooden toy-making for camel and horse figurines has been a cottage industry in Rajasthan for centuries, especially in Jaipur and Jodhpur. The craft was traditionally practiced by the Suthar (carpenter) community and has been sustained through generations of artisan families.',
      images: ['/images/toys/raj-camel-1.jpg', '/images/toys/raj-camel-2.jpg'],
      price: { physical: 390, printed3D: 300 },
      inStock: true,
      relatedToys: ['kathputli-puppet', 'blue-pottery-figurine'],
      badge: 'Desert Heritage',
    },
  ],
  games: [
    {
      id: 'raj-quiz',
      name: 'Rajasthan History & Culture Quiz',
      type: 'quiz',
      stateId: 'rajasthan',
      stateName: 'Rajasthan',
      difficulty: 'medium',
      duration: 120,
      points: 100,
      description:
        "Test your knowledge of Rajasthan's glorious Rajput heritage, desert culture, and magnificent architecture.",
      instructions: [
        'Read each question carefully',
        'Select the best answer from four options',
        'Each correct answer earns points',
        'Complete all 10 questions to earn a bonus badge',
      ],
      thumbnail: '/images/games/raj-quiz.jpg',
      data: [
        {
          id: 'q1',
          question: 'At which battle did Maharana Pratap of Mewar fight the Mughal army in 1576?',
          options: ['Battle of Talikota', 'Battle of Haldighati', 'Battle of Khanwa', 'Battle of Chanderi'],
          correctAnswer: 1,
          explanation:
            "The Battle of Haldighati (1576) was fought between Maharana Pratap's Mewar forces and the Mughal army led by Man Singh I. Though Pratap was forced to retreat, the battle became a symbol of Rajput valor.",
        },
        {
          id: 'q2',
          question: 'Which Rajasthani dance was recognized by UNESCO as an Intangible Cultural Heritage?',
          options: ['Bhangra', 'Ghoomar', 'Dandiya', 'Odissi'],
          correctAnswer: 1,
          explanation:
            'Ghoomar, the traditional swirling folk dance of Rajasthan, was inscribed in the UNESCO Representative List of the Intangible Cultural Heritage of Humanity in 2010 as part of the Garba tradition.',
        },
        {
          id: 'q3',
          question: 'What is the nickname of Jodhpur, home to the mighty Mehrangarh Fort?',
          options: ['The Pink City', 'The Golden City', 'The Blue City', 'The White City'],
          correctAnswer: 2,
          explanation:
            "Jodhpur is called the Blue City because thousands of Brahmin homes in the old city are painted indigo-blue, originally to repel insects and indicate Brahmin residences. It creates a stunning blue panorama visible from Mehrangarh Fort.",
        },
        {
          id: 'q4',
          question: 'What unique material is Jaipur\'s famous Blue Pottery made from?',
          options: ['River clay', 'Quartz stone powder and glass', 'Terracotta', 'Porcelain clay'],
          correctAnswer: 1,
          explanation:
            "Unlike most pottery, Jaipur's Blue Pottery is made from quartz stone powder, glass powder, and Fuller's Earth (Multani mitti) — no conventional clay is used. This gives it a distinctive semi-translucent quality.",
        },
        {
          id: 'q5',
          question: 'How many windows does the iconic Hawa Mahal (Palace of Winds) in Jaipur have?',
          options: ['528', '753', '953', '1111'],
          correctAnswer: 2,
          explanation:
            'The Hawa Mahal has 953 small latticed windows (jharokhas) through which royal women could observe street festivals while remaining unseen, allowing cool breezes to flow through the palace.',
        },
        {
          id: 'q6',
          question: "Rajasthan's iconic food Dal Baati Churma was originally developed as sustaining food for:",
          options: ['Farming communities', 'Rajput warrior campaigns', 'Mughal court feasts', 'Merchant caravans'],
          correctAnswer: 1,
          explanation:
            'Dal Baati was developed as campaign food for Rajput warriors — the hard wheat baati could be baked in desert sand or cow dung fires during military campaigns, remaining edible for days without refrigeration.',
        },
        {
          id: 'q7',
          question: 'Which community has practiced the Kathputli string puppet tradition for over 1,000 years?',
          options: ['Bhopa community', 'Nat community', 'Kalbelia community', 'Manganiyar community'],
          correctAnswer: 1,
          explanation:
            'The Nat community of Rajasthan has practiced Kathputli puppetry for over a millennium, using string marionettes to narrate stories of Rajput heroes and mythology across desert villages.',
        },
        {
          id: 'q8',
          question: 'Which Rajput queen led the Jauhar (mass self-immolation) at Chittorgarh in 1303?',
          options: ['Mirabai', 'Rani Padmini', 'Ahilyabai Holkar', 'Karnavati'],
          correctAnswer: 1,
          explanation:
            'Rani Padmini (Padmavati) led the Jauhar of Rajput women when Alauddin Khilji besieged Chittorgarh in 1303 — choosing collective self-immolation over capture, an act that became the defining legend of Rajput honor.',
        },
        {
          id: 'q9',
          question: 'What is the Pushkar Camel Fair primarily known for?',
          options: [
            'Horse trading and polo',
            'Camel trading, folk performances, and religious rituals',
            'Handicraft exhibitions',
            'Film and music festival',
          ],
          correctAnswer: 1,
          explanation:
            "The Pushkar Camel Fair (Kartik Mela) is one of the world's largest camel fairs, held annually at Pushkar Lake. It combines livestock trading with folk music, dance, camel races, religious rituals, and cultural tourism.",
        },
        {
          id: 'q10',
          question: 'Which astronomer-king founded the Pink City of Jaipur in 1727?',
          options: ['Maharana Pratap', 'Rao Jodha', 'Maharaja Sawai Jai Singh II', 'Man Singh I'],
          correctAnswer: 2,
          explanation:
            "Maharaja Sawai Jai Singh II founded Jaipur in 1727 — a planned city and one of India's earliest. He was also an accomplished astronomer who built the famous Jantar Mantar observatories in five cities.",
        },
      ],
    },
    {
      id: 'raj-memory',
      name: 'Rajasthan Monument Match',
      type: 'memory',
      stateId: 'rajasthan',
      stateName: 'Rajasthan',
      difficulty: 'easy',
      duration: 90,
      points: 75,
      description:
        "Flip the cards and match the iconic forts, palaces, and monuments of Rajasthan — the Land of Kings!",
      instructions: [
        'Click a card to flip and reveal',
        'Remember each card\'s position',
        'Find and click its matching pair',
        'Match all pairs before time runs out',
      ],
      thumbnail: '/images/games/raj-memory.jpg',
      data: [
        { id: 'c1', image: '🏰', label: 'Amber Fort', matchId: 'c2' },
        { id: 'c2', image: '🏰', label: 'Amber Fort', matchId: 'c1' },
        { id: 'c3', image: '🌬️', label: 'Hawa Mahal', matchId: 'c4' },
        { id: 'c4', image: '🌬️', label: 'Hawa Mahal', matchId: 'c3' },
        { id: 'c5', image: '🏯', label: 'Mehrangarh Fort', matchId: 'c6' },
        { id: 'c6', image: '🏯', label: 'Mehrangarh Fort', matchId: 'c5' },
        { id: 'c7', image: '🏛️', label: 'City Palace Jaipur', matchId: 'c8' },
        { id: 'c8', image: '🏛️', label: 'City Palace Jaipur', matchId: 'c7' },
        { id: 'c9', image: '🐪', label: 'Pushkar Fair', matchId: 'c10' },
        { id: 'c10', image: '🐪', label: 'Pushkar Fair', matchId: 'c9' },
        { id: 'c11', image: '🎭', label: 'Kathputli Puppet', matchId: 'c12' },
        { id: 'c12', image: '🎭', label: 'Kathputli Puppet', matchId: 'c11' },
      ],
    },
  ],
  images: {
    hero: '/images/states/rajasthan-hero.jpg',
    collage: [
      '/images/states/raj-amberfort.jpg',
      '/images/states/raj-hawamahal.jpg',
      '/images/states/raj-ghoomar.jpg',
      '/images/states/raj-pushkar.jpg',
      '/images/states/raj-kathputli.jpg',
      '/images/states/raj-dalbaati.jpg',
    ],
    thumbnail: '/images/states/rajasthan-thumb.jpg',
    mapPreview: '/images/states/rajasthan-map.jpg',
  },
  mapCoordinates: { x: '25%', y: '35%' },
  accentColor: '#E8562A',
  secondaryColor: '#D4A843',
};

export default rajasthan;
