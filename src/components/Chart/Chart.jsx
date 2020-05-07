import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';
import styles from './Chart.module.css';

const Chart = ({ data: { confirmed, deaths, recovered}, country }) => {
    // Equivalent of use state in a class-based component is like this, but now we get setter method with it automatically, no need to use this.setState
    // state = { dailyData: {} }

    const [dailyData, setDailyData] = useState([]); 

    useEffect(() => {
        const fetchAPI = async () => {
            // fetchDailyData() returns a promise (since it's async), then await waits for it and uses setDailyData to assign it to state dailyData
            setDailyData(await fetchDailyData());
        }

        fetchAPI(); 
    }, []);
    // By putting [] makes it behave as a componentDidMount, i.e. only calls back from data once instead of forever 


    const lineChart = (
       dailyData.length 
        ? (
            <Line
            data={{
                // Map to return all of the dates. Destructure the date by looping thru dailyData, to return array of all the dates
                labels: dailyData.map(( { date } ) => date),
                datasets: [{
                    data: dailyData.map(({ confirmed }) => confirmed),
                    label: 'Infected',
                    borderColor: '#3333ff',
                    fill: true,
                }, {
                    data: dailyData.map(({ deaths }) => deaths),
                    label: 'Deaths',
                    borderColor: 'red',
                    backgroundColor: 'rgba(255, 0, 0, 0.5)',
                    fill: true,
                }],
            }}
       />) : null 
    );


    const barChart = (
        confirmed ?
            (
                <Bar
                    data={{
                        labels: ['Infected', 'Recovered', 'Deaths'],
                        datasets: [{
                            label: 'People',
                            backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                            data: [confirmed.value, recovered.value, deaths.value]
                        }]
                    }}
                    options={{
                        legend: {display: false},
                        title: { display: true, text:`Current state in ${country}`},
                    }}
                />
            ) : null
    );

    return (
        <div className={styles.container}>
            {country ? barChart : lineChart}
        </div>
    )
}

export default Chart; 