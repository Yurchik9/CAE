export interface SectionQuizQuestion {
  id: string;
  type: 'mcq' | 'transformation';
  question: string;
  firstSentence?: string;
  keyword?: string;
  secondSentenceStart?: string;
  secondSentenceEnd?: string;
  acceptedAnswers?: string[];
  options?: string[];
  correctAnswer?: number;
  explanation: string;
}

export interface SectionQuiz {
  sectionId: string;
  sectionTitle: string;
  questions: SectionQuizQuestion[];
}

export const SECTION_QUIZZES: { [sectionId: string]: SectionQuiz } = {
  tenses: {
    sectionId: "tenses",
    sectionTitle: "1. Tenses (Часи)",
    questions: [
      {
        id: "sq-tenses-1",
        type: "transformation",
        question: "Complete the sentence using the keyword.",
        firstSentence: "I started living in London three years ago.",
        keyword: "FOR",
        secondSentenceStart: "I have",
        secondSentenceEnd: "three years.",
        acceptedAnswers: ["been living in London for", "lived in London for"],
        explanation: "Present Perfect Simple/Continuous with 'for' is used for actions starting in the past and continuing until now."
      },
      {
        id: "sq-tenses-2",
        type: "mcq",
        question: "Every summer when we were young, we _______ visit our grandparents in the countryside.",
        options: ["would", "used to be", "are used to", "get used to"],
        correctAnswer: 0,
        explanation: "'Would + infinitive' describes repeated past actions (habits), but not states."
      },
      {
        id: "sq-tenses-3",
        type: "mcq",
        question: "Look at those dark clouds! It _______ rain any minute.",
        options: ["will", "is going to", "is raining", "shall"],
        correctAnswer: 1,
        explanation: "'be going to' is used for predictions based on present visible evidence."
      }
    ]
  },
  conditionals: {
    sectionId: "conditionals",
    sectionTitle: "2. Conditionals (Умовні речення)",
    questions: [
      {
        id: "sq-cond-1",
        type: "transformation",
        question: "Complete the sentence using inversion.",
        firstSentence: "If I had known about your arrival, I would have met you at the airport.",
        keyword: "KNOWN",
        secondSentenceStart: "Had",
        secondSentenceEnd: "about your arrival, I would have met you at the airport.",
        acceptedAnswers: ["I known"],
        explanation: "Formal inversion for Third Conditional replaces 'If I had known' with 'Had I known'."
      },
      {
        id: "sq-cond-2",
        type: "mcq",
        question: "Take a jacket with you _______ it gets cold tonight.",
        options: ["if", "unless", "in case", "provided"],
        correctAnswer: 2,
        explanation: "'in case' expresses precaution (pro vsiak vypadok), independent of whether it gets cold."
      },
      {
        id: "sq-cond-3",
        type: "mcq",
        question: "If I _______ medicine when I was younger, I would be a doctor today.",
        options: ["studied", "had studied", "would study", "have studied"],
        correctAnswer: 1,
        explanation: "Mixed Conditional 1: Past condition (Past Perfect) -> Present result (would + inf)."
      }
    ]
  },
  modals: {
    sectionId: "modals",
    sectionTitle: "3. Modals & Modal Perfect",
    questions: [
      {
        id: "sq-mod-1",
        type: "transformation",
        question: "Complete the sentence using the keyword.",
        firstSentence: "It was a mistake for you to shout at your boss yesterday.",
        keyword: "SHOULD",
        secondSentenceStart: "You",
        secondSentenceEnd: "at your boss yesterday.",
        acceptedAnswers: ["should not have shouted", "shouldn't have shouted"],
        explanation: "'shouldn't have + V3' expresses criticism of a past action."
      },
      {
        id: "sq-mod-2",
        type: "mcq",
        question: "The lights are off and her car is gone. She _______ left already.",
        options: ["must have", "should have", "can't have", "needn't have"],
        correctAnswer: 0,
        explanation: "'must have + V3' expresses high logical certainty about a past action."
      },
      {
        id: "sq-mod-3",
        type: "mcq",
        question: "You _______ bring your textbook tomorrow; I will provide copies for everyone.",
        options: ["mustn't", "don't have to", "can't", "shouldn't have"],
        correctAnswer: 1,
        explanation: "'don't have to' means lack of obligation (not necessary, but allowed)."
      }
    ]
  },
  passive: {
    sectionId: "passive",
    sectionTitle: "4. Passive Voice & Causatives",
    questions: [
      {
        id: "sq-pass-1",
        type: "transformation",
        question: "Complete the sentence using the keyword.",
        firstSentence: "People report that the thief escaped on a bicycle.",
        keyword: "REPORTED",
        secondSentenceStart: "The thief",
        secondSentenceEnd: "on a bicycle.",
        acceptedAnswers: ["is reported to have escaped"],
        explanation: "Passive reporting structure with earlier action: 'is reported to have + V3'."
      },
      {
        id: "sq-pass-2",
        type: "mcq",
        question: "I spent three hours at the garage getting my brakes _______.",
        options: ["repair", "repaired", "repairing", "to repair"],
        correctAnswer: 1,
        explanation: "Causative structure: 'get + object + V3'."
      },
      {
        id: "sq-pass-3",
        type: "mcq",
        question: "The new bridge is currently _______ constructed across the river.",
        options: ["been", "being", "be", "to be"],
        correctAnswer: 1,
        explanation: "Present Continuous Passive: 'is being + V3'."
      }
    ]
  },
  reported_speech: {
    sectionId: "reported_speech",
    sectionTitle: "5. Reported Speech & Reporting Verbs",
    questions: [
      {
        id: "sq-rep-1",
        type: "transformation",
        question: "Complete the sentence using the keyword.",
        firstSentence: "'I didn't break the vase!' said Tom.",
        keyword: "DENIED",
        secondSentenceStart: "Tom",
        secondSentenceEnd: "the vase.",
        acceptedAnswers: ["denied breaking", "denied having broken"],
        explanation: "'deny' is followed by gerund (-ing): 'denied breaking'."
      },
      {
        id: "sq-rep-2",
        type: "mcq",
        question: "She advised me _______ a lawyer before signing the contract.",
        options: ["consulting", "to consult", "consult", "that I consult"],
        correctAnswer: 1,
        explanation: "'advise + object + to-infinitive': She advised me to consult."
      },
      {
        id: "sq-rep-3",
        type: "mcq",
        question: "He asked me where _______ live.",
        options: ["did I", "I did", "I", "do I"],
        correctAnswer: 2,
        explanation: "Reported questions use statement word order (where I lived)."
      }
    ]
  },
  relative_clauses: {
    sectionId: "relative_clauses",
    sectionTitle: "6. Relative Clauses",
    questions: [
      {
        id: "sq-rel-1",
        type: "mcq",
        question: "My professor, _______ book won the Pulitzer Prize, is giving a lecture today.",
        options: ["who", "whom", "whose", "that"],
        correctAnswer: 2,
        explanation: "'whose' indicates possession (whose book = the professor's book)."
      },
      {
        id: "sq-rel-2",
        type: "mcq",
        question: "The letter _______ yesterday contains crucial details about the contract.",
        options: ["sending", "sent", "which sent", "that sending"],
        correctAnswer: 1,
        explanation: "Reduced passive relative clause: 'The letter sent yesterday' (= which was sent)."
      },
      {
        id: "sq-rel-3",
        type: "mcq",
        question: "Paris, _______ is the capital of France, attracts millions of tourists every year.",
        options: ["that", "which", "where", "what"],
        correctAnswer: 1,
        explanation: "Non-defining relative clauses MUST use 'which', NEVER 'that'."
      }
    ]
  },
  gerunds_infinitives: {
    sectionId: "gerunds_infinitives",
    sectionTitle: "7. Gerunds & Infinitives",
    questions: [
      {
        id: "sq-gi-1",
        type: "transformation",
        question: "Complete the sentence using the keyword.",
        firstSentence: "I will never forget meeting the President in 2015.",
        keyword: "REMEMBER",
        secondSentenceStart: "I still",
        secondSentenceEnd: "the President in 2015.",
        acceptedAnswers: ["remember meeting"],
        explanation: "'remember + -ing' refers to remembering a past event."
      },
      {
        id: "sq-gi-2",
        type: "mcq",
        question: "On the way home, he stopped _______ a coffee at the local cafe.",
        options: ["buying", "to buy", "buy", "for buying"],
        correctAnswer: 1,
        explanation: "'stop + to-infinitive' means to pause in order to do something else."
      },
      {
        id: "sq-gi-3",
        type: "mcq",
        question: "We regret _______ you that your application has not been successful.",
        options: ["to inform", "informing", "inform", "to have informed"],
        correctAnswer: 0,
        explanation: "'regret + to-infinitive' is used for formal announcement of bad news."
      }
    ]
  },
  inversion: {
    sectionId: "inversion",
    sectionTitle: "8. Inversion & Emphasis",
    questions: [
      {
        id: "sq-inv-1",
        type: "transformation",
        question: "Complete the sentence using the keyword.",
        firstSentence: "I had scarcely sat down when the doorbell rang.",
        keyword: "HARDLY",
        secondSentenceStart: "",
        secondSentenceEnd: "sat down when the doorbell rang.",
        acceptedAnswers: ["Hardly had I", "hardly had I"],
        explanation: "'Hardly had + subject + V3 ... when' triggers formal inversion."
      },
      {
        id: "sq-inv-2",
        type: "mcq",
        question: "Not only _______ the exam, but she also scored the highest mark in the region.",
        options: ["she passed", "did she pass", "passed she", "she did pass"],
        correctAnswer: 1,
        explanation: "'Not only' at the start of a sentence requires auxiliary + subject inversion."
      },
      {
        id: "sq-inv-3",
        type: "mcq",
        question: "_______ I need right now is a good night's sleep.",
        options: ["What", "That", "It", "All what"],
        correctAnswer: 0,
        explanation: "Wh-cleft sentence structure: 'What I need is...'"
      }
    ]
  },
  wishes_regrets: {
    sectionId: "wishes_regrets",
    sectionTitle: "9. Wishes & Regrets",
    questions: [
      {
        id: "sq-wish-1",
        type: "transformation",
        question: "Complete the sentence using the keyword.",
        firstSentence: "You really ought to start studying for the final exam.",
        keyword: "TIME",
        secondSentenceStart: "It is high",
        secondSentenceEnd: "studying for the final exam.",
        acceptedAnswers: ["time you started", "time that you started"],
        explanation: "'It is high time + subject + Past Simple' means it is long overdue."
      },
      {
        id: "sq-wish-2",
        type: "mcq",
        question: "I wish you _______ tapping your desk with that pencil!",
        options: ["would stop", "will stop", "stop", "stopped to"],
        correctAnswer: 0,
        explanation: "'wish + would' expresses annoyance at someone else's habit."
      },
      {
        id: "sq-wish-3",
        type: "mcq",
        question: "I would rather you _______ mention this topic during dinner tonight.",
        options: ["don't", "didn't", "not", "won't"],
        correctAnswer: 1,
        explanation: "'would rather + subject + Past Simple' expresses preference for someone else's action."
      }
    ]
  },
  prepositions: {
    sectionId: "prepositions",
    sectionTitle: "10. Dependent Prepositions",
    questions: [
      {
        id: "sq-prep-1",
        type: "mcq",
        question: "The research team finally came up with a brilliant solution _______ the issue.",
        options: ["to", "of", "for", "on"],
        correctAnswer: 0,
        explanation: "'solution TO a problem' is the standard dependent preposition."
      },
      {
        id: "sq-prep-2",
        type: "mcq",
        question: "She accused him _______ leaking confidential company data.",
        options: ["for", "of", "with", "in"],
        correctAnswer: 1,
        explanation: "'accuse someone OF doing something'."
      },
      {
        id: "sq-prep-3",
        type: "mcq",
        question: "There has been a dramatic increase _______ public transport usage this year.",
        options: ["of", "in", "on", "at"],
        correctAnswer: 1,
        explanation: "'increase/decrease IN something'."
      }
    ]
  }
};
