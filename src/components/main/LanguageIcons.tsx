import { CircleFlag } from "react-circle-flags";
import { useNavigate } from "react-router-dom";
import { TESTS } from "../../data/TEST";
import styles from "./LanguageIcons.module.css";

export default function LanguageIcons(){
    const navigate = useNavigate();

    const handleClickLanguage = (lang: string) => {
        navigate(`/?lang=${lang}`);
    }

    return (
        <div>
            {TESTS.map((test) => (
                <CircleFlag 
                    key={test.info.lang}
                    className={styles.flagIcon}
                    countryCode={test.info.lang} 
                    width={48} 
                    onClick={() => handleClickLanguage(test.info.lang)} />
            ))}
           
        </div>
    )
}