import React from "react";
import { BarChart, Bar, XAxis, YAxis, Cell } from "recharts";

function Rechart({ appointedDoctors }) {
  const data = appointedDoctors.map((doctor) => ({
    name: doctor.name,
    fee: parseInt(doctor.fee.replace("$", "")), // fee as number
    dif: 2000,
  }));

  const colors = ["#8884d8", "#82ca9d", "#ffc658", "#ff7f50", "#00bcd4"];

  const getPath = (x, y, width, height) =>
    `M${x},${y + height}
     C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${
      x + width / 2
    }, ${y}
     C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
     Z`;

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };
  const renderBarChart = (
    <BarChart width={600} height={300} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Bar dataKey="fee" shape={<TriangleBar />}>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
        ))}
      </Bar>
    </BarChart>
  );
  return (
    <div>
      <div className="flex items-center justify-center py-10 my-12 bg-white w-5/6 mx-auto rounded-2xl">
        {renderBarChart}
      </div>
    </div>
  );
}

export default Rechart;
