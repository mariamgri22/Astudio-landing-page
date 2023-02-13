import React from "react";
import "./style.css";

ymaps.ready(init);
function init() {
  // Creating the map.
  let myMap = new ymaps.Map("map", {
    center: [55.76, 37.64],
    zoom: 7,
  });
  myMap.controls.remove("searchControl"); // удаляем поиск
}
//

export default function Map() {
  return <div id="map" className="map-test"></div>;
}
