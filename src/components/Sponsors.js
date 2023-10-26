import sponsorsData from './sponsors.json'

function Sponsors() {
  return (
    <section className="sponsors-container">
      <div className="thankYou">
        <h2> Thank You Sponsors! </h2>
        <p>
          {" "}
          Rails World could not have been possible without the generous support
          of Rails World sponsors and Rails Foundation members.{" "}
        </p>
      </div>
      <div className="bordered-container">
        <div className="flex-container">
          <div className="sponsors">
            <div className="appSignal">
              {sponsorsData.map((sponsor, index) =>(
                <a key={index} href={sponsor.link} > <img src={sponsor.image} alt={sponsor.alt}/></a>
              ))}
        

            </div>
            <div className="babbel">

            </div>
            <div className="rest-of-sponsors"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sponsors;
