import { useCopyToClipboard } from "@uidotdev/usehooks";
import { baseUrl } from "../../App";
import { LinkOutlined, RedoOutlined, HomeOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import styles from "./ResultButtonGroup.module.css";
type ResultButtonGroupProps = {
    testParam: string;
    resultParam: string;
}

export default function ResultButtonGroup({testParam, resultParam}: ResultButtonGroupProps) {
    const [copy] = useCopyToClipboard();        
    const navigate = useNavigate();
    const onClickRedoButton = () => {
        navigate(`/${testParam}`);
    }
    const onClickOtherTestButton = () => {
        navigate(`/`);
    }
    return (
        <div className={styles.mainDiv}>
            <div className={styles.upperDiv}>
                <button 
                    className={styles.upperButton}
                    onClick={() => copy(`${baseUrl}/${testParam}/result/${resultParam}`)}>
                    <LinkOutlined />
                    &nbsp;
                    <span>링크 복사</span>
                </button>
                <button 
                    className={styles.upperButton}
                    onClick={onClickRedoButton}>
                    <RedoOutlined />
                    &nbsp;
                    <span>다시 하기</span>
                </button>
            </div>
            <div className={styles.lowerDiv}>
                <button 
                    className={styles.lowerButton}
                    onClick={onClickOtherTestButton}>
                    <HomeOutlined />
                    &nbsp; 
                    <span>다른 테스트 하러가기</span>
                </button>
            </div>
        </div>
    )
}