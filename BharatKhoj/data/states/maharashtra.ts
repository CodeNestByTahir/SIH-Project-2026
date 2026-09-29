import { State } from '@/types';

const maharashtra: State = {
  id: 'maharashtra',
  slug: 'maharashtra',
  name: 'Maharashtra',
  capital: 'Mumbai',
  region: 'Western India',
  language: ['Marathi', 'Hindi', 'English'],
  established: '1 May 1960',
  tagline: 'Land of Warriors, Wisdom & Wonders',
  description:
    "Maharashtra is a land where ancient civilizations, powerful empires, coastal heritage, and vibrant folk traditions converge into one of India's most culturally rich states.",
  history:
    "Maharashtra has a rich history spanning thousands of years. From the Satavahana dynasty to the Rashtrakutas, the Yadavas, and finally the great Maratha Empire under Chhatrapati Shivaji Maharaj, the land has witnessed epic chapters of Indian history. The Ajanta and Ellora caves represent one of humanity's greatest artistic achievements, created between the 2nd century BCE and 10th century CE. The Maratha Empire in the 17th-18th century shaped the political landscape of the entire subcontinent.",
  culture:
    'Maharashtrian culture blends warrior traditions with deep spiritual practices. The Warkari movement, Ganesh Chaturthi celebrations, classical Natya Sangeet music, Lavani dance, and Tamasha folk theatre are pillars of this vibrant cultural identity. The Paithani saree and Kolhapuri footwear are celebrated globally.',
  traditions: [
    {
      name: 'Wari Pilgrimage',
      description: 'Annual pilgrimage to Pandharpur spanning hundreds of kilometers on foot',
      image: '/images/states/maha-wari.jpg',
    },
    {
      name: 'Ganesh Chaturthi',
      description: '11-day festival celebrating Lord Ganesha with grand public celebrations',
      image: '/images/states/maha-ganesh.jpg',
    },
    {
      name: 'Gudhi Padwa',
      description: 'Maharashtrian New Year celebration with the raising of the Gudhi flag',
      image: '/images/states/maha-gudhi.jpg',
    },
  ],
  festivals: [
    {
      name: 'Ganesh Chaturthi',
      month: 'August/September',
      description: 'The largest festival of Maharashtra with massive public Ganesh idols',
      image: '/images/states/maha-ganesh.jpg',
    },
    {
      name: 'Diwali',
      month: 'October/November',
      description: 'Festival of lights celebrated with unique Maharashtrian traditions',
      image: '/images/states/maha-diwali.jpg',
    },
    {
      name: 'Gudi Padwa',
      month: 'March/April',
      description: 'Maharashtrian New Year',
      image: '/images/states/maha-gudhi.jpg',
    },
  ],
  food: [
    {
      name: 'Puran Poli',
      description: 'Sweet flatbread stuffed with jaggery and lentil filling',
      image: '/images/states/maha-puranpoli.jpg',
    },
    {
      name: 'Vada Pav',
      description: "Mumbai's iconic street food — spiced potato fritter in a bread roll",
      image: '/images/states/maha-vadapav.jpg',
    },
    {
      name: 'Modak',
      description: "Sweet steamed dumplings, Lord Ganesha's favorite offering",
      image: '/images/states/maha-modak.jpg',
    },
  ],
  clothing: [
    {
      name: 'Paithani Saree',
      gender: 'female',
      description: 'Luxurious silk saree with peacock motifs, originally from Paithan',
      image: '/images/states/maha-paithani.jpg',
    },
    {
      name: 'Nauvari Saree',
      gender: 'female',
      description: '9-yard saree worn in Maharashtrian style',
      image: '/images/states/maha-nauvari.jpg',
    },
    {
      name: 'Pheta Turban',
      gender: 'male',
      description: 'Traditional Marathi turban in saffron or white',
      image: '/images/states/maha-pheta.jpg',
    },
  ],
  personalities: [
    {
      id: 'shivaji',
      name: 'Chhatrapati Shivaji Maharaj',
      period: '1630–1680',
      role: 'Founder of Maratha Empire',
      description:
        "One of India's greatest warrior kings who established the Maratha Empire and developed innovative guerrilla warfare tactics. He is revered as a symbol of bravery, justice, and Hindu sovereignty.",
      image: '/images/personalities/shivaji.jpg',
    },
    {
      id: 'savitribai',
      name: 'Savitribai Phule',
      period: '1831–1897',
      role: 'Social Reformer & First Female Teacher',
      description:
        "Pioneer of women's education in India, she opened the first school for girls in Pune in 1848 alongside her husband Jyotirao Phule.",
      image: '/images/personalities/savitribai.jpg',
    },
    {
      id: 'babasaheb',
      name: 'Dr. B.R. Ambedkar',
      period: '1891–1956',
      role: 'Father of Indian Constitution',
      description:
        'Architect of the Indian Constitution, social reformer who fought against caste discrimination and championed the rights of marginalized communities.',
      image: '/images/personalities/ambedkar.jpg',
    },
  ],
  monuments: [
    {
      id: 'ajanta',
      name: 'Ajanta Caves',
      location: 'Aurangabad',
      period: '2nd century BCE – 5th century CE',
      description:
        'UNESCO World Heritage Site with 30 rock-cut Buddhist cave monuments featuring extraordinary paintings and sculptures.',
      image: '/images/monuments/ajanta.jpg',
    },
    {
      id: 'ellora',
      name: 'Ellora Caves',
      location: 'Aurangabad',
      period: '6th–10th century CE',
      description:
        'UNESCO site with 34 caves representing Buddhist, Hindu, and Jain faiths, featuring the massive Kailasa Temple carved from a single rock.',
      image: '/images/monuments/ellora.jpg',
    },
    {
      id: 'gateway',
      name: 'Gateway of India',
      location: 'Mumbai',
      period: '1924',
      description:
        'Iconic arch monument built during British India, the ceremonial entrance to Mumbai from the sea.',
      image: '/images/monuments/gateway.jpg',
    },
    {
      id: 'shaniwarwada',
      name: 'Shaniwar Wada',
      location: 'Pune',
      period: '1732',
      description:
        'Historical fortification and seat of the Peshwa rulers of the Maratha Empire.',
      image: '/images/monuments/shaniwarwada.jpg',
    },
    {
      id: 'raigad',
      name: 'Raigad Fort',
      location: 'Raigad',
      period: '1670',
      description:
        "Capital fort of Chhatrapati Shivaji Maharaj's Maratha Empire, perched 820 meters above sea level.",
      image: '/images/monuments/raigad.jpg',
    },
  ],
  folkArts: [
    {
      name: 'Warli Painting',
      description:
        'Ancient tribal art form using geometric shapes to depict daily life and nature',
      image: '/images/states/maha-warli.jpg',
    },
    {
      name: 'Lavani Dance',
      description: 'Energetic folk dance combining powerful rhythm with expressive storytelling',
      image: '/images/states/maha-lavani.jpg',
    },
    {
      name: 'Koli Dance',
      description: 'Traditional fishermen community dance celebrating the sea and harvest',
      image: '/images/states/maha-koli.jpg',
    },
  ],
  toys: [
    {
      id: 'warli-toy',
      name: 'Warli Art Doll',
      stateId: 'maharashtra',
      stateName: 'Maharashtra',
      period: 'Ancient (2500 BCE+)',
      category: 'cloth',
      description:
        'Hand-painted cloth dolls featuring the iconic Warli tribal art patterns depicting village life, nature, and rituals.',
      significance:
        'Warli art is one of the oldest surviving art forms in the world, used by the Warli tribe of Maharashtra to tell stories and record cultural practices.',
      materials: ['Cotton cloth', 'Natural dyes', 'White pigment'],
      howUsed:
        'Children played with these dolls while adults used them as cultural storytelling objects and home decorations.',
      history:
        'The Warli tribe has practiced this art form for over 4,500 years. The geometric white-on-dark patterns represent the cosmos, daily life, harvests, and wedding rituals.',
      images: ['/images/toys/warli-doll-1.jpg', '/images/toys/warli-doll-2.jpg'],
      price: { physical: 450, printed3D: 350 },
      inStock: true,
      relatedToys: ['clay-ganesha', 'paithani-doll'],
      badge: 'Cultural Treasure',
    },
    {
      id: 'clay-ganesha',
      name: 'Clay Ganesha',
      stateId: 'maharashtra',
      stateName: 'Maharashtra',
      period: 'Traditional',
      category: 'clay',
      description:
        'Handcrafted clay Ganesha idol made by traditional Kumbhar artisans following centuries-old techniques.',
      significance:
        'Lord Ganesha is the patron deity of Maharashtra. The tradition of making eco-friendly clay Ganeshas dates back thousands of years.',
      materials: ['River clay', 'Natural colors', 'Plant-based dyes'],
      howUsed: 'Installed during Ganesh Chaturthi festival and immersed in water on the final day.',
      history:
        'The tradition of making clay Ganesha idols predates the massive public Ganesh Chaturthi festival popularized by Bal Gangadhar Tilak in 1893.',
      images: ['/images/toys/clay-ganesha-1.jpg', '/images/toys/clay-ganesha-2.jpg'],
      price: { physical: 300 },
      inStock: true,
      relatedToys: ['warli-toy', 'paithani-doll'],
      badge: 'Spiritual Heritage',
    },
    {
      id: 'paithani-doll',
      name: 'Paithani Doll',
      stateId: 'maharashtra',
      stateName: 'Maharashtra',
      period: '3rd century BCE+',
      category: 'cloth',
      description:
        'A beautiful doll dressed in a miniature Paithani saree — one of the most luxurious silk sarees in India.',
      significance:
        'Represents the centuries-old silk weaving tradition of Paithan (ancient Pratishthana), a major trade center on the Silk Route.',
      materials: ['Silk', 'Gold/silver threads (zari)', 'Cotton stuffing'],
      howUsed:
        'Gifted at weddings and festivals as a symbol of Maharashtrian culture and prosperity.',
      history:
        'Paithani weaving dates to the Satavahana period (circa 2nd century BCE). The town of Paithan was a major trading hub mentioned in ancient texts.',
      images: ['/images/toys/paithani-doll-1.jpg', '/images/toys/paithani-doll-2.jpg'],
      price: { physical: 850, printed3D: 600 },
      inStock: true,
      relatedToys: ['warli-toy', 'clay-ganesha'],
      badge: 'Silk Heritage',
    },
    {
      id: 'krishna-makhan-toy',
      name: 'Krishna Makhan Chor Toy',
      stateId: 'maharashtra',
      stateName: 'Maharashtra',
      period: 'Medieval',
      category: 'wooden',
      description:
        'A wooden toy depicting young Krishna stealing butter (makhan), a beloved scene from Hindu mythology.',
      significance:
        'Krishna is deeply revered across Maharashtra. This toy connects children to the Bhakti tradition and devotional culture.',
      materials: ['Teak wood', 'Natural paints', 'Lacquer'],
      howUsed: "Children's toy and devotional object in homes and temples.",
      history:
        'Part of the long wooden toy-making tradition in Maharashtra, particularly from the Konkan region artisans.',
      images: ['/images/toys/krishna-toy-1.jpg', '/images/toys/krishna-toy-2.jpg'],
      price: { physical: 550, printed3D: 400 },
      inStock: true,
      relatedToys: ['clay-ganesha', 'warli-toy'],
      badge: 'Bhakti Craft',
    },
  ],
  games: [
    {
      id: 'maha-quiz',
      name: 'Maharashtra History Quiz',
      type: 'quiz',
      stateId: 'maharashtra',
      stateName: 'Maharashtra',
      difficulty: 'medium',
      duration: 120,
      points: 100,
      description: "Test your knowledge of Maharashtra's rich history, culture, and heritage.",
      instructions: [
        'Read each question carefully',
        'Select the correct answer',
        'Each correct answer earns points',
        'Complete all 10 questions for bonus points',
      ],
      thumbnail: '/images/games/maha-quiz.jpg',
      data: [
        {
          id: 'q1',
          question: 'In which year did Chhatrapati Shivaji Maharaj establish the Maratha Empire?',
          options: ['1640', '1647', '1674', '1680'],
          correctAnswer: 2,
          explanation:
            'Shivaji Maharaj was crowned as Chhatrapati (emperor) in 1674 at Raigad Fort, formally establishing the Maratha Empire.',
        },
        {
          id: 'q2',
          question:
            'Which UNESCO World Heritage site in Maharashtra features cave temples with remarkable paintings?',
          options: ['Raigad Fort', 'Ajanta Caves', 'Shaniwar Wada', 'Daulatabad Fort'],
          correctAnswer: 1,
          explanation:
            'The Ajanta Caves are famous for their remarkable Buddhist paintings and sculptures, dating from 2nd century BCE.',
        },
        {
          id: 'q3',
          question: 'Who is credited with starting the public celebration of Ganesh Chaturthi?',
          options: [
            'Chhatrapati Shivaji',
            'Bal Gangadhar Tilak',
            'Dr. B.R. Ambedkar',
            'Gopal Krishna Gokhale',
          ],
          correctAnswer: 1,
          explanation:
            'Bal Gangadhar Tilak transformed Ganesh Chaturthi into a large public festival in 1893 to foster national unity during British rule.',
        },
        {
          id: 'q4',
          question:
            "What is the name of the ancient art form practiced by Maharashtra's tribal communities using white geometric patterns?",
          options: ['Madhubani', 'Warli', 'Gond', 'Pattachitra'],
          correctAnswer: 1,
          explanation:
            "Warli art is an ancient tribal art form from Maharashtra, recognized for its distinctive white geometric patterns on dark backgrounds.",
        },
        {
          id: 'q5',
          question:
            'Which fort served as the capital of the Maratha Empire under Chhatrapati Shivaji?',
          options: ['Pratapgad Fort', 'Sinhagad Fort', 'Raigad Fort', 'Purandar Fort'],
          correctAnswer: 2,
          explanation:
            'Raigad Fort was the capital and throne of the Maratha Empire. Shivaji was crowned here in 1674.',
        },
        {
          id: 'q6',
          question:
            'What is the famous Maharashtrian silk saree known for its peacock motifs?',
          options: ['Kanjeevaram', 'Paithani', 'Banarasi', 'Chanderi'],
          correctAnswer: 1,
          explanation:
            'Paithani sarees from Paithan (Aurangabad district) are famous for their rich silk and distinctive peacock motifs in the border.',
        },
        {
          id: 'q7',
          question: 'Who was the first female teacher of India from Maharashtra?',
          options: ['Ahilyabai Holkar', 'Tarabai Shinde', 'Savitribai Phule', 'Anandibai Joshi'],
          correctAnswer: 2,
          explanation:
            "Savitribai Phule opened India's first school for girls in Pune in 1848 and is considered the first female teacher of India.",
        },
        {
          id: 'q8',
          question: 'The Kailasa Temple at Ellora is remarkable because it was carved from:',
          options: ['Multiple stone blocks', 'A single rock', 'Imported marble', 'Brick and mortar'],
          correctAnswer: 1,
          explanation:
            "The Kailasa Temple (Cave 16) at Ellora is the world's largest monolithic structure, carved entirely from a single basalt rock.",
        },
        {
          id: 'q9',
          question:
            'Which Maharashtrian dance form is characterized by powerful rhythm and expressive body movements?',
          options: ['Kathak', 'Bhangra', 'Lavani', 'Garba'],
          correctAnswer: 2,
          explanation:
            "Lavani is Maharashtra's traditional folk dance known for its powerful rhythm, graceful movements, and expressive storytelling.",
        },
        {
          id: 'q10',
          question: 'In which city was Dr. B.R. Ambedkar born?',
          options: ['Pune', 'Mumbai', 'Ambavade (Mhow)', 'Nagpur'],
          correctAnswer: 2,
          explanation:
            'Dr. B.R. Ambedkar was born in Mhow (now Dr. Ambedkar Nagar) in 1891, though he spent most of his life in Maharashtra.',
        },
      ],
    },
    {
      id: 'maha-memory',
      name: 'Maharashtra Monument Match',
      type: 'memory',
      stateId: 'maharashtra',
      stateName: 'Maharashtra',
      difficulty: 'easy',
      duration: 90,
      points: 75,
      description: 'Match the famous monuments of Maharashtra! Find all pairs to win.',
      instructions: [
        'Flip cards to reveal images',
        'Remember positions',
        'Match identical pairs',
        'Complete before time runs out',
      ],
      thumbnail: '/images/games/maha-memory.jpg',
      data: [
        { id: 'c1', image: '🏛️', label: 'Ajanta Caves', matchId: 'c2' },
        { id: 'c2', image: '🏛️', label: 'Ajanta Caves', matchId: 'c1' },
        { id: 'c3', image: '⛩️', label: 'Gateway of India', matchId: 'c4' },
        { id: 'c4', image: '⛩️', label: 'Gateway of India', matchId: 'c3' },
        { id: 'c5', image: '🏰', label: 'Raigad Fort', matchId: 'c6' },
        { id: 'c6', image: '🏰', label: 'Raigad Fort', matchId: 'c5' },
        { id: 'c7', image: '🗿', label: 'Ellora Caves', matchId: 'c8' },
        { id: 'c8', image: '🗿', label: 'Ellora Caves', matchId: 'c7' },
        { id: 'c9', image: '🏯', label: 'Shaniwar Wada', matchId: 'c10' },
        { id: 'c10', image: '🏯', label: 'Shaniwar Wada', matchId: 'c9' },
        { id: 'c11', image: '🌊', label: 'Elephanta Caves', matchId: 'c12' },
        { id: 'c12', image: '🌊', label: 'Elephanta Caves', matchId: 'c11' },
      ],
    },
    {
      id: 'maha-timeline',
      name: 'Maratha Empire Timeline',
      type: 'timeline',
      stateId: 'maharashtra',
      stateName: 'Maharashtra',
      difficulty: 'hard',
      duration: 150,
      points: 150,
      description:
        "Arrange major events of Maharashtra's history in the correct chronological order.",
      instructions: [
        'Drag the events',
        'Drop them in chronological order',
        'Earliest event goes first',
        'Submit to check your answer',
      ],
      thumbnail: '/images/games/maha-timeline.jpg',
      data: [
        {
          id: 'e1',
          event: 'Ajanta Caves Painting Begins',
          year: '200 BCE',
          description: 'Buddhist monks begin creating extraordinary cave paintings',
        },
        {
          id: 'e2',
          event: 'Satavahana Dynasty Rules',
          year: '230 BCE',
          description: "One of Maharashtra's earliest major dynasties establishes control",
        },
        {
          id: 'e3',
          event: 'Shivaji Born at Shivneri Fort',
          year: '1630',
          description: 'Birth of the future Maratha king who would transform India',
        },
        {
          id: 'e4',
          event: 'Shivaji Crowned Chhatrapati',
          year: '1674',
          description: 'Grand coronation ceremony at Raigad Fort establishes Maratha Empire',
        },
        {
          id: 'e5',
          event: 'Peshwa Era Begins',
          year: '1713',
          description:
            'Peshwa Balaji Vishwanath becomes chief minister, beginning Peshwa dominance',
        },
        {
          id: 'e6',
          event: 'Battle of Panipat',
          year: '1761',
          description: 'Third Battle of Panipat marks a turning point for the Maratha Empire',
        },
        {
          id: 'e7',
          event: 'Ganesh Chaturthi Public Festival',
          year: '1893',
          description:
            'Bal Gangadhar Tilak transforms the festival into a tool for national unity',
        },
        {
          id: 'e8',
          event: 'Maharashtra State Formation',
          year: '1960',
          description: 'Maharashtra is formed as a separate state on linguistic basis',
        },
      ],
    },
  ],
  images: {
    hero: '/images/states/maharashtra-hero.jpg',
    collage: [
      '/images/states/maha-ajanta.jpg',
      '/images/states/maha-shivaji.jpg',
      '/images/states/maha-warli.jpg',
      '/images/states/maha-ganesh.jpg',
      '/images/states/maha-gateway.jpg',
      '/images/states/maha-paithani.jpg',
    ],
    thumbnail: '/images/states/maharashtra-thumb.jpg',
    mapPreview: '/images/states/maharashtra-map.jpg',
  },
  mapCoordinates: { x: '32%', y: '55%' },
  accentColor: '#FF6B35',
  secondaryColor: '#8B1A1A',
};

export default maharashtra;
