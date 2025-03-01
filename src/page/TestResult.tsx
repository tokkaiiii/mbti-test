import { Test } from "../types";
import ResultButtonGroup from "../components/test-result/ResultButtonGroup";
import ResultThumbnailList from "../components/test-result/ResultThumbnailList";
import ShareButtonGroup from "../components/test-result/ShareButtonGroup";
import TestResultRenderer from "../components/test-result/TestResultRenderer";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { TESTS } from "../data/TEST";
import { TestResult }  from "../types";

export default function TestResultContainer() {
    const navigate = useNavigate();
    const { testParam, resultParam } = useParams();
    const [result, setResult] = useState<TestResult>();
    const [test, setTest] = useState<Test>();   
    useEffect(() => {
        const test = TESTS.find(test => test.info.mainUrl === testParam);
        if (!test) {
            navigate("/");
        }
        setTest(test);
        const result = test?.results.find(result => result.query === resultParam);
        if (!result) {
            alert("결과를 찾을 수 없습니다.")
            navigate(`/${test?.info.mainUrl}`);
        }
        setResult(result);
    }, [testParam, resultParam]);

    return (
        test && result && (
        <div>
            <TestResultRenderer 
                result={result}
            />
            <ShareButtonGroup 
                testParam={testParam || ""}
                resultParam={resultParam || ""}
                test={test}
                />
                <ResultButtonGroup 
                    testParam={testParam || ""}
                    resultParam={resultParam || ""}
                />
                <ResultThumbnailList 
                    currentTest={test}
                />
            </div>
        )
    )
}