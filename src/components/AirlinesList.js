import React from "react";
import { useEffect, useState } from "react";
import fetchJsonp from "fetch-jsonp";
import AirlineCard from "./AirlineCard";
import "../styles/AirlinesList.css";

const FEATURED_API =
  "https://kayak.com/h/mobileapis/directory/airlines/homework";

function AirlinesList() {
  const [airlines, setAirlines] = useState([]);
  const [filteredAirlines, setFilteredAirlines] = useState([]);
  const [alliance, setAlliance] = useState([]);

  useEffect(() => {
    getAirlines(FEATURED_API);
  }, []);

  const getAirlines = (API) =>
    fetchJsonp(API, {
      jsonpCallback: "jsonp"
    })
      .then((res) => res.json())
      .then((data) => {
        setAirlines(data);
        setFilteredAirlines(data);
      });

  //Unfortunately all the airlines have alliance === 'none', but this is how I would set up the filter
  useEffect(() => {
    if (alliance.length) {
      const filtered = airlines.filter((airline) =>
        alliance.includes(airline.alliance)
      );
      setFilteredAirlines(filtered);
    } else {
      setFilteredAirlines(airlines);
    }
  }, [airlines, alliance]);

  const filterByAlliance = (allianceSelection) => {
    if (alliance.includes(allianceSelection)) {
      setAlliance(
        alliance.filter((selection) => selection !== allianceSelection)
      );
    } else {
      setAlliance([...alliance, allianceSelection]);
    }
  };

  return (
    <>
      <div className="mainContainer">
        <h1 className="title">Airlines</h1>
        <h4 className="secondTitle">Filter by Alliances</h4>
        <form>
          <input
            className="firstInput"
            onClick={() => filterByAlliance("OneWorld")}
            type="checkbox"
            name="parameters"
            value="OneWorld"
            key="checkbox1"
          />{" "}
          OneWorld
          <input
            style={{ marginLeft: 15 }}
            className="secondInput"
            onClick={() => filterByAlliance("Sky Team")}
            type="checkbox"
            name="parameters"
            value="Sky Team"
            key="checkbox2"
          />{" "}
          Sky Team
          <input
            style={{ marginLeft: 15 }}
            className="thirdInput"
            onClick={() => filterByAlliance("Star Alliance")}
            type="checkbox"
            name="parameters"
            value="Star Alliance"
            key="checkbox3"
          />{" "}
          Star Alliance
        </form>

        <div className="airlineContainer">
          {filteredAirlines?.map((airline, index) => (
            <AirlineCard key={airline.name + index} airlineInfos={airline} />
          ))}
        </div>
      </div>
    </>
  );
}

export default AirlinesList;
