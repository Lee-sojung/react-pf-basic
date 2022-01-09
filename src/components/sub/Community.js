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
                <div className="right">
                    <img className="pic1" src={path + "/img/commu_pic1.jpeg"} />

                    <img className="pic2" src={path + "/img/commu_pic9.jpeg"} />

                </div>

            </div>
        </main>
    )
}
export default Community;