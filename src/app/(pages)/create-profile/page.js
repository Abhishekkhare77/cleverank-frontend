"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

const page = () => {
  const [academicDetails, setAcademicDetails] = useState([]);
  const [streamDetails, setStreamDetails] = useState([]);
  const [interestDetails, setInterestDetails] = useState([]);
  const [focusDetails, setFocusDetails] = useState([]);

  const [selectedCourseId, setSelectedCourseId] = useState("");
  const [selectedStreamId, setSelectedStreamId] = useState("");
  const [selectedInterestId, setSelectedInterestId] = useState("");

  useEffect(() => {
    // Fetch academic details on load
    axios
      .get("http://127.0.0.1:8000/category/academic_details")
      .then((response) => {
        setAcademicDetails(response.data);
        console.log(response.data);
      });
  }, []);

  useEffect(() => {
    if (selectedCourseId) {
      // Fetch stream details when course is selected
      axios
        .get(
          `http://127.0.0.1:8000/category/stream_details?course_id=${selectedCourseId}`
        )
        .then((response) => {
          setStreamDetails(response.data);
          console.log(response.data);
        });
    }
  }, [selectedCourseId]);

  useEffect(() => {
    if (selectedStreamId) {
      // Fetch interest details when stream is selected
      axios
        .get(
          `http://127.0.0.1:8000/category/interest_details?course_id=${selectedCourseId}&stream_id=${selectedStreamId}`
        )
        .then((response) => {
          setInterestDetails(response.data);
          console.log(response.data);
        });
    }
  }, [selectedStreamId]);

  useEffect(() => {
    if (selectedInterestId) {
      // Fetch focus details when interest is selected
      axios
        .get(
          `http://127.0.0.1:8000/category/focus_details?course_id=${selectedCourseId}&stream_id=${selectedStreamId}&interest_id=${selectedInterestId}`
        )
        .then((response) => {
          setFocusDetails(response.data);
          console.log(response.data);
        });
    }
  }, [selectedInterestId]);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Create Profile</h1>

      <div className="mb-6">
        <label className="block text-lg font-semibold mb-2">My Education</label>
        <div className="flex flex-wrap gap-4">
          {academicDetails.map((academic) => (
            <button
              key={academic._id}
              onClick={() => setSelectedCourseId(academic._id)}
              className={`px-4 py-2 rounded-lg border ${
                selectedCourseId === academic._id
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              }`}
            >
              {academic.course_name}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-lg font-semibold mb-2">My Stream</label>
        <div className="flex flex-wrap gap-4">
          {streamDetails.map((stream) => (
            <button
              key={stream._id}
              onClick={() => setSelectedStreamId(stream._id)}
              className={`px-4 py-2 rounded-lg border ${
                selectedStreamId === stream._id
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              }`}
            >
              {stream.stream_name}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-lg font-semibold mb-2">My Interest</label>
        <div className="flex flex-wrap gap-4">
          {interestDetails.map((interest) => (
            <button
              key={interest._id}
              onClick={() => setSelectedInterestId(interest._id)}
              className={`px-4 py-2 rounded-lg border ${
                selectedInterestId === interest._id
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              }`}
            >
              {interest.interest}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-lg font-semibold mb-2">My Focus</label>
        <div className="flex flex-wrap gap-4">
          {focusDetails.map((focus) => (
            <button
              key={focus._id}
              className="px-4 py-2 rounded-lg border bg-gray-200"
            >
              {focus.focus}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
