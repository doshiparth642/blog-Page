export const article = [
  {
    id: 1,
    slug: "the-ultimate-guide-to-full-body-workouts",
    title: "The Ultimate Guide to Full-Body Workouts",
    category: "Fitness",
    author: "Alex Carter",
    date: "23 JANUARY 2025",
    image: "/assets/banner1.jpg",
    excerpt:
      "A practical guide to full‑body training that helps you build strength, improve mobility, and stay consistent—no matter your fitness level.",
    content: [
      "Full‑body workouts are one of the most effective ways to train because they engage multiple muscle groups in a single session.",
      "In this guide, you’ll learn how to structure balanced routines that combine compound movements, proper rest, and progressive overload.",
      "Whether you train at home or in the gym, these workouts can help you improve endurance, burn calories efficiently, and avoid plateaus.",
    ],
    experience:
      "Alex Carter brings more than 10 years of hands‑on experience in strength and conditioning. Certified by NASM, he focuses on sustainable training methods that prioritize proper form, recovery, and long‑term results. Alex is passionate about helping people build confidence through consistent, smart training.",
    authorImage: "/assets/user1.jpg",
  },
  {
    id: 2,
    slug: "two-women-chatting-during-morning",
    title: "Two Women Chatting at a Local Stand in the Morning",
    category: "Culture",
    author: "Miranda Rachel",
    date: "23 NOVEMBER 2025",
    image: "/assets/banner2.png",
    excerpt:
      "A quiet morning scene turns into a meaningful conversation, capturing everyday moments that often go unnoticed.",
    content: [
      "Early mornings have a rhythm of their own, filled with calm streets and familiar faces.",
      "This story explores how simple conversations can reflect shared experiences, local culture, and human connection.",
      "Sometimes, it’s these small interactions that leave the biggest impression on our day.",
    ],
    experience:
      "Miranda Rachel is a lifestyle and culture writer who focuses on human stories and everyday moments. With years of experience in narrative journalism, she enjoys capturing authentic conversations and turning them into relatable, engaging stories.",
    authorImage: "/assets/user2.png",
  },
  {
    id: 3,
    slug: "enjoying-the-sunset-on-padar-island",
    title: "Enjoying the Sunset on Padar Island",
    category: "Travel",
    author: "Danielle Marsh",
    date: "23 SEPTEMBER 2025",
    image: "/assets/banner3.png",
    excerpt:
      "A travel experience that highlights the beauty of Padar Island and the unforgettable feeling of watching the sun dip below the horizon.",
    content: [
      "Padar Island offers dramatic landscapes that feel almost unreal, especially during sunset.",
      "As the sky changes color, the island reveals its true charm—quiet, powerful, and breathtaking.",
      "This journey captures the emotion of slowing down and appreciating nature at its finest.",
    ],
    experience:
      "Danielle Marsh is a travel writer and photographer who has explored destinations across Asia and Europe. Her work focuses on immersive travel experiences, encouraging readers to connect deeply with the places they visit.",
    authorImage: "/assets/user3.png",
  },
  {
    id: 4,
    slug: "enjoying-the-sunset-on-padar-island-together-again",
    title: "Sharing Another Sunset on Padar Island",
    category: "Travel",
    author: "Kang Harris",
    date: "23 SEPTEMBER 2025",
    image: "/assets/relate1.png",
    excerpt:
      "Returning to Padar Island proves that some places are worth experiencing more than once.",
    content: [
      "Revisiting a destination often reveals details missed the first time.",
      "This story reflects on how familiar landscapes can still feel new when shared with different people.",
      "Padar Island continues to offer moments of calm, reflection, and inspiration.",
    ],
    experience:
      "Kang Harris is a travel blogger who documents repeat journeys and long‑term travel experiences. His writing focuses on perspective, memory, and how places change depending on when and how we visit them.",
    authorImage: "/assets/user4.png",
  },
  {
    id: 5,
    slug: "enjoying-the-sunset-on-padar-island-together-again",
    title: "Another Evening at Padar Island",
    category: "Travel",
    author: "Kang Harris",
    date: "23 SEPTEMBER 2025",
    image: "/assets/relate2.png",
    excerpt:
      "An evening that reminds us why sunsets remain one of the most timeless travel experiences.",
    content: [
      "As daylight fades, Padar Island takes on a peaceful, almost cinematic atmosphere.",
      "The gentle breeze, fading light, and open horizon create a moment worth remembering.",
      "This article captures the quiet beauty of simply being present in nature.",
    ],
    experience:
      "With a strong background in travel storytelling, Kang Harris focuses on reflective journeys rather than fast‑paced tourism. His work encourages mindful travel and deeper appreciation of natural landscapes.",
    authorImage: "/assets/user2.png",
  },
];

export const authors = [
  {
    id: 1,
    name: "Alex Carter",
    image: "/assets/user1.jpg",
    bio: "With over a decade in fitness, Alex specializes in strength training. Certified by NASM, he designs challenging yet achievable workout programs. His passion is helping clients build strength and confidence through personalized routines. Outside the gym, Alex enjoys running and outdoor adventures.",
    prevTitle: "Building Core Strength: Exercises & Benefits",
    nextTitle: "5 Tips for Better Cardio Sessions",
  },
  {
    id: 2,
    name: "Miranda Rachel",
    image: "/assets/user2.png",
    bio: "Miranda is a yoga instructor and wellness coach with a passion for helping others find balance. Her holistic approach combines physical practice with mindfulness and nutrition.",
    prevTitle: "The Ultimate Guide to Full-Body Workouts",
    nextTitle: "Meal Prep Basics for Gym Enthusiasts",
  },
  {
    id: 3,
    name: "Danielle Marsh",
    image: "/assets/user3.png",
    bio: "Danielle is a certified nutritionist and foodie. She believes in a balanced approach to eating and enjoys creating delicious, healthy recipes that anyone can make.",
    prevTitle: "5 Tips for Better Cardio Sessions",
    nextTitle: "Building Core Strength: Exercises & Benefits",
  },
  {
    id: 4,
    name: "Kang Harris",
    image: "/assets/user4.png",
    bio: "Kang is a former professional athlete turned performance coach. He focuses on high-intensity training and sports-specific conditioning to help athletes reach their peak.",
    prevTitle: "Meal Prep Basics for Gym Enthusiasts",
    nextTitle: "The Ultimate Guide to Full-Body Workouts",
  },
];

export const articleComments = [
  {
    articleId: 1,
    comments: [
      {
        id: 1,
        name: "Kong Klein",
        email: "kong@example.com",
        image: "/assets/user1.jpg",
        rating: 3.2,
        comment: "This is a great article! Very insightful.",
        date: "22 Jul 2024",
      },
      {
        id: 2,
        name: "Liam Brown",
        email: "liam@example.com",
        image: "/assets/user2.png",
        rating: 4.5,
        comment: "I learned a lot from this, thank you!",
        date: "23 Jul 2024",
      },
    ],
  },
  {
    articleId: 2,
    comments: [
      {
        id: 3,
        name: "Noah Davis",
        email: "noah@example.com",
        image: "/assets/user3.png",
        rating: 4.0,
        comment: "Interesting perspective on the topic.",
        date: "24 Jul 2024",
      },
    ],
  },
  {
    articleId: 3,
    comments: [], // No comments for article 3
  },
];

export const sideBar = {
  exploreMore: [
    {
      title: "Day trip between local sand dunes",
      category: "Culture",
      date: "12 Jan 2024",
      img: "https://picsum.photos/200/150",
    },
    {
      title: "Exploring the sunset on Polar Island",
      category: "Travel",
      date: "22 Jan 2024",
      img: "httpsum.photos/200/150",
    },
    {
      title: "The green surroundings of the campgrounds",
      category: "Travel",
      date: "29 Jan 2024",
      img: "https://picsum.photos/200/150",
    },
  ],
  tourGuides: [
    {
      name: "Miranda Rachel",
      address: "Jombang, Jawa timur",
      image: "/assets/user2.png",
      rating: 4.0,
    },
    {
      name: "Danielle Marsh",
      address: "Wonosobo, Jawa ten..",
      image: "/assets/user3.png",
      rating: 4.2,
    },
    {
      name: "Kang Harris",
      address: "Bandung, Jawa barat",
      image: "/assets/user4.png",
      rating: 3.0,
    },
    {
      name: "Alex Carter",
      address: "Bandung, New Jersy",
      image: "/assets/user1.jpg",
      rating: 2.0,
    },
  ],
};
