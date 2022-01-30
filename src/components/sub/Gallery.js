import axios from "axios";
import { useEffect, useState, useRef } from "react";

const body = document.querySelector("body");
const path = process.env.PUBLIC_URL;



function Gallery() {
    const frame = useRef(null);
    let [items, setItems] = useState([]);
    //팝업 생성 관리할 state생성
    let [isPop, setIsPop] = useState(false);
    //클릭 이벤트 발생시 해당 순번값을 관리하는 state생성
    let [index, setIndex] = useState(0);
    let [loading, setLoading] = useState(true);
    let [interest, setInterest] = useState(true);
    let list = useRef(null);
    let input = useRef(null);
    let [enableClick, setEnableClick] = useState(true);

    const api_key = "e7ed3b39fe112d7e93d03c19325305e0"
    const url = `https://www.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=${api_key}&per_page=20&format=json&nojsoncallback=1`;

    useEffect(() => {
        setTimeout(()=>{
            setLoading(false);
        },1000);
        frame.current.classList.add('on');
        list.current.classList.add('on');
        axios
            .get(url)
            .then(json => {
                setItems(json.data.photos.photo);
            })
    }, []);

    return (
        <>
            <main className="gallery" ref={frame}>
                <div className="inner">
                    <h1 onClick={() => {
                        if (enableClick && !interest) { //모션이 끝났고 현재 interest값이 true가 아닐때 interst호출 기능 실행
                            setEnableClick(false);
                            list.current.classList.remove("on");
                            setLoading(true);

                            getFlickr({
                                type: "interest",
                                count: 500
                            });
                        }
                    }}>GALLERY</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elity cinseterd Doloremque amet recusandae enim voluptatem nemo culpa! Dolor fugit vel, itaque deserunt quae minus quibusdam unde sint initded </p>


                    <div className="searchBox">
                        <input type="text" ref={input} onKeyPress={e => {
                            const tags = input.current.value;

                            if (e.key !== "Enter" || tags === "") return;
                            if (enableClick) {
                                setEnableClick(false);
                                //검색어 입력하고 엔터키 눌렀을떄 interest값을 false로 변경해 제목클릭가능하게 설정
                                setInterest(false);
                                list.current.classList.remove("on");
                                setLoading(true);

                                const tags = input.current.value;
                                input.current.value = "";

                                getFlickr({
                                    type: "search",
                                    count: 20,
                                    tags: tags
                                });
                            }
                        }} />
                        <button onClick={() => {
                            if (enableClick) {
                                const tags = input.current.value;
                                if (tags === "") return;

                                setEnableClick(false);
                                //검색어 버튼 클릭시 interest값을 false로 변경해 제목클릭가능하게 설정
                                setInterest(false);
                                list.current.classList.remove("on");
                                setLoading(true);


                                input.current.value = "";

                                getFlickr({
                                    type: "search",
                                    count: 20,
                                    tags: tags
                                });
                            }
                        }}>SEARCH</button>
                    </div>

                    {(loading) ? <img className="loading" src={path + "/img/loading.gif"} /> : ""}

                    <section className="list" ref={list}>
                        {
                            items.map((item, index) => {
                                const imgSrc = `https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`;
                                let tit = item.title;
                                let tit_len = item.title.length;

                                return (
                                    <article key={index}>
                                        <div className="inner">
                                            {/*썸네일 클릭시 setIsPop으로 true로 변경 팝업 보임*/}
                                            <div className="pic" onClick={() => {
                                                setIsPop(true);
                                                //버튼 클릭시 index state 변경
                                                setIndex(index);
                                            }}>
                                                <img src={imgSrc} />
                                            </div>
                                            <h2>{(tit_len > 40) ? tit.substr(0, 40) + "..." : tit}</h2>
                                            <strong>{item.owner}</strong>
                                        </div>
                                    </article>

                                )
                            })
                        }
                    </section>



                </div>


            </main>
            {/* isPop 상태값이 true면 팝업 보임 */}
            {isPop ? <Pop /> : null}
        </>
    )



    //팝업생성하는 컴포넌트 함수정의
    function Pop() {
        //컴포넌트 상단에 있는 items, index스테이트 값을 활용해서
        //items라는 배열에서 index번째의 객체값의 키값을 사용해서 이미지 URL생성
        const imgSrc = `https://live.staticflickr.com/${items[index].server}/${items[index].id}_${items[index].secret}_b.jpg`;

        useEffect(() => {
            console.log("pop생성")
            body.style.overflow = "hidden";

            return () => {
                console.log("pop제거")
                body.style.overflow = "auto";
            }
        }, []);

        return (
            <aside className="pop">
                {/* 해당 이미지 url적용 */}
                <img src={imgSrc} />
                {/* items의 index번째 객체 안에 있는 텍스트 */}
                <p>{items[index].title}</p>
                {/*close 클릭시 setIsPop으로 false로 변경 팝업 제거*/}
                <span onClick={() => {
                    setIsPop(false);
                }}>Close</span>
            </aside>
        )
    }

    async function getFlickr(opt) {
        let url = "";

        const baseURL = "https://www.flickr.com/services/rest/?";
        const method1 = "flickr.interestingness.getList";
        const method2 = "flickr.photos.search";
        const key = "e7ed3b39fe112d7e93d03c19325305e0";
        const count = opt.count;

        if (opt.type === "interest") {
            url = `${baseURL}method=${method1}&api_key=${key}&per_page=${count}&format=json&nojsoncallback=1`;
        }

        else if (opt.type === "search") {
            url = `${baseURL}method=${method2}&api_key=${key}&per_page=${count}&format=json&nojsoncallback=1&tags=${opt.tags}`;

        } else {
            console.error("api요청 타입을 interest, search중에서 지정하세요.");
        }

        await axios
            .get(url)
            .then(json => {
                setItems(json.data.photos.photo);
            })


        setTimeout(() => {
            list.current.classList.add("on");
            setLoading(false);
            setTimeout(() => {
                setEnableClick(true);
            }, 1000);
        }, 1000);

    }
}
export default Gallery;