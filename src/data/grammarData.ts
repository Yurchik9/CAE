export interface WhenToUseInfo {
  title: string;
  points: string[];
  exampleContext?: string;
}

export interface FormShiftItem {
  original: string;
  transformed: string;
  rule: string;
}

export interface FormTransformationInfo {
  title: string;
  description: string;
  shifts: FormShiftItem[];
}

export interface RuleSection {
  id: string;
  title: string;
  titleUk: string;
  iconName: string;
  description: string;
  whenToUse: WhenToUseInfo;
  formTransformation?: FormTransformationInfo;
  examFocus: string[]; // e.g. ["Use of English Part 4", "Writing", "Speaking"]
  tables?: { title: string; headers: string[]; rows: string[][] }[];
  keyRules: { title: string; text: string; example?: string }[];
  traps?: { title: string; text: string; correct: string; incorrect?: string }[];
  signalWords?: string[];
  contentMd?: string;
}

export const GRAMMAR_SECTIONS: RuleSection[] = [
  {
    id: "tenses",
    title: "1. Tenses (Часи)",
    titleUk: "Повний розбір 12 часових форм та їх C1 нюансів",
    iconName: "Clock",
    description: "Детальний довідник з усіх часових форм: Present, Past, Future, Continuous vs Simple, used to/would.",
    whenToUse: {
      title: "Коли та навіщо використовувати різні часові форми на C1:",
      points: [
        "Present Perfect Simple / Continuous: Коли підкреслюємо зв'язок минулої дії з теперішнім результатиком чи тривалістю дії дотепер.",
        "Past Perfect & Past Perfect Continuous: Для побудови чіткої хронології у розповідях ('минуле у минулому'), в есе та у 3-му умовному реченні.",
        "Future Perfect (will have V3) & Future Continuous: У звітах та пропозиціях для прогнозування дій, які завершаться до конкретної дати у майбутньому (By 2030, we will have implemented...).",
        "used to vs would: У розповідях (Speaking Part 2 / Articles / Reviews) для описання минулих звичок та спогадів."
      ],
      exampleContext: "Writing Essays/Reports (хронологія фактів) та Speaking Part 2 (спогади з минулого)."
    },
    formTransformation: {
      title: "🔄 Часові зсуви та трансформації форм у часах",
      description: "Як змінюються часові форми при переході між теперішнім, минулим та майбутнім контекстами:",
      shifts: [
        {
          original: "Present Simple: I work every day.",
          transformed: "Past Simple: I worked every day / Past Perfect: I had worked.",
          rule: "При зміщенні у минулий контекст (backshift) Present Simple стає Past Simple."
        },
        {
          original: "Present Continuous: She is reading now.",
          transformed: "Past Continuous: She was reading at 8pm.",
          rule: "Процес у теперішньому переходить у фоновий процес у минулому."
        },
        {
          original: "Present Perfect: I have finished my task.",
          transformed: "Past Perfect: I had finished my task before he arrived.",
          rule: "Результат у теперішньому стає предминулою дією (Past Perfect), коли описуємо подію до іншого моменту минулого."
        },
        {
          original: "Future Simple: I will write the report tomorrow.",
          transformed: "Future Perfect: By tomorrow evening, I will have written the report.",
          rule: "Трансформація від простої майбутньої дії до завершеної дії ДО певного терміну у майбутньому."
        }
      ]
    },
    examFocus: ["Use of English Part 1 & 2", "Writing", "Speaking"],
    signalWords: [
      "always", "usually", "currently", "these days", "already", "yet", "just",
      "so far", "recently", "lately", "for", "since", "by the time", "no sooner...than"
    ],
    tables: [
      {
        title: "Present Perfect vs Past Simple",
        headers: ["Present Perfect Simple", "Past Simple"],
        rows: [
          ["Час дії не важливий / не вказаний", "Час дії вказаний або зрозумілий з контексту"],
          ["Зв'язок з теперішнім результативно", "Дія повністю завершена в минулому"],
          ["I've lost my phone (і зараз його немає)", "I lost my phone yesterday but found it later"],
          ["Незавершений період (this week)", "Завершений період (last week)"]
        ]
      },
      {
        title: "Past Tenses Comparison Table",
        headers: ["Час", "Коли використовувати", "Приклад"],
        rows: [
          ["Past Simple", "Проста завершена дія у визначений час минулого", "I ate breakfast at 8am."],
          ["Past Continuous", "Фон або процес у конкретний момент минулого", "I was eating breakfast when she called."],
          ["Past Perfect", "Дія, що сталася РАНІШЕ за іншу минулу дію", "I had eaten breakfast before I left home."],
          ["Past Perfect Continuous", "Тривалість дії ДО іншого моменту в минулому", "I had been eating breakfast for 10 min when he arrived."]
        ]
      },
      {
        title: "Future Forms Overview",
        headers: ["Форма", "Вживання", "Приклад"],
        rows: [
          ["will + inf.", "Спонтанне рішення, обіцянка, прогноз без доказів", "I'll answer the phone. I think it will rain."],
          ["be going to", "Заплановане рішення, прогноз із наявними доказами", "We're going to move. Look at those clouds, it's going to rain."],
          ["Present Continuous", "Домовленість на конкретний час/дату", "I'm meeting Tom at 7pm tomorrow."],
          ["Present Simple", "Розклад, офіційний графік", "The train leaves at 9:00 am."],
          ["Future Continuous", "Дія в процесі в конкретний момент у майбутньому", "This time next week I'll be relaxing on the beach."],
          ["Future Perfect", "Дія завершиться ДО певного моменту в майбутньому", "By 2030, she will have graduated."],
          ["Future Perfect Continuous", "Тривалість дії до дати у майбутньому", "By December, I will have been working here for 5 years."],
          ["be about to / on the point of", "Дуже близька майбутня дія", "The film is about to start."]
        ]
      }
    ],
    keyRules: [
      {
        title: "Stative Verbs у Continuous",
        text: "Дієслова стану (know, believe, understand, belong, own, seem, contain) зазвичай не вживаються у Continuous.",
        example: "❌ I'm knowing him for 5 years. → ✅ I've known him for 5 years."
      }
    ],
    traps: [
      {
        title: "Would для станів",
        text: "Would можна використовувати ЛИШЕ для минулих дій (repeated actions), але НІКОЛИ для станів (stative verbs).",
        correct: "I used to have a bicycle. / We would visit grandma every Sunday.",
        incorrect: "❌ We would have a house by the lake."
      }
    ]
  },
  {
    id: "conditionals",
    title: "2. Conditionals (Умовні речення)",
    titleUk: "0-3 умовні речення, Mixed Conditionals, Інверсія та альтернативи If",
    iconName: "GitBranch",
    description: "Форми умовних речень від Zero до Mixed, альтернативи 'if' (unless, provided that, in case) та інверсія.",
    whenToUse: {
      title: "Коли та навіщо використовувати Conditionals на C1:",
      points: [
        "Mixed Conditionals: Коли поєднуємо минулу нереальну умову з теперішнім наслідком.",
        "Conditional Inversion: Обов'язково у формальних есе для підвищення балу за C1 граматику.",
        "Альтернативи 'if': Для урізноманітнення мовлення (provided that, in case, unless)."
      ],
      exampleContext: "Writing Essays & Proposals, Speaking Part 3."
    },
    formTransformation: {
      title: "🔄 Трансформація умовних речень у формальну інверсію",
      description: "Перехід від стандартної 'If'-конструкції до формальної інверсії у C1 письмі:",
      shifts: [
        {
          original: "First Conditional: If you should need further assistance...",
          transformed: "Inversion: Should you need further assistance...",
          rule: "Заміна 'If + subject + should' на інверсію 'Should + subject + infinitive'."
        },
        {
          original: "Second Conditional: If I were in your position...",
          transformed: "Inversion: Were I in your position...",
          rule: "Заміна 'If I were' на інверсію 'Were I...'."
        },
        {
          original: "Third Conditional: If I had known about the delay...",
          transformed: "Inversion: Had I known about the delay...",
          rule: "Заміна 'If + subject + had + V3' на 'Had + subject + V3'."
        },
        {
          original: "Unreal Past -> Present Result: If I had taken the test last year...",
          transformed: "Mixed Conditional: ...I would be a certified student now.",
          rule: "Трансформація від минулої умови (Past Perfect) до теперішнього результату (would + inf)."
        }
      ]
    },
    examFocus: ["Use of English Part 4", "Writing", "Speaking"],
    tables: [
      {
        title: "Conditionals Summary Table",
        headers: ["Тип", "If-clause", "Main clause", "Значення & Приклад"],
        rows: [
          ["Zero", "If + Present Simple", "Present Simple", "Загальні істини: If you heat ice, it melts."],
          ["First", "If + Present Simple", "will / can + inf.", "Реальне майбутнє: If it rains, we will stay home."],
          ["Second", "If + Past Simple (were)", "would + inf.", "Нереальне теперішнє: If I had money, I would buy it."],
          ["Third", "If + Past Perfect", "would have + V3", "Нереальне минуле (жаль): If I had known, I would have come."],
          ["Mixed 1", "If + Past Perfect", "would + inf. (теперішнє)", "Минуле → Теперішнє: If I had studied, I would be a doctor now."]
        ]
      }
    ],
    keyRules: [
      {
        title: "If vs In Case",
        text: "'If' — умова. 'In case' — запобіжний захід (про всяк випадок).",
        example: "Take an umbrella in case it rains."
      }
    ]
  },
  {
    id: "modals",
    title: "3. Modals & Modal Perfect (Модальні дієслова)",
    titleUk: "Обов'язок, заборона, дедукція та Modal Perfect (must have, should have)",
    iconName: "ShieldAlert",
    description: "Різниця must vs have to, mustn't vs don't have to, та вираження дедукції та жалю про минуле.",
    whenToUse: {
      title: "Коли та навіщо використовувати Modals & Modal Perfect:",
      points: [
        "Modal Perfect (must have V3, can't have V3): Вираження 100% впевненості чи дедукції про минулі події.",
        "should have V3: Критика минулих дій або вираження жалю.",
        "needn't have V3 vs didn't need to: Розрізнення марно зробленої дії від відсутності потреби."
      ],
      exampleContext: "Writing Reviews & Use of English Part 4."
    },
    formTransformation: {
      title: "🔄 Трансформація модальних дієслів з Теперішнього у Минулий час (Modal Perfect)",
      description: "Як змінюється модальна форма при переносі дедукції чи обов'язку у минуле:",
      shifts: [
        {
          original: "Present Deduction (+): She must be tired now.",
          transformed: "Past Deduction (+): She must have been tired yesterday.",
          rule: "Present (must + inf) → Past Perfect Deduction (must + have + V3)."
        },
        {
          original: "Present Deduction (-): He can't be at home now.",
          transformed: "Past Deduction (-): He can't have been at home yesterday.",
          rule: "Present (can't + inf) → Past Deduction (can't / couldn't + have + V3)."
        },
        {
          original: "Present Advice: You should call him now.",
          transformed: "Past Regret / Criticism: You should have called him yesterday.",
          rule: "Порада у теперішньому переходить у критику минулого (should + have + V3)."
        },
        {
          original: "Present Obligation: I must call my mom / I have to work.",
          transformed: "Past Obligation: I had to work yesterday.",
          rule: "У минулому часі ОБИДВІ форми (must та have to) трансформуються ТІЛЬКИ у 'had to'."
        }
      ]
    },
    examFocus: ["Use of English Part 4", "Writing", "Speaking"],
    tables: [
      {
        title: "Modal Perfect (Modal + have + V3)",
        headers: ["Структура", "Значення", "Приклад"],
        rows: [
          ["must have + V3", "Впевненість у минулому (+)", "The ground is wet — it must have rained."],
          ["can't have + V3", "Впевненість, що НЕ сталося (-)", "She can't have left already."],
          ["should have + V3", "Критика минулого / жаль", "You should have studied harder."],
          ["needn't have + V3", "Марно виконана дія", "I needn't have brought an umbrella."]
        ]
      }
    ],
    keyRules: [
      {
        title: "Needn't have vs Didn't need to",
        text: "Needn't have V3 = дія зроблена даремно. Didn't need to = не було потреби, тому дія не виконувалася.",
        example: "I needn't have bought milk."
      }
    ]
  },
  {
    id: "passive",
    title: "4. Passive Voice & Causatives (Пасивний стан)",
    titleUk: "Форми пасиву, Causative (have/get something done) та Passive Reporting",
    iconName: "Layers",
    description: "Використання пасивного стану в академічному та офіційному письмі, causative structures та reporting structures.",
    whenToUse: {
      title: "Коли та навіщо використовувати Passive Voice & Causative:",
      points: [
        "Офіційні Звіти (Reports) & Пропозиції: Для створення безособового об'єктивного тону.",
        "Causative (have something done): Замовлення професійних послуг або прикрі події.",
        "Passive Reporting (It is reported that / He is said to have...): Подача фактів у ЗМІ та звітах."
      ],
      exampleContext: "Writing Reports & Proposals."
    },
    formTransformation: {
      title: "🔄 Трансформація Активного стану в Пасивний за часами",
      description: "Повний розбір зміни часових форм з Active Voice у Passive Voice (be + V3):",
      shifts: [
        {
          original: "Present Simple Active: They write the report.",
          transformed: "Present Simple Passive: The report is written.",
          rule: "Active (verb / -s) → Passive (is/are + V3)."
        },
        {
          original: "Present Continuous Active: They are writing the report.",
          transformed: "Present Continuous Passive: The report is being written.",
          rule: "Active (am/is/are + V-ing) → Passive (am/is/are + being + V3)."
        },
        {
          original: "Present Perfect Active: They have written the report.",
          transformed: "Present Perfect Passive: The report has been written.",
          rule: "Active (have/has + V3) → Passive (have/has + been + V3)."
        },
        {
          original: "Past Simple Active: They wrote the report yesterday.",
          transformed: "Past Simple Passive: The report was written yesterday.",
          rule: "Active (V2 / -ed) → Passive (was/were + V3)."
        },
        {
          original: "Active Reporting: People say he escaped.",
          transformed: "Passive Reporting: He is said to have escaped.",
          rule: "Active ('People say he did X') → Passive Infinitive ('He is said to have done X')."
        }
      ]
    },
    examFocus: ["Writing (Reports/Essays)", "Use of English Part 4"],
    tables: [
      {
        title: "Passive Reporting Structures",
        headers: ["Активна думка", "Пасивна форма (It is said)", "Пасивний підмет (He is said to)"],
        rows: [
          ["People say the company is losing money.", "It is said that the company is losing money.", "The company is said to be losing money."],
          ["They believe he escaped overseas.", "It is believed that he escaped overseas.", "He is believed to have escaped overseas."]
        ]
      }
    ],
    keyRules: [
      {
        title: "Passive Incompatibilities",
        text: "Неперехідні дієслова (intransitive: arrive, happen, exist) не мають пасивної форми.",
        example: "An accident happened."
      }
    ]
  },
  {
    id: "reported_speech",
    title: "5. Reported Speech & Reporting Verbs (Непряма мова)",
    titleUk: "Backshift часів, зсув обставин та 7 головних патернів Reporting Verbs",
    iconName: "MessageSquare",
    description: "Зсув часів у непрямій мові, непрямі запитання та повний список граматичних моделей для дієслів мовлення.",
    whenToUse: {
      title: "Коли та навіщо використовувати Reported Speech:",
      points: [
        "Use of English Part 4: Трансформація речень з дієсловами мовлення (suggest doing, advise to do).",
        "Writing Reports & Articles: Для передачі слів та думок респондентів або експертів.",
        "Backshift: Зсув часів на один крок у минуле при репортингу."
      ],
      exampleContext: "Use of English Part 4 & Writing."
    },
    formTransformation: {
      title: "🔄 Повна таблиця зсуву часів (Backshift) у непрямій мові",
      description: "Обов'язкова трансформація часів при передачі Прямої мови у Непряму (Reported Speech):",
      shifts: [
        {
          original: "Direct Present Simple: 'I like coffee,' she said.",
          transformed: "Reported Past Simple: She said (that) she liked coffee.",
          rule: "Present Simple → Past Simple."
        },
        {
          original: "Direct Present Continuous: 'I am working,' he said.",
          transformed: "Reported Past Continuous: He said he was working.",
          rule: "Present Continuous → Past Continuous."
        },
        {
          original: "Direct Present Perfect: 'I have finished,' she said.",
          transformed: "Reported Past Perfect: She said she had finished.",
          rule: "Present Perfect → Past Perfect."
        },
        {
          original: "Direct Past Simple: 'I bought a car,' he said.",
          transformed: "Reported Past Perfect: He said he had bought a car.",
          rule: "Past Simple → Past Perfect."
        },
        {
          original: "Direct Will / Can / May: 'I will help you,' he said.",
          transformed: "Reported Would / Could / Might: He said he would help me.",
          rule: "will → would, can → could, may → might."
        },
        {
          original: "Direct Question: 'Where do you live?' she asked.",
          transformed: "Reported Question: She asked where I lived.",
          rule: "Пряме питання → розповідний порядок слів (без допоміжного do/did)."
        }
      ]
    },
    examFocus: ["Use of English Part 4", "Writing", "Speaking"],
    tables: [
      {
        title: "Reporting Verbs Patterns (Ключ до Part 4)",
        headers: ["Патерн", "Дієслова", "Приклад"],
        rows: [
          ["verb + -ing", "suggest, recommend, deny", "He suggested leaving early."],
          ["verb + to-inf", "offer, refuse, promise", "She promised to help us."],
          ["verb + object + to-inf", "advise, warn, tell", "He advised me to consult a doctor."]
        ]
      }
    ],
    keyRules: [
      {
        title: "When Backshift is NOT required",
        text: "Backshift не потрібен, якщо висловлювання є загальною істиною або ситуація досі є актуальною.",
        example: "The teacher said the Earth is round."
      }
    ]
  },
  {
    id: "relative_clauses",
    title: "6. Relative Clauses (Означальні речення)",
    titleUk: "Defining vs Non-defining clauses, займенники та скорочені дієприкметникові звороти",
    iconName: "Link",
    description: "Різниця між обмежувальними та описовими підрядними реченнями, правила вживання 'that' та коми.",
    whenToUse: {
      title: "Коли та навіщо використовувати Relative Clauses:",
      points: [
        "Non-defining clauses (з комами): Додавання другорядної детальної інформації у формальному письмі.",
        "Defining clauses (без ком): Точна ідентифікація об'єкта.",
        "Reduced relative clauses: Скорочення речень для підвищення академічного рівня тексту."
      ],
      exampleContext: "Writing Essays & Reviews, Use of English Part 2."
    },
    formTransformation: {
      title: "🔄 Скорочення підрядних речень (Reduced Relative Clauses)",
      description: "Трансформація повного підрядного речення у компактний дієприкметниковий зворот:",
      shifts: [
        {
          original: "Active Relative: The man WHO IS STANDING by the door is my professor.",
          transformed: "Reduced Active (-ing): The man STANDING by the door is my professor.",
          rule: "who/which + active verb → Present Participle (-ing)."
        },
        {
          original: "Passive Relative: The report WHICH WAS WRITTEN yesterday contained errors.",
          transformed: "Reduced Passive (V3): The report WRITTEN yesterday contained errors.",
          rule: "who/which + be + V3 → Past Participle (V3)."
        },
        {
          original: "Formal Preposition: The company THAT I applied TO...",
          transformed: "Formal Preposition (Inverted): The company TO WHICH I applied...",
          rule: "Перенос прийменника на початок перед relative pronoun (which/whom)."
        }
      ]
    },
    examFocus: ["Use of English Part 2 & 4", "Writing"],
    tables: [
      {
        title: "Defining vs Non-defining Comparison",
        headers: ["Характеристика", "Defining", "Non-defining"],
        rows: [
          ["Коми", "НЕ ставляться", "Обов'язково з обох боків"],
          ["Використання 'that'", "Можна замість who/which", "ЗАБОРОНЕНО"]
        ]
      }
    ],
    keyRules: [
      {
        title: "Prepositions in Relative Clauses",
        text: "У формальному стилі прийменник ставиться ПЕРЕД relative pronoun (whom/which).",
        example: "The person to whom I spoke."
      }
    ]
  },
  {
    id: "inversion",
    title: "8. Inversion & Emphasis (Інверсія та емфаза)",
    titleUk: "Формальна інверсія (Rarely, Hardly, No sooner) та Cleft Sentences",
    iconName: "Sparkles",
    description: "Інверсія після негативних прислівників, розщеплені речення (What I need is..., It was John who...) для створення емфази.",
    whenToUse: {
      title: "Коли та навіщо використовувати інверсію та емфазу на C1:",
      points: [
        "Формальна Інверсія: Обов'язкова 1-2 рази в есе чи пропозиції для вираження наголосу та стильової вишуканості.",
        "Cleft Sentences: Підкреслення ключового аргументу.",
        "Use of English Part 4: Стандартна трансформація (Hardly had I arrived when...)."
      ],
      exampleContext: "Writing Essays & Proposals, Use of English Part 4."
    },
    formTransformation: {
      title: "🔄 Трансформація Звичайного порядку слів у Формальну Інверсію",
      description: "Зсув підмета та допоміжного дієслова при виносі негативного прислівника на початок:",
      shifts: [
        {
          original: "Standard Sentence: I have rarely seen such dedication.",
          transformed: "Inverted Sentence: RARELY HAVE I SEEN such dedication.",
          rule: "Rarely + Aux (have) + Subject (I) + Verb (seen)."
        },
        {
          original: "Standard Sentence: She did not only win, but she also set a record.",
          transformed: "Inverted Sentence: NOT ONLY DID SHE WIN, but she also set a record.",
          rule: "Not only + Aux (did) + Subj (she) + Verb (win)."
        },
        {
          original: "Standard Sentence: I had no sooner sat down than the phone rang.",
          transformed: "Inverted Sentence: NO SOONER HAD I SAT DOWN than the phone rang.",
          rule: "No sooner + Had + Subj (I) + V3 (sat down) ... than."
        },
        {
          original: "Standard Emphasis: I need a holiday.",
          transformed: "Cleft Sentence: WHAT I NEED IS a holiday.",
          rule: "Трансформація у Cleft structure (What + clause + is/was)."
        }
      ]
    },
    examFocus: ["Use of English Part 4", "Writing (Essays/Reviews)", "Speaking Part 3"],
    tables: [
      {
        title: "Inversion Triggers",
        headers: ["Вираз", "Структура", "Приклад"],
        rows: [
          ["Rarely / Seldom", "Rarely + Aux + Subj + Verb", "Rarely have I seen such chaos."],
          ["Not only... but also", "Not only + Aux + Subj + Verb", "Not only did she win, but she also set a record."]
        ]
      }
    ],
    keyRules: [
      {
        title: "Cleft Sentences for Emphasis",
        text: "Використовуйте cleft sentences для підкреслення важливої думки.",
        example: "What impressed me most was the dedication of the team."
      }
    ]
  },
  {
    id: "wishes_regrets",
    title: "9. Wishes & Regrets (Бажання та жаль)",
    titleUk: "I wish, If only, It's high time, Would rather structures",
    iconName: "HeartHandshake",
    description: "Як виразити жаль про минуле, незадоволення теперішнім або прохання змінити поведінку.",
    whenToUse: {
      title: "Коли та навіщо використовувати вирази бажання та жалю:",
      points: [
        "wish / If only + Past Perfect: Жаль про минулі помилки у листі чи творі.",
        "It's high time + Past Simple: Переконлива пропозиція дій у Proposal.",
        "would rather + Past Simple: Ввічлива перевага щодо дій іншої особи."
      ],
      exampleContext: "Writing Proposals & Informal Letters, Use of English Part 4."
    },
    formTransformation: {
      title: "🔄 Часовий зсув (Backshift) у реченнях Wishes & Regrets",
      description: "Як реальна ситуація у теперішньому чи минулому трансформується у нереальне бажання:",
      shifts: [
        {
          original: "Real Present Reality: I don't have enough money now.",
          transformed: "Unreal Present Wish: I WISH I HAD more money now.",
          rule: "Реальне теперішнє заперечення → wish + Past Simple."
        },
        {
          original: "Real Past Reality: I didn't study hard for the exam.",
          transformed: "Unreal Past Regret: I WISH I HAD STUDIED harder for the exam.",
          rule: "Реальна минула помилка → wish + Past Perfect (had + V3)."
        },
        {
          original: "Present Annoyance: You keep making noise!",
          transformed: "Irritation Wish: I WISH YOU WOULD STOP making noise!",
          rule: "Роздратування чужою поведінкою → wish + would + infinitive."
        },
        {
          original: "Overdue Action: You should start working now.",
          transformed: "High Time Structure: IT'S HIGH TIME YOU STARTED working.",
          rule: "Перенос у конструкцію 'It's high time + Subject + Past Simple'."
        }
      ]
    },
    examFocus: ["Use of English Part 4", "Writing", "Speaking"],
    tables: [
      {
        title: "Wishes & Regrets Patterns",
        headers: ["Конструкція", "Значення", "Приклад"],
        rows: [
          ["wish + Past Simple", "Нереальне бажання зараз", "I wish I knew the answer."],
          ["wish + Past Perfect", "Жаль про минуле", "I wish I had studied harder."]
        ]
      }
    ],
    keyRules: [
      {
        title: "No 'Wish + Would' for oneself",
        text: "Не можна казати *I wish I would*. Для власних побажань використовуйте Past Simple чи could.",
        example: "I wish I could fly."
      }
    ]
  },
  {
    id: "prepositions",
    title: "10. Dependent Prepositions (Залежні прийменники)",
    titleUk: "Прикметники, дієслова та іменники з фіксованими прийменниками",
    iconName: "Target",
    description: "Повний перелік залежних прийменників для Use of English Part 1 & 2.",
    whenToUse: {
      title: "Коли та навіщо використовувати залежні прийменники:",
      points: [
        "Use of English Part 1 & 2: Перевірка точності сполучуваності слів.",
        "Writing: Дотримання граматичної точності без слів-кальок з рідної мови."
      ],
      exampleContext: "Use of English Part 1 & 2."
    },
    formTransformation: {
      title: "🔄 Трансформація форми дієслова після залежного прийменника",
      description: "Обов'язкова трансформація дієслова у герундій (-ing) після будь-якого прийменника:",
      shifts: [
        {
          original: "Base Verb: learn Spanish",
          transformed: "After Preposition: interested IN LEARNING Spanish",
          rule: "Будь-який прийменник (in, of, at, on, for, about) + V-ing."
        },
        {
          original: "Base Verb: pay for dinner",
          transformed: "After Verb + Prep: insisted ON PAYING for dinner",
          rule: "insist on + V-ing (не *insist to pay*)."
        },
        {
          original: "Base Verb: leave early",
          transformed: "After Prepositional Phrase: left WITHOUT SAYING goodbye",
          rule: "without / before / after + V-ing."
        }
      ]
    },
    examFocus: ["Use of English Part 1 & 2 & 4"],
    tables: [
      {
        title: "Essential C1 Dependent Prepositions",
        headers: ["Категорія", "Слово + Прийменник", "Приклад"],
        rows: [
          ["Прикметники", "capable OF, interested IN", "He is capable of solving complex issues."],
          ["Дієслова", "rely ON, insist ON", "She insisted on paying for dinner."]
        ]
      }
    ],
    keyRules: [
      {
        title: "Preposition Bank Drill",
        text: "Найчастіша помилка в Part 2 — калькування прийменника з рідної мови.",
        example: "Solution TO a problem (не solution of)."
      }
    ]
  }
];
