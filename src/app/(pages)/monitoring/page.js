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

export default function Dashboard() {
  const [stats, setStats] = useState([]); // Initialize as an empty array
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
      setStats(data.services || []); // Ensure it defaults to an empty array
      setCloudStorage(data.cloud_storage || 0);
      setLearnerCalls(data.learner_calls || 0);
      setLastFetched(data.last_fetched_time.split(" ")[0] || "N/A"); // Extract only the date
      setLoading(false);
    } catch (error) {
      console.error("Error fetching API data:", error);
      setError("Failed to fetch data. Please try again later.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApiData(); // Fetch data on component mount
  }, []);

  if (loading) {
    return <div className="text-center text-xl font-bold">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  // Data for specific cards
  const cardData = stats.filter(
    (service) =>
      service.service_name === "Cloud Run Admin" ||
      service.service_name === "Artifact Registry"
  );

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
            <p>{cloudStorage} GB</p>
          </CardContent>
        </Card>

        {/* Learner Calls Card */}
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="text-lg font-bold">Learner Calls</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{learnerCalls}</p>
          </CardContent>
        </Card>

        {/* Specific Service Cards */}
        {cardData.map((service) => (
          <Card key={service.service_name} className="shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-bold">
                {service.service_name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Total Calls: {service.total_api_calls}</p>
              <p>Successful: {service.successful_api_calls}</p>
              <p>Unsuccessful: {service.unsuccessful_api_calls}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Table for Remaining Services */}
      <Table>
        <TableHeader className="bg-[#DBFAC3] rounded-md">
          <TableRow className>
            <TableHead>Service Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Total Calls</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Total</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {stats.map((service) => (
            <TableRow className="bg-slate-50" key={service.service_name}>
              <TableCell>{service.service_name}</TableCell>
              <TableCell>{lastFetched}</TableCell>
              <TableCell>{service.total_api_calls}</TableCell>
              <TableCell>$10</TableCell>
              <TableCell>$100</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
