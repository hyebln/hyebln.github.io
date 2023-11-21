module.exports = {
  title: `hyebln.com`,
  description: `혜빈이의 개발일기`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://hyebln.github.io`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: `hyebln/hyebln.github.io`, // `zoomkoding/zoomkoding-gatsby-blog`,
    },
  },
  ga: '0', // Google Analytics Tracking ID
  author: {
    name: `안혜빈`,
    bio: {
      role: `개발자`,
      description: ['1년차 삐약이', '기본에 집중하는', '도전을 추구하는'],
      thumbnail: 'mimoticon.gif', // Path to the image in the 'asset' folder
    },
    social: {
      github: `https://github.com/hyebln`,
      linkedIn: ``, // `https://www.linkedin.com/in/jinhyeok-jeong-800871192`,
      email: `hyebb6@gmail.com`, // `zoomkoding@gmail.com`,
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2023.11 ~',
        activity: '개인 블로그 개발 및 운영',
        links: {
          post: '/gatsby-starter-zoomkoding-introduction',
          github: 'https://github.com/hyebln/hyebln.github.io',
          demo: '',
        },
      },
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        title: '개발 블로그 운영',
        description:
          '개발자로서의 성장과정을 기록하기 위해 개발 블로그를 만들게 되었습니다.',
        techStack: ['gatsby'],
        thumbnailUrl: 'blog.png',
        links: {
          post: '/gatsby-starter-zoomkoding-introduction',
          github: 'https://github.com/hyebln/hyebln.github.io',
          demo: 'https://hyebln.github.io',
        },
      },
    ],
  },
};
