import { useEffect, useRef } from "react";
import { useState } from "react";

function Location() {
    const frame = useRef(null);
    const { kakao } = window;
    const container = useRef(null);
    const btnBranch = useRef(null);
    const [map, setMap] = useState(null);
    const [index, setIndex] = useState(0);
    const [toggle, setToggle] = useState(false);

    const info = [
        {
            title: "본점",
            latlng: new kakao.maps.LatLng(37.52735918038552, 127.02749081108091),
            imgSrc: process.env.PUBLIC_URL + "/img/marker.png",
            imgSize: new kakao.maps.Size(60, 68),
            imgPos: { offset: new kakao.maps.Point(116, 99) }
        },
        {
            title: "지점1",
            latlng: new kakao.maps.LatLng(37.56094112262155,
            126.9811552523192),
            imgSrc: process.env.PUBLIC_URL + "/img/marker.png",
            imgSize: new kakao.maps.Size(60, 68),
            imgPos: { offset: new kakao.maps.Point(116, 99) }
        },
        {
            title: "지점2",
            latlng: new kakao.maps.LatLng(37.526449507339926, 126.87520683324749),
            imgSrc: process.env.PUBLIC_URL + "/img/marker.png",
            imgSize: new kakao.maps.Size(60, 68),
            imgPos: { offset: new kakao.maps.Point(116, 99) }
        },
        {
            title: "지점3",
            latlng: new kakao.maps.LatLng(37.52562115551817, 127.04622987288718),
            imgSrc: process.env.PUBLIC_URL + "/img/marker.png",
            imgSize: new kakao.maps.Size(60, 68),
            imgPos: { offset: new kakao.maps.Point(116, 99) }
        },
        {
            title: "지점4",
            latlng: new kakao.maps.LatLng(37.51699696857529, 126.90289055623107),
            imgSrc: process.env.PUBLIC_URL + "/img/marker.png",
            imgSize: new kakao.maps.Size(60, 68),
            imgPos: { offset: new kakao.maps.Point(116, 99) }
        }, {
            title: "지점5",
            latlng: new kakao.maps.LatLng(37.56023377715707, 126.9807649574136),
            imgSrc: process.env.PUBLIC_URL + "/img/marker.png",
            imgSize: new kakao.maps.Size(60, 68),
            imgPos: { offset: new kakao.maps.Point(116, 99) }
        }
    ];

    const [mapInfo, setMapInfo] = useState(info);

    useEffect(() => {
        container.current.innerHTML='';
        frame.current.classList.add('on');
        const options = {
            center: mapInfo[index].latlng,
            level: 6
        };

        const map = new kakao.maps.Map(container.current, options);
        setMap(map);

        new kakao.maps.Marker({
            map: map,
            position: mapInfo[index].latlng,
            title: mapInfo[index].title,
            image: new kakao.maps.MarkerImage(mapInfo[index].imgSrc, mapInfo[index].imgSize, mapInfo[index].imgPos)
        });

        map.setCenter(mapInfo[index].latlng);

        const mapTypeControl = new kakao.maps.MapTypeControl();
        map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

        map.setZoomable(true);
        map.setDraggable(true);

        for (const btn of btnBranch.current.children) btn.classList.remove('on');
        btnBranch.current.children[index].classList.add('on');

        const mapSet = () => map.setCenter(mapInfo[index].latlng);
        window.addEventListener('resize', mapSet);

        return () => {
            window.removeEventListener('resize', mapSet);
            // container.current.innerHTML = "";
        }

    }, [index]);

    return (
        <main className="location" ref={frame}>
            <div className="inner">
                <h1><a href="#">LOCATION</a></h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elity cinseterd Doloremque amet recusandae enim voluptatem nemo culpa! Dolor fugit vel, itaque deserunt quae minus quibusdam unde sint initded </p>

                <div className="ro_l">
                    <div id="map" ref={container}></div>

                </div>

                <div className="ro_r">
                    <div className="ro_txt">
                        <h1>Store Search</h1>
                        <input type="text" /> <button>SEARCH</button>
                        <a href="#">nearby stores</a>
                        <ul className="traffic">
                            {
                                toggle ?
                                    <li onClick={() => {
                                        map.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
                                        setToggle(!toggle);
                                    }}>traffic information OFF</li>
                                    :
                                    <li onClick={() => {
                                        map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
                                        setToggle(!toggle);
                                    }}>traffic information ON</li>
                            }
                        </ul>
                    </div>



                    <div className="lo_scroll">
                        <ul className="branch" ref={btnBranch}>
                            {/* {
                                mapInfo.map((data,index)=>{
                                    return <li key={index} onClick={()=>setIndex(index)}>{data.title}</li>
                                })
                            } */}
                            <li onClick={() => {
                                setIndex(0);
                            }}>루이 비통 현대 본점 <p>+82 2 3432 1854</p>
                                <button>Visit Reservations</button></li>
                            <li onClick={() => {
                                setIndex(1);
                            }}>루이 비통 신세계 본점 <p>+82 2 3432 1854</p>
                            <button>Visit Reservations</button></li>
                            <li onClick={() => {
                                setIndex(2);
                            }}>루이 비통 현대 목동점 <p>+82 2 3432 1854</p>
                            <button>Visit Reservations</button></li>
                            <li onClick={() => {
                                setIndex(3);
                            }}>루이 비통 메종 서울 <p>+82 2 3432 1854</p>
                            <button>Visit Reservations</button></li>
                            <li onClick={() => {
                                setIndex(4);
                            }}>루이 비통 타임스퀘어점 <p>+82 2 3432 1854</p>
                            <button>Visit Reservations</button></li>
                            <li onClick={() => {
                                setIndex(5);
                            }}>루이 비통 신세계 명동점 <p>+82 2 3432 1854</p>
                            <button>Visit Reservations</button></li>
                        </ul>
                    </div>

                </div>

            </div>
        </main>
    )
}

export default Location;