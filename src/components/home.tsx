import { useState } from "react";
import { ChevronLeft, ChevronRight, Menu } from "lucide-react";

const technologies = [
  {
    id: "ai",
    name: "Artificial Intelligence",
    description:
      "AI involves creating systems capable of performing tasks that typically require human intelligence. This includes learning, reasoning, problem-solving, perception, and language understanding.",
    details:
      "Modern AI is powered by machine learning, particularly deep learning, which uses neural networks to analyze vast amounts of data. Applications include natural language processing, computer vision, autonomous vehicles, and personalized recommendations.",
    image:
      "https://images.unsplash.com/photo-1677442135136-760c813a743d?w=800&q=80",
    additionalContent: [
      {
        title: "Machine Learning Revolution",
        text: "Machine learning, a subset of AI, has seen explosive growth in recent years. Deep learning models like transformers have revolutionized natural language processing, enabling systems like ChatGPT to generate human-like text and hold conversations. These models are trained on massive datasets and can identify patterns that would be impossible for humans to detect manually.",
        image:
          "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80",
      },
      {
        title: "Computer Vision Breakthroughs",
        text: "Computer vision systems can now recognize objects, faces, and activities with superhuman accuracy. This technology powers everything from facial recognition security systems to autonomous vehicles that can navigate complex environments. Recent advances in generative AI also allow for the creation of photorealistic images from text descriptions.",
        image:
          "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=800&q=80",
      },
      {
        title: "AI Ethics and Governance",
        text: "As AI becomes more powerful, questions about ethics, bias, and governance have become increasingly important. Researchers and policymakers are working to ensure that AI systems are fair, transparent, and aligned with human values. This includes addressing issues like algorithmic bias, privacy concerns, and the potential impact of AI on employment.",
        image:
          "https://images.unsplash.com/photo-1633613286991-611fe299c4be?w=800&q=80",
      },
    ],
  },
  {
    id: "web3",
    name: "Web3",
    description:
      "Web3 represents the next evolution of the internet, built on decentralized technologies like blockchain to create a more user-centric and trustless digital ecosystem.",
    details:
      "Unlike Web2's centralized platforms, Web3 aims to give users control over their data and digital identities. It encompasses decentralized applications (dApps), DAOs (Decentralized Autonomous Organizations), and token-based economies that reward participation.",
    image:
      "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&q=80",
    additionalContent: [
      {
        title: "Decentralized Applications (dApps)",
        text: "Decentralized applications run on peer-to-peer networks rather than centralized servers. These dApps offer greater transparency, censorship resistance, and user control. From decentralized finance platforms to social media alternatives, dApps are reimagining how we interact online without relying on traditional intermediaries.",
        image:
          "https://images.unsplash.com/photo-1639762681057-408e52192e55?w=800&q=80",
      },
      {
        title: "DAOs and Governance",
        text: "Decentralized Autonomous Organizations represent a new model for collective decision-making and resource allocation. Using smart contracts and governance tokens, DAOs enable communities to coordinate activities, manage treasuries, and vote on proposals without centralized leadership. This model is being applied to investment funds, creative projects, and even virtual communities.",
        image:
          "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=800&q=80",
      },
      {
        title: "Digital Identity and Ownership",
        text: "Web3 is redefining digital identity through self-sovereign solutions that give users control over their personal data. Instead of relying on corporate login systems, Web3 identities are often tied to cryptocurrency wallets and verifiable credentials. This approach enables portable reputations across platforms and true ownership of digital assets through NFTs and other tokenized representations.",
        image:
          "https://images.unsplash.com/photo-1642059893618-c831a4ab59b9?w=800&q=80",
      },
    ],
  },
  {
    id: "blockchain",
    name: "Blockchain",
    description:
      "Blockchain is a distributed ledger technology that enables secure, transparent, and tamper-proof record-keeping without requiring a central authority.",
    details:
      "Beyond cryptocurrencies like Bitcoin, blockchain technology is being applied to supply chain management, digital identity verification, voting systems, and smart contracts that automatically execute when conditions are met.",
    image:
      "https://images.unsplash.com/photo-1639762681057-408e52192e55?w=800&q=80",
    additionalContent: [
      {
        title: "Decentralized Finance (DeFi)",
        text: "DeFi is reimagining financial services through blockchain technology. These platforms enable lending, borrowing, trading, and investing without traditional intermediaries like banks. By using smart contracts, DeFi protocols can automate complex financial transactions and make financial services more accessible to people worldwide.",
        image:
          "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&q=80",
      },
      {
        title: "Non-Fungible Tokens (NFTs)",
        text: "NFTs have transformed digital ownership by creating verifiable scarcity for digital assets. Each NFT has a unique identifier on the blockchain, making it possible to prove ownership and authenticity of digital art, collectibles, music, and more. This technology has opened new revenue streams for creators and changed how we think about digital property rights.",
        image:
          "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=800&q=80",
      },
      {
        title: "Enterprise Blockchain Solutions",
        text: "Major corporations are implementing blockchain to improve supply chain transparency, verify product authenticity, and streamline cross-border payments. Unlike public blockchains, these enterprise solutions often use permissioned networks where participants are known and trusted, balancing the benefits of distributed ledgers with business requirements for privacy and compliance.",
        image:
          "https://images.unsplash.com/photo-1561414927-6d86591d0c4f?w=800&q=80",
      },
    ],
  },
  {
    id: "quantum",
    name: "Quantum Computing",
    description:
      "Quantum computing harnesses quantum mechanics to process information in ways that classical computers cannot, potentially solving complex problems exponentially faster.",
    details:
      "Quantum computers use quantum bits or 'qubits' that can exist in multiple states simultaneously, enabling parallel computation. They show promise for cryptography, drug discovery, materials science, and optimization problems.",
    image:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80",
    additionalContent: [
      {
        title: "Quantum Supremacy",
        text: "In 2019, Google claimed to achieve quantum supremacy when its 53-qubit Sycamore processor performed a specific calculation in 200 seconds that would take the world's most powerful supercomputer approximately 10,000 years. While this milestone was contested, it represented a significant step toward practical quantum computing applications.",
        image:
          "https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=800&q=80",
      },
      {
        title: "Quantum Cryptography",
        text: "Quantum computers pose a threat to current encryption methods, but quantum cryptography offers a solution. Quantum key distribution uses the principles of quantum mechanics to create theoretically unhackable communication channels. This technology could revolutionize secure communications for governments, financial institutions, and other organizations handling sensitive data.",
        image:
          "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=800&q=80",
      },
      {
        title: "Quantum Machine Learning",
        text: "Quantum machine learning combines quantum computing with AI to potentially solve complex problems more efficiently than classical approaches. Quantum algorithms could dramatically accelerate training for machine learning models and enable new approaches to pattern recognition, optimization, and simulation that are currently computationally infeasible.",
        image:
          "https://images.unsplash.com/photo-1510906594845-bc082582c8cc?w=800&q=80",
      },
    ],
  },
  {
    id: "ar-vr",
    name: "AR/VR",
    description:
      "Augmented Reality (AR) overlays digital content onto the real world, while Virtual Reality (VR) creates fully immersive digital environments.",
    details:
      "AR and VR technologies are transforming gaming, education, healthcare, architecture, and retail. They enable virtual training, immersive entertainment, and new ways to visualize and interact with information.",
    image:
      "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=800&q=80",
    additionalContent: [
      {
        title: "The Metaverse Vision",
        text: "The metaverse represents the convergence of physical and digital worlds, creating persistent, shared virtual spaces. Major tech companies are investing billions in building metaverse platforms where people can work, socialize, learn, and play. While still evolving, this concept could fundamentally change how we interact with digital content and each other.",
        image:
          "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=800&q=80",
      },
      {
        title: "Industrial Applications",
        text: "Beyond consumer applications, AR and VR are transforming industries. Engineers use AR to visualize complex systems during maintenance, surgeons practice procedures in VR before operating on patients, and architects walk clients through virtual buildings before construction begins. These technologies reduce errors, improve training outcomes, and enable remote collaboration.",
        image:
          "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80",
      },
      {
        title: "Mixed Reality Innovations",
        text: "Mixed reality (MR) blends elements of both AR and VR, allowing virtual objects to interact with the real world. Advanced MR headsets use spatial mapping to understand physical environments and place digital content contextually within them. This technology enables more natural interactions with digital information and creates new possibilities for collaborative work and entertainment.",
        image:
          "https://images.unsplash.com/photo-1626379953822-baec19c3accd?w=800&q=80",
      },
    ],
  },
  {
    id: "iot",
    name: "Internet of Things",
    description:
      "IoT connects everyday physical objects to the internet, allowing them to collect and share data and be remotely monitored or controlled.",
    details:
      "From smart homes and wearable fitness trackers to industrial sensors and smart cities, IoT is creating a more connected world. It enables automation, efficiency, and new insights through data analytics.",
    image:
      "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&q=80",
    additionalContent: [
      {
        title: "Smart Cities Infrastructure",
        text: "Smart cities use IoT sensors to monitor and manage everything from traffic flow and air quality to waste management and energy usage. These interconnected systems help urban planners make data-driven decisions, reduce resource consumption, and improve quality of life for residents. Cities like Singapore, Barcelona, and Copenhagen are leading the way in smart city implementation.",
        image:
          "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800&q=80",
      },
      {
        title: "Industrial IoT (IIoT)",
        text: "The Industrial Internet of Things is revolutionizing manufacturing through connected sensors, machines, and systems. IIoT enables predictive maintenance, which identifies potential equipment failures before they occur, reducing downtime and maintenance costs. It also optimizes production processes through real-time monitoring and analysis of operational data.",
        image:
          "https://images.unsplash.com/photo-1563770660941-10a63607739e?w=800&q=80",
      },
      {
        title: "Edge Computing and IoT",
        text: "Edge computing processes data closer to where it's generated rather than sending everything to the cloud. This approach reduces latency, bandwidth usage, and privacy concerns for IoT applications. As IoT devices proliferate, edge computing becomes increasingly important for applications requiring real-time processing, such as autonomous vehicles and industrial automation.",
        image:
          "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80",
      },
    ],
  },
  {
    id: "robotics",
    name: "Robotics",
    description:
      "Robotics combines engineering and computer science to create machines that can perform tasks autonomously or semi-autonomously.",
    details:
      "Advanced robotics is revolutionizing manufacturing, healthcare, agriculture, and exploration. Modern robots incorporate AI, computer vision, and sophisticated sensors to interact with their environments.",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
    additionalContent: [
      {
        title: "Collaborative Robots (Cobots)",
        text: "Collaborative robots work alongside humans rather than replacing them. Unlike traditional industrial robots that operate in caged environments, cobots are designed with safety features that allow direct human-robot interaction. They're being deployed in manufacturing, healthcare, and retail to augment human capabilities and handle repetitive or physically demanding tasks.",
        image:
          "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=800&q=80",
      },
      {
        title: "Autonomous Mobile Robots",
        text: "Autonomous mobile robots navigate environments without human intervention. From warehouse robots that transport inventory to delivery robots that navigate city sidewalks, these systems use sensors, cameras, and AI to understand their surroundings and make decisions. They're transforming logistics, retail, and service industries by automating transportation tasks.",
        image:
          "https://images.unsplash.com/photo-1581092335397-9583eb92d232?w=800&q=80",
      },
      {
        title: "Soft Robotics",
        text: "Soft robotics uses flexible materials and biologically inspired designs to create robots that can safely interact with delicate objects and adapt to uncertain environments. These robots can grasp irregular objects, navigate confined spaces, and perform tasks that would be difficult for rigid robots. Applications include surgical tools, prosthetics, and robots for exploring fragile ecosystems.",
        image:
          "https://images.unsplash.com/photo-1581093458791-9d15482442f5?w=800&q=80",
      },
    ],
  },
  {
    id: "biotech",
    name: "Biotechnology",
    description:
      "Biotechnology uses biological systems, organisms, or derivatives to develop products and technologies that help improve our lives and the health of our planet.",
    details:
      "From gene editing with CRISPR to synthetic biology and personalized medicine, biotechnology is addressing global challenges in healthcare, agriculture, and environmental sustainability.",
    image:
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80",
    additionalContent: [
      {
        title: "CRISPR Gene Editing",
        text: "CRISPR-Cas9 has revolutionized genetic engineering by making it faster, cheaper, and more precise than previous methods. Scientists are using this technology to develop treatments for genetic diseases, create more resilient crops, and even explore the possibility of eliminating disease-carrying mosquitoes. While promising, CRISPR also raises important ethical questions about human genetic modification.",
        image:
          "https://images.unsplash.com/photo-1530210124550-912dc1381cb8?w=800&q=80",
      },
      {
        title: "Synthetic Biology",
        text: "Synthetic biology applies engineering principles to biology, designing and constructing new biological parts, devices, and systems. Researchers are creating microorganisms that can produce biofuels, degrade pollutants, or manufacture pharmaceuticals. This field blurs the line between living and engineered systems and could transform industries from chemicals to materials science.",
        image:
          "https://images.unsplash.com/photo-1614935151651-0bea6508db6b?w=800&q=80",
      },
      {
        title: "Bioinformatics",
        text: "Bioinformatics combines biology, computer science, and data analytics to analyze and interpret biological data. With the explosion of genomic data, bioinformatics has become essential for understanding genetic variations, predicting protein structures, and identifying potential drug targets. These computational approaches are accelerating discoveries in personalized medicine and drug development.",
        image:
          "https://images.unsplash.com/photo-1518152006812-edab29b069ac?w=800&q=80",
      },
    ],
  },
  {
    id: "cybersecurity",
    name: "Cybersecurity",
    description:
      "Cybersecurity focuses on protecting computer systems, networks, and data from digital attacks, unauthorized access, and information theft.",
    details:
      "As our world becomes increasingly connected, cybersecurity has become critical for individuals, businesses, and nations. Modern cybersecurity combines advanced technology, human expertise, and robust processes to defend against evolving threats.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
    additionalContent: [
      {
        title: "Zero Trust Architecture",
        text: "Zero Trust security assumes that threats exist both inside and outside traditional network boundaries. This approach requires verification for anyone trying to access resources, regardless of their location. By implementing principles like 'never trust, always verify' and least privilege access, organizations can better protect their assets in today's distributed work environments.",
        image:
          "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&q=80",
      },
      {
        title: "AI-Powered Threat Detection",
        text: "Artificial intelligence is transforming cybersecurity by identifying patterns and anomalies that might indicate attacks. Machine learning systems can analyze vast amounts of network traffic to detect unusual behavior, potentially stopping attacks before they cause damage. These systems continuously improve as they encounter new threats, helping security teams stay ahead of sophisticated attackers.",
        image:
          "https://images.unsplash.com/photo-1551808525-51a94da548ce?w=800&q=80",
      },
      {
        title: "Quantum-Resistant Cryptography",
        text: "As quantum computing advances, it threatens to break current encryption methods. Researchers are developing quantum-resistant cryptographic algorithms that can withstand attacks from both classical and quantum computers. These post-quantum cryptography methods will be essential for maintaining secure communications and data protection in the quantum computing era.",
        image:
          "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
      },
    ],
  },
  {
    id: "renewable-energy",
    name: "Renewable Energy",
    description:
      "Renewable energy technologies harness natural resources like sunlight, wind, water, and geothermal heat to produce sustainable power with minimal environmental impact.",
    details:
      "The transition to renewable energy is crucial for addressing climate change and building a sustainable future. Innovations in solar, wind, energy storage, and smart grid technologies are making clean energy increasingly efficient and affordable.",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
    additionalContent: [
      {
        title: "Next-Generation Solar Technology",
        text: "Beyond traditional silicon solar panels, researchers are developing perovskite solar cells, organic photovoltaics, and solar windows that can generate electricity while allowing light to pass through. These technologies promise higher efficiency, lower costs, and more flexible applications, potentially enabling solar power generation on virtually any surface exposed to sunlight.",
        image:
          "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
      },
      {
        title: "Advanced Energy Storage",
        text: "Energy storage is critical for managing the intermittent nature of renewable sources like wind and solar. Beyond lithium-ion batteries, promising technologies include solid-state batteries, flow batteries, compressed air storage, and gravity-based systems. These solutions offer longer duration storage, faster charging, improved safety, and reduced environmental impact.",
        image:
          "https://images.unsplash.com/photo-1569691105751-88df003de7a2?w=800&q=80",
      },
      {
        title: "Smart Grids and Microgrids",
        text: "Smart grid technologies use digital communication and automation to optimize electricity distribution, integrate renewable sources, and respond to changing demand. Microgrids can operate independently or in conjunction with the main grid, providing resilience during outages and enabling communities to generate and manage their own clean energy.",
        image:
          "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80",
      },
    ],
  },
  {
    id: "space-tech",
    name: "Space Technology",
    description:
      "Space technology encompasses the equipment, devices, and systems developed for space exploration, satellite communications, and understanding the universe beyond Earth.",
    details:
      "The new space age is characterized by increased private sector involvement, reusable rockets, miniaturized satellites, and ambitious plans for lunar and Martian exploration. These advances are making space more accessible and opening new frontiers for scientific discovery and commercial development.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    additionalContent: [
      {
        title: "Reusable Launch Vehicles",
        text: "Reusable rockets have dramatically reduced the cost of reaching orbit. Companies like SpaceX and Blue Origin have demonstrated successful landing and reuse of rocket boosters that were previously discarded after a single flight. This breakthrough is making space more accessible for commercial applications, scientific research, and eventually human exploration beyond Earth.",
        image:
          "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?w=800&q=80",
      },
      {
        title: "Satellite Constellations",
        text: "Large networks of small satellites in low Earth orbit are revolutionizing global communications and Earth observation. These constellations provide high-speed internet to remote areas, monitor climate change, track shipping and aviation, and support disaster response. With thousands of satellites planned for launch in the coming years, managing orbital traffic and space debris has become increasingly important.",
        image:
          "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&q=80",
      },
      {
        title: "Lunar and Mars Exploration",
        text: "Multiple countries and private companies are planning missions to the Moon and Mars. These initiatives aim to establish sustainable human presence beyond Earth, conduct scientific research, and potentially utilize extraterrestrial resources. Technologies being developed include habitat modules, in-situ resource utilization systems, and advanced life support systems for long-duration missions.",
        image:
          "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&q=80",
      },
    ],
  },
  {
    id: "machine-learning",
    name: "Machine Learning",
    description:
      "Machine Learning is a subset of AI that enables systems to learn and improve from experience without being explicitly programmed, using algorithms and statistical models to analyze patterns in data.",
    details:
      "From recommendation systems and fraud detection to medical diagnostics and autonomous vehicles, machine learning is transforming industries by automating complex tasks and uncovering insights in massive datasets that would be impossible for humans to process manually.",
    image:
      "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&q=80",
    additionalContent: [
      {
        title: "Deep Learning Breakthroughs",
        text: "Deep learning, a subset of machine learning using neural networks with multiple layers, has achieved remarkable results in areas like image recognition, natural language processing, and game playing. Models like convolutional neural networks (CNNs) for image analysis and transformers for language tasks have surpassed human performance in specific domains, enabling applications from self-driving cars to real-time language translation.",
        image:
          "https://images.unsplash.com/photo-1501621667575-af81f1f0bacc?w=800&q=80",
      },
      {
        title: "Reinforcement Learning",
        text: "Reinforcement learning trains agents to make sequences of decisions by rewarding desired behaviors. This approach has achieved remarkable results in complex environments, from mastering games like Go and StarCraft to optimizing energy consumption in data centers. Reinforcement learning is particularly valuable for problems where the optimal solution isn't known in advance but can be discovered through trial and error.",
        image:
          "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?w=800&q=80",
      },
      {
        title: "Explainable AI and Ethical ML",
        text: "As machine learning systems make increasingly important decisions, the field is focusing on making models more transparent and explainable. Techniques for interpreting complex models help users understand why specific predictions are made, building trust and enabling error correction. Simultaneously, researchers are developing methods to detect and mitigate bias in training data and algorithms to ensure fair and ethical applications of machine learning.",
        image:
          "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80",
      },
    ],
  },
];

function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedTech, setSelectedTech] = useState(technologies[0]);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-900 overflow-hidden text-gray-100">
      {/* Mobile sidebar toggle */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
          className="p-2 rounded-md bg-gray-800 shadow-md text-blue-400 hover:text-blue-300"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Sidebar for mobile */}
      {isMobileSidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-70 z-40 backdrop-blur-sm"
          onClick={() => setIsMobileSidebarOpen(false)}
        >
          <div
            className="w-72 h-full bg-gray-800 shadow-lg border-r border-blue-900/30"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b border-gray-700 bg-gradient-to-r from-blue-900 to-purple-900">
              <h2 className="text-xl font-bold text-blue-300">Tech Explorer</h2>
            </div>
            <div className="overflow-y-auto h-[calc(100%-64px)]">
              <nav className="mt-2">
                {technologies.map((tech) => (
                  <button
                    key={tech.id}
                    onClick={() => {
                      setSelectedTech(tech);
                      setIsMobileSidebarOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3 flex items-center space-x-3 ${selectedTech.id === tech.id ? "bg-blue-900/30 text-blue-300 border-l-4 border-blue-400" : "hover:bg-gray-700/50 text-gray-300 border-l-4 border-transparent"}`}
                  >
                    <span className="font-medium">{tech.name}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </div>
      )}

      {/* Desktop sidebar */}
      <div
        className={`hidden lg:block ${isSidebarOpen ? "w-72" : "w-20"} bg-gray-800 shadow-lg transition-all duration-300 ease-in-out border-r border-blue-900/30`}
      >
        <div className="p-4 border-b border-gray-700 flex justify-between items-center bg-gradient-to-r from-blue-900 to-purple-900">
          {isSidebarOpen ? (
            <>
              <h2 className="text-xl font-bold text-blue-300">Tech Explorer</h2>
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="text-gray-400 hover:text-blue-300"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
            </>
          ) : (
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="mx-auto text-gray-400 hover:text-blue-300"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="overflow-y-auto h-[calc(100%-64px)]">
          <nav className="mt-2">
            {technologies.map((tech) => (
              <button
                key={tech.id}
                onClick={() => setSelectedTech(tech)}
                className={`w-full text-left px-4 py-3 flex items-center ${isSidebarOpen ? "space-x-3" : "justify-center"} ${selectedTech.id === tech.id ? "bg-blue-900/30 text-blue-300 border-l-4 border-blue-400" : "hover:bg-gray-700/50 text-gray-300 border-l-4 border-transparent"}`}
              >
                {isSidebarOpen ? (
                  <span className="font-medium">{tech.name}</span>
                ) : (
                  <span className="font-medium">{tech.name.charAt(0)}</span>
                )}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-auto bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-gray-800 shadow-xl rounded-lg overflow-hidden border border-blue-900/30">
            <div className="h-80 bg-gradient-to-r from-blue-900 to-purple-900 relative">
              <img
                src={selectedTech.image}
                alt={selectedTech.name}
                className="w-full h-full object-cover opacity-60 mix-blend-overlay"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-gray-900/70 to-transparent">
                <h1 className="text-5xl font-bold text-white px-4 py-2 rounded-lg bg-black/30 backdrop-blur-sm border border-blue-500/20 shadow-lg">
                  {selectedTech.name}
                </h1>
              </div>
            </div>
            <div className="p-8">
              <p className="text-xl text-blue-300 mb-6 leading-relaxed">
                {selectedTech.description}
              </p>
              <div className="border-t border-gray-700 pt-6">
                <h2 className="text-2xl font-semibold text-blue-400 mb-4">
                  Key Insights
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  {selectedTech.details}
                </p>
              </div>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-900/20 p-5 rounded-lg border border-blue-800/50">
                  <h3 className="text-lg font-semibold text-blue-300 mb-3">
                    Applications
                  </h3>
                  <ul className="list-disc pl-5 text-gray-300 space-y-2">
                    <li>Industry transformation</li>
                    <li>Consumer products</li>
                    <li>Research advancements</li>
                    <li>Future potential</li>
                  </ul>
                </div>
                <div className="bg-purple-900/20 p-5 rounded-lg border border-purple-800/50">
                  <h3 className="text-lg font-semibold text-purple-300 mb-3">
                    Challenges
                  </h3>
                  <ul className="list-disc pl-5 text-gray-300 space-y-2">
                    <li>Technical limitations</li>
                    <li>Ethical considerations</li>
                    <li>Regulatory frameworks</li>
                    <li>Adoption barriers</li>
                  </ul>
                </div>
              </div>

              {/* Additional detailed content */}
              {selectedTech.additionalContent && (
                <div className="mt-12">
                  <h2 className="text-2xl font-semibold text-blue-400 mb-6 border-b border-gray-700 pb-2">
                    Deep Dive
                  </h2>
                  <div className="space-y-12">
                    {selectedTech.additionalContent.map((content, index) => (
                      <div
                        key={index}
                        className="bg-gray-800/50 rounded-lg overflow-hidden shadow-lg border border-gray-700"
                      >
                        <div className="md:flex">
                          <div className="md:w-1/3">
                            <img
                              src={content.image}
                              alt={content.title}
                              className="w-full h-full object-cover md:h-64 lg:h-auto"
                            />
                          </div>
                          <div className="p-6 md:w-2/3">
                            <h3 className="text-xl font-semibold text-blue-300 mb-3">
                              {content.title}
                            </h3>
                            <p className="text-gray-300 leading-relaxed">
                              {content.text}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tech trends visualization */}
              <div className="mt-12 p-6 bg-gray-800/50 rounded-lg border border-gray-700">
                <h2 className="text-2xl font-semibold text-blue-400 mb-4">
                  Technology Adoption Curve
                </h2>
                <div className="h-24 bg-gradient-to-r from-purple-900 via-blue-600 to-green-500 rounded-full relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-between px-8 text-xs md:text-sm">
                    <span className="bg-gray-900/70 px-2 py-1 rounded-full">
                      Early Adoption
                    </span>
                    <span className="bg-gray-900/70 px-2 py-1 rounded-full">
                      Growth
                    </span>
                    <span className="bg-gray-900/70 px-2 py-1 rounded-full">
                      Maturity
                    </span>
                    <span className="bg-gray-900/70 px-2 py-1 rounded-full">
                      Widespread Use
                    </span>
                  </div>
                </div>
                <div className="mt-4 text-center text-gray-400 text-sm">
                  Visualization of {selectedTech.name} adoption across
                  industries
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
