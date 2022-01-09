import axios from "axios";
import { useEffect, useState } from "react";

const path = process.env.PUBLIC_URL;

function Community() {
    let [posts, setPosts] = useState([]);
    const path = process.env.PUBLIC_URL;
    const url = `${path}/db/community.json`;

    useEffect(() => {
        axios
            .get(url)
            .then(json => {
                console.log(json.data.data);
                setPosts(json.data.data);
            })
    }, []);

    return (
        <main className="community">
            <div className="inner">
                <h1><a href="#">COMMUNITY</a></h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elity cinseterd Doloremque amet recusandae enim voluptatem nemo culpa! Dolor fugit vel, itaque deserunt quae minus quibusdam unde sint initded </p>
                <div className="tbox">
                    <strong>NUM</strong>
                    <h2>TITLE</h2>
                    <span>NAME</span>
                    <em>DATE</em>
                </div>

                {
                    posts.map((data, index) => {
                        return (
                            <article key={index}>
                                <div className="left">
                                    <strong>{data.num}</strong>
                                    <h2>{data.title}</h2>
                                    <span>{data.writer}</span>
                                    <em>{data.date}</em>
                                </div>
                            </article>
                        )
                    })
                }

                <div className="pagination">
                    <p className="numbers">
                        <button className="on">1</button>
                        <button>2</button>
                        <button>3</button>
                        <button>4</button>
                        <button>5</button>
                    </p>
                </div>

                <div className="right">
                    <img className="pic1" src={path + "/img/commu_pic1.jpeg"} />

                    <img className="pic2" src={path + "/img/commu_pic9.jpeg"} />

                </div>

                <div className="banner">
                    <div className="b_box">
                        <img className="b_pic" src={path + "/img/bg.jpg"} />
                        <h2>
                            The opening of the flagship store is meaningful in that it serves as an important opportunity to deepen the link between Louis Vuitton and Korean culture.</h2>
                    </div>

                </div>

                <div className="news_box">
                    <div className="n_box1">
                        <img className="n_pic1" src={path + "/img/news2.jpeg"} />
                        <div className="txt_box">
                            <h2>Louis Vuitton Maison Seoul: Open</h2>
                            <p>
                                The entire floor of the Louis Vuitton Maison Seoul is connected by a “floating” staircase, and all Louis Vuitton collections are presented in a variety of private spaces.<br />

                                In Louis Vuitton Maison Seoul, works of art and archives reflecting the history of Louis Vuitton are installed throughout, providing a special shopping experience.<br />

                                On the 4th floor, a special exhibition by Alberto Giacometti is held to commemorate the opening of Espace Louis Vuitton Seoul, the world's fifth opening. At the opening exhibition of Espas Louis Vuitton Seoul, eight representative sculptures of Giacometti, including Homme qui chavire (1950) and Grande Femme II [Tall Woman II] (1960), are on display.
                            </p>
                            <button>MORE</button>
                        </div>

                    </div>
                    <div className="n_box2">
                        <img className="n_pic2" src={path + "/img/news3.jpeg"} />
                        <h2>Louis Vuitton Maison Seoul presented by Frank Gehry</h2>
                        <p>
                            Frank Gehry's Louis Vuitton Maison Seoul design was inspired by the elegant movement of a traditional crane dance that embodies the shape of a crane with Korean history.</p>
                        <button>MORE</button>
                    </div>
                    <div className="n_box3">
                        <img className="n_pic3" src={path + "/img/news1.jpeg"} />
                        <h2>Louis Vuitton interior designed by Peter Marino</h2>
                        <p>
                            Marino added, “The stone material used in the interior flows from the outside, and the dynamism of the huge square contrasts sharply with the baroque glass windows of the building.”</p>
                        <button>MORE</button>
                    </div>
                </div>

                <div className="opening">
                    <div className="open">
                        <img className="open_box" src={path + "/img/Opening2.jpeg"} />
                    </div>
                    <div className="open_txt">
                        <h2>Louis Vuitton New Bond Street</h2>
                        <p>On the evening of 23rd October, Louis Vuitton held an event to celebrate the grand reopening of the London Maison. Louis Vuitton Chairman and Chief Executive Officer Michael Burke welcomed the Maison's muse, friends and celebrity guests at the unveiling of the remodeled Louis Vuitton New Bond Street store.<br />
                            A special cocktail dinner party will include Kylie Minogue, Gal Gadot, Shailene Woodley, Riley Keough, Jason Momoa and Noel Gallagher, among many others. Noel Gallagher, Naomi Scott, Isabelle Huppert, Stacy Martin, Mark Ronson, Raffey Cassidy, Doutzen Kroes, Maisie Williams Williams, Alexa Chung, Poppy Delevingne, Lady Amelia Windsor, Sabine Getty, Yasmin Le Bon and Amber Le Bon and others were present.</p>
                        <button>MORE</button>
                    </div>
                </div>

                <div className="newsletter">
                    <img className="letter" src={path + "/img/newsletter.jpeg"} />
                    <div className="letter_txt">
                        <span>NEWSLETTER</span>
                        <h1>THE LATEST NEWS FROM THE<br/>MAGAZINE</h1>

                        <button>Subscribe</button>
                        <p>Be the first to know. Follow us on</p>
                    </div>
                </div>

            </div>
        </main>
    )
}
export default Community;