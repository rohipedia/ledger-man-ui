export class QuestionSet {
    serial: number;
    question: string;
    answers: any[];
    correctAnswer: number;
    selectedAnswer: number;
    isCorrect: boolean;
    stream: string;
}

export class QuestionAnswerPairs {
    serial: number;
    correctAnswer: number;
}

