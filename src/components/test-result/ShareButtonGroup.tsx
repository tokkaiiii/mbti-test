import { FacebookIcon, FacebookShareButton, XIcon, TwitterShareButton } from "react-share";
import { baseUrl } from "../../App";
import { Test } from "../../types";
import styles from "./shareButtonGroup.module.css";
import { useCopyToClipboard } from "@uidotdev/usehooks";

type ShareButtonGroupProps = {
    testParam: string;
    resultParam: string;
    test: Test;
}

export default function ShareButtonGroup({testParam, resultParam, test}: ShareButtonGroupProps) {
    const [_, copy] = useCopyToClipboard();
    return (
        <div>
            <h3>친구에게 공유하기</h3>
            <div className={styles.shareButtonDiv}>
                <FacebookShareButton
                    className={styles.socialMediaIcon}
                    url={`${baseUrl}/${testParam}/result/${resultParam}`}
                    hashtag={test.info.mainTitle}
                >
                    <FacebookIcon size={48} round />
                </FacebookShareButton>
                <TwitterShareButton
                    className={styles.socialMediaIcon}
                    url={`${baseUrl}/${testParam}/result/${resultParam}`}
                    title={test.info.mainTitle}
                    hashtags={test.info.mainTitle.split(" ")}
                >
                    <XIcon size={48} round />
                </TwitterShareButton>
                <button 
                    className={styles.urlShareButton} 
                    onClick={() => copy(`${baseUrl}/${testParam}/result/${resultParam}`)}
                >
                    URL
                </button>
            </div>
        </div>
    )
}