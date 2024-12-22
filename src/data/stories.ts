import { Story } from '../types/story';

export const stories: Story[] = [
  {
    id: 'enchanted-forest',
    translations: {
      en: {
        title: "The Enchanted Forest",
        content: "Deep within the mystical woods, where ancient trees whispered secrets to those who would listen, lived a wise old owl named Sage. Every night, he would teach the young forest creatures about the magic that flowed through every leaf and branch. One special evening, they discovered a glowing flower that could grant wishes, but only to those pure of heart...",
        moralOfStory: "True magic lies in the purity of our intentions."
      },
      es: {
        title: "El Bosque Encantado",
        content: "En lo profundo del bosque místico, donde los árboles antiguos susurraban secretos a quienes escuchaban, vivía un sabio búho llamado Sage. Cada noche, enseñaba a las jóvenes criaturas del bosque sobre la magia que fluía a través de cada hoja y rama...",
        moralOfStory: "La verdadera magia reside en la pureza de nuestras intenciones."
      },
      hi: {
        title: "जादुई वन",
        content: "रहस्यमय जंगल के अंदर, जहां प्राचीन पेड़ उन लोगों से रहस्य फुसफुसाते थे जो सुनते थे, एक बुद्धिमान उल्लू सेज रहता था। हर रात, वह जंगल के युवा जीवों को हर पत्ती और शाखा में बहने वाली जादू के बारे में सिखाता था...",
        moralOfStory: "सच्चा जादू हमारे इरादों की शुद्धता में निहित है।"
      }
    },
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=80&w=1000",
    genre: "fantasy",
    ageGroup: "children",
    mood: "mysterious",
    readingLevel: "beginner",
    estimatedReadingTime: 5,
    backgroundColor: "#2d3748",
    keywords: ["forest", "magic", "wisdom", "nature"],
    characters: [
      {
        name: "Sage",
        avatar: "https://i.pinimg.com/736x/e0/45/99/e04599250b9fc4195a0a427a5065f704.jpg",
        description: "A wise old owl who teaches forest magic"
      }
    ],
    interactiveElements: {
      minigames: [
        {
          type: "memory",
          config: {
            cards: ["owl", "flower", "tree", "moon"],
            theme: "forest"
          }
        }
      ],
      animations: [
        {
          type: "particle",
          trigger: "hover",
          duration: 1000
        }
      ]
    },
    soundEffects: {
      background: "/sounds/forest-ambience.mp3",
      effects: {
        owlHoot: "/sounds/owl-hoot.mp3",
        leaves: "/sounds/leaves-rustle.mp3"
      }
    }
  },
  {
    id: "space-explorer",
    translations: {
      en: {
        title: "The Cosmic Adventure",
        content: "Join young astronaut Maya on her first journey through the solar system! With her advanced spaceship and trusty robot companion Beep, she's about to discover the wonders that lie beyond Earth. From the rings of Saturn to the storms of Jupiter, every planet holds a new surprise...",
        moralOfStory: "Curiosity and bravery lead to amazing discoveries."
      },
      fr: {
        title: "L'Aventure Cosmique",
        content: "Rejoignez la jeune astronaute Maya dans son premier voyage à travers le système solaire ! Avec son vaisseau spatial avancé et son fidèle compagnon robot Beep, elle est sur le point de découvrir les merveilles qui se trouvent au-delà de la Terre...",
        moralOfStory: "La curiosité et le courage mènent à des découvertes extraordinaires."
      }
    },
    image: "https://i.pinimg.com/736x/e5/89/48/e58948bdb834c3df856091b7163caf8f.jpg",
    genre: "science",
    ageGroup: "young",
    mood: "exciting",
    readingLevel: "intermediate",
    estimatedReadingTime: 8,
    backgroundColor: "#1a202c",
    keywords: ["space", "science", "exploration", "adventure"],
    characters: [
      {
        name: "Maya",
        avatar: "https://i.pinimg.com/736x/b0/97/22/b097225ccf6f17ddcc158f89d7bd01f1.jpg",
        description: "A brave young astronaut with a passion for discovery"
      },
      {
        name: "Beep",
        avatar: "https://i.pinimg.com/736x/08/58/3c/08583cba3e1a3187ba59a5566eb41858.jpg",
        description: "Maya's loyal robot companion"
      }
    ],
    interactiveElements: {
      minigames: [
        {
          type: "quiz",
          config: {
            questions: [
              {
                question: "Which planet is known as the Red Planet?",
                options: ["Mars", "Venus", "Jupiter", "Saturn"],
                answer: 0
              }
            ]
          }
        }
      ],
      animations: [
        {
          type: "float",
          trigger: "scroll",
          duration: 2000
        }
      ]
    },
    soundEffects: {
      background: "/sounds/space-ambience.mp3",
      effects: {
        rocket: "/sounds/rocket-launch.mp3",
        beep: "/sounds/robot-beep.mp3"
      }
    }
  },
  {
    id: "dragon-baker",
    translations: {
      en: {
        title: "The Dragon Who Loved to Bake",
        content: "In a cozy cave high up in the Sugary Mountains lived Cinnamon, a dragon with a most unusual passion: baking! Instead of breathing fire to scare people, Cinnamon used his warm breath to bake the most delicious treats in all the kingdom. His specialty? Cloud-soft marshmallow cupcakes with a perfectly toasted top!",
        moralOfStory: "Your differences can be your greatest strengths."
      },
      ja: {
        title: "お菓子作りが大好きなドラゴン",
        content: "砂糖の山の高いところにある居心地の良い洞窟に、シナモンという変わった情熱を持つドラゴンが住んでいました：お菓子作りです！人々を怖がらせるために火を吹くのではなく、シナモンは暖かい息を使って王国で最も美味しいお菓子を焼きました。",
        moralOfStory: "あなたの違いは、最大の強みとなることができます。"
      }
    },
    image: "https://i.pinimg.com/736x/e6/ea/aa/e6eaaa530afd331e2c6bab7cacd84974.jpg",
    genre: "fairytale",
    ageGroup: "children",
    mood: "funny",
    readingLevel: "beginner",
    estimatedReadingTime: 6,
    backgroundColor: "#f7fafc",
    keywords: ["dragon", "baking", "friendship", "creativity"],
    characters: [
      {
        name: "Cinnamon",
        avatar: "https://i.pinimg.com/736x/02/50/eb/0250eb6f1f1fbee1b1e90a43e35ee83d.jpg",
        description: "A sweet-natured dragon who loves to bake"
      }
    ],
    interactiveElements: {
      minigames: [
        {
          type: "dragAndDrop",
          config: {
            recipe: ["flour", "sugar", "eggs", "magic"],
            kitchen: "dragon's cave"
          }
        }
      ],
      animations: [
        {
          type: "bake",
          trigger: "click",
          duration: 1500
        }
      ]
    },
    soundEffects: {
      background: "/sounds/kitchen-sounds.mp3",
      effects: {
        dragonPurr: "/sounds/happy-dragon.mp3",
        oven: "/sounds/oven-ding.mp3"
      }
    }
  },
  {
    id: 'lost-treasure',
    translations: {
      en: {
        title: "The Lost Treasure Map",
        content: "Captain Sarah's eyes sparkled as she unfolded the ancient map her grandmother had left her. The worn parchment showed a path through treacherous waters to an island that no one had ever found. With her trusty compass and brave crew, she set sail on the adventure of a lifetime...",
        moralOfStory: "Courage and determination can lead to great discoveries."
      },
      es: {
        title: "El Mapa del Tesoro Perdido",
        content: "Los ojos de la capitana Sarah brillaron cuando desplegó el antiguo mapa que su abuela le había dejado. El pergamino gastado mostraba un camino a través de aguas traicioneras hasta una isla que nadie había encontrado nunca. Con su brújula de confianza y su valiente tripulación, se hizo a la mar en la aventura de su vida...",
        moralOfStory: "El coraje y la determinación pueden llevar a grandes descubrimientos."
      }
    },
    image: "https://i.pinimg.com/736x/83/16/c5/8316c545d4a3a19b2106049687e3288f.jpg",
    genre: "adventure",
    ageGroup: "young",
    mood: "exciting",
    readingLevel: "intermediate",
    estimatedReadingTime: 7,
    backgroundColor: "#3498db",
    keywords: ["treasure", "map", "adventure", "bravery"],
    characters: [
      {
        name: "Captain Sarah",
        avatar: "https://i.pinimg.com/736x/65/eb/17/65eb173d07342054d81bd3402114aa12.jpg",
        description: "A brave and determined captain on a quest for treasure"
      }
    ],
    interactiveElements: {
      minigames: [
        {
          type: "maze",
          config: {
            path: ["start", "island", "treasure"],
            obstacles: ["rocks", "sharks", "storm"]
          }
        }
      ],
      animations: [
        {
          type: "sail",
          trigger: "scroll",
          duration: 2500
        }
      ]
    },
    soundEffects: {
      background: "/sounds/ocean-waves.mp3",
      effects: {
        seagull: "/sounds/seagull-sound.mp3",
        treasure: "/sounds/treasure-chest.mp3"
      }
    }
  },
  {
    id: 'mysterious-library',
    translations: {
      en: {
        title: "The Mysterious Library",
        content: "In the heart of the city stood an old library where books had a peculiar habit of rearranging themselves at night. When young detective Emma noticed that certain books were leaving behind glowing trails, she knew she had stumbled upon something extraordinary...",
        moralOfStory: "Curiosity and observation can lead to amazing discoveries."
      },
      fr: {
        title: "La Bibliothèque Mystérieuse",
        content: "Au cœur de la ville se trouvait une ancienne bibliothèque où les livres avaient l'habitude étrange de se réorganiser la nuit. Lorsque la jeune détective Emma remarqua que certains livres laissaient derrière eux des traces lumineuses, elle sut qu'elle avait découvert quelque chose d'extraordinaire...",
        moralOfStory: "La curiosité et l'observation peuvent mener à des découvertes incroyables."
      }
    },
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=1000",
    genre: "mystery",
    ageGroup: "young",
    mood: "mysterious",
    readingLevel: "intermediate",
    estimatedReadingTime: 6,
    backgroundColor: "#2c3e50",
    keywords: ["library", "mystery", "books", "discovery"],
    characters: [
      {
        name: "Emma",
        avatar: "https://i.pinimg.com/736x/89/fc/0f/89fc0f8924172183213fac49185b7ba3.jpg",
        description: "A curious and observant young detective"
      }
    ],
    interactiveElements: {
      minigames: [
        {
          type: "hiddenObject",
          config: {
            objects: ["book", "key", "magnifyingGlass"],
            scene: "library"
          }
        }
      ],
      animations: [
        {
          type: "glow",
          trigger: "hover",
          duration: 1000
        }
      ]
    },
    soundEffects: {
      background: "/sounds/library-ambience.mp3",
      effects: {
        pageTurn: "/sounds/page-turn.mp3",
        discovery: "/sounds/discovery-sound.mp3"
      }
    }
  },
  {
    id: 'kind-little-dragon',
    translations: {
      en: {
        title: "The Kind Little Dragon",
        content: "Everyone thought dragons were scary, but Pip was different. This little dragon loved baking cookies and helping others. When the village faced a harsh winter, Pip used his warm breath to help grow vegetables in a magical greenhouse, teaching everyone that appearances can be deceiving...",
        moralOfStory: "Kindness and helping others can make a big difference."
      },
      es: {
        title: "El Pequeño Dragón Amable",
        content: "Todos pensaban que los dragones eran espantosos, pero Pip era diferente. Este pequeño dragón amaba hornear galletas y ayudar a los demás. Cuando el pueblo enfrentó un invierno severo, Pip usó su aliento cálido para ayudar a crecer verduras en un invernadero mágico, enseñando a todos que las apariencias pueden ser engañosas...",
        moralOfStory: "La amabilidad y ayudar a los demás puede hacer una gran diferencia."
      }
    },
    image: "https://i.pinimg.com/736x/ab/f6/11/abf61150ea29e132c8a8759a9803783d.jpg",
    genre: "fairytale",
    ageGroup: "children",
    mood: "happy",
    readingLevel: "beginner",
    estimatedReadingTime: 5,
    backgroundColor: "#f1c40f",
    keywords: ["dragon", "kindness", "helping", "vegetables"],
    characters: [
      {
        name: "Pip",
        avatar: "https://i.pinimg.com/736x/d7/35/71/d7357119bcbce099daad807d463ff8b3.jpg",
        description: "A kind and helpful little dragon"
      }
    ],
    interactiveElements: {
      minigames: [
        {
          type: "match",
          config: {
            cards: ["cookie", "vegetable", "greenhouse", "dragon"],
            theme: "garden"
          }
        }
      ],
      animations: [
        {
          type: "grow",
          trigger: "click",
          duration: 1200
        }
      ]
    },
    soundEffects: {
      background: "/sounds/garden-sounds.mp3",
      effects: {
        dragonRoar: "/sounds/happy-dragon.mp3",
        cookie: "/sounds/cookie-baking.mp3"
      }
    }
  },
  {
    id: 'amazing-space-journey',
    translations: {
      en: {
        title: "The Amazing Space Journey",
        content: "Join astronaut Alex as they explore the wonders of our solar system! Learn about the rings of Saturn, the storms on Jupiter, and why Mars is called the Red Planet. This fascinating journey through space will teach you amazing facts about our cosmic neighborhood...",
        moralOfStory: "Curiosity and exploration can lead to a deeper understanding of the world."
      },
      fr: {
        title: "Le Voyage Spatial Incroyable",
        content: "Rejoignez l'astronaute Alex dans son exploration des merveilles de notre système solaire ! Découvrez les anneaux de Saturne, les tempêtes de Jupiter et pourquoi Mars est appelé la Planète Rouge. Ce fascinant voyage à travers l'espace vous enseignera des faits incroyables sur notre voisinage cosmique...",
        moralOfStory: "La curiosité et l'exploration peuvent mener à une compréhension plus profonde du monde."
      }
    },
    image: "https://i.pinimg.com/736x/2f/d9/3d/2fd93d06036915d8779dd6abde8fd093.jpg",
    genre: "educational",
    ageGroup: "all",
    mood: "exciting",
    readingLevel: "intermediate",
    estimatedReadingTime: 8,
    backgroundColor: "#1a202c",
    keywords: ["space", "solar system", "planets", "astronaut"],
    characters: [
      {
        name: "Alex",
        avatar: "https://i.pinimg.com/736x/f7/77/59/f77759344847128b5ab2f6ce36521146.jpg",
        description: "A curious and adventurous astronaut"
      }
    ],
    interactiveElements: {
      minigames: [
        {
          type: "quiz",
          config: {
            questions: [
              {
                question: "Which planet is known for its rings?",
                options: ["Saturn", "Jupiter", "Mars", "Earth"],
                answer: 0
              }
            ]
          }
        }
      ],
      animations: [
        {
          type: "float",
          trigger: "scroll",
          duration: 2000
        }
      ]
    },
    soundEffects: {
      background: "/sounds/space-ambience.mp3",
      effects: {
        rocket: "/sounds/rocket-launch.mp3",
        planet: "/sounds/planet-ambience.mp3"
      }
    }
  },
  {
    id: 'melody-maker',
    translations: {
      en: {
        title: "The Melody Maker",
        content: "In a quiet village lived a young girl named Luna who discovered she could hear the music in everything - from the rustling leaves to the chirping birds. One day, she found a magical flute that could bring her melodies to life, turning them into beautiful colors and shapes. Luna learned that by sharing her gift, she could bring joy and harmony to everyone around her...",
        moralOfStory: "Music has the power to connect hearts and bring people together."
      },
      es: {
        title: "La Creadora de Melodías",
        content: "En un pueblo tranquilo vivía una joven llamada Luna que descubrió que podía escuchar la música en todo - desde las hojas susurrantes hasta los pájaros cantores. Un día, encontró una flauta mágica que podía dar vida a sus melodías, convirtiéndolas en hermosos colores y formas...",
        moralOfStory: "La música tiene el poder de conectar corazones y unir a las personas."
      },
      hi: {
        title: "धुन बनाने वाली",
        content: "एक शांत गाँव में लूना नाम की एक युवा लड़की रहती थी जिसने पाया कि वह हर चीज में संगीत सुन सकती है - पत्तों की सरसराहट से लेकर पक्षियों की चहचहाहट तक। एक दिन, उसे एक जादुई बांसुरी मिली जो उसकी धुनों को जीवंत कर सकती थी...",
        moralOfStory: "संगीत में दिलों को जोड़ने और लोगों को एकजुट करने की शक्ति होती है।"
      }
    },
    image: "https://i.pinimg.com/736x/09/fe/9e/09fe9ef4fa75275f901eec4f535ea148.jpg",
    genre: "fantasy",
    ageGroup: "children",
    mood: "uplifting",
    readingLevel: "intermediate",
    estimatedReadingTime: 6,
    backgroundColor: "#4a5568",
    keywords: ["music", "magic", "creativity", "harmony"],
    characters: [
      {
        name: "Luna",
        avatar: "https://i.pinimg.com/736x/e3/80/b7/e380b7b8c9fb142052472f451b5a585c.jpg",
        description: "A young girl who can hear music in everything"
      }
    ],
    interactiveElements: {
      minigames: [
        {
          type: "musical",
          config: {
            instruments: ["flute", "drum", "bell", "chimes"]
          }
        }
      ]
    }
  },
  {
    id: 'ocean-secrets',
    translations: {
      en: {
        title: "The Ocean's Secret",
        content: "Deep beneath the waves lived Marina, a curious young mermaid who loved collecting forgotten human treasures. During one of her adventures, she discovered an ancient map leading to a hidden city where sea creatures and humans once lived in harmony. With her friend Otto the octopus, Marina embarked on a journey that would bridge two worlds and teach everyone the importance of understanding different cultures...",
        moralOfStory: "Understanding and accepting our differences makes the world a more beautiful place."
      },
      es: {
        title: "El Secreto del Océano",
        content: "En las profundidades del mar vivía Marina, una joven sirena curiosa que amaba coleccionar tesoros humanos olvidados. Durante una de sus aventuras, descubrió un mapa antiguo que conducía a una ciudad oculta donde las criaturas marinas y los humanos vivían en armonía...",
        moralOfStory: "Comprender y aceptar nuestras diferencias hace que el mundo sea un lugar más hermoso."
      },
      hi: {
        title: "समुद्र का रहस्य",
        content: "समुद्र की गहराइयों में मरीना नाम की एक जिज्ञासु जलपरी रहती थी जो भूले हुए मानव खजाने इकट्ठा करना पसंद करती थी। एक दिन अपनी यात्रा के दौरान, उसे एक प्राचीन नक्शा मिला जो एक छिपे हुए शहर की ओर ले जाता था...",
        moralOfStory: "हमारी विभिन्नताओं को समझना और स्वीकार करना दुनिया को एक सुंदर स्थान बनाता है।"
      }
    },
    image: "https://images.unsplash.com/photo-1682687982501-1e58ab814714?auto=format&fit=crop&q=80&w=1000",
    genre: "adventure",
    ageGroup: "children",
    mood: "adventurous",
    readingLevel: "intermediate",
    estimatedReadingTime: 7,
    backgroundColor: "#2b6cb0",
    keywords: ["ocean", "friendship", "discovery", "harmony"],
    characters: [
      {
        name: "Marina",
        avatar: "https://i.pinimg.com/736x/ec/9a/41/ec9a4127f36585179f4e0f1f0993a43c.jpg",
        description: "A curious mermaid who collects human treasures"
      },
      {
        name: "Otto",
        avatar: "https://i.pinimg.com/736x/c7/21/37/c72137d645eff4d667ae477704859b16.jpg",
        description: "A friendly octopus who helps Marina on her adventures"
      }
    ],
    interactiveElements: {
      minigames: [
        {
          type: "treasure-hunt",
          config: {
            items: ["pearl", "compass", "map", "shell"]
          }
        }
      ]
    }
  },
  {
    id: 'detective-max',
    translations: {
      en: {
        title: "Detective Max and the Missing Library Book",
        content: "Max, a clever young detective with thick-rimmed glasses, noticed that books were mysteriously disappearing from the school library. With his trusty magnifying glass and notebook, he followed a trail of bookmarks and pencil shavings. The investigation led him to discover a secret reading club in the school's attic, where shy students had created their own magical reading space...",
        moralOfStory: "Sometimes what seems missing just needs to be understood from a different perspective."
      },
      es: {
        title: "El Detective Max y el Libro Perdido de la Biblioteca",
        content: "Max, un joven detective inteligente con gafas de montura gruesa, notó que los libros estaban desapareciendo misteriosamente de la biblioteca de la escuela. Con su lupa y cuaderno de confianza, siguió un rastro de marcadores y virutas de lápiz...",
        moralOfStory: "A veces, lo que parece perdido solo necesita ser entendido desde una perspectiva diferente."
      },
      hi: {
        title: "जासूस मैक्स और लाइब्रेरी की गुमशुदा किताब",
        content: "मैक्स, एक चतुर युवा जासूस जिसे मोटे चश्मे लगे थे, ने देखा कि स्कूल की लाइब्रेरी से किताबें रहस्यमय ढंग से गायब हो रही थीं। अपना विश्वसनीय आवर्धक लेंस और नोटबुक लेकर, वह बुकमार्क और पेंसिल की छीलन के निशान का पीछा करने लगा...",
        moralOfStory: "कभी-कभी जो खोया हुआ लगता है, उसे बस एक अलग नजरिए से समझने की जरूरत होती है।"
      }
    },
    image: "https://i.pinimg.com/736x/26/5c/af/265caf86c03a124b4e5c73a3d9246fc5.jpg",
    genre: "mystery",
    ageGroup: "children",
    mood: "intriguing",
    readingLevel: "intermediate",
    estimatedReadingTime: 8,
    backgroundColor: "#805ad5",
    keywords: ["mystery", "detective", "library", "friendship"],
    characters: [
      {
        name: "Max",
        avatar: "https://i.pinimg.com/736x/30/fe/5e/30fe5e69e4b1ae70ee75b18e92c0a2e8.jpg",
        description: "A young detective who loves solving mysteries"
      }
    ],
    interactiveElements: {
      minigames: [
        {
          type: "hidden-objects",
          config: {
            items: ["bookmark", "pencil", "notebook", "magnifying-glass", "library-card"]
          }
        }
      ]
    }
  },
  {
    id: 'robot-garden',
    translations: {
      en: {
        title: "The Robot Who Grew a Garden",
        content: "In a world of metal and circuits, a small robot named Volt discovered a tiny plant growing through a crack in the concrete. Fascinated by this organic life form, Volt began learning about photosynthesis, water cycles, and ecosystems. Using recycled materials, the robot created a beautiful garden that brought nature back to the city, teaching other robots about the importance of preserving life...",
        moralOfStory: "Technology and nature can work together to create something beautiful."
      },
      es: {
        title: "El Robot que Cultivó un Jardín",
        content: "En un mundo de metal y circuitos, un pequeño robot llamado Volt descubrió una pequeña planta creciendo a través de una grieta en el concreto. Fascinado por esta forma de vida orgánica, Volt comenzó a aprender sobre la fotosíntesis, los ciclos del agua y los ecosistemas...",
        moralOfStory: "La tecnología y la naturaleza pueden trabajar juntas para crear algo hermoso."
      },
      hi: {
        title: "रोबोट जिसने बाग़ लगाया",
        content: "धातु और सर्किट की दुनिया में, वोल्ट नाम के एक छोटे रोबोट ने कंक्रीट की दरार में से उगते एक छोटे पौधे को खोजा। इस जैविक जीवन रूप से मोहित होकर, वोल्ट ने प्रकाश संश्लेषण, जल चक्र और पारिस्थितिक तंत्र के बारे में सीखना शुरू किया...",
        moralOfStory: "प्रौद्योगिकी और प्रकृति मिलकर कुछ सुंदर बना सकते हैं।"
      }
    },
    image: "https://i.pinimg.com/736x/33/53/1c/33531cd1af1d9503951852bf2bc5897e.jpg",
    genre: "science",
    ageGroup: "children",
    mood: "educational",
    readingLevel: "intermediate",
    estimatedReadingTime: 6,
    backgroundColor: "#38a169",
    keywords: ["science", "nature", "technology", "environment"],
    characters: [
      {
        name: "Volt",
        avatar: "https://i.pinimg.com/736x/dd/9e/72/dd9e725ab1b28cf01d08625311289164.jpg",
        description: "A curious robot who learns about nature"
      }
    ],
    interactiveElements: {
      minigames: [
        {
          type: "plant-growth",
          config: {
            plants: ["sunflower", "tomato", "tree", "herbs"],
            tools: ["water", "sunlight", "nutrients"]
          }
        }
      ]
    }
  },
  {
    id: 'time-traveling-artist',
    translations: {
      en: {
        title: "The Time-Traveling Artist",
        content: "Young Maya discovered an old paintbrush in her grandmother's attic that could bring historical paintings to life. Through her adventures, she met Leonardo da Vinci, visited the caves of ancient artists, and learned about art through the ages. Each stroke of her magical brush taught her that creativity has no boundaries of time or culture...",
        moralOfStory: "Art connects us across time and cultures, showing that creativity is timeless."
      },
      es: {
        title: "La Artista Viajera del Tiempo",
        content: "La joven Maya descubrió un viejo pincel en el ático de su abuela que podía dar vida a pinturas históricas. A través de sus aventuras, conoció a Leonardo da Vinci, visitó las cuevas de antiguos artistas y aprendió sobre el arte a través de las épocas...",
        moralOfStory: "El arte nos conecta a través del tiempo y las culturas, demostrando que la creatividad es atemporal."
      },
      hi: {
        title: "समय में यात्रा करने वाली कलाकार",
        content: "युवा माया ने अपनी दादी की अटारी में एक पुरानी पेंट ब्रश खोजी जो ऐतिहासिक चित्रों को जीवंत कर सकती थी। अपनी यात्राओं के दौरान, वह लियोनार्डो दा विंची से मिली, प्राचीन कलाकारों की गुफाओं का दौरा किया...",
        moralOfStory: "कला हमें समय और संस्कृतियों के पार जोड़ती है, यह दिखाते हुए कि रचनात्मकता कालातीत है।"
      }
    },
    image: "https://i.pinimg.com/736x/34/75/e9/3475e93cf817a2aedf1e5be31351bdc5.jpg",
    genre: "historical",
    ageGroup: "children",
    mood: "imaginative",
    readingLevel: "advanced",
    estimatedReadingTime: 9,
    backgroundColor: "#d69e2e",
    keywords: ["art", "history", "time-travel", "creativity"],
    characters: [
      {
        name: "Maya",
        avatar: "https://i.pinimg.com/736x/e8/f9/98/e8f998492d0aeabc55d04a17b8c7de98.jpg",
        description: "A creative young artist who discovers time travel through art"
      },
      {
        name: "Leonardo",
        avatar: "https://i.pinimg.com/736x/72/15/99/72159932bb339886cc2545a54c364b70.jpg",
        description: "The famous artist Leonardo da Vinci"
      }
    ],
    interactiveElements: {
      minigames: [
        {
          type: "art-creation",
          config: {
            tools: ["magical-brush", "canvas", "palette"],
            artStyles: ["renaissance", "modern", "cave-painting", "impressionist"]
          }
        }
      ]
    }
  },
  {
    id: 'starlight-symphony',
    translations: {
      en: {
        title: "The Starlight Symphony",
        content: "In a world where stars made music as they twinkled, a young girl named Luna discovered she could conduct their celestial orchestra. Each constellation had its own unique melody, and when played together, they created the most beautiful symphony anyone had ever heard. Luna's gift brought people from all over the world to listen to the night sky's magical performance...",
        moralOfStory: "Everyone has a unique gift that can bring joy to others."
      },
      es: {
        title: "La Sinfonía de la Luz Estelar",
        content: "En un mundo donde las estrellas hacían música mientras brillaban, una joven llamada Luna descubrió que podía dirigir su orquesta celestial. Cada constelación tenía su propia melodía única, y cuando se tocaban juntas, creaban la sinfonía más hermosa que alguien hubiera escuchado jamás...",
        moralOfStory: "Cada uno tiene un don único que puede traer alegría a los demás."
      },
      hi: {
        title: "तारों की संगीत",
        content: "एक ऐसी दुनिया में जहां तारे टिमटिमाते समय संगीत बनाते थे, लूना नाम की एक युवा लड़की ने पता लगाया कि वह उनके आकाशीय वाद्यवृंद का संचालन कर सकती है। हर नक्षत्र की अपनी अनूठी धुन थी...",
        moralOfStory: "हर किसी के पास एक अनूठा उपहार है जो दूसरों को खुशी दे सकता है।"
      }
    },
    image: "https://i.pinimg.com/736x/61/89/19/618919ae7f6c1cd071221b217e258152.jpg",
    genre: "fantasy",
    ageGroup: "children",
    mood: "magical",
    readingLevel: "intermediate",
    estimatedReadingTime: 6,
    backgroundColor: "#1a202c",
    keywords: ["music", "stars", "magic", "talent"],
    characters: [
      {
        name: "Luna",
        avatar: "https://i.pinimg.com/736x/42/df/89/42df89a0564de5f451b6fa28c4b07b3e.jpg",
        description: "A young girl who can conduct the stars"
      }
    ],
    interactiveElements: {
      minigames: [
        {
          type: "musical",
          config: {
            instruments: ["stars", "constellations", "meteors"],
            difficulty: "medium"
          }
        }
      ]
    }
  },
  {
    id: 'eco-warriors',
    translations: {
      en: {
        title: "The Eco Warriors",
        content: "When a group of friends discovered their local park was being threatened by pollution, they formed the Eco Warriors club. Armed with recycling bins and determination, they started a community clean-up movement. Their small actions inspired the whole town, and soon everyone was working together to protect their environment...",
        moralOfStory: "Small actions can lead to big changes when we work together."
      },
      es: {
        title: "Los Guerreros Ecológicos",
        content: "Cuando un grupo de amigos descubrió que su parque local estaba siendo amenazado por la contaminación, formaron el club de Guerreros Ecológicos. Armados con contenedores de reciclaje y determinación, iniciaron un movimiento de limpieza comunitaria...",
        moralOfStory: "Las pequeñas acciones pueden llevar a grandes cambios cuando trabajamos juntos."
      },
      hi: {
        title: "पर्यावरण योद्धा",
        content: "जब दोस्तों के एक समूह ने पाया कि उनका स्थानीय पार्क प्रदूषण से खतरे में है, उन्होंने इको वॉरियर्स क्लब बनाया। रीसायकलिंग बिन और दृढ़ संकल्प के साथ, उन्होंने सामुदायिक सफाई अभियान शुरू किया...",
        moralOfStory: "जब हम साथ मिलकर काम करते हैं तो छोटी कार्रवाइयां बड़े बदलाव ला सकती हैं।"
      }
    },
    image: "https://i.pinimg.com/736x/9b/15/22/9b15226450b0d286e9fa4cfd0fa8d81b.jpg",
    genre: "contemporary",
    ageGroup: "children",
    mood: "inspiring",
    readingLevel: "intermediate",
    estimatedReadingTime: 7,
    backgroundColor: "#2f855a",
    keywords: ["environment", "teamwork", "community", "conservation"],
    characters: [
      {
        name: "The Eco Warriors",
        avatar: "https://i.pinimg.com/736x/e3/4e/e9/e34ee99c537b53bcd84866863eef10f3.jpg",
        description: "A group of environmentally conscious friends"
      }
    ],
    interactiveElements: {
      minigames: [
        {
          type: "sorting",
          config: {
            categories: ["recyclable", "compost", "trash"],
            difficulty: "easy"
          }
        }
      ]
    }
  },
  {
    id: 'virtual-reality-quest',
    translations: {
      en: {
        title: "The Virtual Reality Quest",
        content: "When Alex received a mysterious VR headset for their birthday, they didn't expect to be transported into a digital world where coding brought imagination to life. With each line of code they wrote, new adventures unfolded. But when a virus threatened to corrupt this virtual realm, Alex had to use their programming skills to save both the digital and real worlds...",
        moralOfStory: "Knowledge and creativity are powerful tools for solving problems."
      },
      es: {
        title: "La Búsqueda de la Realidad Virtual",
        content: "Cuando Alex recibió un misterioso visor de realidad virtual para su cumpleaños, no esperaba ser transportado a un mundo digital donde la programación daba vida a la imaginación. Con cada línea de código que escribía, se desarrollaban nuevas aventuras...",
        moralOfStory: "El conocimiento y la creatividad son herramientas poderosas para resolver problemas."
      },
      hi: {
        title: "वर्चुअल रियलिटी की खोज",
        content: "जब एलेक्स को अपने जन्मदिन पर एक रहस्यमय वीआर हेडसेट मिला, तो उन्हें उम्मीद नहीं थी कि वे एक डिजिटल दुनिया में पहुंच जाएंगे जहां कोडिंग कल्पना को जीवन में लाती है...",
        moralOfStory: "ज्ञान और रचनात्मकता समस्याओं को हल करने के लिए शक्तिशाली उपकरण हैं।"
      }
    },
    image: "https://i.pinimg.com/736x/d2/bd/2f/d2bd2fc7c604b0384f06f3c0d594b087.jpg",
    genre: "sci-fi",
    ageGroup: "young-adult",
    mood: "exciting",
    readingLevel: "advanced",
    estimatedReadingTime: 8,
    backgroundColor: "#3182ce",
    keywords: ["technology", "coding", "adventure", "problem-solving"],
    characters: [
      {
        name: "Alex",
        avatar: "https://i.pinimg.com/736x/6f/4a/1c/6f4a1cc90be6834732eea1f904c9ca47.jpg",
        description: "A young coder on a virtual adventure"
      }
    ],
    interactiveElements: {
      minigames: [
        {
          type: "coding",
          config: {
            challenges: ["debug", "create", "solve"],
            difficulty: "medium"
          }
        }
      ]
    }
  },
  {
    id: 'ancient-scroll',
    translations: {
      en: {
        title: "The Ancient Scroll of Alexandria",
        content: "In the bustling streets of ancient Alexandria, young Thea worked as an apprentice in the Great Library. One day, she discovered a mysterious scroll that contained forgotten wisdom from different civilizations. As she decoded its secrets, she learned that knowledge has the power to bridge cultures and time itself...",
        moralOfStory: "Learning from history helps us build a better future."
      },
      es: {
        title: "El Antiguo Pergamino de Alejandría",
        content: "En las bulliciosas calles de la antigua Alejandría, la joven Thea trabajaba como aprendiz en la Gran Biblioteca. Un día, descubrió un pergamino misterioso que contenía sabiduría olvidada de diferentes civilizaciones...",
        moralOfStory: "Aprender de la historia nos ayuda a construir un mejor futuro."
      },
      hi: {
        title: "सिकंदरिया का प्राचीन पांडुलिपि",
        content: "प्राचीन सिकंदरिया की व्यस्त सड़कों पर, युवा थिया महान पुस्तकालय में एक शिक्षु के रूप में काम करती थी। एक दिन, उसे एक रहस्यमय पांडुलिपि मिली जिसमें विभिन्न सभ्यताओं का भूला हुआ ज्ञान था...",
        moralOfStory: "इतिहास से सीखना हमें एक बेहतर भविष्य बनाने में मदद करता है।"
      }
    },
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=1000",
    genre: "historical",
    ageGroup: "young-adult",
    mood: "enlightening",
    readingLevel: "advanced",
    estimatedReadingTime: 8,
    backgroundColor: "#805ad5",
    keywords: ["history", "library", "knowledge", "ancient-egypt"],
    characters: [
      {
        name: "Thea",
        avatar: "https://i.pinimg.com/736x/0b/b3/ce/0bb3ceb48e8994d6fdecf4845abea747.jpg",
        description: "A curious young librarian in ancient Alexandria"
      }
    ],
    interactiveElements: {
      minigames: [
        {
          type: "puzzle",
          config: {
            puzzleType: "hieroglyphics",
            difficulty: "medium",
            hints: ["symbols", "patterns", "historical-context"]
          }
        }
      ]
    }
  },
  {
    id: 'midnight-detective',
    translations: {
      en: {
        title: "The Midnight Detective Club",
        content: "Every Friday at midnight, the Detective Club met in their treehouse headquarters. Led by 12-year-old Sam, they solved neighborhood mysteries using logic and teamwork. When valuable items started disappearing from the local museum, the club faced their biggest case yet. With careful observation and clever deduction, they uncovered an unexpected truth...",
        moralOfStory: "The best solutions come from careful thinking and working together."
      },
      es: {
        title: "El Club de Detectives de Medianoche",
        content: "Cada viernes a medianoche, el Club de Detectives se reunía en su cuartel general en la casa del árbol. Dirigidos por Sam, de 12 años, resolvían misterios del vecindario usando la lógica y el trabajo en equipo...",
        moralOfStory: "Las mejores soluciones vienen del pensamiento cuidadoso y el trabajo en equipo."
      },
      hi: {
        title: "मिडनाइट डिटेक्टिव क्लब",
        content: "हर शुक्रवार को मध्यरात्रि में, डिटेक्टिव क्लब अपने पेड़ घर मुख्यालय में मिलता था। 12 वर्षीय सैम के नेतृत्व में, वे तर्क और टीमवर्क का उपयोग करके पड़ोस के रहस्यों को सुलझाते थे...",
        moralOfStory: "सावधानीपूर्वक सोचने और एक साथ काम करने से सर्वोत्तम समाधान मिलते हैं।"
      }
    },
    image: "https://images.unsplash.com/photo-1599508704512-2f19efd1e35f?auto=format&fit=crop&q=80&w=1000",
    genre: "mystery",
    ageGroup: "children",
    mood: "suspenseful",
    readingLevel: "intermediate",
    estimatedReadingTime: 7,
    backgroundColor: "#2d3748",
    keywords: ["detective", "mystery", "teamwork", "deduction"],
    characters: [
      {
        name: "Sam",
        avatar: "https://i.pinimg.com/736x/42/51/46/4251466594dddfb1f5cbe8d38644e98b.jpg",
        description: "A young detective with sharp observation skills"
      }
    ],
    interactiveElements: {
      minigames: [
        {
          type: "detective",
          config: {
            activities: ["collect-clues", "interview-witnesses", "solve-puzzles"],
            difficulty: "medium"
          }
        }
      ]
    }
  },
  {
    id: 'championship-dreams',
    translations: {
      en: {
        title: "Championship Dreams",
        content: "Maya had always been the shortest player on her basketball team, but she had the biggest heart. Through dedication and countless hours of practice, she developed her own unique playing style. When her team reached the championship game, Maya proved that success isn't about being the tallest or strongest, but about believing in yourself and never giving up...",
        moralOfStory: "With determination and practice, you can overcome any obstacle."
      },
      es: {
        title: "Sueños de Campeonato",
        content: "Maya siempre había sido la jugadora más baja de su equipo de baloncesto, pero tenía el corazón más grande. A través de la dedicación y innumerables horas de práctica, desarrolló su propio estilo de juego único...",
        moralOfStory: "Con determinación y práctica, puedes superar cualquier obstáculo."
      },
      hi: {
        title: "चैंपियनशिप के सपने",
        content: "माया हमेशा अपनी बास्केटबॉल टीम की सबसे छोटी खिलाड़ी थी, लेकिन उसका दिल सबसे बड़ा था। समर्पण और अनगिनत घंटों के अभ्यास के माध्यम से, उसने अपनी अनूठी खेल शैली विकसित की...",
        moralOfStory: "दृढ़ संकल्प और अभ्यास के साथ, आप किसी भी बाधा को पार कर सकते हैं।"
      }
    },
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=1000",
    genre: "sports",
    ageGroup: "children",
    mood: "inspiring",
    readingLevel: "intermediate",
    estimatedReadingTime: 6,
    backgroundColor: "#e53e3e",
    keywords: ["basketball", "perseverance", "sports", "determination"],
    characters: [
      {
        name: "Maya",
        avatar: "https://i.pinimg.com/736x/be/6b/f5/be6bf5ea63baa63c204e936095d0e15b.jpg",
        description: "A determined young basketball player"
      }
    ],
    interactiveElements: {
      minigames: [
        {
          type: "sports",
          config: {
            activities: ["dribbling", "shooting", "strategy"],
            difficulty: "easy"
          }
        }
      ]
    }
  }
];