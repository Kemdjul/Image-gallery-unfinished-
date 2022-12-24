import React from 'react'

class Pin {
    constructor(name, id, ratio, tags, url) {
        this.name = name;
        this.id = id;
        this.ratio = ratio;
        this.tags = tags;
        this.url = url;
    }
}

const ArrayOfImages = [
    new Pin('Ana', '0' ,'ratio-0', '0_5625', 'ana place princeza rajf roza', '../assets/ana-1.jpg'),
    new Pin('Ana', '1', 'ratio-0_5625', 'ana gleda u kameru oci rukavice', '../assets/ana-2.jpg'),
    new Pin('Advent', '2', 'ratio-0_75', 'advent zima bozic par selfie', '../assets/advent-1.jpg'),
    new Pin('Advent', '3', 'ratio-0_75', 'advent zima bozic par', '../assets/advent-2.jpg'),
]

const image = (props) => {
  return (
    <img src={ArrayOfImages[props.id].url} className={'images' + ArrayOfImages[props.id].ratio} />
  )
}

export default image