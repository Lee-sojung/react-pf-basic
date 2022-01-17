import { useEffect, useRef } from "react";
import { useState } from "react";

function Location() {
    const { kakao } = window;
    const container = useRef(null);
    const btnBranch = useRef(null);
    const [map, setMap] = useState(null);
    const [index, setIndex] = useState(0);
    const [toggle, setToggle] = useState(false);

    const info = [
        {
            title: "본점",
            latlng: new kakao.maps.LatLng(37.5132313, 127.0594368),
            imgSrc: process.env.PUBLIC_URL + "/img/marker.png",
            imgSize: new kakao.maps.Size(60, 68),
            imgPos: { offset: new kakao.maps.Point(116, 99) }
        },
        {
            title: "지점1",
            latlng: new kakao.maps.LatLng(37.507099899564444, 126.75639338893572),
            imgSrc: process.env.PUBLIC_URL + "/img/marker.png",
            imgSize: new kakao.maps.Size(60, 68),
            imgPos: { offset: new kakao.maps.Point(116, 99) }
        },
        {
            title: "지점2",
            latlng: new kakao.maps.LatLng(35.17422705914147, 129.10766665201712),
            imgSrc: process.env.PUBLIC_URL + "/img/marker.png",
            imgSize: new kakao.maps.Size(60, 68),
            imgPos: { offset: new kakao.maps.Point(116, 99) }
        }
    ];

    const [mapInfo, setMapInfo] = useState(info);

    useEffect(() => {
        const options = {
            center: mapInfo[index].latlng,
            level: 3
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

        return () => window.removeEventListener('resize', mapSet);

    }, [index]);

    return (
        <main className="location">
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



                    <ul className="branch" ref={btnBranch}>
                        <li onClick={() => {
                            setIndex(0);
                        }}>루이 비통 현대 본점</li>
                        <li onClick={() => {
                            setIndex(1);
                        }}>루이 비통 신세계 강남점</li>
                        <li onClick={() => {
                            setIndex(2);
                        }}>루이 비통 현대 목동점</li>
                    </ul>
                </div>

            </div>
        </main>
    )
}

export default Location;