import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./categoryButtons.module.css";
export default function CategoryButtons(){
    const [searchParams] = useSearchParams();
    const lang = searchParams.get("lang") || "kr";
    const navigate = useNavigate();


    const handleClickCategory = (category: string) => {
        if (category === "all") {
            navigate(`/?lang=${lang}`);
        } else if (category === "love" || category === "personality") {
            navigate(`/?lang=${lang}&category=${category}`); 
        } else {
            alert("카테고리를 선택해주세요.");
            navigate(`/?lang=${lang}`);
        }
    }

    return (
        <div>
            <button 
                onClick={() => handleClickCategory("all")}
                className={styles.categoryButton}
            >전체</button>
            <button 
                onClick={() => handleClickCategory("love")}
                className={styles.categoryButton}
            >연애</button>
            <button 
                onClick={() => handleClickCategory("personality")}
                className={styles.categoryButton}
            >성격</button>
        </div>
    )
}