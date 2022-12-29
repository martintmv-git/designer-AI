import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>About us</h2>
                        <p>Our target audience are people who want to build or re-arrange their living spaces, apartments, houses or offices at low cost. We offer budget-friendly AI solutions that could be used for inspiration for interior designers, or even finaly products for actual projects.<br></br><br></br>
                        As ambitious and enterprising IT students based in the Netherlands, we recognize the vast potential of artificial intelligence and its future. We have founded this platform with the aim of assisting customers in crafting their ideal spaces at a reasonable cost, while also striving to make the platform and user experience as seamless as possible.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
