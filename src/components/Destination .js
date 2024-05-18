import Mountain1 from "../components/Assets/Mountan.png";
import Mountain2 from "../components/Assets/waterfall.jpg";
import Mountain3 from "../components/Assets/sihiriya.jpeg";
import Mountain4 from "../components/Assets/sigirijamoun.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>Tours give you the opportunity to see a lot within a time frame </p>
      <DestinationData
        className="first-des"
        heading="Nuwara Eliya"
        text="Nuwara Eliya is a city in the tea country hills of central Sri Lanka. The naturally landscaped Hakgala Botanical Gardens displays roses and tree ferns, and shelters monkeys and blue magpies. Nearby Seetha Amman Temple, a colorful Hindu shrine, is decorated with religious figures. Densely forested Galway's Land National Park is a sanctuary for endemic and migratory bird species, including bulbuls and flycatchers."
        img1={Mountain1}
        img2={Mountain2}
      />
      <DestinationData
        className="first-des-reverse"
        heading="Sigiriya"
        text="Sigiriya or Sinhagiri is an ancient rock fortress located in the northern Matale District near the town of Dambulla in the Central Province, Sri Lanka. It is a site of historical and archaeological significance that is dominated by a massive column of granite approximately 180 m high"
        img1={Mountain3}
        img2={Mountain4}
      />
    </div>
  );
};

export default Destination;
