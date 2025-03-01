import Lottie from "react-lottie";
import animationData from "../../assets/loading-animation.json";
import { Test } from "../../types";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
type LoadingProps = {   
    mbtiScore: Record<string, number>;
    currentTest: Test;
}

export default function Loading({mbtiScore, currentTest}: LoadingProps){
    const navigate = useNavigate();
    const [resultQuery, setResultQuery] = useState<string>("");
    const defaultOption = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        renderSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    // loading time -> 3.7 초
    useEffect(() => {
        const mbtiPairs = [
            ["E", "I"],
            ["S", "N"],
            ["T", "F"],
            ["P", "J"]
        ]
        const mbtiResult = mbtiPairs.map((pair) => {
            return mbtiScore[pair[0]] > mbtiScore[pair[1]] ? pair[0] : pair[1];
        }).join("");

        const resultQuery = currentTest?.results.find(result => result.type === mbtiResult)?.query;
        setResultQuery(resultQuery || "");
    }, [mbtiScore, currentTest]);

    const loadingTime = 3700;   
    useEffect(() => {
        const timer = setTimeout(() => {
            resultQuery && navigate(`/${currentTest.info.mainUrl}/result/${resultQuery}`);   
        }, loadingTime);
        return () => clearTimeout(timer);
    }, [loadingTime, resultQuery, currentTest.info.mainUrl , navigate]);

    return (
        <div>
            <Lottie options={defaultOption} 
            height={250}
            width={250}
            style={{
                marginTop: "20rem",
            }}
            />
        </div>
    )
}