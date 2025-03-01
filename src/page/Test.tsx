import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import IntroRenderer from "../components/test/IntroRenderer";
import { TESTS } from "../data/TEST";

export default function Test() {
    const { testParam } = useParams();
    const navigate = useNavigate();
    const [currentTest, setCurrentTest] = useState<typeof TESTS[number] | {}>({});

    useEffect(()=>{
        // 1. testParam 이 우리 DB에 존재하는가 필터링
        // 1-1. 존재 X -> 안내/Home routing
        // 1-2. 존재 O -> 해당 테스트의 콘텐츠를 렌더링
        const foundTest = TESTS.find((test)=>test.info.mainUrl === testParam)
        console.log(foundTest)
        if(!foundTest){
            alert('존재하지 않는 테스트입니다.')
            navigate('/')
        }
        setCurrentTest(foundTest || {})
    },[testParam,navigate]);

    return (
        <div>
            <IntroRenderer currentTest={currentTest}/>
        </div>
    )
}