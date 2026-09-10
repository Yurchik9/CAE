export interface TransformationQuestion {
  id: string;
  firstSentence: string;
  keyword: string;
  secondSentenceStart: string;
  secondSentenceEnd: string;
  acceptedAnswers: string[];
  explanation: string;
  category: string;
}

export interface MultipleChoiceQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: string;
}

export interface Flashcard {
  id: string;
  front: string;
  back: string;
  category: string;
  example: string;
}

export const TRANSFORMATION_QUESTIONS: TransformationQuestion[] = [
  {
    id: "kwt-1",
    firstSentence: "I regret not studying harder for the Cambridge exam last year.",
    keyword: "WISH",
    secondSentenceStart: "I",
    secondSentenceEnd: "harder for the Cambridge exam last year.",
    acceptedAnswers: ["wish I had studied", "wish that I had studied"],
    explanation: "Для вираження жалю про минулу подію використовується структура 'wish + Past Perfect'.",
    category: "Wishes & Regrets"
  },
  {
    id: "kwt-2",
    firstSentence: "As soon as I entered the house, the phone rang.",
    keyword: "SOONER",
    secondSentenceStart: "No",
    secondSentenceEnd: "the house than the phone rang.",
    acceptedAnswers: ["sooner had I entered"],
    explanation: "Після 'No sooner' потрібна інверсія з Past Perfect: 'No sooner had I entered... than...'.",
    category: "Inversion"
  },
  {
    id: "kwt-3",
    firstSentence: "They believe that the murderer has fled the country.",
    keyword: "HAVE",
    secondSentenceStart: "The murderer is believed",
    secondSentenceEnd: "the country.",
    acceptedAnswers: ["to have fled"],
    explanation: "Пасивне повідомлення з віднесенням до минулого: 'is believed to have + V3'.",
    category: "Passive Voice"
  },
  {
    id: "kwt-4",
    firstSentence: "I'm sure that Mark didn't steal the money because he was with me.",
    keyword: "HAVE",
    secondSentenceStart: "Mark",
    secondSentenceEnd: "the money because he was with me.",
    acceptedAnswers: ["can't have stolen", "couldn't have stolen"],
    explanation: "Вираження впевненості про негативну минулу дію: 'can't / couldn't have + V3'.",
    category: "Modals"
  },
  {
    id: "kwt-5",
    firstSentence: "He started working at this company five years ago.",
    keyword: "BEEN",
    secondSentenceStart: "He",
    secondSentenceEnd: "at this company for five years.",
    acceptedAnswers: ["has been working"],
    explanation: "Дія, яка розпочалася у минулому і триває дотепер з наголосом на тривалості: Present Perfect Continuous.",
    category: "Tenses"
  },
  {
    id: "kwt-6",
    firstSentence: "'Why don't we go to the cinema tonight?' suggested Sarah.",
    keyword: "GOING",
    secondSentenceStart: "Sarah suggested",
    secondSentenceEnd: "tonight.",
    acceptedAnswers: ["going to the cinema"],
    explanation: "Після дієслова 'suggest' вживається герундій (-ing).",
    category: "Reported Speech"
  },
  {
    id: "kwt-7",
    firstSentence: "You ought to start revising for your final exams immediately.",
    keyword: "HIGH",
    secondSentenceStart: "It is",
    secondSentenceEnd: "revising for your final exams.",
    acceptedAnswers: ["high time you started", "high time that you started"],
    explanation: "Конструкція 'It's high time + Past Simple' виражає, що давно час щось зробити.",
    category: "Wishes & Regrets"
  },
  {
    id: "kwt-8",
    firstSentence: "A mechanic repaired my car yesterday.",
    keyword: "HAD",
    secondSentenceStart: "I",
    secondSentenceEnd: "yesterday.",
    acceptedAnswers: ["had my car repaired"],
    explanation: "Causative structure: 'have + object + V3' для послуг, виконаних іншою особою.",
    category: "Passive Voice"
  },
  {
    id: "kwt-9",
    firstSentence: "I didn't buy the tickets because I didn't know you were coming.",
    keyword: "WOULD",
    secondSentenceStart: "If I had known you were coming, I",
    secondSentenceEnd: "the tickets.",
    acceptedAnswers: ["would have bought"],
    explanation: "Third Conditional для нереальної ситуації в минулому: 'If + Past Perfect, would have + V3'.",
    category: "Conditionals"
  },
  {
    id: "kwt-10",
    firstSentence: "I don't usually wake up so early in the morning.",
    keyword: "USED",
    secondSentenceStart: "I am not",
    secondSentenceEnd: "so early in the morning.",
    acceptedAnswers: ["used to waking up", "used to getting up"],
    explanation: "Бути звичним до чогось: 'be used to + V-ing'.",
    category: "Tenses"
  }
];

export const MULTIPLE_CHOICE_QUESTIONS: MultipleChoiceQuestion[] = [
  {
    id: "mcq-1",
    question: "Rarely _______ such a passionate performance on stage.",
    options: ["I have witnessed", "have I witnessed", "I witnessed", "did I witnessed"],
    correctAnswer: 1,
    explanation: "Прислівник 'Rarely' на початку речення вимагає інверсії підмета та допоміжного дієслова.",
    category: "Inversion"
  },
  {
    id: "mcq-2",
    question: "By the time we arrive at the theater, the play _______.",
    options: ["will start", "will have started", "starts", "is starting"],
    correctAnswer: 1,
    explanation: "Future Perfect виражає дію, яка завершиться ДО певного моменту в майбутньому ('By the time...').",
    category: "Tenses"
  },
  {
    id: "mcq-3",
    question: "I really regret _______ him about our secret.",
    options: ["to tell", "telling", "tell", "having told"],
    correctAnswer: 1,
    explanation: "'Regret + -ing' означає жалкувати про дію, яка вже сталася в минулому.",
    category: "Gerunds & Infinitives"
  },
  {
    id: "mcq-4",
    question: "Take an umbrella with you in case it _______ later.",
    options: ["rains", "will rain", "rained", "is raining"],
    correctAnswer: 0,
    explanation: "Після 'in case' вживається Present Simple для майбутнього часу (без 'will').",
    category: "Conditionals"
  },
  {
    id: "mcq-5",
    question: "You _______ bought so many groceries; the fridge is already full!",
    options: ["didn't need to buy", "needn't have", "mustn't have", "shouldn't buy"],
    correctAnswer: 1,
    explanation: "'Needn't have + V3' означає, що людина виконала дію, яка виявилася марною.",
    category: "Modals"
  }
];

export const FLASHCARDS: Flashcard[] = [
  {
    id: "fc-1",
    front: "suggest / recommend",
    back: "+ -ing  OR  + that + subject + (should) + bare inf.",
    category: "Reporting Verbs",
    example: "He suggested taking a break. / He suggested that we take a break."
  },
  {
    id: "fc-2",
    front: "accuse someone ...",
    back: "OF + -ing",
    category: "Dependent Prepositions",
    example: "They accused him of stealing the documents."
  },
  {
    id: "fc-3",
    front: "No sooner ...",
    back: "had + subject + V3 ... THAN ...",
    category: "Inversion Triggers",
    example: "No sooner had he left than it began to snow."
  },
  {
    id: "fc-4",
    front: "remember + to-infinitive vs -ing",
    back: "to-inf = не забути зробити\n-ing = пам'ятати минулу дію",
    category: "Gerund vs Infinitive",
    example: "Remember to call mom! vs I remember meeting her in Paris."
  },
  {
    id: "fc-5",
    front: "apologize to someone ...",
    back: "FOR + -ing",
    category: "Dependent Prepositions",
    example: "She apologized to her boss for missing the deadline."
  }
];
