import { mode } from "./IntroRenderer";
import { TestQuestion } from "../../types";
import { useState, useEffect } from "react";
import styled from "./quiz.module.css";
import { Progress } from "antd";
import { arrayShuffler } from "../../tools/tools";

type QuizProps = {
    setMode: (mode: mode) => void;
    mbtiScore: Record<string, number>;
    setMbtiScore: (score: Record<string, number>) => void;
    questions: TestQuestion[];
}

export default function Quiz({setMode, mbtiScore, setMbtiScore, questions}: QuizProps){
    const [currentQuestion, setCurrentQuestion] = useState(0);  
    
    useEffect(() => {
        if (currentQuestion === questions.length) {
            setMode("loading");
        }
    }, [currentQuestion, setMode, questions.length]);

    const onOptionClick = (type: string) => {
        setCurrentQuestion(currentQuestion + 1);
        mbtiScore[type] += 1;
        setMbtiScore({...mbtiScore});
    }
    return (
        <div>
            <h3 className={styled.questionText}>{questions[currentQuestion]?.question}</h3>
            {questions[currentQuestion]?.answers && arrayShuffler(questions[currentQuestion]?.answers)?.map((option)=>(
                <button 
                    key={option.content}
                    className={styled.optionButton}
                    onClick={() => onOptionClick(option.type)}>
                    {option.content}
                </button>
            ))}
            <div style={{width: "100%", margin: "2rem 0"}}>
                <Progress 
                    percent={currentQuestion / questions.length * 100} 
                    showInfo={false}
                    strokeColor="brown"
                    trailColor="white"
                    size={{
                        width: 500,
                        height: 10
                    }}
                />
                <h5>{currentQuestion + 1} / {questions.length}</h5>
            </div>
        </div>
    )
}