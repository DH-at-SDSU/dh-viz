import React, { Component } from "react";

class Network extends Component {
  componentDidMount() {
    //this.createNetwork();
  }

  render() {
    return <div />;
  }
}

const createNetwork = () => {
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
};

export default Network;
