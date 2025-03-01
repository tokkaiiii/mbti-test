import LanguageIcons from "../components/main/LanguageIcons";
import MainBanner from "../components/main/MainBanner";
import CategoryButtons from "../components/main/CategoryButtons";
import ThumbnailList from "../components/main/ThumbnailList";

export default function Main() {
    return (
        <div>
            <LanguageIcons/>
            <MainBanner/>
            <CategoryButtons/>
            <ThumbnailList/>
        </div>
    )
}