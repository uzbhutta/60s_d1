import React from 'react';
import { ResponsiveBar } from '@nivo/bar'

var data = [
  {
    "educational attainment": "Doctoral degree",
    "Unemployment Rate Percent": 1.5,
    "Median Usual Weekly Earnings": 1750,
  },  
  {
    "educational attainment": "Professional degree",
    "Unemployment Rate Percent": 1.5,
    "Median Usual Weekly Earnings": 1800,
  },  
  {
    "educational attainment": "Master's degree",
    "Unemployment Rate Percent": 2.2,
    "Median Usual Weekly Earnings": 1400,
  }, 
  {
    "educational attainment": "Bachelor's degree",
    "Unemployment Rate Percent": 2.3,
    "Median Usual Weekly Earnings": 1200,
  },  
  {
    "educational attainment": "Associate degree",
    "Unemployment Rate Percent": 3.5,
    "Median Usual Weekly Earnings": 800,
  },
  {
    "educational attainment": "Some college, no degree",
    "Unemployment Rate Percent": 4,
    "Median Usual Weekly Earnings": 700,
  },
  {
    "educational attainment": "High school diploma, no degree",
    "Unemployment Rate Percent": 4.5,
    "Median Usual Weekly Earnings": 650,
  },  
  {
    "educational attainment": "Less than a high school diploma",
    "Unemployment Rate Percent": 6.5,
    "Median Usual Weekly Earnings": 510,
  },  
]



// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const NivoStackedBar = () => {
    return (
    <ResponsiveBar
        data={data}
        keys={[ 
            'Unemployment Rate Percent',
            'Median Usual Weekly Earnings' ]}
        indexBy="educational attainment"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        colors={{ scheme: 'red_purple' }}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
        axisTop={null}
        axisRight={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Unemployment Rate Percent',
          legendPosition: 'middle',
          legendOffset: 32
        }}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Educational Attainment',
            legendPosition: 'middle',
            legendOffset: 32
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Median Usual Weekly Earnings',
            legendPosition: 'middle',
            legendOffset: -40
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
        legends={[
            {
                dataFrom: 'keys',
                anchor: 'top-left',
                direction: 'column',
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
    />)
}

export default NivoStackedBar;