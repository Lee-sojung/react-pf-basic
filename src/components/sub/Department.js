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
                <h1><a href="#">ABOUT</a></h1>
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

                <div className="show_txt">
                    <h1>Louis Vuitton 2022<br /> Spring-Summer Women's Show</h1>
                    <div className="sh_txt">
                        <p>" I wanted to tackle the concepts of time and clothing.<br /> In addition, timelessness and the core concept of the Maison are also included. "</p>
                        <span>- Nicolas Ghesquière</span>
                    </div>

                </div>

                <div className="show">
                    <div className="preview">
                        <img className="sh" src={path + "/img/ss22_1.jpeg"} />
                    </div>
                    <div className="preview">
                        <img className="sh" src={path + "/img/ss22_2.jpeg"} />
                    </div>
                    <div className="preview">
                        <video className="sh" src="https://lv-vod.fl.freecaster.net/vod/louisvuitton/b6YXgiCaiO_HD.mp4" muted autoPlay loop />
                    </div>
                    <div className="preview">
                        <video className="sh" src="https://lv-vod.fl.freecaster.net/vod/louisvuitton/mUGummaa22_HD.mp4" muted autoPlay loop />
                    </div>
                    <div className="preview">
                        <img className="sh" src={path + "/img/ss22_4.jpeg"} />
                    </div>
                    <div className="preview">
                        <img className="sh" src={path + "/img/ss22_5.jpeg"} />
                    </div>
                    <div className="preview">
                        <img className="sh" src={path + "/img/ss22_6.jpeg"} />
                    </div>
                </div>
                <div className="preview_txt">
                        <div className="look">
                            <h1>LOOK HIGHLIGHT</h1>
                            <p>
                                A yearning for transmission. The Louis Vuitton Spring-Summer 2022 Women's Collection is an invitation to the le grand bal of time.<br /> Time itself is not that important. At the same time, time is everything. Time deconstructs function and meaning, uniting costumes.<br /> The day turns into night, and the simple clothes transform into luxury. Right now, from yesterday to today, clothes play their role as messengers.<br /> The experience of wearing clothes and the voice handed down. Being one step ahead at the forefront of the countdown is a mix of ever-changing and creative generations.
                            </p>
                        </div>
                    </div>


                <div className="member_txt">
                    <h1>OBJECT NOMAD DESIGNER</h1>
                    <div className="mem_txt">
                        <p>Designers from around the world including India Mahdavi,<br /> Marcel Wanders, Patricia Urquiola, Campana Brothers, Atelier Oï, <br />and many more The most famous designers created the Louis Vuitton object Nomad.</p>
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
        </main >
    )
}
export default Department;