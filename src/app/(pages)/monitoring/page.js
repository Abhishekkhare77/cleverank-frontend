"use client";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState, useEffect } from "react";
import { Pie, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default function Dashboard() {
  const [stats, setStats] = useState([]);
  const [cloudStorage, setCloudStorage] = useState(0);
  const [learnerCalls, setLearnerCalls] = useState(0);
  const [lastFetched, setLastFetched] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchApiData = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(
        "https://cleverank.adnan-qasim.me/monitor/api_usage?last_day_call=7"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();

      // Set states with the API response
      setStats(data.services || []);
      setCloudStorage(data.cloud_storage || 0);
      setLearnerCalls(data.learner_calls || 0);
      setLastFetched(data.last_fetched_time.split(" ")[0] || "N/A");
      setLoading(false);
    } catch (error) {
      console.error("Error fetching API data:", error);
      setError("Failed to fetch data. Please try again later.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApiData();
  }, []);

  if (loading) {
    return <div className="text-center text-xl font-bold">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  // Extract Cloud Run Admin and Vertex AI data
  const cloudRunAdmin = stats.find(
    (service) => service.service_name === "Cloud Run Admin"
  );
  const vertexAI = stats.find(
    (service) => service.service_name === "Vertex AI"
  );

  // Prepare data for charts
  const serviceNames = stats.map((service) => service.service_name);
  const totalCalls = stats.map((service) => Number(service.total_api_calls));
  const successfulCalls = stats.map((service) =>
    Number(service.successful_api_calls)
  );
  const unsuccessfulCalls = stats.map((service) =>
    Number(service.unsuccessful_api_calls)
  );

  // Pie Chart Data
  const pieData = {
    labels: serviceNames,
    datasets: [
      {
        label: "Total API Calls",
        data: totalCalls,
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
          "#C9CBCF",
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
          "#C9CBCF",
        ],
      },
    ],
  };

  // Bar Chart Data
  const barData = {
    labels: serviceNames,
    datasets: [
      {
        label: "Successful Calls",
        data: successfulCalls,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "Unsuccessful Calls",
        data: unsuccessfulCalls,
        backgroundColor: "rgba(255, 99, 132, 0.6)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

      {/* Last Fetched Time */}
      <div className="mb-4">
        <p className="text-gray-600">
          <strong>Last Fetched Date:</strong> {lastFetched}
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        {/* Cloud Storage Card */}
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="text-lg font-bold">Cloud Storage</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-extrabold text-green-600">
              {cloudStorage} GB
            </p>
          </CardContent>
        </Card>

        {/* Learner Calls Card */}
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="text-lg font-bold">Learner Calls</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-extrabold text-blue-600">
              {learnerCalls}
            </p>
          </CardContent>
        </Card>

        {/* Cloud Run Admin Card */}
        {cloudRunAdmin && (
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-bold">
                Cloud Run Admin
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Total Calls: {cloudRunAdmin.total_api_calls}</p>
              <p className="text-green-600">
                Successful: {cloudRunAdmin.successful_api_calls}
              </p>
              <p className="text-red-600">
                Unsuccessful: {cloudRunAdmin.unsuccessful_api_calls}
              </p>
              <p>Price (INR): ₹{cloudRunAdmin.inr_price || "N/A"}</p>
            </CardContent>
          </Card>
        )}

        {/* Vertex AI Card */}
        {vertexAI && (
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-bold">Vertex AI</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Total Calls: {vertexAI.total_api_calls}</p>
              <p className="text-green-600">
                Successful: {vertexAI.successful_api_calls}
              </p>
              <p className="text-red-600">
                Unsuccessful: {vertexAI.unsuccessful_api_calls}
              </p>
              <p>Price (INR): ₹{vertexAI.inr_price || "N/A"}</p>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {/* Pie Chart */}
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="text-lg font-bold">
              API Calls Distribution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="w-80 mx-auto">
              <Pie data={pieData} />
            </div>
          </CardContent>
        </Card>

        {/* Bar Chart */}
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="text-lg font-bold">
              Successful vs Unsuccessful Calls
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Bar data={barData} options={{ responsive: true }} />
          </CardContent>
        </Card>
      </div>

      {/* Table for Remaining Services */}
      <Table>
        <TableHeader className="bg-[#DBFAC3] rounded-md">
          <TableRow>
            <TableHead>Service Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Total Calls</TableHead>
            <TableHead>Price (USD)</TableHead>
            <TableHead>Price (INR)</TableHead>
            <TableHead>Total (INR)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {stats.map((service) => (
            <TableRow className="bg-slate-50" key={service.service_name}>
              <TableCell>{service.service_name}</TableCell>
              <TableCell>{lastFetched}</TableCell>
              <TableCell>{service.total_api_calls}</TableCell>
              <TableCell>
                {service.price !== null ? `$${service.price}` : "N/A"}
              </TableCell>
              <TableCell>
                {service.inr_price !== null ? `₹${service.inr_price}` : "N/A"}
              </TableCell>
              <TableCell>
                {service.inr_price !== null && service.total_api_calls
                  ? `₹${(service.total_api_calls * service.inr_price).toFixed(
                      2
                    )}`
                  : "N/A"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
