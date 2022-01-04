/*
    1. youtube 서버로부터 데이터 요청을 해서 전달받은 데이터를 state에 옮겨담기
    2.해당 state값을 활용해서 동적으로 가상돔 생성
    3.각각의 가상돔 요소 클릭시 레이어팝업 동적으로 생성
    4.해당 레이어팝업 안쪽에 데이터와 순서관련 state값을 활용해서 세부 컨텐츠 출력
*/
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { longArrowAltRight } from "@fortawesome/free-regular-svg-icons";
import axios from "axios";
import { useEffect, useState } from 'react';

function Youtube() {
    let [data, setData] = useState([]);
    let [isPop, setIsPop] = useState(false);
    let [index, setIndex] = useState(0);

    const api_key = "AIzaSyC7rA3bw12Oogstpe_sGmJFYrmr47anoZ4";
    const playListId = "PLGzNH5a9hxjYCLTe-Ig1Z49I5P7iDZyxl";
    const num = 8;
    const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${api_key}&playlistId=${playListId}&maxResults=${num}`;

    useEffect(() => {
        axios
            .get(url)
            .then(json => {
                console.log(json.data.items);
                setData(json.data.items);
            })
    }, []);

    return (
        <main className="youtube">
            <div className="inner">
                <h1><a href="#">YOUTUBE</a></h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elity cinseterd Doloremque amet recusandae enim voluptatem nemo culpa! Dolor fugit vel, itaque deserunt quae minus quibusdam unde sint initded </p>

                <section className="frame">
                    {
                        data.map((item, index) => {
                            let tit = item.snippet.title;
                            let tit_len = tit.length;
                            let desc = item.snippet.description;
                            let desc_len = desc.length;

                            return (
                                <article key={index}>
                                    <div className="inner">
                                        < div className="txt">
                                            {/*?전으로는 조건식 참이면 ?뒤에 실행 거짓이먄 ?뒤에 무시하고 :이후 실행*/}
                                            <h2>{(tit_len > 35) ? tit = tit.substr(0, 35) + "..." : tit}</h2>
                                            <p>{(desc_len > 250) ? desc = desc.substr(0, 250) + "..." : desc}</p>
                                            <span><a href="#">VIEW VIDEO</a></span>
                                        </ div>
                                        <div className="pic" onClick={() => {
                                            setIsPop(true);
                                            setIndex(index);
                                        }}>
                                            <img src={item.snippet.thumbnails.medium.url} />
                                        </div>
                                    </div>
                                </article>
                            )
                        })
                    }
                </section>

                {isPop ? <Pop /> : null}

            </div>
        </main>
    )

    function Pop() {
        return (
            <aside className="pop">
                <iframe
                    src={"https://www.youtube.com/embed/" + data[index].snippet.resourceId.videoId} width='100%' height='100%' allowFullScreen>
                </iframe>
                <span onClick={() => {
                    setIsPop(false);
                }}>Close</span>
            </aside>
        )
    }
}

export default Youtube;