import "./App.css";
import { Card } from "./components/card";
import { useState } from "react";
// Default theme
import "@splidejs/react-splide/css";

// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";

// or only core styles
import "@splidejs/react-splide/css/core";

import discord from "./img/discord.svg";
import opensea from "./img/opensea.svg";
import twitter from "./img/twitter.svg";
import insta from "./img/insta.svg";
import foundation from "./img/foundation.svg";

import { Splide, SplideSlide } from "@splidejs/react-splide";
function App() {
  const [AsideActive, setAsideActive] = useState(false);
  return (
    <div className="App">
      <header className="common_width">
        <div className="logo">
          <h1>Azuki GF</h1>
        </div>
        <div class={`nav  ${AsideActive && "active_nav"}`}>
          <a href="#" className="active">
            Home
          </a>
          <a href="#">The Story</a>
          <a href="#">Gallery</a>
          <a href="#">Roadmap</a>
          <a href="#">Artist</a>
          <a href="#">Team</a>
        </div>

        <div className="social_icons">
          <a href="https://opensea.io/" target="_blank">
            <img src={opensea} alt="" />
          </a>

          <a href="https://twitter.com/AzukiGFNFT" target="_blank">
            <img src={twitter} alt="" />
          </a>
          <a href="https://discord.com/" target="_blank">
            <img src={discord} alt="" />
          </a>
        </div>

        <button
          class="sc-cZMNgc dOcKIQ"
          onClick={(e) => setAsideActive(!AsideActive)}
        >
          <div class="sc-jUosCB cyFoiY"></div>
          <div class="sc-jUosCB cyFoiY"></div>
          <div class="sc-jUosCB cyFoiY"></div>
        </button>
      </header>

      <main className="common_width">
        <img src="https://killergf.com/static/media/04.9b77a788.png" alt="" />
        <div className="presentation">
          <h1>Mint 2 Azuki GF and Get 1 Free Your Azuki GF</h1>
          <h1> can’t wait to meet you</h1>

          <a href="#">Connect Wallet</a>
        </div>
      </main>

      {/* <section className="girl_area common_width">
        <h1>Azuki GF</h1>
        <img src="https://killergf.com/static/media/04.9b77a788.png" alt="" />
      </section> */}

      <section className="our_story common_width">
        <h1>THE STORY</h1>
        <p>
          Cerise is a woman of many faces. Yet by spy networks and online
          sleuths, she is known only as the Azuki GF assassin— the uncatchable
          killer who has no true face. The secret to her success lies in one
          supernatural gift. Wielding the Mirror of Narcissus, she holds at her
          fingertips the ability to reform her appearance into any disguises and
          powers using this dark artifact. This mirror, which consumes both the
          life essences and appearance of her kills, was a gift from the Crimson
          God himself. A heirloom of sorts for his favorite dearly beloved
          killer to better serve him by carrying out the critical assassinations
          that bring down societies, religions, and supernatural entities. Gods,
          even with their gifts, can be cruel with jests that transcend across
          the multiverse…
        </p>

        <p>
          Knowing little of the trick inlaid within the Mirror, Cerise used it
          once more. But this one, being the 7,777th time, triggered a breakage
          of dimensions within the mirror, pulling forth 7,777 versions of
          Cerise herself out into the same dimension, wearing what appears to be
          every disguise she has ever worn in the past for her kills.
        </p>
        <p>
          Now that is a lot of deadly assassins in one room. But get this, each
          being sentient and believing that she is the real Cerise, they agree
          the only way to determine the one true Cerise would be to participate
          in a game. A deadly set of challenges within the metaverse where by
          playing and winning hearts, the Cerises compete against each other
          using daring and cunning tactics with only one coming out of it alive
          by the end. They say the biggest enemy standing in your way is
          yourself, but did they mean all 7,777?
        </p>
      </section>

      <section className="girls_grid_area common_width">
        <div className="grid_wrapper">
          <img
            src="https://killergf.com/static/media/killer_gf_01.e00074e3.jpg"
            alt=""
          />
          <img
            src="https://killergf.com/static/media/killer_gf_02.303cb265.jpg"
            alt=""
          />
          <img
            src="https://killergf.com/static/media/killer_gf_03.7a130dbc.jpg"
            alt=""
          />
          <img
            src="https://killergf.com/static/media/killer_gf_04.cb69b1c1.jpg"
            alt=""
          />
        </div>
      </section>

      <section className="road_map common_width">
        <h1>ROADMAP</h1>
        <div className="list_wrapper">
          <h1>ART AIRDROPS & HOLDER REWARDS</h1>
          <ul>
            <li>
              Zeronis Legacy 1/1 Art airdrops for long-term holders - ONGOING
            </li>

            <li>
              Crimson Key airdrops for holders and community events - IN THE
              WORKS
            </li>
            <li>
              Other exclusive benefits and airdrops for holders - EXPLORING
            </li>
          </ul>
        </div>

        <div className="list_wrapper">
          <h1>AZUKI GF CHARITY</h1>
          <ul>
            <li>
              Monthly collab charity auctions on Foundation with guest artists
            </li>
            <li>
              15+ eth donated from guest artist auctions so far - KILLED IT!
            </li>
          </ul>
        </div>

        <div className="list_wrapper">
          <h1>AZUKI GF MERCH</h1>
          <ul>
            <li>High quality merchandise exclusively for AZUKI GF holders</li>
            <li>
              Merch store available to all Azuki GF Holders all over the world
            </li>

            <li>Hoodies, shirts, and other items - IN THE WORKS</li>
            <li>Future IRL Airdrops and Merch - EXPLORING</li>
          </ul>
        </div>

        <div className="list_wrapper">
          <h1>METAVERSE AZUKI GFS</h1>
          <ul>
            <li>
              Worldwide Web3 Metaverse Integration for every Azuki GF -
              Exploring
            </li>
            <li>Additional Worldwide Web3 Integrations - EXPLORING</li>
            <li>Integration into other Metaverses - EXPLORING</li>
          </ul>
        </div>

        <div className="list_wrapper">
          <h1>AZUKI GF GAME</h1>
          <ul>
            <li>Lots to do, but being researched - EXPLORING</li>
          </ul>
        </div>

        <div className="list_wrapper">
          <h1>FUTURE STORY OF AZUKI GF + ZEROVERSE</h1>
          <ul>
            <li>
              Future expansions of the AZUKI GF Story and World envisioned by
              Zeronis!
            </li>
          </ul>
        </div>
      </section>

      <section className="feature_artist common_width">
        <h1>FEATURE ARTISTS</h1>
        <p>
          A Foundation collection where each artist made a Azuki GF derivative
          in their own style. The 1/1s were sold on Foundation for auction with
          the proceeds going to the following split:
        </p>
        <ul>
          <li>- 33% Azuki GF Team</li>
          <li>- 33% to the Artist</li>
          <li>- 33% toCharity (Artists pick!)</li>
        </ul>

        <Splide aria-label="My Favorite Images">
          <SplideSlide>
            <div className="card">
              <img
                src="https://killergf.com/static/media/naoki-saito.fe86e789.jpg"
                alt=""
              />
              <div className="right_side">
                <div className="presentation">
                  <h1>Naoki Saito</h1>
                  <p>
                    Naoki Saito is a Japanese Illustrator best known for his
                    work as a certified Pokémon Card Illustrator. His career
                    history is incredibly impressive, on top of several years of
                    Pokémon work, his career also includes work for Dragolia
                    Lost and Hatsune Miku.
                  </p>
                </div>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="card">
              <img
                src="https://killergf.com/static/media/naoki-saito.fe86e789.jpg"
                alt=""
              />
              <div className="right_side">
                <div className="presentation">
                  <h1>Naoki Saito</h1>
                  <p>
                    Naoki Saito is a Japanese Illustrator best known for his
                    work as a certified Pokémon Card Illustrator. His career
                    history is incredibly impressive, on top of several years of
                    Pokémon work, his career also includes work for Dragolia
                    Lost and Hatsune Miku.
                  </p>
                </div>
              </div>
            </div>
          </SplideSlide>
        </Splide>
      </section>

      <section className="artist_wrapper common_width">
        <div className="left_side">
          <h1>THE ARTIST</h1>
          <p>
            Zeronis is a concept artist, father to three cats, content creator,
            NFT artist, and an avid gamer. A former senior concept artist at
            Riot Games for over 10 years, as well as a designer of many of the
            popular champions including Ahri, Gwen, and Vi. He also designed
            many successful skins such as Star Guardian, K/DA, and more.
          </p>

          <p>
            He is a prominent NFT artist with a myriad of anime inspired work on
            Foundation and is always looking for ways to share his characters
            and stories in this space. He is striving to create the best Waifu
            Web3 collecting game on the market.
          </p>

          <div className="social_wrapper">
            <a href="#">
              <img src={insta} alt="" />
            </a>
            <a href="#">
              <img src={twitter} alt="" />
            </a>

            <a href="#">
              <img src={foundation} alt="" />
            </a>
          </div>
        </div>
        <img
          src="https://killergf.com/static/media/artist.21ce5dd1.jpg"
          alt=""
        />
      </section>

      <section className="artist_wrapper INSPIRATION_Wrapper common_width">
        <div className="left_side">
          <h1>INSPIRATION</h1>
          <p>
            "The inspiration for the project came from the combination of my
            love for creating badass and beautiful female characters while also
            bringing a bit of the yandere flair to the mix. The project is also
            a special collaboration with uwulabs, creator of uwucrew."
          </p>

          <p style={{ textAlign: "right" }}>- Zeronis, artist of AZUKI GF</p>
        </div>
        <div className="img_grid">
          <img src="https://killergf.com/static/media/05.6aadb088.jpg" alt="" />
          <img src="https://killergf.com/static/media/06.b693732d.jpg" alt="" />
          <img src="https://killergf.com/static/media/04.4807e76a.jpg" alt="" />
          <img src="https://killergf.com/static/media/07.9fd6bc94.jpg" alt="" />
        </div>
      </section>

      <section className="team_area common_width">
        <h1>TEAM</h1>
        <p>
          Azuki GF is a talented team of builders behind Azuki GF Crew - an
          inspired NFT Project with a fun art focused community.
        </p>
        {/* <p>
          We have collaborated with Zeronis to assist in development and
          community management for AZUKI GF. We are excited to work with Zeronis
          and are looking forward to AZUKI GF's future!
        </p> */}
        <div className="content_area">
          <Card
            img="https://killergf.com/static/media/kiwi.a697b0a6.jpg"
            heading="Kiwi - Co-Founder and Developer"
            para="Co-Founder of uwucrew. Designed the AZUKI GF NFT collection,
            responsible for leading the team and all technical needs."
          />
          <Card
            img="https://killergf.com/static/media/swag.d50be249.jpg"
            heading="Swag - Community Manager"
            para="Loves making our community and holders excited, always looking for what we can provide to our community.."
          />

          <Card
            img="https://killergf.com/static/media/thefatdoinks.68e784f3.jpg"
            heading="FatDoinks - Head of Marketing"
            para="Helps the team strategize and deliver with intention. Brings on Killer ideas for marketing!"
          />
          <Card
            img="https://killergf.com/static/media/upsidan.b82c89c2.jpg"
            heading="upsidan - Project Manager"
            para="Kiwi's #1 fan. As project manager he makes sure everyone is doing their job and that we are fulfilling expectations."
          />
          <Card
            img="https://killergf.com/static/media/kiwi.a697b0a6.jpg"
            heading="TylerTakesATrip - Assistant Community Manager"
            para="While in remission in July of 2021, he found an interest in crypto/NFTs and works full time as our Assistant Community Manager."
          />
          <Card
            img="https://killergf.com/static/media/desto.d21933f4.jpg"
            heading="Desto - Partnerships Manager"
            para="Responsible for our relationships and collaborations with other projects."
          />

          <Card
            img="https://killergf.com/static/media/m.8b559463.jpg"
            heading="Morello - Advisor"
            para="Essential team member from uwucrew/uwulabs. He assists wherever needed."
          />
          <Card
            img="https://killergf.com/static/media/chase.d9902eaf.jpg"
            heading="Chase Manning - Developer"
            para="Website developer for AZUKI GF. Working to make sure everything is looking Killer online."
          />
          <Card
            img="https://killergf.com/static/media/kiwi.a697b0a6.jpg"
            heading="Chicken Sandwich - Twitch Organizer"
            para="Organizes League of Legends and other large game events for our Twitch."
          />
          <Card
            img="https://killergf.com/static/media/peegu.7fb12b3f.jpg"
            heading="Peegu - Chinese Community Manager"
            para="Translates important announcements and stays in touch with our Chinese speaking community."
          />
        </div>
      </section>

      <footer className="common_width">
        <div className="form_area">
          <h1>JOIN THE CLUB</h1>

          <div className="input_wrapper">
            <input type="email" placeholder="Enter your email address" />
            <button>→</button>
          </div>
        </div>

        <h1 className="logo_footer">AZUKI GF</h1>

        <div className="follow">
          <h1>FOLLOW US</h1>

          <div className="social_icons">
            <a href="https://opensea.io/" target="_blank">
              <img src={opensea} alt="" />
            </a>

            <a href="https://twitter.com/AzukiGFNFT" target="_blank">
              <img src={twitter} alt="" />
            </a>
            <a href="https://discord.com/" target="_blank">
              <img src={discord} alt="" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
