export type TestInfo = {
    mainTitle: string;
    subTitle: string;
    mainUrl: string;
    scoreType: string;
    mainImage: string;
    thumbImage: string;
    lang: string;
    category: string;
}

export type TestQuestion = {
    which: string;
    question: string;
    answers: {
        type: string;
        content: string;
    }[];
}

export type TestResult = {
    type: string;
    query: string;
    img_src: string;
}

export type Test = {
    info: TestInfo;
    questions: TestQuestion[];
    results: TestResult[];
}
