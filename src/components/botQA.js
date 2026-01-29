// QA_MAP: array of { q: RegExp, a: string }
export const QA_MAP = [
    // Greetings and common conversational phrases
    {
        q: /^(hi|hello|hey|hii|helo|hola|namaste|good\s+(morning|afternoon|evening))$/i,
        a: "Hello! 👋 Welcome to DS STEM LAB! I'm here to help you with any questions about our robotics and STEM programs. How can I assist you today?"
    },
    {
        q: /^(how\s+are\s+you|how\s+r\s+u|whats\s+up|wassup|sup)$/i,
        a: "I'm doing great, thank you for asking! 😊 I'm here to help you learn about DS STEM LAB's robotics and coding programs. What would you like to know?"
    },
    {
        q: /^(thanks|thank\s+you|thx|thanku)$/i,
        a: "You're very welcome! 😊 If you have any more questions about our programs, feel free to ask. Happy to help!"
    },
    {
        q: /^(bye|goodbye|see\s+you|cya)$/i,
        a: "Goodbye! 👋 Feel free to come back anytime if you have questions. Have a great day!"
    },

    // About DS STEM LAB
    {
        q: /what\s+(is|are)\s+(ds\s+stem|this|your)|tell\s+me\s+about|about\s+(ds\s+stem|your\s+lab)/i,
        a: "<strong>DS STEM LAB</strong> is a premier <strong>Robotics & Research Lab</strong> specializing in STEM education, AI, Coding, and Atal Tinkering Lab (ATL) setup for schools across India. 🤖💻"
    },

    // Courses and programs
    {
        q: /what\s+(courses?|programs?|classes?|training)\s+do\s+you\s+(offer|provide|have|teach)|courses?\s+offered|programs?\s+available/i,
        a: "We offer comprehensive programs in:<br/>🤖 <strong>Robotics Education</strong><br/>💻 <strong>Coding & Programming</strong> (Python, Scratch, etc.)<br/>🧠 <strong>Artificial Intelligence</strong><br/>🔬 <strong>STEM Projects</strong><br/>🏫 <strong>ATL Lab Setup</strong><br/>👨‍🏫 <strong>Teacher Training Programs</strong><br/>📱 <strong>IoT & Electronics</strong>"
    },

    // Age and eligibility
    {
        q: /what\s+age|age\s+(group|limit|requirement)|which\s+grade|for\s+(kids|children|students)|eligib/i,
        a: "Our programs cater to students from <strong>Grade 1 to Grade 12</strong>! We design age-appropriate courses with different skill levels - from beginners to advanced learners. 🎓"
    },

    // Fees and pricing
    {
        q: /what\s+(is|are)\s+the\s+fees?|how\s+much|fees?\s+(structure|details?)|cost|price|charges?|payment/i,
        a: "Course fees vary based on the program and duration. For detailed fee structure, please:<br/>📞 Call: <strong>+91 7004547034</strong> or <strong>+91 9534527757</strong><br/>📧 Email: <strong>ds.stemlab@gmail.com</strong><br/>We offer flexible payment options!"
    },

    // Timing and schedule
    {
        q: /what\s+(are|is)\s+(your|the)\s+(timing|hours|schedule)|when\s+(are\s+you\s+open|do\s+classes)|class\s+(timing|schedule|duration)/i,
        a: "We're open <strong>Monday to Saturday, 9:00 AM - 6:00 PM</strong>. Classes are scheduled based on age groups and course levels. Weekend batches are also available! ⏰"
    },

    // Contact information
    {
        q: /how\s+(can|do)\s+i\s+(contact|reach)|contact\s+(details?|info|number)|phone\s+number|email\s+address/i,
        a: "📞 <strong>Phone:</strong> +91 7004547034, +91 9534527757<br/>📧 <strong>Email:</strong> ds.stemlab@gmail.com<br/>🌐 <strong>Website:</strong> www.dstemlab.co.in<br/>💬 <strong>WhatsApp:</strong> +91 9534527757<br/>📘 <strong>Facebook:</strong> <a href='https://www.facebook.com/profile.php?id=61587186836524' target='_blank'>DS STEM LAB</a>"
    },

    // Location and address
    {
        q: /where\s+(is|are)\s+(your|the)\s+(location|office|lab|branch)|address|how\s+to\s+(find|reach)|directions?/i,
        a: "We have <strong>3 locations</strong> across India:<br/><br/>🏢 <strong>Patna (Head Office):</strong><br/>102, Kamla Vihar, Patna, Bihar - 801503<br/><br/>🏢 <strong>Panchkula:</strong><br/>At-Sundra Ramgarh Chowk, Panchkula, Haryana<br/><br/>🏢 <strong>Rohtak:</strong><br/>Hafed Chowk, Rohtak, Haryana - 124001"
    },

    // ATL Lab setup
    {
        q: /atl\s+lab|atal\s+tinkering|lab\s+setup\s+for\s+school|school\s+lab/i,
        a: "Yes! We specialize in <strong>Atal Tinkering Lab (ATL) setup</strong> for schools. We provide:<br/>✅ Complete lab infrastructure<br/>✅ Robotics & STEM equipment<br/>✅ Curriculum development<br/>✅ Teacher training<br/>✅ Ongoing support & maintenance<br/><br/>Contact us for customized school solutions! 🏫"
    },

    // Teacher training
    {
        q: /teacher\s+training|training\s+for\s+(teachers?|educators?|faculty)|educator\s+program/i,
        a: "We offer comprehensive <strong>Teacher Training Programs</strong> covering:<br/>👨‍🏫 Robotics instruction<br/>💻 Coding pedagogy<br/>🔬 STEM teaching methodologies<br/>🎯 Hands-on project guidance<br/><br/>Perfect for schools implementing STEM education!"
    },

    // Online classes
    {
        q: /online\s+class|virtual\s+(class|learning)|remote\s+learning|from\s+home/i,
        a: "Yes! We offer both <strong>online and offline classes</strong>. Our online programs include:<br/>💻 Live interactive sessions<br/>📦 Learning kits delivered to your home<br/>🎥 Recorded sessions for revision<br/>👨‍🏫 One-on-one mentorship<br/><br/>Contact us to enroll in online courses!"
    },

    // Certificates
    {
        q: /certificate|certification|do\s+you\s+provide\s+certificate/i,
        a: "Yes! Students receive <strong>certificates upon course completion</strong>. We also:<br/>🏆 Prepare students for national/international robotics competitions<br/>📜 Provide project completion certificates<br/>🎖️ Offer skill-based certifications<br/><br/>Our certifications add value to student portfolios!"
    },

    // Events and competitions
    {
        q: /events?|competitions?|workshops?|activities|exhibitions?|hackathons?/i,
        a: "We regularly organize:<br/>🏆 <strong>Robotics Competitions</strong><br/>💡 <strong>Innovation Workshops</strong><br/>🎪 <strong>STEM Exhibitions</strong><br/>🎯 <strong>Coding Hackathons</strong><br/><br/>Follow us on social media for updates:<br/>📘 Facebook: DS STEM LAB<br/>📸 Instagram: @dsstemlab"
    },

    // Admission and enrollment
    {
        q: /how\s+to\s+(apply|enroll|join|register|admit)|admission\s+process|enrollment/i,
        a: "To enroll in our programs:<br/>1️⃣ Visit any of our <strong>3 locations</strong><br/>2️⃣ Call us: <strong>+91 7004547034</strong><br/>3️⃣ Fill the contact form on our website<br/>4️⃣ WhatsApp: <strong>+91 9534527757</strong><br/><br/>We'll guide you through the enrollment process! 🎓"
    },

    // Projects
    {
        q: /what\s+(projects?|do\s+students\s+build)|hands[\s-]?on|practical\s+work/i,
        a: "Students work on exciting hands-on projects like:<br/>🤖 Building robots<br/>🚗 Line-following cars<br/>🏠 Home automation systems<br/>🎮 Game development<br/>🌡️ IoT weather stations<br/>📱 Mobile app development<br/><br/>Learning by doing is our motto! 🛠️"
    },

    // Equipment and kits
    {
        q: /equipment|kits?|materials?|tools?|what\s+do\s+i\s+need/i,
        a: "We provide all necessary equipment and kits including:<br/>🔧 Robotics kits (Arduino, Raspberry Pi)<br/>💻 Programming tools<br/>🔌 Electronics components<br/>🖨️ 3D printing access<br/>📦 Take-home learning kits available<br/><br/>No prior equipment needed to start!"
    }
];

export const FALLBACK = "I'm here to help! For specific queries, please contact us:<br/>📞 <strong>+91 7004547034</strong> or <strong>+91 9534527757</strong><br/>📧 <strong>ds.stemlab@gmail.com</strong><br/>💬 <strong>WhatsApp:</strong> +91 9534527757<br/><br/>Our team will be happy to assist you! 😊";
