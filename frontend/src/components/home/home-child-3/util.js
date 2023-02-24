import "./welcome.css";
const listItem = [
  "God Gift International, artisan background and international attitude for `Made in India` design story...",
  "For our tremendous growth we have received 3 awards –",
  "1) we were awarded National award by the Ministry of MSME, Government of India back in 2017.",
  "2) we received Top Export award by Export Promotion Council for Handicrafts (EPCH) in year 2016.",
  "3) We also received Asia Famous Brand Award in September 2019 by Asiabrand in Hong Kong.",
  "We currently have 2 units collectively having more than 2,00,000 sqft floor area and adding more area every year. 90% of the manufacturing process and 100% of finishing processes are done within factory premises. We employ over 250 people within our unit including contractual labours and staff.",
  // "One of our core concepts is to give top priority in keeping cost low for our customers in order for them to be competitive in their respective markets. Our ability to be flexible and provide service and product on time has given us a competitive edge in the market.",
  // "This has been a reason why we are rapidly becoming successful and a well-known organization in today’s competitive international market. Guided by our cultural values of servant leadership, integrity, innovation and quality, we are committed to our customer’s success through ingenious products, adaptable services to enhance value, and perfunctory solutions for innovative design concepts.",
  // "Showcasing our unique approach in a potentially chaotic industry.",
];
const listItemFun = (item) => {
  return (
    <ul>
      <li className="list-topic">{item}</li>
    </ul>
  );
};
export const mainListItemFun = listItem.map(listItemFun)