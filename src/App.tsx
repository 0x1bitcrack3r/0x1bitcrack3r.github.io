import { useState } from "react";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { PortfolioGrid } from "./components/PortfolioGrid";
import { ContactSection } from "./components/ContactSection";

// Sample portfolio data
const portfolioData = {
  projects: [
    {
      id: "project-1",
      title: "iB Cricket Franchise App and Cricket League App",
      description:
        "At iB Cricket, I played a key role in developing and launching two major applications. I built the Franchise App for both iPadOS and iOS, providing a seamless and engaging user experience for franchise management. Additionally, I developed the Cricket League App for both Android and iOS, enabling cricket enthusiasts to engage in virtual leagues with ease. These projects involved leveraging cutting-edge technology and innovative design to deliver high-quality, user-friendly applications.",
      image:
        "https://ibc.imgix.net/ibc-website/home-edition/landing-section-video-poster-image_160(2x).jpg?auto=format,compress&amp;q=80",
      tags: ["React Native", "ReactJS", "Unity"],

      type: "projects" as const,
      links: { live: "https://ib.cricket", behance: "#" },
    },
    {
      id: "project-2",
      title: "CyberEye Research Labs now crimeOS.ai",
      description:
        "At Cybereye Labs now CrimeOS.AI, I developed a sophisticated web application for managing LoRaWAN technology IoT devices. This application enabled seamless integration, monitoring, and control of IoT devices, enhancing connectivity and data management capabilities. My work involved leveraging LoRaWAN protocols to ensure secure and efficient communication between devices, contributing to the advancement of IoT technology and improving operational efficiency for various applications.",
      image:
        "https://assets-global.website-files.com/5be158df8b242005a6c3705c/5da578cccc6891d906c32b10_hero%25403x-p-1080.png",
      tags: [
        "Django",
        "ReactJS",
        "IoT",
        "LoRaWAN",
        "Application Security",
        "Network Security",
      ],

      type: "projects" as const,
      links: { live: "https://crimeos.ai", behance: "#" },
    },
    {
      id: "project-3",
      title: "Hiver App - Team Collaboration and Communication",
      description:
        "At Hiver, I built the Hiver app for both Android and iOS from scratch, leveraging my expertise in mobile development to create a seamless user experience. Additionally, I extensively worked on integrating Gmail APIs, enhancing the app's functionality and ensuring robust email management features for users. My contributions played a key role in providing businesses with efficient tools to streamline their communication workflows.",
      image:
        "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/01/50/33/015033ba-1b9c-ca8b-af24-63619ab4856c/5cfcf031-277a-4dad-b24d-54fa4af9fc20_IOS_6.5_20.jpg/460x996bb.webp",
      tags: [
        "iOS app",
        "Android app",
        "React Native",
        "Firebase",
        "Gmail API",
        "google OAuth",
        "google API",
      ],

      type: "projects" as const,
      links: { live: "https://hiverhq.com", behance: "#" },
    },
    {
      id: "project-4",
      title: "Apollo 24|7 - Health and Wellness App",
      description:
        "At Apollo 24|7, I played a key role in developing the patient mobile app for both iOS and Android from the ground up. I worked on building and scaling critical features such as audio-video doctor consultations, ePharmacy ordering, and eDiagnostics integration, along with several patient engagement modules. My contributions focused on delivering a seamless and secure healthcare experience while ensuring high performance, reliability, and user-friendly design across platforms.",
      image:
        "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/7e/e0/6d/7ee06d99-d838-060a-008c-64817ccdd999/5-1290x2796.jpg/460x998bb.webp",
      tags: [
        "iOS app",
        "Android app",
        "React Native",
        "WebRTC",
        "firebase",
        "bitrise",
        "microsoft app center",
        "codepush",
      ],

      type: "projects" as const,
      links: { live: "https://www.apollo247.com/", behance: "#" },
    },
    {
      id: "project-5",
      title: "Apollo 24|7 - Doctors App",
      description:
        "At Apollo 24|7, I contributed to building the Doctors App for iOS and Android from the ground up, focused on empowering healthcare providers with efficient tools for teleconsultations and patient management. I worked on implementing key features such as real-time audio-video consultation, digital prescription workflows, appointment scheduling, and patient health record access. My work emphasized performance optimization, security, and a seamless user experience to help doctors deliver high-quality virtual care.",
      image:
        "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/9f/d1/79/9fd179bf-7521-d0e2-c7b2-e9e26dadc515/474c5b4d-1851-4c82-8dad-5561132e08f3_Frame_1814106327.png/460x998bb.webp",
      tags: [
        "iOS app",
        "Android app",
        "React Native",
        "WebRTC",
        "firebase",
        "bitrise",
        "microsoft app center",
        "codepush",
        "graphQL",
      ],

      type: "projects" as const,
      links: { live: "https://www.apollo247.com/", behance: "#" },
    },
    {
      id: "project-6",
      title: "Treebo Club Hotel Booking App",
      description:
        "As a React Native developer at Treebo, I single-handedly built and maintained the iOS and Android app, managing the entire lifecycle from conceptualization and design— including wireframing, prototyping, and mockups aligned with Treebo's brand—to full-stack development of key features like booking, reservation management, user authentication, payment processing, and backend integrations. I handled comprehensive testing across devices and OS versions using manual and Appium automated methods, oversaw deployments to the Apple App Store and Google Play Store per platform guidelines, and provided ongoing maintenance through performance monitoring, user-reported issue resolution, and regular updates for new features and OS compatibility. This end-to-end ownership showcases my technical expertise, problem-solving skills, and self-reliance in delivering a high-quality, user-centric product that drives success in the competitive hospitality industry.",
      image:
        "https://images.sftcdn.net/images/t_app-cover-s,f_auto/p/6f991065-7f2f-4782-a7a7-81b020a76326/595845034/treebo-hotel-booking-app-screenshot",
      tags: [
        "iOS app",
        "Android app",
        "React Native",
        "firebase",
        "bitrise",
        "microsoft app center",
        "codepush",
        "appsflyer",
        "graphQL",
      ],

      type: "projects" as const,
      links: { live: "https://treebo.com", behance: "#" },
    },
    {
      id: "project-7",
      title:
        "Hotel Superhero AI - SaaS based AI powered Hotel Management Platform",
      description:
        "At Hotel Super Hero, I led the development of a cutting-edge SaaS-based application utilizing GraphQL, Node.js, React.js, and advanced AI technologies like ChromaDB for vector storage, RAG pipelines for context-aware retrieval, and conversational AI for intelligent chat interfaces. This involved architecting the full-stack system implementing GraphQL APIs with Node.js on the backend for efficient data handling, building a dynamic and intuitive user interface with React.js on the frontend, and integrating AI features to enable smart recommendations, automated guest queries, and personalized hotelier insights. My work ensured seamless integration, optimal performance, robust security, and AI-driven scalability, empowering hoteliers to streamline operations and deliver exceptional guest experiences.",
      image:
        "https://gdm-catalog-fmapi-prod.imgix.net/ProductScreenshot/4e433e3e-38f6-4b9d-a002-f888009922ea.png",
      tags: [
        "GraphQL",
        "ReactJS",
        "NodeJS",
        "Redis",
        "RAG",
        "LangChain",
        "Generative AI",
      ],

      type: "projects" as const,
      links: { live: "https://hotelsuperhero.ai/", behance: "#" },
    },
  ],
  research: [
    {
      id: "research-1",
      title:
        "Personalized Activity Recommendation System for Cardiovascular Patients Using Heart Rate and ECG/EKG Data from Wearable Devices",
      description:
        "Worldwide, cardiovascular diseases like heart disease, hypertension, and high blood pressure are leading causes of death, requiring careful physical activity management to improve health outcomes and prevent complications. We present a personalized activity recommendation system that leverages real-time heart rate and ECG/EKG data from wearables like smartwatches to deliver safe, tailored exercise guidance. Using machine learning algorithms, it continuously adapts recommendations based on physiological trends and historical data, enhancing remote monitoring and preventive care for cardiovascular patients.",
      image: "https://www.gtri.gatech.edu/public/prod/2024-12/IEEE-scaled.jpg",
      tags: [
        "Clinical Data Analysis",
        "Predictive Analytics",
        "Classification Algorithms",
        "Support Vector Machines (SVM)",
        "Data Preprocessing",
        "Machine Learning in Healthcare",
      ],

      type: "research" as const,
      links: {
        live: "https://ieeexplore.ieee.org/document/10961662/",
        behance: "#",
      },
    },
    {
      id: "research-2",
      title:
        "Exploring Brain-Computer Interface with CNS Technologies to Enhance Communication Abilities in Pseudocoma Individuals",
      description:
        "This paper explores Brain-Computer Interface (BCI) technologies to enhance communication for Locked-In Syndrome and Pseudocoma patients, who remain conscious but paralyzed and unable to speak or move. Leveraging motor imagery signals as single or double-triggering inputs, BCI enables direct brain-to-device control, allowing patients to interact with their environment and regain independence through AI-enhanced software solutions. The proposed architecture integrates neural interfaces with the Central Nervous System for reading/writing information, highlighting BCI's potential to empower pseudocoma patients with effective communication and improved well-being.",
      image: "https://www.gtri.gatech.edu/public/prod/2024-12/IEEE-scaled.jpg",
      tags: [
        "Brain Computer Interface (BCI)",
        "Neuroplasticity",
        "Mu Waves",
        "Motor Imagery",
        "Locked-In Syndrome",
        "Pseudocoma",
        "Software Application",
      ],

      type: "research" as const,
      links: {
        live: "https://ieeexplore.ieee.org/document/10961016/",
        behance: "#",
      },
    },
    {
      id: "research-3",
      title: "Smart Devices, Smarter Security: The Blockchain-IoT Revolution",
      description:
        "This paper presents a Blockchain-IoT framework addressing security, privacy, and scalability challenges through decentralized architecture, smart contracts, and optimized consensus mechanisms like Layer 2 technologies.",
      image: "https://www.gtri.gatech.edu/public/prod/2024-12/IEEE-scaled.jpg",
      tags: [
        "Blockchain",
        "Internet of Things (IoT)",
        "Smart Contracts",
        "IoT Communication Protocols",
        "Layer 2 Solutions",
        "IoT Security and Distributed Ledger Technology (DLT)",
      ],

      type: "research" as const,
      links: {
        live: "https://ieeexplore.ieee.org/document/10961629/",
        behance: "#",
      },
    },
    {
      id: "research-4",
      title:
        "Enhancing E-Commerce Accessibility Through a Novel Voice Assistant Approach for Web and Mobile Applications",
      description:
        "This research introduces intelligent voice assistants powered by NLP and machine learning to enhance accessibility in web/mobile e-commerce for users with visual, motor, or cognitive disabilities. The voice-based system enables seamless navigation, product discovery, and transactions via commands, outperforming traditional GUIs, with user studies confirming improved usability and satisfaction across diverse groups.",
      image: "https://www.gtri.gatech.edu/public/prod/2024-12/IEEE-scaled.jpg",
      tags: [
        "E-commerce Accessibility",
        "Voice Assistants",
        "Natural Language Processing (NLP)",
        "Speech Recognition",
        "Voice Interaction",
        "Visual Impairments",
        "Motor Impairments",
        "User Satisfaction",
        "Task Completion Rates",
        "Voice Navigation",
        "System Usability Scale (SUS)",
        "Cognitive Challenges",
        "Command Recognition",
        "Accessibility Features",
        "Product Discovery",
        "Cart Management",
        "Order Management",
        "Command Efficiency",
        "User Study",
        "Hybrid Interfaces (Voice & Touch)",
      ],
      type: "research" as const,
      links: {
        live: "https://ieeexplore.ieee.org/document/10956866/",
        behance: "#",
      },
    },
    {
      id: "research-5",
      title:
        "Leveraging AI and Machine Learning to Address ADA Non-Compliance in Web Applications: A Novel Approach to Enhancing Accessibility",
      description:
        "This paper proposes an AI and ML-based technique to automatically detect, predict, and remediate ADA accessibility violations in web applications, streamlining compliance for developers. The system generates dynamic interfaces and custom features for disabled users, bridging gaps between guidelines and real-world implementation to ensure equal digital access for all.",
      image: "https://www.gtri.gatech.edu/public/prod/2024-12/IEEE-scaled.jpg",
      tags: [
        "Web Accessibility",
        "Americans with Disabilities Act (ADA)",
        "Artificial Intelligence (AI)",
        "Machine Learning (ML)",
        "Automated Accessibility Testing",
        "Natural Language Processing (NLP)",
        "Accessibility Remediation",
        "ADA Compliance",
        "Assistive Technology",
        "User-Centered Design",
        "WCAG Guidelines",
        "Neural Networks",
        "Decision Trees",
        "Convolutional Neural Networks (CNN)",
        "Inclusive Web Design",
      ],

      type: "research" as const,
      links: {
        live: "https://ieeexplore.ieee.org/document/10957506/",
        behance: "#",
      },
    },
    {
      id: "research-6",
      title:
        "AI Chatbot Implementation on Government Websites: A Framework for Development, User Engagement, and Security for DHS Website",
      description:
        "This paper presents an AI-driven chatbot framework for the Department of Health service (DHS) website, leveraging NLP for intent mapping and user engagement while addressing security risks like data breaches in government infrastructure.",
      image: "https://www.gtri.gatech.edu/public/prod/2024-12/IEEE-scaled.jpg",
      tags: [
        "AI chatbot",
        "user engagement",
        "natural language processing (NLP)",
      ],

      type: "research" as const,
      links: {
        live: "https://ieeexplore.ieee.org/document/10912857/",
        behance: "#",
      },
    },
    {
      id: "research-7",
      title:
        "AI-Driven Novel Approach for Enhancing E-Commerce Accessibility through Sign Language Integration in Web and Mobile Applications",
      description:
        "This paper introduces an AI and Machine Learning system enhancing e-commerce accessibility for hearing-impaired users through real-time sign language recognition via computer vision and natural language processing. Key components include a robust sign language dataset, optimized ML models for gesture accuracy, and seamless two-way text/voice translation, with usability studies showing significant inclusivity improvements for deaf users.",
      image: "https://www.gtri.gatech.edu/public/prod/2024-12/IEEE-scaled.jpg",
      tags: [
        "Sign Language Recognition",
        "Gesture Recognition",
        "E-Commerce Accessibility",
        "Natural Language Processing (NLP)",
        "Artificial Intelligence (AI)",
      ],
      type: "research" as const,
      links: {
        live: "https://ieeexplore.ieee.org/document/10819543/",
        behance: "#",
      },
    },
    {
      id: "research-8",
      title:
        "Unleashing Python’s Power Inside Oracle: A New Era of Machine Learning with OML4Py",
      description:
        "This paper explores Oracle Machine Learning for Python (OML4Py), which integrates Python ML libraries with Oracle Database for scalable, in-database execution, minimizing data movement and boosting efficiency in data science workflows.",
      image: "https://www.gtri.gatech.edu/public/prod/2024-12/IEEE-scaled.jpg",
      tags: [
        "Oracle Machine Learning",
        "Python",
        "OML4Py",
        "Data Science",
        "Machine Learning",
        "Database Integration",
        "Big Data Analytics",
      ],

      type: "research" as const,
      links: {
        live: "https://ieeexplore.ieee.org/document/10819562/",
        behance: "#",
      },
    },
    {
      id: "research-9",
      title:
        "Prediction and Early Detection of Heart Disease: A Hybrid Neural Network and SVM Approach",
      description:
        "This study introduces a hybrid Neural Network-SVM model achieving 92% accuracy in early heart disease detection using 303 patient records with 14 clinical features, outperforming standalone models across precision, recall, F1-score, and ROC-AUC for timely diagnosis.",
      image: "https://www.gtri.gatech.edu/public/prod/2024-12/IEEE-scaled.jpg",
      tags: [
        "Clinical Data Analysis",
        "Predictive Analytics",
        "Classification Algorithms",
        "Support Vector Machines (SVM)",
        "Data Preprocessing",
        "Machine Learning in Healthcare",
      ],

      type: "research" as const,
      links: {
        live: "https://ieeexplore.ieee.org/document/10819575/",
        behance: "#",
      },
    },
    {
      id: "research-10",
      title:
        "Advanced Computational Methods for Pelvic Bone Cancer Detection: Efficacy comparison of Convolutional Neural Networks",
      description:
        "This study demonstrates the Xception CNN model achieves 90.23% accuracy in detecting pelvic bone cancer from CT scans of over 3,000 bone tumor patients, outperforming other networks for faster, precise computer-aided diagnosis.",
      image: "https://www.gtri.gatech.edu/public/prod/2024-12/IEEE-scaled.jpg",
      tags: [
        "Convolutional Neural Networks (CNNs)",
        "computer-aided diagnosis",
        "deep learning",
        "Xception model",
        "machine learning in healthcare",
      ],

      type: "research" as const,
      links: {
        live: "https://ieeexplore.ieee.org/document/10819518/",
        behance: "#",
      },
    },
    {
      id: "research-11",
      title:
        "Enhancing Pega Robotics Process Automation with Machine Learning: A Novel Integration for Optimized Performance",
      description:
        "Pega Robotics Process Automation (RPA) is transforming business operations by streamlining processes and cutting costs, yet dynamic environments demand more adaptive, intelligent solutions. This paper proposes an innovative model integrating Machine Learning (ML) algorithms into Pega Robotics, enhancing performance through dynamic predictive analytics, anomaly detection, and adaptive learning to boost decision-making, scalability, and flexibility. Empirical case studies and comparative analysis validate significant gains in efficiency, error reduction, and adaptability, with theoretical modeling providing a practical framework for ML-enhanced RPA deployment.",
      image: "https://www.gtri.gatech.edu/public/prod/2024-12/IEEE-scaled.jpg",
      tags: [
        "Pega Robotics",
        "Machine Learning",
        "Robotic Process Automation",
        "Predictive Analytics",
        "Adaptive Learning",
        "Automation Optimization",
      ],

      type: "research" as const,
      links: {
        live: "https://ieeexplore.ieee.org/document/10819576/",
        behance: "#",
      },
    },
    {
      id: "research-12",
      title:
        "A novel image encryption algorithm using AES and visual cryptography",
      description:
        "With the current emergence of the Internet, there is a need to securely transfer images between systems. In this context, we propose a secure image encryption algorithm that uses both AES and Visual Cryptographic techniques to protect the image. The image is encrypted using AES and an encoding schema has been proposed to convert the key into shares based on Visual Secret Sharing. The cryptanalysis of the algorithm is then performed and is proved to be secure. The proposed algorithm is then implemented using Python and the results are discussed along with the possible future modifications.",
      image: "https://www.gtri.gatech.edu/public/prod/2024-12/IEEE-scaled.jpg",
      tags: ["AES", "Visual Cryptography", "Image Encryption"],

      type: "research" as const,
      links: {
        live: "https://ieeexplore.ieee.org/document/7877521/",
        behance: "#",
      },
    },
  ],
  blog: [
    {
      id: "blog-1",
      title:
        "How I found misconfigured Jenkins instances of different organizations using Shodan",
      description:
        "How I used Shodan to hunt for misconfigured Jenkins servers across different organizations and quickly realized how many CI/CD instances were exposed with dangerous settings. I then explored what sensitive access these open dashboards gave me and highlighted the key security mistakes and lessons DevOps teams should fix to avoid similar exposure.",
      image:
        "https://miro.medium.com/v2/resize:fit:1400/1*r2-G7uDCXfoxdVePDyIyjA.png",
      tags: ["Cybersecurity", "Application Security", "DevSecOps", "Jenkins"],
      type: "blog" as const,
      links: {
        live: "https://0x1bitcrack3r.medium.com/how-i-found-misconfigured-jenkins-instances-of-different-organizations-using-shodan-9837088f4ec7",
      },
    },
    {
      id: "blog-2",
      title: "Incoming call Notifications for React Native apps",
      description:
        "A comprehensive guide on implementing incoming call notifications in React Native applications using Firebase Cloud Messaging (FCM) and native Android modules to ensure seamless call handling and user experience.",
      image:
        "https://miro.medium.com/v2/resize:fit:750/1*KL1mFE4HUCT9dX9EdLUQ6Q.png",
      tags: ["React Native", "Android", "Java", "Kotlin"],
      type: "blog" as const,
      links: {
        live: "https://0x1bitcrack3r.medium.com/incoming-call-notifications-for-react-native-apps-ef4725702401",
        github: "https://github.com/0x1bitcrack3r/RNFirebaseCallNotifications",
      },
    },
    {
      id: "blog-3",
      title: "Android Native Module for React Native Apps",
      description:
        "How to create an Android Native Module for React Native applications to extend functionality and access native Android features seamlessly from JavaScript code.",
      image:
        "https://miro.medium.com/v2/resize:fit:1400/1*E7PE0KKoA8elHmpMViMkNQ.png",
      tags: ["React Native", "Android", "Java", "Kotlin"],
      type: "blog" as const,
      links: {
        live: "https://0x1bitcrack3r.medium.com/android-native-module-for-react-native-apps-94bf4cdb3a5d",
        github:
          "https://github.com/0x1bitcrack3r/rn-android-overlay-permission",
      },
    },
    {
      id: "blog-4",
      title:
        "HTTP MiTM on Hike Messenger allows the attacker to see group conversations, attachments",
      description:
        "How I hacked Hike Messenger by exploiting its use of HTTP for certain functionalities, allowing me to perform a Man-in-the-Middle (MiTM) attack. This vulnerability enabled me to intercept and view group conversations and attachments, highlighting significant security flaws in the app's design and implementation.",
      image:
        "https://miro.medium.com/v2/resize:fit:1288/1*Zox27WdLzYBU4BFK0wGOAg.png",
      tags: [
        "Cybersecurity",
        "Application Security",
        "Android app hacking",
        "MiTM",
      ],
      type: "blog" as const,
      links: {
        live: "https://0x1bitcrack3r.medium.com/http-mitm-on-hike-messenger-allows-the-attacker-to-see-group-conversations-attachments-35f6d9817173",
      },
    },
    {
      id: "blog-5",
      title: "Cracking WiFi passwords using wifite",
      description:
        "A step-by-step guide on using wifite, an automated wireless attack tool, to crack WiFi passwords by exploiting vulnerabilities in WEP, WPA, and WPA2 protocols.",
      image:
        "https://miro.medium.com/v2/resize:fit:1000/1*tXFa-M1h17H_2YpBgas3gA.jpeg",
      tags: ["Cybersecurity", "Networking", "WiFi Security"],
      type: "blog" as const,
      links: {
        live: "https://0x1bitcrack3r.medium.com/cracking-wifi-passwords-using-wifite-955d93eff2bc",
      },
    },
    {
      id: "blog-6",
      title: "How I found Swiggy partners data breach?",
      description:
        "An in-depth analysis of the Swiggy Partners data breach, detailing the methods used to discover the vulnerability, the extent of the data exposed, and recommendations for improving data security practices to prevent future breaches.",
      image:
        "https://miro.medium.com/v2/resize:fit:1400/1*U0KvrOZOy51E2UfHcIXCKQ.jpeg",
      tags: [
        "Cybersecurity",
        "Data Breach",
        "Reconnaissance",
        "Shodan",
        "Data Security",
      ],
      type: "blog" as const,
      links: {
        live: "https://0x1bitcrack3r.medium.com/how-i-found-swiggy-partners-data-breach-4ea7070a21bf",
      },
    },
    {
      id: "blog-7",
      title: "Igniting React Native Projects",
      description:
        "A comprehensive guide on kickstarting React Native projects, covering essential setup, best practices, and tools to streamline development and enhance app performance.",
      image:
        "https://miro.medium.com/v2/resize:fit:1400/1*RSJbBFd75TclOcS_abezag.jpeg",
      tags: [
        "Android App Development",
        "iOS App Development",
        "React Native",
        "Mobile App Development",
      ],
      type: "blog" as const,
      links: {
        live: "https://medium.com/inside-the-hive/igniting-react-native-projects-68064770c148",
        github: "https://gitlab.com/0x1bitcrack3r/ignite-boilerplate",
      },
    },
  ],
};

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return <HeroSection onSectionChange={setActiveSection} />;
      case "projects":
        return <PortfolioGrid items={portfolioData.projects} type="projects" />;
      case "research":
        return <PortfolioGrid items={portfolioData.research} type="research" />;
      case "blog":
        return <PortfolioGrid items={portfolioData.blog} type="blog" />;
      case "contact":
        return <ContactSection />;
      default:
        return <HeroSection onSectionChange={setActiveSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />

      <main className={activeSection === "home" ? "" : "pt-20"}>
        {renderSection()}
      </main>

      {/* Footer */}
      <footer className="border-t border-primary/20 py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="font-mono text-muted-foreground text-sm">
            © 2026 Vishnu Ramineni — AI & ML Engineer • UI Architect •
            Accessibility Researcher • Security Enthusiast
          </p>
          {/* <p className="font-mono text-xs text-muted-foreground mt-2">
            System.Status: <span className="text-primary">Online</span> |
            Last.Update: <span className="text-primary">2026.02.01</span> |
            Build.Version: <span className="text-primary">v1.0.0</span>
          </p> */}
        </div>
      </footer>
    </div>
  );
}
