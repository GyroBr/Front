import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';



ChartJS.register(ArcElement, Tooltip, Legend);

function ProdutosMaisVendidos() {
    const produtos = [
        'Produto tal',
        'Produto taltal',
        'Produto taldetal',
        'Produto taltaltal',
        'Produto taltal'
    ];


    const data = {
        labels: ['Produto A', 'Produto B', 'Produto C'],
        datasets: [
            {
                data: [30, 40, 30],
                backgroundColor: ['#FFD700', '#FFA500', '#FF8C00'],
                hoverBackgroundColor: ['#FFD700', '#FFA500', '#FF8C00'],
            },
        ],
    };

    return (
        <>
            <div style={{
                display: 'flex',
                width: '100%'
            }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '100%',
                }}>
                    <div style={{
                        display: 'flex',
                        backgroundColor: '#2A2A40',
                        color: '#ffffff',
                        padding: '20px',
                        margin: '5px',
                        borderRadius: '8px',
                        border: '1px solid #333',
                        boxShadow: '0px 0px 5px rgba(255, 255, 255, 0.3)'
                    }}>
                        <div style={{
                            flex: 1,
                            height:'30vh',
                            padding:' 20px',
                            marginTop:'20px',
                            border: '1px solid #fff',
                            borderRadius: '10px'
                        }}>
                            <h2>Produtos mais vendidos</h2>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                                {produtos.map((produto, index) => (
                                    <li key={index}>{produto}</li>
                                ))}
                            </ul>
                        </div>
                        <div style={{ flex: 1 }}>
                            <Pie data={data} />
                        </div>
                    </div>
                </div>
                <div style={{
                    backgroundColor: '#2A2A40',
                    color: '#ffffff',
                    width:'70%',
                    padding: '20px',
                    margin: '5px',
                    borderRadius: '8px',
                    border: '1px solid #333',
                    boxShadow: '0px 0px 5px rgba(255, 255, 255, 0.3)'
                }}>
                    <h2 style={{ marginBottom: '20px', borderBottom:'1px solid white    '}}>Média de Faturamento</h2>
                    <div style={{ display: 'flex', justifyContent: 'space-around', marginTop:'50px' }}>
                        <div style={{
                            padding: '20px',
                            borderRadius: '8px',
                            border: '2px solid #fff',
                            textAlign: 'center',
                            width: '120px'
                        }}>
                            <p>Mensal</p>
                            <p>R$75.000,00</p>
                        </div>
                        <div style={{
                            padding: '20px',
                            borderRadius: '8px',
                            border: '2px solid #fff',
                            textAlign: 'center',
                            width: '120px'
                        }}>
                            <p>Diária</p>
                            <p>R$2.500,00</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProdutosMaisVendidos;