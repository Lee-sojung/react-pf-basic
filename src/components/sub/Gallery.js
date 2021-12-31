import axios from "axios";
import { useEffect, useState } from "react";

const body = document.querySelector("body");



function Gallery(){
    let[items, setItems] = useState([]);
    //팝업 생성 관리할 state생성
    let [isPop, setIsPop] = useState(false);
    //클릭 이벤트 발생시 해당 순번값을 관리하는 state생성
    let [index, setIndex] = useState(0);

    const api_key = "e7ed3b39fe112d7e93d03c19325305e0"
    const url= `https://www.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=${api_key}&per_page=100&format=json&nojsoncallback=1`;

    useEffect(()=>{
        axios
        .get(url)
        .then(json=>{
            setItems(json.data.photos.photo);
        })
    },[]);

    return(
        <main className="gallery">
            <div className="inner">
                <h1><a href="#">Gallery</a></h1>

                <section>
                    {
                        items.map((item,index)=>{
                            const imgSrc = `https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`;

                            return(
                                <article key={index}>
                                <div className="inner">
                                    {/*썸네일 클릭시 setIsPop으로 true로 변경 팝업 보임*/}
                                    <div className="pic" onClick={()=>{
                                        setIsPop(true);
                                        //버튼 클릭시 index state 변경
                                        setIndex(index);
                                    }}>
                                        <img src={imgSrc} />
                                    </div>
                                    <h2>{item.title}</h2>
                                </div>
                            </article>
                            )
                        })
                    }
                </section>
            </div>
            {/* isPop 상태값이 true면 팝업 보임 */}
            { isPop ? <Pop /> : null }
            
        </main>
    )

    //팝업생성하는 컴포넌트 함수정의
    function Pop(){
        //컴포넌트 상단에 있는 items, index스테이트 값을 활용해서
        //items라는 배열에서 index번째의 객체값의 키값을 사용해서 이미지 URL생성
        const imgSrc = `https://live.staticflickr.com/${items[index].server}/${items[index].id}_${items[index].secret}_b.jpg`;

        useEffect(()=>{
            console.log("pop생성")
            body.style.overflow = "hidden";

            return ()=>{
                console.log("pop제거")
                body.style.overflow = "auto";
            }
        },[]);

        return(
            <aside className="pop">
                {/* 해당 이미지 url적용 */}
                <img src={imgSrc} />
                {/* items의 index번째 객체 안에 있는 텍스트 */}
                <p>{items[index].title}</p>
                {/*close 클릭시 setIsPop으로 false로 변경 팝업 제거*/}
                <span onClick={()=>{
                    setIsPop(false);
                }}>Close</span>
            </aside>
        )
    }
}

export default Gallery;