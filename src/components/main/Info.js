const path = process.env.PUBLIC_URL;

function Info() {
    return (
        <section id="info">
            <div className="inner">
                <div className="sec1">
                    <h2>LOUIS VUITTON ACTIVITY</h2>
                    <div className="sec1_pic">
                        {/* <img className="sec1_pic1" src={path + "/img/snow1.jpeg"} /> */}
                        <video className="sec1_pic1" src="https://kr.louisvuitton.com/content/dam/lv/online/high-end/unisex/U_Holiday_Landing_Page_v2.html/jcr:content/assets/videos/desktop/SKI.mp4" muted autoPlay loop />
                        <button>
                            <img className="btn1" src={path + "/img/button.png"} />
                            <span>-THE SNOW-<br /> VIEW MORE</span>
                        </button>
                    </div>
                </div>
                <div className="sec1_txt1">
                    <span>September 13 - November 25</span>
                    <h1>WHAT'S NEW<br />
                        HOLIDAY "THE SNOW"<br />
                        LOUIS VUITTON COLLECTION<br />
                        2021-2022  </h1>
                </div>
                <div className="sec1_txt2">
                    <span>September 13 - Novembert25</span>
                    <h1>WHAT'S NEW<br />
                        HOLIDAY LOUIS VUITTON<br />
                        "THE VIVIENNE HOUSE"
                        2021-2022  </h1>

                </div>
                <div className="sec1_txt3">
                    <h2>HOLIDAY HOUSE "THE SNOW"</h2>
                    <p>A winter wonderland unfolds before your eyes. Shop the latest clothing, shoes, accessories and snow masks for the winter season.</p>
                    <h2>HOLIDAY HOUSE "THE VIVIENNE HOUSE" </h2>
                    <p>The pure smiles and facial expressions of young children. Meet with Vivienne, the Maison's mascot, in the Louis Vuitton House holiday campaign. We offer a gift that will last a lifetime.</p>
                    <span>2021 - 2022 WINTER COLLECTION</span>

                </div>
                <div className="vivi">
                    <img className="txt3_pic" src={path + "/img/holiday2.jpg"} />
                </div>
                <div className="sec2">
                    <div className="sec2_box">
                        <video className="sec2_pic" src="https://lv-vod.fl.freecaster.net/vod/louisvuitton/GFhNpFePph_HD.mp4" muted autoPlay controls loop />
                        <span>2021 - 2022 COLLECTION</span>
                        <h2>Monogram Jacquard Denim & Brodley</h2>
                        <p>A new collection of monogram jacquard denim with a distinctive eye-catcher. Discover all items made from faded denim jacquard textiles featuring a monogram pattern with vintage lines.</p>

                    </div>
                    <div className="sec2_box">
                        <video className="sec2_pic" src="https://lv-vod.fl.freecaster.net/vod/louisvuitton/iHYm3Jcmwd_HD.mp4" muted autoPlay controls loop />
                        <span>2021 - 2022 COLLECTION</span>
                        <h2>Louis Vuitton Cruise 2022 Collection</h2>
                        <p>
                            A handbag in harmony with Since 1854 jacquard textile in ecru tone and caramel-colored leather trim that gives a neo-vintage feel. The elegant pattern of monogram flowers, LV, and the number 1854 harmonize to create a tonal color scheme to make the line stand out even more.</p>
                    </div>
                    <div className="sec2_box">
                        <video className="sec2_pic" src="https://lv-vod.fl.freecaster.net/vod/louisvuitton/e7iskKxliu_HD.mp4" muted autoPlay controls loop />
                        <span>2021 - 2022 COLLECTION</span>
                        <h2>SPELL ON YOU Fragrance</h2>
                        <p>
                            A charming iris that makes you fall into the ecstasy of love with the harmony of sensual and light scents.<br />
                            Like an unforgettable chorus emanating from alluring love and secret senses, a fragrance that offers a hypnotic rapture.</p>
                    </div>
                    <div className="sec2_box">
                        <video className="sec2_pic" src="https://lv-vod.fl.freecaster.net/vod/louisvuitton/JLfnFzrW00_HD.mp4" muted loop autoPlay controls/>
                        <span>2021 - 2022 COLLECTION</span>
                        <h2>LV VOLT COLLECTION</h2>
                        <p>
                            Louis Vuitton's women's fine jewelery collection, created by the hands of a senior jeweler. Our signature line of earrings, necklaces, pendants, bracelets and rings are crafted from precious metals, carefully selected jewels and dazzling diamonds by our masters.</p>
                    </div>
                    <div className="sec2_box">
                        <video className="sec2_pic" src="https://lv-vod.fl.freecaster.net/vod/louisvuitton/5Af2MsyaHd_HD.mp4" muted  loop autoPlay controls/>
                        <span>2021 - 2022 COLLECTION</span>
                        <h2>MLV Aerogram</h2>
                        <p>Aerogram lines featuring sharp lines and modern details. Notice the Damier checkerboard print of wild animals with pastel-tinted details that look like passport stamps.</p>
                    </div>
                    <div className="sec2_box">
                        <video className="sec2_pic" src="https://lv-vod.fl.freecaster.net/vod/louisvuitton/VTnOeBsZIZ_HD.mp4" muted autoPlay controls loop />
                        <span>2021 - 2022 COLLECTION</span>
                        <h2>Louis Vuitton X Nigo</h2>
                        <p>
                            The Keepall Bandoulier 50. Nigo® x Louis Vuitton capsule collection is a collection of classic items in a completely new design in collaboration with Virgil Abloh and Japanese designer Nigo.</p>
                    </div>
                </div>

                <div className="sec3">
                    <div className="sec3_pic">
                        <img className="sec3_box" src={path + "/img/Nomades.jpg"} />
                    </div>
                    <div className="sec3_txt">
                        <h2>OBJETS NOMADES</h2>
                        <p>Since 2012, Louis Vuitton has invited renowned designers from all over the world to imagine experimental and functional furniture pieces and design objects from the Objet Nomad Collection. From hammocks to folding chairs, armchairs and insect screens, each limited-edition object transcends the boundaries of leather, demonstrating intricate craftsmanship and the Maison's interest in creative innovation. The collection pays tribute to Louis Vuitton's past special orders, such as the iconic bed trunk created in 1874 for the French explorer Pierre Sabourgnan de Brazza, while also celebrating the challenging contemporary visions of a diverse group of international designers.</p>
                        <button>MORE</button>
                    </div>
                </div>




            </div>
        </section>
    )
}

export default Info;