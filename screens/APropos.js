import React from "react";
import { ScrollView, useWindowDimensions } from "react-native";
import RenderHTML from "react-native-render-html";

const html = `
<h2 style="text-align:center">L'équipe de développement</h2>

<div class="container">
<h2>Sébastien Auroux</h2>
<p>
Judoka professionnel<br>
sebastien@example.com<br>
Contact
</p>
</div>

<div class="row">
  <div class="column">
    <div class="card">
      <img src="https://www.w3schools.com/w3images/team1.jpg" alt="Jane" style="width:100%">
    </div>
  </div>

<div class="container">
  <h2>Joël Rakotomalala</h2>
  <p>
  Présentateur radio<br>
  john@example.com<br>
  Contact
  </p>
</div>

  <div class="column">
    <div class="card">
      <img src="https://www.w3schools.com/w3images/team2.jpg" alt="Mike" style="width:100%">
    </div>
  </div>

<div class="container">
  <h2>Stéphan Sommelet</h2>
  <p>
  Joueur d'échecs<br>
  john@example.com<br>
  Contact
  </p>
</div>

  <div class="column">
    <div class="card">
      <img src="https://www.w3schools.com/w3images/team3.jpg" alt="John" style="width:100%">
    </div>
  </div>
</div>
`;

export default function APropos() {
  // Allow images to scale to available width
  // with contentWidth prop.
  const { width } = useWindowDimensions();
  return (
    <ScrollView style={{ flex: 1 }}>
      <RenderHTML contentWidth={width} source={{ html }} />
    </ScrollView>
  );
}
