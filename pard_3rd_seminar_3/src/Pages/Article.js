import { useParams } from "react-router-dom";

function Article() {
    const id = useParams();
    return (
        <div>
            <h2>현재 게시글의 번호 : {id.id}</h2>
        </div>
    );
}

export default Article;