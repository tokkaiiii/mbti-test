import { TestResult } from "../../types";

export default function TestResultRenderer({ result }: { result: TestResult }) {
    return (
        result && (
            <div>
                <h3>결과는...</h3>
                <img
                    style={{ width: "100%"}}
                    src={result.img_src} 
                    alt={result.type} />
            </div>
        )
    )
}