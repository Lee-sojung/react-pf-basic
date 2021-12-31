/*
    1. youtube 서버로부터 데이터 요청을 해서 전달받은 데이터를 state에 옮겨담기
    2.해당 state값을 활용해서 동적으로 가상돔 생성
    3.각각의 가상돔 요소 클릭시 레이어팝업 동적으로 생성
    4.해당 레이어팝업 안쪽에 데이터와 순서관련 state값을 활용해서 세부 컨텐츠 출력
*/

import axios from "axios";
import {useEffect, useState} from 'react';

function Youtube(){
    let [data, setData] = useState([]);

    const api_key = "AIzaSyAzmrdyn7aRmI1m18va9_agD7NE9--3Rkc";
    const playListId = "PLGzNH5a9hxjZq5ick2B6ns6t8xLpS5-LF";
    const num = 4;
    const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${api_key}&playlistId=${playListId}&maxResults=${num}`;

    useEffect(()=>{
        axios
        .get(url)
        .then(json=>{
            console.log(json.data.items);
            setData(json.data.items);
        })
    },[]);

    return(
        <main>
            <div className="inner">
                <h1><a href="#">Youtube</a></h1>

            </div>
        </main>
    )
}

export default Youtube;