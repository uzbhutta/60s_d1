import React from 'react';
import { ResponsiveBar } from '@nivo/bar'

var data = [
  {
    "socioeconomic status": "Lowest Fifth",
    "Selectivity not classified, 2-year or less institution": 61,
    "Selectivity not classified, 4-year institution": 9,
    "Inclusive 4-year institution": 8,
    "Moderately selective, 4-year institution": 15,
    "Highly selective, 4-year instituion": 7,
  },
  {
    "socioeconomic status": "Second-lowest fifth",
    "Selectivity not classified, 2-year or less institution": 52,
    "Selectivity not classified, 4-year institution": 8,
    "Inclusive 4-year institution": 10,
    "Moderately selective, 4-year institution": 23,
    "Highly selective, 4-year instituion": 7,
  },
  {
    "socioeconomic status": "Middle fifth",
    "Selectivity not classified, 2-year or less institution": 42,
    "Selectivity not classified, 4-year institution": 11,
    "Inclusive 4-year institution": 8,
    "Moderately selective, 4-year institution": 27,
    "Highly selective, 4-year instituion": 11,
  },
  {
    "socioeconomic status": "Second-highest fifth",
    "Selectivity not classified, 2-year or less institution": 37,
    "Selectivity not classified, 4-year institution": 6,
    "Inclusive 4-year institution": 9,
    "Moderately selective, 4-year institution": 31,
    "Highly selective, 4-year instituion": 17,
  },
  {
    "socioeconomic status": "Highest fifth",
    "Selectivity not classified, 2-year or less institution": 19,
    "Selectivity not classified, 4-year institution": 6,
    "Inclusive 4-year institution": 6,
    "Moderately selective, 4-year institution": 32,
    "Highly selective, 4-year instituion": 37,
  }
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
        // keys={[ 'Selectivity not classified, 2-year or less institution', 
        //         'Selectivity not classified, 4-year institution', 
        //         'Inclusive 4-year institution',
        //         'Moderately selective, 4-year institution',
        //         'Highly selective, 4-year instituion' ]}
        keys={[ 
            'Highly selective, 4-year instituion',
            'Moderately selective, 4-year institution',
            'Inclusive 4-year institution',
            'Selectivity not classified, 4-year institution', 
        'Selectivity not classified, 2-year or less institution' ]}
        
        indexBy="socioeconomic status"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        colors={{ scheme: 'red_purple' }}
        // defs={[
        //     {
        //         id: 'dots',
        //         type: 'patternDots',
        //         background: 'inherit',
        //         color: '#38bcb2',
        //         size: 4,
        //         padding: 1,
        //         stagger: true
        //     },
        //     {
        //         id: 'lines',
        //         type: 'patternLines',
        //         background: 'inherit',
        //         color: '#eed312',
        //         rotation: -45,
        //         lineWidth: 6,
        //         spacing: 10
        //     }
        // ]}
        // fill={[
        //     {
        //         match: {
        //             id: 'Highly selective, 4-year instituion'
        //         },
        //         id: 'dots'
        //     },
        //     {
        //         match: {
        //             id: 'Moderately selective, 4-year institution'
        //         },
        //         id: 'lines'
        //     }
        // ]}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Socioeconomic Status in 2009',
            legendPosition: 'middle',
            legendOffset: 32
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Percent',
            legendPosition: 'middle',
            legendOffset: -40
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
        legends={[
            {
                dataFrom: 'keys',
                anchor: 'bottom-right',
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