import axios from "axios";
import { useEffect, useState } from "react";


function Department() {
    let [posts, setPosts] = useState([]);
    const path = process.env.PUBLIC_URL;
    const url = `${path}/db/about.json`;

    useEffect(() => {
        axios
            .get(url)
            .then(json => {
                console.log(json.data.data);
                setPosts(json.data.data);
            })
    }, []);
    return (
        <main className="about">
            <div className="inner">
                <h1><a href="#">ABOUT US</a></h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elity cinseterd Doloremque amet recusandae enim voluptatem nemo culpa! Dolor fugit vel, itaque deserunt quae minus quibusdam unde sint initded </p>

                <div className="about_vid">
                    <video className="a_vid" src="https://lv-vod.fl.freecaster.net/vod/louisvuitton/EQ0ncaEMXe_HD.mp4" muted autoPlay loop />
                    <h1>LOUIS VUIITON</h1>
                </div>

                <div className="main_designer">
                    <div className="ceo">
                        <img className="ceo_pic" src={path + "/img/designer.jpg"} />
                        <div className="ceo_txt">
                            <h1>Nicolas Ghesquière</h1>
                            <p> Nicolas Ghesquière was born in 1971 in Comines, northern France.<br />

                                At the age of 15, he began gaining experience in the fashion business through various internships. After completing his studies, he started working as an assistant designer for Jean Paul Gaultier in 1991, and began his career as a designer.<br />

                                After joining Balenciaga in 1995, he was appointed creative director in 1997, and as soon as he presented his collection with futuristic, structured silhouettes and Parisian chic designs, he received worldwide acclaim. Over the three seasons, he has designed several brands, including the Italian-based brand Callaghan.
                                Nicolas Ghesquière built a reputation as one of the most sought-after and influential designers of her time.<br />

                                In November 2014, his first year at Louis Vuitton, he was awarded the Wall Street Journal Fashion Innovator of the Year award, and in December he was awarded the British Fashion Awards.Award) for Best International Designer.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="ceo_letter">
                    <img className="ceo_msg" src={path + "/img/ceo_letter.jpeg"} />
                    <div className="msg">
                        <h2>A message from Nicolas Ghesquière</h2>
                        <p>Thank you to everyone who helped me tell a new story and helped make Louis Vuitton<br /> what it is today, especially those who work with me. I would like to express my gratitude to everyone<br /> who has been with me this morning, right here, in this moment.</p>
                        <span>- Nicolas Ghesquière, March 5, 2021 -</span>
                    </div>

                </div>

                <div className="member_txt">
                    <h1>DESIGNER</h1>
                    <div className="mem_txt">
                        <p>Designers from around the world including India Mahdavi, Marcel Wanders, Patricia Urquiola, Campana Brothers, Atelier Oï, and many more The most famous designers created the Louis Vuitton object Nomad.</p>
                    </div>

                </div>

                <div className="about_member">

                    <div className="member">
                        <img className="mem" src={path + "/img/member1.jpg"} />
                        <span>MARCEL WANDERS STUDIO</span>
                    </div>
                    <div className="member">
                        <img className="mem" src={path + "/img/member2.jpg"} />
                        <span>CAMPANA BROTHERS</span>
                    </div>
                    <div className="member">
                        <img className="mem" src={path + "/img/member3.jpg"} />
                        <span>FRANK CHOU</span>
                    </div>
                    <div className="member">
                        <img className="mem" src={path + "/img/member4.jpg"} />
                        <span>PATRICIA URQUIOLA</span>
                    </div>
                    <div className="member">
                        <img className="mem" src={path + "/img/member5.jpg"} />
                        <span>ATELIER OÏ</span>
                    </div>
                    <div className="member">
                        <img className="mem" src={path + "/img/member6.jpg"} />
                        <span>RAW EDGES</span>
                    </div>
                    <div className="member">
                        <img className="mem" src={path + "/img/member7.jpg"} />
                        <span>INDIA MAHDAVI</span>
                    </div>
                    <div className="member">
                        <img className="mem" src={path + "/img/member8.jpg"} />
                        <span>ANDREW KUDLESS</span>
                    </div>

                </div>

                {/* {
                    posts.map((data, index) => {
                        return (
                            <article key={index}>
                                <div className="left">
                                    <h2>{data.title}</h2>
                                    <span>{data.writer}</span>
                                    <div className="pic">{data.img}</div>
                                </div>
                            </article>
                        )
                    })
                } */}
            </div>
        </main>
    )
}
export default Department;