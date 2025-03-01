import { TestInfo } from "../../types";
import { IntroButtonGroup } from "./IntroButtonGroup";
import { mode } from "./IntroRenderer";
type IntroProps = {
    info?: TestInfo;
    setMode: (mode: mode) => void;
}

export default function Intro({info, setMode}: IntroProps){
    if (!info) {
        return null;
    }
    
    return (
        <div>
            <h1>{info.mainTitle}</h1>
            <h3>{info.subTitle}</h3>
            <img
                onClick={() => setMode("quiz")}
                style={{width: "100%", cursor: "pointer"}}
                src={info.mainImage} 
                alt={info.mainTitle} 
            />
            <p>
                <span style={{fontWeight: "bold", color: "brown"}}>{info.mainTitle}</span>
                로 여러분의 성향을 테스트해보세요!
            </p>
            <IntroButtonGroup />    
        </div>
    )
}