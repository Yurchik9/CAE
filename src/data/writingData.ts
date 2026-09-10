export interface ParagraphAnalysis {
  paragraphTitle: string;
  modelText: string;
  explanation: string;
  c1Features: string[];
}

export interface ModelAnswerExample {
  promptTheme: string;
  fullModelAnswer: string;
  paragraphBreakdown: ParagraphAnalysis[];
  examinerScoreNotes: string;
}

export interface WritingFormat {
  id: string;
  title: string;
  part: "Part 1 (Compulsory)" | "Part 2 (Choice)";
  register: string;
  wordCount: string;
  description: string;
  purpose: string;
  audience: string;
  structure: { paragraph: string; content: string }[];
  keyRules: string[];
  usefulPhrases: { category: string; phrases: string[] }[];
  commonMistakes: string[];
  modelExample?: ModelAnswerExample;
  comparisonTable?: { headers: string[]; rows: string[][] };
}

export interface WritingCriteria {
  name: string;
  maxScore: number;
  description: string;
  focusPoints: string[];
}

export const WRITING_CRITERIA: WritingCriteria[] = [
  {
    name: "Content",
    maxScore: 5,
    description: "Чи розкриті всі пункти завдання, чи текст відповідає темі й меті.",
    focusPoints: [
      "All task requirements addressed in detail",
      "No missing buzz points or prompts",
      "Clear development of ideas with supporting arguments/examples"
    ]
  },
  {
    name: "Communicative Achievement",
    maxScore: 5,
    description: "Правильність реєстру (формальний/неформальний) та досягнення комунікативної мети.",
    focusPoints: [
      "Appropriate register for target audience (formal vs informal)",
      "Holds the reader's attention effectively",
      "Demonstrates complete command of text genre conventions"
    ]
  },
  {
    name: "Organisation",
    maxScore: 5,
    description: "Логічна структура, абзаци, параграфи по темах та розмаїття зв'язних слів (linking devices).",
    focusPoints: [
      "Logical paragraphing and clear progression",
      "Cohesive devices (furthermore, nevertheless, consequently)",
      "Use of headings/bullet points where required (Reports & Proposals)"
    ]
  },
  {
    name: "Language",
    maxScore: 5,
    description: "Розмаїття лексики та граматики рівнів C1/C2, точність та складні граматичні структури.",
    focusPoints: [
      "C1 Advanced vocabulary & collocations",
      "Complex grammar (Inversion, Passive reporting, Modal perfect, Participle clauses)",
      "High accuracy with minimal errors"
    ]
  }
];

export const WRITING_FORMATS: WritingFormat[] = [
  {
    id: "essay",
    title: "1. Essay (Есе) — Part 1",
    part: "Part 1 (Compulsory)",
    register: "Formal / Semi-formal Academic",
    wordCount: "220 – 260 words",
    description: "Обов'язкове завдання Part 1. Вам дають короткий вступний текст та 3 пункти для обговорення (buzz points). Потрібно детально обговорити ДВА пункти, навести аргументи та висловити чітку власну думку у висновку.",
    purpose: "Обговорити дві точки зору, зважити аргументи та обрати найбільш важливу ідею.",
    audience: "Tutor / Academic Examiner",
    structure: [
      { paragraph: "Introduction (2–3 sentences)", content: "Перефразуй тему своїми словами, не копіюючи завдання. Окресли коло питань для обговорення." },
      { paragraph: "Body Paragraph 1", content: "Перший пункт: теза + аргумент + приклад/пояснення + короткий контраргумент." },
      { paragraph: "Body Paragraph 2", content: "Другий пункт: теза + аргумент + приклад/наслідки." },
      { paragraph: "Conclusion", content: "Підсумуй обидва пункти, чітко обґрунтуй, яка ідея є більш важливою та чому." }
    ],
    keyRules: [
      "НЕ використовуй скорочення (don't → do not, it's → it is).",
      "НЕ копіюй фрази з завдання — перераховуй своїми словами.",
      "Обов'язково зважуй 2 з 3 наданих пунктів.",
      "У висновку чітко висловлюй СВОЮ думку без введення нової інформації."
    ],
    usefulPhrases: [
      {
        category: "Introduction & Context",
        phrases: [
          "It is often claimed/argued that...",
          "There has been considerable debate over whether...",
          "Nowadays, X has become a topic of growing concern/interest."
        ]
      },
      {
        category: "Presenting Arguments",
        phrases: [
          "One argument in favour of this is that...",
          "A further point worth considering is...",
          "It could be argued that...",
          "Equally important is the fact that..."
        ]
      },
      {
        category: "Contrast & Concession",
        phrases: [
          "Although / Even though...",
          "Despite the fact that...",
          "While it is true that..., nevertheless...",
          "On the other hand, critics maintain that..."
        ]
      },
      {
        category: "Conclusion & Personal Viewpoint",
        phrases: [
          "Taking everything into account...",
          "All things considered...",
          "On balance, I believe that...",
          "In conclusion, the evidence points to..."
        ]
      }
    ],
    commonMistakes: [
      "Просто переказ пунктів без власного аналізу.",
      "Особистий/розмовний тон (використання slang чи 'a lot of').",
      "Відсутність чіткої особистої думки у висновку.",
      "Дисбаланс: один абзац величезний, другий — 1 речення."
    ],
    modelExample: {
      promptTheme: "Your class attended a panel discussion on the impact of modern social media on society. Write an essay discussing two of the points in your notes: 1) Communication Skills, 2) Mental Wellbeing. Explain which aspect is more significant, giving reasons.",
      fullModelAnswer: `It is widely acknowledged that social media has revolutionized interpersonal dynamics in modern society. While its influence permeates virtually every aspect of daily life, its consequences on communication skills and mental wellbeing warrant thorough examination.

One argument in favour of social media is its capacity to facilitate global connectivity. Platforms enable individuals to maintain contact across vast distances, fostering international collaboration and cultural exchange. Nevertheless, critics maintain that digital interactions lack the non-verbal cues essential for genuine empathy, thereby diminishing face-to-face communication proficiency among younger generations.

Equally important is the profound impact of social networking on mental wellbeing. Exposure to idealized online personas frequently instigates unhealthy social comparisons, leading to heightened anxiety and diminished self-esteem. Furthermore, the addictive nature of algorithmically tailored content often disrupts sleep patterns, exacerbating psychological distress. Had users been more aware of these cognitive risks initially, preventive measures might have been adopted sooner.

All things considered, both dimensions are undeniably consequential. On balance, however, I believe that the detriment to mental wellbeing represents the more significant concern. While communication habits can adapt to technological shifts, compromised psychological health has far-reaching, detrimental effects on individual quality of life.`,
      paragraphBreakdown: [
        {
          paragraphTitle: "Paragraph 1: Introduction (Вступ)",
          modelText: "It is widely acknowledged that social media has revolutionized interpersonal dynamics in modern society. While its influence permeates virtually every aspect of daily life, its consequences on communication skills and mental wellbeing warrant thorough examination.",
          explanation: "Вступ перефразовує тему завдання без копіювання слів. Використовується формальний академічний тон та вказуються два обрані пункти.",
          c1Features: ["Passive reporting: 'It is widely acknowledged'", "C1 Vocabulary: 'revolutionized interpersonal dynamics', 'warrant thorough examination'"]
        },
        {
          paragraphTitle: "Paragraph 2: First Aspect (Communication Skills)",
          modelText: "One argument in favour of social media is its capacity to facilitate global connectivity. Platforms enable individuals to maintain contact across vast distances, fostering international collaboration and cultural exchange. Nevertheless, critics maintain that digital interactions lack the non-verbal cues essential for genuine empathy, thereby diminishing face-to-face communication proficiency among younger generations.",
          explanation: "Подається позитивна сторона, після чого через формальний контраргумент (Nevertheless) аналізується негативний вплив на навички спілкування.",
          c1Features: ["Linking word of contrast: 'Nevertheless'", "Advanced collocations: 'facilitate global connectivity', 'diminishing face-to-face communication proficiency'"]
        },
        {
          paragraphTitle: "Paragraph 3: Second Aspect (Mental Wellbeing)",
          modelText: "Equally important is the profound impact of social networking on mental wellbeing. Exposure to idealized online personas frequently instigates unhealthy social comparisons, leading to heightened anxiety and diminished self-esteem. Furthermore, the addictive nature of algorithmically tailored content often disrupts sleep patterns, exacerbating psychological distress. Had users been more aware of these cognitive risks initially, preventive measures might have been adopted sooner.",
          explanation: "Аналізується другий пункт з використанням C1 інверсії у 3-му умовному реченні (Had users been...).",
          c1Features: ["Inversion in 3rd Conditional: 'Had users been more aware...'", "C1 Linking: 'Equally important', 'Furthermore'", "C1 Lexics: 'exacerbating psychological distress'"]
        },
        {
          paragraphTitle: "Paragraph 4: Conclusion (Висновок)",
          modelText: "All things considered, both dimensions are undeniably consequential. On balance, however, I believe that the detriment to mental wellbeing represents the more significant concern. While communication habits can adapt to technological shifts, compromised psychological health has far-reaching, detrimental effects on individual quality of life.",
          explanation: "Підсумовуються обидві теми та надається чітка відповідь: яка з двох проблем є більш важливою і чому.",
          c1Features: ["Conclusion phrases: 'All things considered', 'On balance, however'", "C1 Vocabulary: 'compromised psychological health'"]
        }
      ],
      examinerScoreNotes: "Score: 20/20 (Band 9). Content: Both buzz points covered with clear thesis. Communicative Achievement: Strictly formal academic tone. Organisation: Smooth paragraph transitions. Language: Inversion, passive reporting, C1 collocations."
    }
  },
  {
    id: "formal_letter",
    title: "2.1 Formal Letter / Email",
    part: "Part 2 (Choice)",
    register: "Strictly Formal",
    wordCount: "220 – 260 words",
    description: "Написання листа до незнайомої людини, роботодавця, редактора журналу або офіційної особи (скарга, заявка, запит інформації, рекомендація).",
    purpose: "Офіційно звернутися, подати заявку, висловити скаргу чи запропонувати рішення.",
    audience: "Manager, Editor, University Board, Official",
    structure: [
      { paragraph: "Salutation", content: "Dear Sir/Madam (якщо ім'я невідоме) або Dear Mr/Ms [Surname] (якщо відоме)." },
      { paragraph: "Introduction", content: "Чітка мета листа. I am writing to inquire about... / I am writing with regard to..." },
      { paragraph: "Body Paragraphs (1–2)", content: "Основні факти, деталі, прохання — по одній темі на абзац у ввічливому формальному тоні." },
      { paragraph: "Closing Paragraph", content: "Очікувана дія чи відповідь. I look forward to hearing from you at your earliest convenience." },
      { paragraph: "Sign-off", content: "Yours faithfully (якщо Dear Sir/Madam) або Yours sincerely (якщо звертались на ім'я)." }
    ],
    keyRules: [
      "Жодних скорочень (I am writing, not I'm writing).",
      "Уникай фразових дієслів (find out → determine, get in touch → contact).",
      "Дотримуйся формальних формул привітання та прощання."
    ],
    usefulPhrases: [
      {
        category: "Opening & Purpose",
        phrases: [
          "I am writing with regard to / in connection with...",
          "I am writing to express my dissatisfaction with...",
          "I would like to draw your attention to..."
        ]
      },
      {
        category: "Making Requests & Inquiries",
        phrases: [
          "I would be grateful if you could provide details regarding...",
          "Could you please clarify whether...",
          "I would appreciate it if you would consider..."
        ]
      },
      {
        category: "Sign-off & Next Steps",
        phrases: [
          "Please do not hesitate to contact me should you require further information.",
          "I look forward to your prompt reply.",
          "Yours faithfully, / Yours sincerely,"
        ]
      }
    ],
    commonMistakes: [
      "Плутанина між Yours faithfully (Dear Sir/Madam) та Yours sincerely (Dear Mr Smith).",
      "Використання розмовних слів (like 'thanks', 'cool', 'guys').",
      "Відсутність чіткої причини написання у першому абзаці."
    ],
    modelExample: {
      promptTheme: "You recently attended an international cultural festival that was poorly organized. Write a formal letter of complaint to the Festival Director detailing the issues faced and requesting financial compensation.",
      fullModelAnswer: `Dear Sir/Madam,

I am writing to express my profound dissatisfaction with the organization of the International Cultural Festival held in city park on 14th August. Having attended previous editions with great enthusiasm, I had anticipated a similarly rewarding experience this year; unfortunately, the event fell regrettably short of acceptable standards.

First and foremost, the scheduling was disastrously mismanaged. Several key musical performances were cancelled without prior notification or explanation. Furthermore, the venue was severely overcrowded due to unchecked ticket sales, which resulted in inadequate sanitary facilities and dangerously compromised safety protocols. Had security staff been properly briefed, the chaotic scenes near the main stage could easily have been averted.

In light of these shortcomings, I felt compelled to leave the venue prematurely, having been unable to access the workshops for which I had purchased premium admission. It is disappointing that an event of such prestige failed to deliver the services advertised.

Under these circumstances, I believe it is reasonable to request a full reimbursement of my ticket price, amounting to £65. I trust you will give this matter your immediate attention and look forward to receiving your prompt written reply regarding how compensation will be processed.

Yours faithfully,

J. Miller`,
      paragraphBreakdown: [
        {
          paragraphTitle: "Salutation & Opening (Привітання та Мета)",
          modelText: "Dear Sir/Madam,\nI am writing to express my profound dissatisfaction with the organization of the International Cultural Festival held in city park on 14th August...",
          explanation: "Офіційне привітання Dear Sir/Madam. Чітко окреслено мету листа без використання скорочень.",
          c1Features: ["Formal opening: 'Dear Sir/Madam'", "C1 Purpose phrase: 'I am writing to express my profound dissatisfaction'", "No contractions used"]
        },
        {
          paragraphTitle: "Paragraph 2: Detailed Complaints (Деталізація проблем)",
          modelText: "First and foremost, the scheduling was disastrously mismanaged. Several key musical performances were cancelled without prior notification or explanation. Furthermore, the venue was severely overcrowded due to unchecked ticket sales... Had security staff been properly briefed, the chaotic scenes near the main stage could easily have been averted.",
          explanation: "Наводяться конкретні факти недоліків. Вжито C1 інверсію в 3-му умовному реченні (Had security staff been...).",
          c1Features: ["Conditional Inversion: 'Had security staff been properly briefed...'", "Formal Connectives: 'First and foremost', 'Furthermore'"]
        },
        {
          paragraphTitle: "Paragraph 3: Personal Impact (Вплив на автора)",
          modelText: "In light of these shortcomings, I felt compelled to leave the venue prematurely, having been unable to access the workshops for which I had purchased premium admission. It is disappointing that an event of such prestige failed to deliver the services advertised.",
          explanation: "Описуються наслідки проблем для автора з дієприкметниковим зворотом (having been unable to access).",
          c1Features: ["Participle Clause: 'having been unable to access...'", "C1 Formal Phrase: 'In light of these shortcomings', 'felt compelled to'"]
        },
        {
          paragraphTitle: "Paragraph 4 & Closing (Вимога відшкодування та Прощання)",
          modelText: "Under these circumstances, I believe it is reasonable to request a full reimbursement of my ticket price, amounting to £65. I trust you will give this matter your immediate attention and look forward to receiving your prompt written reply...\n\nYours faithfully,\nJ. Miller",
          explanation: "Вимога компенсації та термін відповіді. Оскільки привітання було 'Dear Sir/Madam', прощання — обов'язково 'Yours faithfully'.",
          c1Features: ["Formal Demand: 'request a full reimbursement'", "Closing Formula: 'Yours faithfully'"]
        }
      ],
      examinerScoreNotes: "Score: 20/20 (Band 9). Content: Full complaint details & refund request included. Communicative Achievement: 100% formal tone, zero contractions. Organisation: Logical complaint sequence."
    }
  },
  {
    id: "report",
    title: "2.2 Report (Звіт)",
    part: "Part 2 (Choice)",
    register: "Formal & Objective",
    wordCount: "220 – 260 words",
    description: "Проаналізувати минулу/теперішню ситуацію на основі фактів або опитування та надати об'єктивні рекомендації для керівництва чи організації.",
    purpose: "Інформувати та рекомендувати на основі об'єктивних даних.",
    audience: "Director, Superior, School Committee",
    structure: [
      { paragraph: "Title", content: "Report on [Topic / Target Subject]" },
      { paragraph: "Introduction", content: "The aim/purpose of this report is to evaluate... Based on a survey of..." },
      { paragraph: "Subheading 1: Current Situation / Findings", content: "Об'єктивні факти та результати спостережень." },
      { paragraph: "Subheading 2: Analysis / Feedback", content: "Плюси та мінуси, реакція респондентів." },
      { paragraph: "Subheading 3: Conclusion & Recommendations", content: "Обґрунтовані рекомендації: It is recommended that..." }
    ],
    keyRules: [
      "ОБОВ'ЯЗКОВО використовуй заголовки та підзаголовки!",
      "Пиши у безособовому тоні (It emerged that..., The data indicates that... instead of 'I think').",
      "Можна використовувати списки та марковані пункти (bullet points)."
    ],
    usefulPhrases: [
      {
        category: "Aim & Sources",
        phrases: [
          "The purpose of this report is to evaluate/assess...",
          "This report is based on a survey conducted among...",
          "The findings presented below were gathered from..."
        ]
      },
      {
        category: "Reporting Findings",
        phrases: [
          "Overall, the majority of respondents felt that...",
          "It was found that... / It emerged that...",
          "On the whole, the results indicate a clear trend towards..."
        ]
      },
      {
        category: "Recommendations",
        phrases: [
          "In light of the findings, it would be advisable to...",
          "It is strongly recommended that...",
          "Implementation of these measures would lead to..."
        ]
      }
    ],
    commonMistakes: [
      "Відсутність заголовків/підзаголовків (найчастіша причина втрати балів!).",
      "Занадто суб'єктивний стиль письма ('I really liked...').",
      "Написання у формі суцільного есе."
    ],
    modelExample: {
      promptTheme: "The Director of your college has asked you to write a report evaluating the current university library facilities and proposing realistic improvements based on feedback from student members.",
      fullModelAnswer: `Report on University Library Facilities and Proposed Upgrades

Introduction
The aim of this report is to assess the adequacy of current library resources at Central Campus and recommend strategic enhancements. The insights contained herein were derived from a survey conducted among 350 undergraduate students during the spring semester.

Current Study Environment
Overall, satisfaction regarding silent study areas remains high. Students praised the extensive digital database access and quiet atmosphere. However, severe discontent was expressed concerning group study spaces. It emerged that collaboration rooms are insufficient in number and lack essential audiovisual hardware, compelling students to seek alternative off-campus venues.

Digital Resources and Equipment
While the desktop computer terminals were deemed functional, a substantial proportion of respondents reported frequent Wi-Fi disconnections during peak hours. Furthermore, printing facilities were frequently out of service, causing severe bottlenecks before essay submission deadlines.

Conclusion and Recommendations
In light of the findings, the library remains a valued facility but requires modernizing to meet collaborative learning demands. It is strongly recommended that the college management undertake the following measures:
• Convert the underutilized third-floor storage area into six soundproof group study rooms.
• Upgrade the wireless network infrastructure to prevent server overloads.
• Implement an automated printing management system to ensure uninterrupted service.`,
      paragraphBreakdown: [
        {
          paragraphTitle: "Header & Introduction (Заголовок та Мета)",
          modelText: "Report on University Library Facilities and Proposed Upgrades\n\nIntroduction\nThe aim of this report is to assess the adequacy of current library resources at Central Campus and recommend strategic enhancements...",
          explanation: "Обов'язковий заголовок та перший підзаголовок 'Introduction'. Вказано мету звіту та джерело даних.",
          c1Features: ["Mandatory Heading format", "Impersonal source phrasing: 'derived from a survey conducted among...'", "C1 Vocab: 'assess the adequacy'"]
        },
        {
          paragraphTitle: "Subheading 1: Current Study Environment (Оцінка зон навчання)",
          modelText: "Current Study Environment\nOverall, satisfaction regarding silent study areas remains high... However, severe discontent was expressed concerning group study spaces. It emerged that collaboration rooms are insufficient in number...",
          explanation: "Розділ присвячений об'єктивним фактам з пасивними конструкціями (discontent was expressed / It emerged that).",
          c1Features: ["Subheading structure", "Passive reporting: 'discontent was expressed', 'It emerged that'"]
        },
        {
          paragraphTitle: "Subheading 2: Digital Resources (Обладнання та мережа)",
          modelText: "Digital Resources and Equipment\nWhile the desktop computer terminals were deemed functional, a substantial proportion of respondents reported frequent Wi-Fi disconnections...",
          explanation: "Другий змістовний розділ про технічний стан зі статистикою з опитування.",
          c1Features: ["C1 Reporting: 'a substantial proportion of respondents reported'", "Formal Connectives: 'Furthermore'"]
        },
        {
          paragraphTitle: "Subheading 3: Conclusion & Recommendations (Висновки та Буліти)",
          modelText: "Conclusion and Recommendations\nIn light of the findings, the library remains a valued facility... It is strongly recommended that the college management undertake the following measures:\n• Convert underutilized third-floor storage...\n• Upgrade wireless network...",
          explanation: "Фінальний розділ з підсумком та конкретними маркованими рекомендаціями (bullet points).",
          c1Features: ["Bullet points for clear reporting format", "Formal recommendation: 'It is strongly recommended that...'"]
        }
      ],
      examinerScoreNotes: "Score: 20/20 (Band 9). Content: Thorough assessment & 3 clear recommendations. Communicative Achievement: Perfect Report format with headings & bullet points, 100% objective impersonal tone."
    }
  },
  {
    id: "review",
    title: "2.3 Review (Рецензія)",
    part: "Part 2 (Choice)",
    register: "Engaging / Semi-formal",
    wordCount: "220 – 260 words",
    description: "Оцінити книгу, фільм, ресторан, сервіс, виставку або вебсайт для журналу чи сайту. Необхідно описати, оцінити плюси/мінуси та надати рекомендацію.",
    purpose: "Описати, оцінити та рекомендувати читачам.",
    audience: "Magazine readers, Website visitors, General public",
    structure: [
      { paragraph: "Title (Optional but encouraged)", content: "A catchy, creative title (e.g. 'A Night to Remember', 'Worth the Hype?')" },
      { paragraph: "Introduction", content: "Короткий огляд об'єкта рецензії (назва, жанр/локація) та загальне враження." },
      { paragraph: "Body Paragraph 1: Description & Strengths", content: "Сюжет/атмосфера/сервіс, ключові позитивні моменти з яскравими прикметниками." },
      { paragraph: "Body Paragraph 2: Weaknesses & Critical View", content: "Слабкі сторони чи недоліки з поясненням чому." },
      { paragraph: "Conclusion & Recommendation", content: "Фінальна оцінка, для кого це підходить та чи варто витрачати час/гроші." }
    ],
    keyRules: [
      "Використовуй багату та яскраву лексику (captivating, dull, breathtaking, mediocre).",
      "Тут ДОЗВОЛЕНО і вітається особиста суб'єктивна оцінка!",
      "Не переповідай увесь сюжет фільму/книги — фокусуйся на ОЦІНЦІ."
    ],
    usefulPhrases: [
      {
        category: "Opening & Context",
        phrases: [
          "Set against the backdrop of...",
          "Directed by... / Written by...",
          "What immediately struck me was..."
        ]
      },
      {
        category: "Praise & Critique",
        phrases: [
          "One of the highlights was undoubtedly...",
          "The performance was nothing short of extraordinary.",
          "Unfortunately, the plot fell rather flat when it came to..."
        ]
      },
      {
        category: "Final Recommendation",
        phrases: [
          "All in all, it is well worth a visit/watch/read.",
          "I would highly recommend this to anyone who enjoys...",
          "If you are looking for..., this is definitely not the place for you."
        ]
      }
    ],
    commonMistakes: [
      "Сухий, діловий тон (рецензія повинна бути цікавою та емоційною!).",
      "Переповідання всього сюжету замість аналізу.",
      "Відсутність чіткої фінальної рекомендації."
    ],
    modelExample: {
      promptTheme: "An international entertainment website has asked readers to submit reviews of recent immersive art exhibitions or interactive museums they have visited, evaluating whether the experience justifies the admission ticket.",
      fullModelAnswer: `Beyond Frame: A Breathtaking Digital Journey

Having heard glowing reports regarding the newly opened 'Digital Masters' exhibition at the City Gallery, I decided to experience it firsthand. Promising an immersive synthesis of classical art and modern projection technology, the exhibition certainly faced sky-high expectations.

What immediately struck me upon entry was the sheer scale of the visual displays. Iconic masterpieces by Monet and Van Gogh are projected onto multi-story walls, accompanied by a tailor-made orchestral score that subtly highlights the emotional undertones of each painting. One of the highlights was undoubtedly the interactive room, where visitors' movements dynamically alter brushstrokes in real time—an extraordinary fusion of artistic heritage and digital innovation.

If there is a flaw, it lies in the crowd management. The gallery organizers severely underestimated peak-hour attendance, resulting in cramped viewing areas that occasionally disrupted the contemplative atmosphere. Had the venue limited hourly entries more strictly, the experience would have been flawless.

All things considered, 'Digital Masters' delivers a memorable and thought-provoking experience that justifies its premium £25 admission fee. I would highly recommend this exhibition to art enthusiasts and tech aficionados alike.`,
      paragraphBreakdown: [
        {
          paragraphTitle: "Title & Introduction (Заголовок та Вступ)",
          modelText: "Beyond Frame: A Breathtaking Digital Journey\n\nHaving heard glowing reports regarding the newly opened 'Digital Masters' exhibition at the City Gallery, I decided to experience it firsthand...",
          explanation: "Креативний заголовок. Одразу вказується об'єкт рецензії та атмосфера очікування.",
          c1Features: ["Creative Title format", "Participle Clause opening: 'Having heard glowing reports...'", "Vivid adjectives: 'breathtaking'"]
        },
        {
          paragraphTitle: "Paragraph 2: Strengths & Description (Сильні сторони та враження)",
          modelText: "What immediately struck me upon entry was the sheer scale of the visual displays. Iconic masterpieces by Monet and Van Gogh are projected onto multi-story walls... One of the highlights was undoubtedly the interactive room...",
          explanation: "Описуються сильні сторони з використанням C1 емфатичної конструкції (What immediately struck me was...).",
          c1Features: ["Wh-Cleft Sentence: 'What immediately struck me upon entry was...'", "Rich vocabulary: 'iconic masterpieces', 'extraordinary fusion'"]
        },
        {
          paragraphTitle: "Paragraph 3: Critique & Weaknesses (Критика та недоліки)",
          modelText: "If there is a flaw, it lies in the crowd management. The gallery organizers severely underestimated peak-hour attendance, resulting in cramped viewing areas... Had the venue limited hourly entries more strictly, the experience would have been flawless.",
          explanation: "Конструктивна критика недоліків з використанням умовної інверсії (Had the venue limited...).",
          c1Features: ["Conditional Inversion: 'Had the venue limited hourly entries...'", "Balanced critique: 'If there is a flaw, it lies in...'"]
        },
        {
          paragraphTitle: "Paragraph 4: Verdict & Recommendation (Вердикт та Рекомендація)",
          modelText: "All things considered, 'Digital Masters' delivers a memorable and thought-provoking experience that justifies its premium £25 admission fee. I would highly recommend this exhibition to art enthusiasts and tech aficionados alike.",
          explanation: "Підсумок із чіткою відповіддю на цінову виправданість та адресна рекомендація.",
          c1Features: ["Review Closing phrase: 'All things considered', 'justifies its premium fee'", "Targeted audience recommendation"]
        }
      ],
      examinerScoreNotes: "Score: 20/20 (Band 9). Content: Full evaluation & recommendation. Communicative Achievement: Lively, engaging style perfect for a review. Language: Rich adjectives, Wh-cleft emphasis, and conditional inversion."
    }
  },
  {
    id: "proposal",
    title: "2.4 Proposal (Пропозиція)",
    part: "Part 2 (Choice)",
    register: "Formal & Persuasive",
    wordCount: "220 – 260 words",
    description: "Запропонувати план дій чи рішення проблеми та ПЕРЕКОНАТИ читача (комітет, керівництво, інвесторів) прийняти цю пропозицію.",
    purpose: "Переконати та аргументувати конкретний план дій на майбутнє.",
    audience: "Company Board, School Principal, Town Council",
    structure: [
      { paragraph: "Title", content: "Proposal for [Project / Solution Name]" },
      { paragraph: "Introduction / Aim", content: "The purpose of this proposal is to suggest ways to improve/implement..." },
      { paragraph: "Subheading 1: Current Issues & Needs", content: "Опис існуючої проблеми чи потреби." },
      { paragraph: "Subheading 2: Proposed Measures & Benefits", content: "Конкретні рішення та їхні переваги." },
      { paragraph: "Subheading 3: Conclusion & Action Call", content: "Переконливий фінальний заклик: I firmly believe that this approach..." }
    ],
    keyRules: [
      "ОБОВ'ЯЗКОВО використовуй заголовки (як у звіті).",
      "На відміну від нейтрального звіту, пропозиція має бути ПЕРЕКОНЛИВОЮ (persuasive).",
      "Фокусуйся на майбутніх діях (Future forms, modal verbs: would, could, lead to)."
    ],
    usefulPhrases: [
      {
        category: "Aim & Outline",
        phrases: [
          "This proposal aims to suggest viable solutions to...",
          "The main objective of this proposal is to outline...",
          "In order to address this issue, I propose the following measures:"
        ]
      },
      {
        category: "Recommending Actions",
        phrases: [
          "One effective strategy would be to...",
          "The main benefit of this approach is that...",
          "This would not only enhance..., but would also reduce..."
        ]
      },
      {
        category: "Persuasive Conclusion",
        phrases: [
          "Taking all factors into account, I strongly urge the board to...",
          "I am confident that implementing these changes will...",
          "In conclusion, this plan represents the most cost-effective solution."
        ]
      }
    ],
    commonMistakes: [
      "Нейтральний стиль звіту замість переконливої аргументації.",
      "Відсутність заголовків розділів.",
      "Нечіткі рекомендації без пояснення переваг."
    ],
    modelExample: {
      promptTheme: "You work at a growing tech company where employees are struggling with burnout. Write a proposal to the Managing Director recommending specific initiatives to promote workplace wellness and improve employee retention.",
      fullModelAnswer: `Proposal for Workplace Wellness Initiatives

Introduction
The primary purpose of this proposal is to outline actionable strategies to improve employee well-being and boost retention rates at TechCorp. Due to recent project expansion, staff burnout has risen, necessitating immediate intervention.

Current Workplace Challenges
Recent internal feedback indicates that 65% of engineers experience prolonged stress linked to long working hours. Furthermore, the absence of dedicated relaxation spaces hampers productivity during intensive coding cycles. Should these working conditions persist, staff turnover will inevitably escalate, resulting in substantial recruitment expenditures.

Proposed Interventions
To counteract these challenges, I propose implementing the following initiatives:
• Flexible Remote Work Policy: Allowing employees to work from home two days per week would dramatically reduce commuting fatigue and enhance work-life balance.
• On-Site Relaxation Zone: Converting the unused basement room into a quiet wellness lounge equipped with comfortable seating would foster restorative breaks.
• Subsidized Gym Memberships: Partnering with local fitness centers would encourage active lifestyles and stress reduction.

Conclusion and Expected Benefits
Implementing these measures would not only boost staff morale, but would also safeguard long-term company productivity. I strongly urge the executive board to allocate funds for this proposal, as the initial investment will yield significant returns in employee loyalty.`,
      paragraphBreakdown: [
        {
          paragraphTitle: "Header & Introduction (Заголовок та Мета)",
          modelText: "Proposal for Workplace Wellness Initiatives\n\nIntroduction\nThe primary purpose of this proposal is to outline actionable strategies to improve employee well-being...",
          explanation: "Заголовок пропозиції та вступи з окресленням проблеми і мети.",
          c1Features: ["Mandatory Proposal Title", "Formal Purpose phrase: 'The primary purpose of this proposal is to outline...'", "C1 Vocabulary: 'actionable strategies'"]
        },
        {
          paragraphTitle: "Subheading 1: Current Workplace Challenges (Опис проблеми)",
          modelText: "Current Workplace Challenges\nRecent internal feedback indicates that 65% of engineers experience prolonged stress... Should these working conditions persist, staff turnover will inevitably escalate...",
          explanation: "Опис проблеми з використанням C1 інверсії у 1-му умовному реченні (Should these working conditions persist...).",
          c1Features: ["Conditional Inversion: 'Should these working conditions persist...'", "Persuasive risk argumentation: 'staff turnover will inevitably escalate'"]
        },
        {
          paragraphTitle: "Subheading 2: Proposed Interventions (Запропоновані рішення)",
          modelText: "Proposed Interventions\nTo counteract these challenges, I propose implementing the following initiatives:\n• Flexible Remote Work Policy...\n• On-Site Relaxation Zone...\n• Subsidized Gym Memberships...",
          explanation: "Заходи з поясненням переконливих переваг для кожного пункту.",
          c1Features: ["Bullet points for proposal clarity", "Benefit linking: 'would dramatically reduce'"]
        },
        {
          paragraphTitle: "Subheading 3: Conclusion & Expected Benefits (Висновки та Заклик)",
          modelText: "Conclusion and Expected Benefits\nImplementing these measures would not only boost staff morale, but would also safeguard long-term company productivity. I strongly urge the executive board to allocate funds...",
          explanation: "Переконливий фінальний заклик з використанням емфатичної конструкції (would not only..., but would also...).",
          c1Features: ["Emphatic Structure: 'would not only..., but would also...'", "Persuasive call to action"]
        }
      ],
      examinerScoreNotes: "Score: 20/20 (Band 9). Content: Clear issues & 3 realistic solutions. Communicative Achievement: Persuasive formal register with mandatory Proposal layout. Language: Inversion, emphatic structures, and corporate C1 vocabulary."
    }
  }
];

export const MASTER_REGISTER_MATRIX = [
  { textType: "Essay", register: "Formal / Academic", personalView: "Balanced, clear in conclusion", headings: "No headings", tone: "Restrained & logical" },
  { textType: "Formal Letter", register: "Strictly Formal", personalView: "Polite & objective", headings: "No headings (Salutations required)", tone: "Respectful & direct" },
  { textType: "Informal Letter", register: "Conversational / Casual", personalView: "Open & personal", headings: "No headings (Friendly greeting)", tone: "Warm & expressive" },
  { textType: "Report", register: "Formal & Objective", personalView: "Minimal (Impersonal)", headings: "MANDATORY Headings", tone: "Analytical & factual" },
  { textType: "Review", register: "Engaging / Vivid", personalView: "Strong subjective opinion", headings: "Optional catchy title", tone: "Lively & descriptive" },
  { textType: "Proposal", register: "Formal & Persuasive", personalView: "Strong persuasive argument", headings: "MANDATORY Headings", tone: "Convincing & forward-looking" },
  { textType: "Article", register: "Semi-formal / Inspiring", personalView: "Personal experience & thoughts", headings: "Catchy Headline required", tone: "Catchy & thought-provoking" }
];
