import  Circle3  from "../../assets/imgs/bg-pattern-home-3.svg";
import DescImg1 from "../../assets/imgs/icon-person.svg"
import DescImg2 from "../../assets/imgs/icon-chart.svg";
import DescImg3 from "../../assets/imgs/icon-cog.svg";

export  function HomeDesc() {
  return (
  <section className="home-desc">
    <div className="main-desc">
     <article>
                    <div className='line'></div>
                    <h2>Build & manage distributed teams like no one else.</h2>
    </article>
                <img className="green-circle" src={Circle3} alt="image circle" />

  <ul className="benefit-list">
      <li>
        <img src={DescImg1} alt="" />
        <div className="card">
        <h5>Experienced Individuals</h5>
        <p>Our network is made up of highly experienced professionals who are passionate about what they do.</p>
        </div>
      </li>
      <li>
        <img src={DescImg3} alt="" />
        <div className="card">
        <h5>Easy to Implement</h5>
        <p>Our processes have been refined over years of implementation meaning our teams always deliver.</p>
        </div>
      </li>
      <li>
        <img src={DescImg2} alt="" />
        <div className="card">
        <h5>Enhanced Productivity</h5>
        <p>Our customized platform with in-built analytics helps you manage your distributed teams.</p>
        </div>
      </li>

  </ul>
    </div>
  </section>
  )
}
