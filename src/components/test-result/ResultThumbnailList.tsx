import ThumbnailList from "../main/ThumbnailList";
import { Test } from "../../types";

type ResultThumbnailListProps = {
    currentTest: Test;
}

export default function ResultThumbnailList({currentTest}: ResultThumbnailListProps) {
    return (
        <ThumbnailList currentTest={currentTest} />
    )
}