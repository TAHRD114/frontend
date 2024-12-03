import React, { useState, useEffect } from 'react';
import { Container, Card, Row, Col, Spinner } from 'react-bootstrap';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Bar, Pie } from 'react-chartjs-2';
import Nav from './GameNav';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

function VoteResults() {
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchResults();
  }, []);

  const fetchResults = async () => {
    try {
      const response = await fetch('http://127.0.0.1:3000/api/get-tally');
      if (!response.ok) {
        throw new Error('無法取得投票結果');
      }
      const data = await response.json();
      setResults(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const chartColors = [
    'rgba(255, 99, 132, 0.8)',
    'rgba(54, 162, 235, 0.8)',
    'rgba(255, 206, 86, 0.8)',
    'rgba(75, 192, 192, 0.8)',
    'rgba(153, 102, 255, 0.8)',
    'rgba(255, 159, 64, 0.8)',
    'rgba(255, 99, 255, 0.8)',
    'rgba(64, 159, 255, 0.8)',
  ];

  const chartBorders = chartColors.map(color => color.replace('0.8', '1'));

  const commonOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
        labels: {
          font: {
            size: 14,
          },
          padding: 20,
        },
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            const label = context.label || '';
            const value = context.raw || 0;
            const total = context.dataset.data.reduce((a, b) => a + b, 0);
            const percentage = ((value / total) * 100).toFixed(1);
            return `${label}: ${value} 票 (${percentage}%)`;
          }
        }
      }
    },
  };

  const barOptions = {
    ...commonOptions,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
          font: {
            size: 14,
          },
        },
        title: {
          display: true,
          text: '票數',
          font: {
            size: 14,
          },
        },
      },
      x: {
        ticks: {
          font: {
            size: 12,
          },
        },
      },
    },
  };

  const generateChartData = (questionData) => {
    if (!questionData) return null;

    const labels = questionData.map(item => item.group);
    const data = questionData.map(item => item.votes);

    return {
      labels,
      datasets: [
        {
          data,
          backgroundColor: chartColors.slice(0, labels.length),
          borderColor: chartBorders.slice(0, labels.length),
          borderWidth: 1,
        },
      ],
    };
  };

  const calculateTotalVotes = () => {
    if (!results) return 0;
    return Object.values(results).reduce((sum, questionData) => {
      return sum + questionData.reduce((qSum, { votes }) => (qSum + votes), 0);
    }, 0);
  };

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">載入中...</span>
        </Spinner>
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-red-500">錯誤</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Nav />
      <Container className="py-5">
        <h1 className="text-center mb-5 text-2xl font-bold">投票結果統計</h1>
        
        {/* Total Poll Count Card */}
        <Row className="mb-4">
          <Col>
            <Card className="shadow-sm text-center">
              <Card.Body>
                <h3 className="text-xl font-bold mb-2">總投票數</h3>
                <p className="text-3xl font-bold text-primary mb-0">
                  {calculateTotalVotes()/3}
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Question Charts */}
        {Object.entries(results || {}).map(([question, data], index) => (
          <div key={index} className="mb-5">
            <h2 className="text-xl font-bold mb-4">{question === 'undefined' ? '你最喜歡哪一組的作品' : question}</h2>
            <Row>
              <Col lg={6} className="mb-4">
                <Card className="shadow-sm h-100">
                  <Card.Body>
                    <Card.Title className="mb-4 text-center">圓餅圖</Card.Title>
                    <Pie options={commonOptions} data={generateChartData(data)} />
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={6} className="mb-4">
                <Card className="shadow-sm h-100">
                  <Card.Body>
                    <Card.Title className="mb-4 text-center">長條圖</Card.Title>
                    <Bar options={barOptions} data={generateChartData(data)} />
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        ))}
      </Container>
    </div>
  );
}

export default VoteResults;
