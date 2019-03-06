import React, { Component } from "react";
import {
  InteractiveForceGraph,
  ForceGraphNode,
  ForceGraphLink,
  ForceGraphArrowLink
} from "react-vis-force";
import Amplify, {
  Analytics,
  Storage,
  API,
  graphqlOperation
} from "aws-amplify";
import { ForceGraph2D } from "react-force-graph";
import test1 from "../../data/sample.json";
import test2 from "../../data/test1.json";

class Network extends Component {
  state = {
    width: 960,
    height: 500
  };

  componentDidMount() {
    //this.createNetwork();
    /* d3.json(test).then(function(data) {
      console.log(data[0]);
    }); */
    console.log(test1);
  }

  post = async () => {
    console.log("calling api");
    const response = await API.post("dhvizAPI", "/items", {
      body: {
        id: "1",
        name: "hello amplify!"
      }
    });
    alert(JSON.stringify(response, null, 2));
  };
  get = async () => {
    console.log("calling api");
    const response = await API.get("dhvizAPI", "/items/object/1");
    alert(JSON.stringify(response, null, 2));
  };
  list = async () => {
    console.log("calling api");
    const response = await API.get("dhvizAPI", "/items/1");
    alert(JSON.stringify(response, null, 2));
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <ForceGraph2D
          nodeAutoColorBy="value"
          nodeLabel="name"
          graphData={test2}
        />
    );
  }
}

{
  /* <InteractiveForceGraph
        zoom
        simulationOptions={{ height: 300, width: 300, animate: true }}
        labelAttr="id"
        onSelectNode={node => console.log(node)}
        highlightDependencies
      >
        <ForceGraphNode node={{ id: 1, label: "First node" }} fill="red" />
        <ForceGraphNode node={{ id: 2, label: "Second node" }} fill="blue" />
        <ForceGraphNode node={{ id: 3, label: "Second node" }} fill="green" />
        <ForceGraphNode node={{ id: 4, label: "Second node" }} fill="yellow" />
        <ForceGraphLink link={{ source: 1, target: 2 }} />
        <ForceGraphLink link={{ source: 1, target: 4 }} />
        <ForceGraphLink link={{ source: 3, target: 1 }} />
        <ForceGraphLink link={{ source: 2, target: 4 }} />
      </InteractiveForceGraph> */
}

/* const createNetwork = () => {
  const height = 800;
  const width = 960;

  network = (selection, data) => {};

  updateNodes = () => {
    const node = nodesG.selectAll("circle.node").data(curNodesData, d => d.id);

    node
      .enter()
      .append("circle")
      .attr("class", "node")
      .attr("cx", (d = d.x))
      .attr("cy", (d = d.y))
      .attr("r", (d = d.radius))
      .style("fill", d => nodeColors(d.artist))
      .style("stroke", d => strokeFor(d))
      .style("stroke-width", 1.0);

    node.on("mouseover", showDetails).on("mouseout", hideDetails);

    return node.exit().remove();
  };

  updateLinks = () => {
    link = linksG
      .selectAll("line.link")
      .data(curLinksData, d => "${d.source.id}_${d.target.id}");

    link
      .enter()
      .append("line")
      .attr("class", "link")
      .attr("stroke", "#ddd")
      .attr("stroke-opacity", 0.8)
      .attr("x1", d => d.source.x)
      .attr("y1", d => d.source.y)
      .attr("x2", d => d.target.x)
      .attr("y2", d => d.target.y);

    return link.exit().remove();
  };

  update = () => {
    const curNodesData = filterNodes(allData.nodes);
    const curLinksData = filterLinks(allData.links, curNodesData);

    if (layout === "radial") {
      const artists = sortedArtists(curNodesData, curLinksData);
      updateCenters(artists);
    }

    force.nodes(curNodesData);

    updateNodes();

    if (layout == "force") {
      force.links(curLinksData);
      updateLinks();
    } else {
      force.links([]);
      if (link) {
        link
          .data([])
          .exit()
          .remove();
        var link = null;
      }
    }

    return force.start();
  };

  network.toggleLayout = newLayout => {};

  return network;
}; */

export default Network;
