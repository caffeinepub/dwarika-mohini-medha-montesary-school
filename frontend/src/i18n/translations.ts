export type Language = 'en' | 'hi';

export interface ClassData {
  number: number;
  name: string;
  ageRange: string;
  description: string;
  subjects: string[];
  highlight: string;
}

export interface Translations {
  nav: {
    home: string;
    classes: string;
    contact: string;
    about: string;
  };
  hero: {
    tagline: string;
    subtitle: string;
    ctaClasses: string;
    ctaContact: string;
    established: string;
  };
  about: {
    title: string;
    description: string;
    mission: string;
    vision: string;
    missionText: string;
    visionText: string;
  };
  classes: {
    title: string;
    subtitle: string;
    ageLabel: string;
    subjectsLabel: string;
    highlightLabel: string;
    items: ClassData[];
  };
  contact: {
    title: string;
    subtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    subjectLabel: string;
    subjectPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitButton: string;
    submitting: string;
    successTitle: string;
    successMessage: string;
    errorTitle: string;
    errorMessage: string;
    subjects: {
      general: string;
      admissions: string;
      support: string;
      other: string;
    };
    validation: {
      nameRequired: string;
      emailRequired: string;
      emailInvalid: string;
      phoneRequired: string;
      phoneInvalid: string;
      subjectRequired: string;
      messageRequired: string;
    };
    info: {
      address: string;
      addressValue: string;
      phone: string;
      phoneValue: string;
      hours: string;
      hoursValue: string;
    };
  };
  footer: {
    tagline: string;
    rights: string;
    quickLinks: string;
    contactUs: string;
  };
  language: {
    chooseTitle: string;
    chooseSubtitle: string;
    english: string;
    hindi: string;
    englishNative: string;
    hindiNative: string;
  };
}

const en: Translations = {
  nav: {
    home: 'Home',
    classes: 'Classes',
    contact: 'Contact Us',
    about: 'About',
  },
  hero: {
    tagline: 'Nurturing Young Minds, Building Bright Futures',
    subtitle: 'A premier Montessori school dedicated to holistic education and the all-round development of every child.',
    ctaClasses: 'Explore Classes',
    ctaContact: 'Contact Us',
    established: 'Est. Shuklaganj, Unnao',
  },
  about: {
    title: 'About Our School',
    description: 'Dwarika Mohini Medha Montesary School is a nurturing educational institution located in the heart of Shuklaganj, Unnao. We follow the Montessori philosophy to provide child-centered education that fosters curiosity, creativity, and a love for learning.',
    mission: 'Our Mission',
    vision: 'Our Vision',
    missionText: 'To provide quality education that empowers every child with knowledge, values, and skills for a successful life.',
    visionText: 'To be a beacon of excellence in primary education, creating confident, compassionate, and capable young citizens.',
  },
  classes: {
    title: 'Our Classes',
    subtitle: 'Comprehensive education from Class 1 to Class 5, tailored to each stage of a child\'s development.',
    ageLabel: 'Age Group',
    subjectsLabel: 'Subjects',
    highlightLabel: 'Focus',
    items: [
      {
        number: 1,
        name: 'Class 1',
        ageRange: '5–6 years',
        description: 'The foundation year where children begin their formal learning journey. We focus on building strong literacy and numeracy skills through play-based and activity-driven methods.',
        subjects: ['Hindi', 'English', 'Mathematics', 'Environmental Studies', 'Drawing & Craft'],
        highlight: 'Foundation & Literacy',
      },
      {
        number: 2,
        name: 'Class 2',
        ageRange: '6–7 years',
        description: 'Children deepen their reading and writing skills while exploring the world around them. Creative activities and group learning foster social development.',
        subjects: ['Hindi', 'English', 'Mathematics', 'Environmental Studies', 'Drawing & Craft', 'Moral Science'],
        highlight: 'Reading & Exploration',
      },
      {
        number: 3,
        name: 'Class 3',
        ageRange: '7–8 years',
        description: 'A year of expanding horizons — students are introduced to science concepts, basic geography, and more complex mathematical operations in an engaging environment.',
        subjects: ['Hindi', 'English', 'Mathematics', 'Science', 'Social Studies', 'Drawing', 'Moral Science'],
        highlight: 'Science & Discovery',
      },
      {
        number: 4,
        name: 'Class 4',
        ageRange: '8–9 years',
        description: 'Students develop critical thinking and problem-solving skills. The curriculum broadens to include history, geography, and more advanced language arts.',
        subjects: ['Hindi', 'English', 'Mathematics', 'Science', 'Social Studies', 'Computer Basics', 'Drawing'],
        highlight: 'Critical Thinking',
      },
      {
        number: 5,
        name: 'Class 5',
        ageRange: '9–10 years',
        description: 'The culminating year of primary education. Students consolidate all their learning and are prepared for the transition to middle school with confidence and strong academic foundations.',
        subjects: ['Hindi', 'English', 'Mathematics', 'Science', 'Social Studies', 'Computer', 'Drawing', 'Moral Science'],
        highlight: 'Consolidation & Transition',
      },
    ],
  },
  contact: {
    title: 'Contact Us',
    subtitle: 'We\'d love to hear from you. Reach out for admissions, queries, or any information about our school.',
    nameLabel: 'Full Name',
    namePlaceholder: 'Enter your full name',
    emailLabel: 'Email Address',
    emailPlaceholder: 'Enter your email address',
    phoneLabel: 'Phone Number',
    phonePlaceholder: 'Enter your phone number',
    subjectLabel: 'Subject',
    subjectPlaceholder: 'Select a subject',
    messageLabel: 'Message',
    messagePlaceholder: 'Write your message here...',
    submitButton: 'Send Message',
    submitting: 'Sending...',
    successTitle: 'Message Sent!',
    successMessage: 'Thank you for reaching out. We will get back to you shortly.',
    errorTitle: 'Something went wrong',
    errorMessage: 'We could not send your message. Please try again.',
    subjects: {
      general: 'General Inquiry',
      admissions: 'Admissions',
      support: 'Support',
      other: 'Other',
    },
    validation: {
      nameRequired: 'Full name is required',
      emailRequired: 'Email address is required',
      emailInvalid: 'Please enter a valid email address',
      phoneRequired: 'Phone number is required',
      phoneInvalid: 'Please enter a valid 10-digit phone number',
      subjectRequired: 'Please select a subject',
      messageRequired: 'Message is required',
    },
    info: {
      address: 'Address',
      addressValue: 'Shuklaganj, Unnao, Uttar Pradesh',
      phone: 'Phone',
      phoneValue: '+91 XXXXX XXXXX',
      hours: 'School Hours',
      hoursValue: 'Mon–Sat: 8:00 AM – 2:00 PM',
    },
  },
  footer: {
    tagline: 'Nurturing Young Minds Since Our Founding',
    rights: 'All rights reserved.',
    quickLinks: 'Quick Links',
    contactUs: 'Contact',
  },
  language: {
    chooseTitle: 'Welcome',
    chooseSubtitle: 'Please choose your preferred language',
    english: 'English',
    hindi: 'Hindi',
    englishNative: 'English',
    hindiNative: 'हिंदी',
  },
};

const hi: Translations = {
  nav: {
    home: 'होम',
    classes: 'कक्षाएँ',
    contact: 'संपर्क करें',
    about: 'हमारे बारे में',
  },
  hero: {
    tagline: 'युवा मस्तिष्क का पोषण, उज्ज्वल भविष्य का निर्माण',
    subtitle: 'एक प्रमुख मॉन्टेसरी विद्यालय जो प्रत्येक बच्चे के सर्वांगीण विकास के लिए समग्र शिक्षा को समर्पित है।',
    ctaClasses: 'कक्षाएँ देखें',
    ctaContact: 'संपर्क करें',
    established: 'शुक्लागंज, उन्नाव',
  },
  about: {
    title: 'हमारे विद्यालय के बारे में',
    description: 'द्वारिका मोहिनी मेधा मॉन्टेसरी स्कूल शुक्लागंज, उन्नाव के हृदय में स्थित एक पोषणकारी शैक्षणिक संस्था है। हम मॉन्टेसरी दर्शन का पालन करते हुए बाल-केंद्रित शिक्षा प्रदान करते हैं जो जिज्ञासा, रचनात्मकता और सीखने के प्रति प्रेम को बढ़ावा देती है।',
    mission: 'हमारा मिशन',
    vision: 'हमारी दृष्टि',
    missionText: 'प्रत्येक बच्चे को ज्ञान, मूल्यों और कौशल से सशक्त बनाने वाली गुणवत्तापूर्ण शिक्षा प्रदान करना।',
    visionText: 'प्राथमिक शिक्षा में उत्कृष्टता का केंद्र बनना, आत्मविश्वासी, दयालु और सक्षम युवा नागरिकों का निर्माण करना।',
  },
  classes: {
    title: 'हमारी कक्षाएँ',
    subtitle: 'कक्षा 1 से कक्षा 5 तक व्यापक शिक्षा, बच्चे के विकास के प्रत्येक चरण के अनुरूप।',
    ageLabel: 'आयु वर्ग',
    subjectsLabel: 'विषय',
    highlightLabel: 'फोकस',
    items: [
      {
        number: 1,
        name: 'कक्षा 1',
        ageRange: '5–6 वर्ष',
        description: 'आधार वर्ष जहाँ बच्चे अपनी औपचारिक शिक्षा यात्रा शुरू करते हैं। हम खेल-आधारित और गतिविधि-संचालित तरीकों से मजबूत साक्षरता और संख्यात्मक कौशल बनाने पर ध्यान केंद्रित करते हैं।',
        subjects: ['हिंदी', 'अंग्रेजी', 'गणित', 'पर्यावरण अध्ययन', 'चित्रकला एवं शिल्प'],
        highlight: 'आधार एवं साक्षरता',
      },
      {
        number: 2,
        name: 'कक्षा 2',
        ageRange: '6–7 वर्ष',
        description: 'बच्चे अपने पढ़ने और लिखने के कौशल को गहरा करते हुए अपने आसपास की दुनिया का पता लगाते हैं। रचनात्मक गतिविधियाँ और समूह शिक्षण सामाजिक विकास को बढ़ावा देते हैं।',
        subjects: ['हिंदी', 'अंग्रेजी', 'गणित', 'पर्यावरण अध्ययन', 'चित्रकला एवं शिल्प', 'नैतिक शिक्षा'],
        highlight: 'पठन एवं अन्वेषण',
      },
      {
        number: 3,
        name: 'कक्षा 3',
        ageRange: '7–8 वर्ष',
        description: 'क्षितिज विस्तार का वर्ष — छात्रों को विज्ञान की अवधारणाओं, बुनियादी भूगोल और अधिक जटिल गणितीय संक्रियाओं से एक आकर्षक वातावरण में परिचित कराया जाता है।',
        subjects: ['हिंदी', 'अंग्रेजी', 'गणित', 'विज्ञान', 'सामाजिक अध्ययन', 'चित्रकला', 'नैतिक शिक्षा'],
        highlight: 'विज्ञान एवं खोज',
      },
      {
        number: 4,
        name: 'कक्षा 4',
        ageRange: '8–9 वर्ष',
        description: 'छात्र आलोचनात्मक सोच और समस्या-समाधान कौशल विकसित करते हैं। पाठ्यक्रम में इतिहास, भूगोल और अधिक उन्नत भाषा कला शामिल हैं।',
        subjects: ['हिंदी', 'अंग्रेजी', 'गणित', 'विज्ञान', 'सामाजिक अध्ययन', 'कंप्यूटर बेसिक्स', 'चित्रकला'],
        highlight: 'आलोचनात्मक सोच',
      },
      {
        number: 5,
        name: 'कक्षा 5',
        ageRange: '9–10 वर्ष',
        description: 'प्राथमिक शिक्षा का समापन वर्ष। छात्र अपनी सभी सीख को समेकित करते हैं और आत्मविश्वास और मजबूत शैक्षणिक नींव के साथ मध्य विद्यालय में संक्रमण के लिए तैयार होते हैं।',
        subjects: ['हिंदी', 'अंग्रेजी', 'गणित', 'विज्ञान', 'सामाजिक अध्ययन', 'कंप्यूटर', 'चित्रकला', 'नैतिक शिक्षा'],
        highlight: 'समेकन एवं संक्रमण',
      },
    ],
  },
  contact: {
    title: 'संपर्क करें',
    subtitle: 'हम आपसे सुनना पसंद करेंगे। प्रवेश, प्रश्नों या हमारे विद्यालय के बारे में किसी भी जानकारी के लिए संपर्क करें।',
    nameLabel: 'पूरा नाम',
    namePlaceholder: 'अपना पूरा नाम दर्ज करें',
    emailLabel: 'ईमेल पता',
    emailPlaceholder: 'अपना ईमेल पता दर्ज करें',
    phoneLabel: 'फोन नंबर',
    phonePlaceholder: 'अपना फोन नंबर दर्ज करें',
    subjectLabel: 'विषय',
    subjectPlaceholder: 'एक विषय चुनें',
    messageLabel: 'संदेश',
    messagePlaceholder: 'यहाँ अपना संदेश लिखें...',
    submitButton: 'संदेश भेजें',
    submitting: 'भेजा जा रहा है...',
    successTitle: 'संदेश भेजा गया!',
    successMessage: 'संपर्क करने के लिए धन्यवाद। हम जल्द ही आपसे संपर्क करेंगे।',
    errorTitle: 'कुछ गलत हुआ',
    errorMessage: 'हम आपका संदेश नहीं भेज सके। कृपया पुनः प्रयास करें।',
    subjects: {
      general: 'सामान्य पूछताछ',
      admissions: 'प्रवेश',
      support: 'सहायता',
      other: 'अन्य',
    },
    validation: {
      nameRequired: 'पूरा नाम आवश्यक है',
      emailRequired: 'ईमेल पता आवश्यक है',
      emailInvalid: 'कृपया एक वैध ईमेल पता दर्ज करें',
      phoneRequired: 'फोन नंबर आवश्यक है',
      phoneInvalid: 'कृपया एक वैध 10-अंकीय फोन नंबर दर्ज करें',
      subjectRequired: 'कृपया एक विषय चुनें',
      messageRequired: 'संदेश आवश्यक है',
    },
    info: {
      address: 'पता',
      addressValue: 'शुक्लागंज, उन्नाव, उत्तर प्रदेश',
      phone: 'फोन',
      phoneValue: '+91 XXXXX XXXXX',
      hours: 'विद्यालय समय',
      hoursValue: 'सोम–शनि: सुबह 8:00 – दोपहर 2:00',
    },
  },
  footer: {
    tagline: 'हमारी स्थापना से युवा मस्तिष्क का पोषण',
    rights: 'सर्वाधिकार सुरक्षित।',
    quickLinks: 'त्वरित लिंक',
    contactUs: 'संपर्क',
  },
  language: {
    chooseTitle: 'स्वागत है',
    chooseSubtitle: 'कृपया अपनी पसंदीदा भाषा चुनें',
    english: 'English',
    hindi: 'हिंदी',
    englishNative: 'English',
    hindiNative: 'हिंदी',
  },
};

export const translations: Record<Language, Translations> = { en, hi };
