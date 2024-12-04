import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';

// Registra todos os componentes do Chart.js
Chart.register(...registerables);

export default function Frequency({ data }) {
    const chartRef = useRef(null);

    useEffect(() => {
        if (!data || data.length === 0) {
            return; // Se não existir, não faz nada
        }

        const myChartRef = chartRef.current.getContext('2d');

        const myChart = new Chart(myChartRef, {
            type: 'bar',
            data: {
                labels: data.map(item => item.month), // Extrai os meses do array de objetos
                datasets: [{
                    label: 'GANHOS MENSAIS',
                    data: data.map(item => (item.value)), // Extrai os valores do montante
                    backgroundColor: 'rgba(0, 30, 235, 0.8)',
                    borderColor: 'rgba(0, 30, 235, 1)',
                    borderWidth: 2,
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Valor R$',
                            font: {
                                size: 16, // Tamanho do texto do título do eixo Y
                                weight: 'bold', // Peso da fonte
                                family: 'Arial', // Família da fonte
                                color: '#000000' // Cor da fonte
                            }
                        },
                        ticks: {
                            font: {
                                size: 12, // Tamanho do texto das marcas do eixo Y
                                family: 'Arial',
                                color: '#000000' // Cor das marcas
                            }
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'Mês',
                            font: {
                                size: 16,
                                weight: '500',
                                family: 'Arial',
                                color: '#000000'
                            }
                        },
                        ticks: {
                            font: {
                                size: 14,
                                family: 'Arial',
                                color: 'black'
                            }
                        }
                    }
                }
            }
        });

        return () => {
            myChart.destroy();
        };
    }, [data]);

    return (
        <div style={{ width: "500px", height: "max-content" }}>
            <canvas ref={chartRef} />
            {!data || data.length === 0 ? (
                <p>No data available to display.</p>
            ) : null}
        </div>
    );
}