import Pattern from "../../assets/imgs/bg-pattern-home-6-about-5.svg";

export  function CallToAction() {
  return (
   <section className="call-to-action">
<img className="pattern-img" src={Pattern} alt="pattern image" />
    <article>
<h2>Ready to get started?</h2>
<button className='contact-btn'>contact us</button>
    </article>
   </section>
  )
}
