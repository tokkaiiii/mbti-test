import { useState } from "react";
import Intro from "./Intro";
import Quiz from "./Quiz";
import Loading from "./Loading";
import { Test } from "../../types";
export type mode = "intro" | "quiz" | "loading"

export default function IntroRenderer({currentTest}:{currentTest: Test | {}}){
    // 퀴즈 모드에서 사용할 점수 상태
    const [mbtiScore, setMbtiScore] = useState<Record<string, number>>({
        E: 0,
        I: 0,
        S: 0,
        N: 0,
        T: 0,
        F: 0,
        P: 0,
        J: 0,
    })
    const [mode, setMode] = useState<mode>("intro")
    const hasInfo = 'info' in currentTest;
    const hasQuestions = 'questions' in currentTest;
    
    switch (mode) {
        case "intro":
            return (
                <Intro 
                    info={hasInfo ? currentTest.info : undefined} 
                    setMode={setMode}
                    />
            )
        case "quiz":
            return (
                <Quiz 
                    setMode={setMode}
                    mbtiScore={mbtiScore}
                    setMbtiScore={setMbtiScore}
                    questions={hasQuestions ? currentTest.questions : []}
                />
            )
        case "loading":
            return (
                <Loading 
                mbtiScore={mbtiScore}
                currentTest={currentTest as Test}
                />
            )
        default:
            break;
    }
    
}