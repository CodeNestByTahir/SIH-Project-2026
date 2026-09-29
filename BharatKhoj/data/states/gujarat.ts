import { State } from '@/types';

const gujarat: State = {
  id: 'gujarat',
  slug: 'gujarat',
  name: 'Gujarat',
  capital: 'Gandhinagar',
  region: 'Western India',
  language: ['Gujarati', 'Hindi'],
  established: '1 May 1960',
  tagline: 'The Jewel of the West — Commerce, Culture & Craft',
  description:
    "Gujarat is India's gateway to the world — a state whose merchant spirit, artistic genius, and ancient roots stretch back to the very dawn of urban civilization. From the Harappan docks of Lothal to the spinning wheel of Mahatma Gandhi, Gujarat has always stood at the intersection of enterprise and idealism.",
  history:
    "Gujarat's history is among the most ancient and layered in all of India. The site of Lothal — a major Indus Valley Civilization port city dating to 2400 BCE — contained the world's earliest known dock, demonstrating Gujarat's maritime trade prowess 4,500 years ago. The Mauryan Emperor Ashoka governed Saurashtra; the Solanki dynasty (950–1300 CE) presided over a golden age of art and architecture, building the magnificent Sun Temple at Modhera and the Rani ki Vav step-well at Patan (now UNESCO listed). Arab and Portuguese traders arrived on its coastlines, making Gujarat a global crossroads. The Sultanate of Gujarat (1407–1573) and later Mughal rule shaped its medieval character. Gujarat is also the birthplace of Mahatma Gandhi (Porbandar, 1869) and Sardar Vallabhbhai Patel (Nadiad, 1875) — two architects of modern India.",
  culture:
    "Gujarati culture is vibrant and entrepreneurial, deeply rooted in Jain philosophy, Vaishnavite devotion, and a tradition of non-violence. The Garba and Dandiya Raas dances — performed with dazzling energy during Navratri — are UNESCO recognized as Intangible Cultural Heritage. Gujarat's craft traditions are world-class: Patola silk double-ikat weaving (Patan), Rogan art (Kutch), Bandhani tie-dye, Ajrakh block printing, and intricate Kutchi mirror-work (Abhla bharat) embroidery are practiced by generations of artisan communities. The White Rann of Kutch festival showcases the stark white salt desert under a full moon — one of India's most surreal experiences.",
  traditions: [
    {
      name: 'Garba & Dandiya Raas',
      description:
        'UNESCO-listed circular folk dance performed during Navratri — 9 nights of devotional dance dedicated to Goddess Amba. Garba is performed around a clay pot or idol, while Dandiya uses decorated sticks',
      image: '/images/states/guj-garba.jpg',
    },
    {
      name: 'Uttarayan (Makar Sankranti) Kite Festival',
      description:
        "On January 14 every year, Gujarat's skies explode with millions of kites — families gather on rooftops to fly kites and cut rivals' strings in friendly battles; Ahmedabad hosts an international kite festival",
      image: '/images/states/guj-uttarayan.jpg',
    },
    {
      name: 'Rann Utsav',
      description:
        'Annual festival at the Great Rann of Kutch (November–February) celebrating Kutchi culture, crafts, music, and the surreal beauty of the white salt desert under the full moon sky',
      image: '/images/states/guj-rann.jpg',
    },
  ],
  festivals: [
    {
      name: 'Navratri',
      month: 'September/October',
      description:
        "Gujarat's most celebrated festival — 9 nights of Garba and Dandiya Raas dancing honoring Goddess Amba. Ahmedabad's Navratri is the world's largest Garba celebration, drawing millions of participants",
      image: '/images/states/guj-navratri.jpg',
    },
    {
      name: 'Uttarayan',
      month: 'January',
      description:
        "The Makar Sankranti kite festival — celebrated with unparalleled enthusiasm across Gujarat. The state virtually shuts down as families fly kites from sunrise to sunset, and Ahmedabad hosts one of the world's premier international kite festivals",
      image: '/images/states/guj-uttarayan.jpg',
    },
    {
      name: 'Rann Utsav',
      month: 'November–February',
      description:
        "Kutch's great desert culture festival celebrating Gujarati folk art, music, dance, and handicrafts against the breathtaking backdrop of the white salt desert",
      image: '/images/states/guj-rann.jpg',
    },
  ],
  food: [
    {
      name: 'Dhokla',
      description:
        "Gujarat's beloved steamed savory cake made from fermented rice and chickpea batter — light, spongy, and tangy, topped with a tempering of mustard seeds, curry leaves, and green chilies; eaten for breakfast or as a snack across India",
      image: '/images/states/guj-dhokla.jpg',
    },
    {
      name: 'Undhiyu',
      description:
        "The quintessential winter dish of Gujarat — a slow-cooked one-pot medley of seasonal vegetables (surti papdi, purple yam, raw banana, fenugreek dumplings) cooked underground in earthen pots (matlu) with oil and spices. The name comes from 'undhu' (upside-down) referring to the inverted cooking pot",
      image: '/images/states/guj-undhiyu.jpg',
    },
    {
      name: 'Thepla',
      description:
        "Thin, soft flatbreads made from wheat flour mixed with methi (fenugreek) leaves, sesame, and spices — a staple Gujarati travel food that stays fresh for days. Paired with mango pickle and yogurt, it is eaten at breakfast and carried on long journeys",
      image: '/images/states/guj-thepla.jpg',
    },
  ],
  clothing: [
    {
      name: 'Patola Saree',
      gender: 'female',
      description:
        "The most prized silk saree in India — a double-ikat woven masterpiece from Patan where both warp and weft threads are resist-dyed before weaving, creating geometric patterns of extraordinary precision. A single Patola saree can take 6 months to weave and costs lakhs of rupees. It is a GI-tagged product and UNESCO heritage craft",
      image: '/images/states/guj-patola.jpg',
    },
    {
      name: 'Kutchi Embroidered Dress',
      gender: 'female',
      description:
        "Vibrantly colored blouses, skirts, and dupattas from the Kutch region, hand-embroidered with intricate Abhla bharat (mirror-work), chain stitch, and geometric patterns — each community (Rabari, Ahir, Mutwa) has its own distinctive embroidery style identifiable by color, stitch, and motif",
      image: '/images/states/guj-kutchi.jpg',
    },
  ],
  personalities: [
    {
      id: 'mahatma-gandhi',
      name: 'Mahatma Gandhi',
      period: '1869–1948',
      role: 'Father of the Nation, Leader of Indian Independence',
      description:
        "Born in Porbandar, Gujarat, Mohandas Karamchand Gandhi transformed the Indian independence struggle through the philosophy of Ahimsa (non-violence) and Satyagraha (truth-force). His 1930 Dandi March (Salt March) — walking 240 miles from Sabarmati Ashram, Ahmedabad, to the sea to make salt in defiance of British law — became a defining moment of the 20th century. Gandhi's ideas influenced global civil rights movements from Martin Luther King Jr. to Nelson Mandela.",
      image: '/images/personalities/gandhi.jpg',
    },
    {
      id: 'sardar-patel',
      name: 'Sardar Vallabhbhai Patel',
      period: '1875–1950',
      role: 'Iron Man of India, First Deputy Prime Minister',
      description:
        "Born in Nadiad, Gujarat, Sardar Patel was the master architect of India's political unification. As the first Home Minister and Deputy Prime Minister of independent India, he successfully integrated 562 princely states into the Indian Union — a staggering diplomatic and political achievement completed within three years of independence. The world's tallest statue, the Statue of Unity (182m) stands on the Narmada river in his honor.",
      image: '/images/personalities/sardar-patel.jpg',
    },
    {
      id: 'narsinh-mehta',
      name: 'Narsinh Mehta',
      period: '1414–1481',
      role: 'Poet-Saint, Father of Gujarati Literature',
      description:
        "The greatest poet-saint of the Gujarati Bhakti tradition, Narsinh Mehta composed thousands of devotional songs (bhajans and prabhatiya) celebrating Lord Krishna. His iconic composition 'Vaishnav Jan To Tene Kahiye' — defining the true Vaishnav as one who feels others' pain — was Mahatma Gandhi's favorite devotional song, sung daily at his ashram prayers.",
      image: '/images/personalities/narsinh-mehta.jpg',
    },
  ],
  monuments: [
    {
      id: 'lothal',
      name: 'Lothal Archaeological Site',
      location: 'Dholka, Ahmedabad district',
      period: 'c. 2400–1900 BCE',
      description:
        "One of the most important cities of the ancient Indus Valley Civilization, Lothal contains the world's oldest known dry dock — a 216m × 37m basin connected to the Sabarmati river, built 4,500 years ago. The archaeological site reveals a planned city with a sophisticated drainage system, warehouse, bead factory, and India's first shipyard. A UNESCO World Heritage tentative list site.",
      image: '/images/monuments/lothal.jpg',
    },
    {
      id: 'rani-ki-vav',
      name: 'Rani ki Vav',
      location: 'Patan',
      period: '11th century CE (Solanki dynasty)',
      description:
        "A UNESCO World Heritage Site and one of the finest examples of step-well (vav) architecture in India, built by Queen Udayamati in memory of her husband, Solanki king Bhimdev I. Its seven levels descend to the water table and are adorned with over 500 principal sculptures and more than 1,000 minor ones depicting deities, apsaras, and Vishnu's avatars — a vertical temple inverted into the earth.",
      image: '/images/monuments/rani-ki-vav.jpg',
    },
    {
      id: 'sabarmati-ashram',
      name: 'Sabarmati Ashram',
      location: 'Ahmedabad',
      period: '1917',
      description:
        "Mahatma Gandhi's home and base of operations for 13 years (1917–1930), from where he launched the historic Dandi Salt March in 1930. Now a national memorial, the ashram preserves Gandhi's simple living quarters, spinning wheel (charkha), and personal belongings. It stands on the banks of the Sabarmati river and is one of India's most visited heritage sites.",
      image: '/images/monuments/sabarmati-ashram.jpg',
    },
    {
      id: 'modhera-sun-temple',
      name: 'Sun Temple, Modhera',
      location: 'Modhera, Mehsana district',
      period: '1026 CE (Solanki dynasty)',
      description:
        "Built by Solanki king Bhimdev I, this extraordinary temple dedicated to the sun god Surya is aligned so precisely that at the equinoxes, the sun's rays fall directly on the idol in the sanctum. Its stepped tank (Surya Kund) has 108 miniature shrines on its banks. The temple's intricate carvings are considered among the finest examples of Solanki (Maru-Gurjara) architecture.",
      image: '/images/monuments/modhera-sun-temple.jpg',
    },
  ],
  folkArts: [
    {
      name: 'Rogan Art',
      description:
        "A 300-year-old dying art from Nirona village, Kutch — practiced by a single family (the Khatri family) — in which thick, castor-oil-based paint is manipulated on fabric with a metal rod, never touching the surface, creating intricate mirrored patterns. A GI-tagged craft gifted by craftsman Abdul Gafur Khatri to Prime Minister Modi, who then gifted it to President Obama.",
      image: '/images/states/guj-rogan.jpg',
    },
    {
      name: 'Patola Weaving',
      description:
        "The most technically demanding textile tradition in India — double-ikat silk weaving from Patan, where both warp and weft threads are precisely resist-dyed before weaving begins. Practiced only by the Salvi family for centuries, each Patola saree takes months to complete and commands extraordinary prices.",
      image: '/images/states/guj-patola.jpg',
    },
    {
      name: 'Garba & Dandiya Raas',
      description:
        "UNESCO Intangible Cultural Heritage — the circular devotional folk dance of Gujarat performed during Navratri. Garba is danced around a central lamp or Goddess image; Dandiya uses painted bamboo sticks. The dance embodies Gujarat's communal joy and devotion to Goddess Shakti.",
      image: '/images/states/guj-garba.jpg',
    },
    {
      name: 'Kutchi Embroidery',
      description:
        "The vibrant mirror-work (Abhla bharat) and chain-stitch embroidery traditions of the Kutch region — each of the 16+ pastoral communities has its own distinctive style, motifs, and color palette, making Kutchi embroidery one of the most diverse textile heritages in the world.",
      image: '/images/states/guj-embroidery.jpg',
    },
  ],
  toys: [
    {
      id: 'chandrabhaga-toy',
      name: 'Lothal Ship Toy',
      stateId: 'gujarat',
      stateName: 'Gujarat',
      period: 'c. 2400 BCE (Harappan era)',
      category: 'clay',
      description:
        "A hand-crafted clay toy boat inspired by the ancient terracotta ship models discovered at Lothal — the Indus Valley Civilization's great port city in Gujarat. The original toys, excavated by archaeologists, are evidence that Harappan children played with miniature versions of the trading vessels that sailed from Lothal to Mesopotamia 4,500 years ago.",
      significance:
        "Lothal was the world's first known shipbuilding city, with a massive brick-lined dock. The terracotta boat toys found there are among the earliest known toys in human history — connecting modern Gujarat's children to the very dawn of maritime trade and civilization. They represent Gujarat's 4,500-year-old identity as a trading nation.",
      materials: [
        'River clay',
        'Terracotta glaze',
        'Natural ochre pigment',
        'Reed for mast',
      ],
      howUsed:
        "Children played with these boat toys in water — re-enacting the trading voyages that Lothal merchants undertook across the Arabian Sea. Modern versions are used as educational tools in heritage learning programs and are displayed in the Lothal Museum.",
      history:
        "Archaeological excavations at Lothal (1954–1963) by S.R. Rao of the Archaeological Survey of India uncovered dozens of terracotta boat toys alongside the world's oldest dry dock. The site proved that the Harappan people of Gujarat were accomplished seafarers who traded with Mesopotamia, Persia, and Egypt. This toy tradition connects modern Gujarat to its 4,500-year-old origins.",
      images: ['/images/toys/lothal-boat-1.jpg', '/images/toys/lothal-boat-2.jpg'],
      price: { physical: 320, printed3D: 260 },
      inStock: true,
      relatedToys: ['rogan-art-object', 'garba-doll'],
      badge: 'Harappan Heritage',
    },
    {
      id: 'rogan-art-object',
      name: 'Rogan Art Decorative Panel',
      stateId: 'gujarat',
      stateName: 'Gujarat',
      period: 'c. 17th century CE (300+ years old)',
      category: 'traditional',
      description:
        "A small decorative panel featuring Rogan Art — Gujarat's rarest and most extraordinary folk art form, practiced exclusively by the Khatri family of Nirona village in Kutch. Thick castor-oil-based paint is manipulated with a metal rod that never touches the fabric surface, creating intricate mirrored designs. Each piece is unique and one-of-a-kind.",
      significance:
        "Rogan Art is critically endangered — only one family, the Khatris of Nirona, practices it today. It gained global attention when craftsman Abdul Gafur Khatri gifted a Rogan piece to Prime Minister Narendra Modi, who presented it to US President Barack Obama in 2015. The art form is now on international radar as a must-preserve heritage craft of India.",
      materials: [
        'Castor oil (heated and thickened)',
        'Natural stone pigments',
        'Cotton or silk fabric base',
        'Metal stylus rod',
      ],
      howUsed:
        "Displayed as wall art and decorative panels, used for festive gifting, and increasingly collected by international art enthusiasts. The technique requires no brushes — the artist manipulates paint purely through the rod's controlled movement above the fabric, creating bilateral mirror patterns by folding the fabric while paint is wet.",
      history:
        "Rogan art originated in Persia and was brought to the Kutch region of Gujarat approximately 300–400 years ago by Muslim artisans. It flourished for centuries as a cottage industry for decorating bridal textiles. By the 20th century, the craft had nearly died out. The Khatri family of Nirona single-handedly kept it alive, and it has now received national and international recognition.",
      images: ['/images/toys/rogan-art-1.jpg', '/images/toys/rogan-art-2.jpg'],
      price: { physical: 950, printed3D: 700 },
      inStock: true,
      relatedToys: ['chandrabhaga-toy', 'garba-doll'],
      badge: 'Critically Rare Craft',
    },
    {
      id: 'garba-doll',
      name: 'Garba Doll',
      stateId: 'gujarat',
      stateName: 'Gujarat',
      period: 'Traditional',
      category: 'cloth',
      description:
        "A beautifully dressed cloth doll in traditional Gujarati Navratri attire — wearing a ghagra-choli embroidered with Kutchi mirror-work, holding a miniature Garba pot on her head. She wears bandhani (tie-dye) fabric and traditional silver jewelry, representing the joyful spirit of Gujarat's most beloved festival.",
      significance:
        "Garba is the soul of Gujarati culture — UNESCO listed as Intangible Cultural Heritage. The Garba Doll embodies the festive identity of Gujarat: the vibrant ghagra-choli, the mirror embroidery, the Garba pot, and the circular dance formation that draws millions of participants during Navratri. Gifting this doll is a gesture of sharing Gujarati cultural joy.",
      materials: [
        'Cotton fabric',
        'Mirror-work (shisha) embroidery',
        'Bandhani-printed cloth',
        'Brass wire jewelry',
        'Ceramic mini Garba pot',
        'Cotton stuffing',
      ],
      howUsed:
        "Children's play doll and decorative festival object. Given as gifts during Navratri and Diwali. Used in cultural education programs to introduce children to Gujarati folk traditions, dance, and dress.",
      history:
        "Cloth dolls dressed in regional attire have been a Gujarat craft tradition for centuries, particularly in communities like the Ahir and Rabari of Kutch who are master embroiderers. The Garba Doll specifically celebrates the Navratri tradition — a 9-night festival of devotion and dance whose origins lie in ancient Shakti worship practices of the region.",
      images: ['/images/toys/garba-doll-1.jpg', '/images/toys/garba-doll-2.jpg', '/images/toys/garba-doll-3.jpg'],
      price: { physical: 480, printed3D: 370 },
      inStock: true,
      relatedToys: ['chandrabhaga-toy', 'rogan-art-object'],
      badge: 'Festival Spirit',
    },
  ],
  games: [
    {
      id: 'guj-quiz',
      name: 'Gujarat Heritage & Culture Quiz',
      type: 'quiz',
      stateId: 'gujarat',
      stateName: 'Gujarat',
      difficulty: 'medium',
      duration: 120,
      points: 100,
      description:
        "Explore 4,500 years of Gujarat's extraordinary history — from the Harappan docks of Lothal to Gandhi's spinning wheel. How well do you know the Jewel of the West?",
      instructions: [
        'Read each question carefully',
        'Choose the best answer from four options',
        'Each correct answer earns you points',
        'Answer all 10 to earn the Gujarat Explorer badge',
      ],
      thumbnail: '/images/games/guj-quiz.jpg',
      data: [
        {
          id: 'q1',
          question: 'What extraordinary structure was discovered at Lothal, dating back to 2400 BCE?',
          options: [
            'The world\'s oldest temple',
            'The world\'s earliest known dry dock',
            'The oldest city wall',
            'The first iron smelter',
          ],
          correctAnswer: 1,
          explanation:
            "Lothal contains the world's earliest known dry dock — a 216m × 37m brick-lined basin connected to the Sabarmati river, proving that Harappan people of Gujarat were sophisticated maritime traders who sailed to Mesopotamia 4,500 years ago.",
        },
        {
          id: 'q2',
          question: 'Which famous march did Mahatma Gandhi begin from Sabarmati Ashram, Ahmedabad in 1930?',
          options: ['Quit India March', 'Dandi Salt March', 'Non-Cooperation March', 'Champaran March'],
          correctAnswer: 1,
          explanation:
            "Gandhi's Dandi Salt March (March 12–April 6, 1930) covered 240 miles from Sabarmati Ashram to Dandi on the coast, where he made salt from seawater in defiance of British salt tax laws — a turning point in India's independence movement.",
        },
        {
          id: 'q3',
          question: 'Which UNESCO World Heritage step-well in Gujarat was built by Queen Udayamati in the 11th century?',
          options: ['Adalaj Stepwell', 'Rani ki Vav', 'Dada Harir Vav', 'Modhera Surya Kund'],
          correctAnswer: 1,
          explanation:
            "Rani ki Vav (Queen's Stepwell) in Patan is a UNESCO World Heritage Site built in 1063 CE by Queen Udayamati in memory of her husband, King Bhimdev I. Its seven levels are adorned with over 500 major sculptures.",
        },
        {
          id: 'q4',
          question: "Gujarat's rarest folk art, Rogan Art, is currently practiced by how many families?",
          options: ['Over 50 families', 'About 10 families', 'Only one family', 'Three families'],
          correctAnswer: 2,
          explanation:
            "Rogan Art is critically endangered — today only the Khatri family of Nirona village in Kutch practices this extraordinary castor-oil-based painting technique, making it one of India's rarest living crafts.",
        },
        {
          id: 'q5',
          question: 'Which Gujarati textile is created using the double-ikat technique where both warp AND weft threads are dyed before weaving?',
          options: ['Bandhani', 'Patola', 'Ajrakh', 'Mashru'],
          correctAnswer: 1,
          explanation:
            "Patola sarees from Patan, Gujarat, are woven using the extremely rare double-ikat technique — both warp and weft silk threads are resist-dyed precisely before weaving begins, creating perfectly aligned geometric patterns. Only the Salvi family in Patan still makes authentic double-ikat Patola.",
        },
        {
          id: 'q6',
          question: 'Which festival, celebrated on January 14th, fills Gujarat\'s skies with millions of kites?',
          options: ['Navratri', 'Uttarayan', 'Rann Utsav', 'Diwali'],
          correctAnswer: 1,
          explanation:
            "Uttarayan (Makar Sankranti) on January 14 is Gujarat's most exuberant festival — the state virtually shuts down as people fly kites from rooftops all day. Ahmedabad hosts an International Kite Festival drawing participants from dozens of countries.",
        },
        {
          id: 'q7',
          question: "Which Gujarati poet-saint's bhajan 'Vaishnav Jan To' was Mahatma Gandhi's favorite prayer?",
          options: ['Kabir', 'Tukaram', 'Narsinh Mehta', 'Mirabai'],
          correctAnswer: 2,
          explanation:
            "Narsinh Mehta's 15th-century composition 'Vaishnav Jan To Tene Kahiye' — defining a true Vaishnav as one who feels others' suffering as their own — was sung daily at Gandhi's ashram prayers. It remains one of the most beloved devotional songs in the Gujarati tradition.",
        },
        {
          id: 'q8',
          question: 'What does the name of Gujarat\'s famous winter dish Undhiyu literally mean?',
          options: ['Mixed vegetables', 'Upside-down', 'Slow-cooked', 'Desert stew'],
          correctAnswer: 1,
          explanation:
            "Undhiyu comes from the Gujarati word 'undhu' (upside-down) — referring to the traditional method of cooking the mixed seasonal vegetables in sealed earthen pots buried upside-down in the ground over a fire, allowing slow underground cooking.",
        },
        {
          id: 'q9',
          question: "Which UNESCO-recognized dance tradition is the centerpiece of Gujarat's Navratri festival?",
          options: ['Bhangra', 'Garba and Dandiya Raas', 'Kathak', 'Ghoomar'],
          correctAnswer: 1,
          explanation:
            "Garba and Dandiya Raas — Gujarat's circular devotional folk dances — were inscribed in the UNESCO Intangible Cultural Heritage list. During Navratri, millions of Gujaratis dance for 9 consecutive nights, making Ahmedabad's Navratri the world's largest Garba celebration.",
        },
        {
          id: 'q10',
          question: "Which architectural marvel built by the Solanki dynasty in 1026 CE is precisely aligned to the sun's rays at the equinoxes?",
          options: ['Rani ki Vav', 'Sun Temple at Modhera', 'Sabarmati Ashram', 'Adalaj Stepwell'],
          correctAnswer: 1,
          explanation:
            "The Sun Temple at Modhera (1026 CE) is aligned so that at the spring and autumn equinoxes, the rising sun's rays fall directly on the idol of Surya in the sanctum. Its stepped tank Surya Kund has 108 miniature shrines — a masterpiece of Solanki (Maru-Gurjara) architecture.",
        },
      ],
    },
    {
      id: 'guj-memory',
      name: 'Gujarat Wonders Match',
      type: 'memory',
      stateId: 'gujarat',
      stateName: 'Gujarat',
      difficulty: 'easy',
      duration: 90,
      points: 75,
      description:
        "Match Gujarat's iconic monuments, crafts, and cultural symbols! From the ancient docks of Lothal to Gandhi's charkha — how sharp is your memory?",
      instructions: [
        'Click a card to flip and reveal its symbol',
        'Remember where each card is',
        'Find and click its matching pair',
        'Match all pairs before the timer runs out',
      ],
      thumbnail: '/images/games/guj-memory.jpg',
      data: [
        { id: 'c1', image: '⚓', label: 'Lothal Dock', matchId: 'c2' },
        { id: 'c2', image: '⚓', label: 'Lothal Dock', matchId: 'c1' },
        { id: 'c3', image: '🕌', label: 'Rani ki Vav', matchId: 'c4' },
        { id: 'c4', image: '🕌', label: 'Rani ki Vav', matchId: 'c3' },
        { id: 'c5', image: '🪁', label: 'Kite Festival', matchId: 'c6' },
        { id: 'c6', image: '🪁', label: 'Kite Festival', matchId: 'c5' },
        { id: 'c7', image: '🎡', label: 'Garba Dance', matchId: 'c8' },
        { id: 'c8', image: '🎡', label: 'Garba Dance', matchId: 'c7' },
        { id: 'c9', image: '🧵', label: 'Patola Weaving', matchId: 'c10' },
        { id: 'c10', image: '🧵', label: 'Patola Weaving', matchId: 'c9' },
        { id: 'c11', image: '☀️', label: 'Modhera Sun Temple', matchId: 'c12' },
        { id: 'c12', image: '☀️', label: 'Modhera Sun Temple', matchId: 'c11' },
      ],
    },
  ],
  images: {
    hero: '/images/states/gujarat-hero.jpg',
    collage: [
      '/images/states/guj-lothal.jpg',
      '/images/states/guj-rann.jpg',
      '/images/states/guj-garba.jpg',
      '/images/states/guj-patola.jpg',
      '/images/states/guj-sabarmati.jpg',
      '/images/states/guj-rogan.jpg',
    ],
    thumbnail: '/images/states/gujarat-thumb.jpg',
    mapPreview: '/images/states/gujarat-map.jpg',
  },
  mapCoordinates: { x: '18%', y: '47%' },
  accentColor: '#F59E0B',
  secondaryColor: '#059669',
};

export default gujarat;
