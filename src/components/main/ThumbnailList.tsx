import { useState, useEffect } from "react";
import { TESTS } from "../../data/TEST";
import { Link } from "react-router-dom";
import { Test } from "../../types";
import { useSearchParams } from "react-router-dom";
type ThumbnailListProps = {
    currentTest?: Test;
}

export default function ThumbnailList({currentTest}: ThumbnailListProps){
    const [testList, setTestList] = useState<Test[]>(TESTS);
    const [searchParams] = useSearchParams();
    const lang = searchParams.get("lang") || "kr";
    const category = searchParams.get("category");

    useEffect(() => {
        if (currentTest) {
            const newTestList = testList.filter((test) => 
                test.info.lang === lang &&
            test.info.mainUrl !== currentTest.info.mainUrl
        );
        setTestList(newTestList);
        return;
    }
    if (category) {
        const newTestList = TESTS.filter((test) => 
            test.info.lang === lang &&
            test.info.category === category
        );
        setTestList(newTestList);
    }else{
        const newTestList = TESTS.filter((test) => test.info.lang === lang);
        setTestList(newTestList);
    }
    }, [currentTest, lang, category]);

    return (
        <div >
            {testList.map((test) => (
                <Link to={`/${test.info.mainUrl}`} 
                key={test.info.mainUrl}>
                    <img 
                    style={{width: "100%"}}
                    alt={test.info.mainUrl} 
                    src={test.info.thumbImage}
                    />
                </Link>
            ))}
        </div>
    )
}