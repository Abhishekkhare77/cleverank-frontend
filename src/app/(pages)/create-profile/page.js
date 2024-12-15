"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Page = () => {
  const [academicDetails, setAcademicDetails] = useState([]);
  const [streamDetails, setStreamDetails] = useState([]);
  const [interestDetails, setInterestDetails] = useState([]);
  const [focusDetails, setFocusDetails] = useState([]);
  const [selectedCourseId, setSelectedCourseId] = useState("");
  const [selectedStreamId, setSelectedStreamId] = useState("");
  const [selectedInterestIds, setSelectedInterestIds] = useState([]);
  const [selectedFocusIds, setSelectedFocusIds] = useState([]);

  const router = useRouter();
  useEffect(() => {
    // Fetch academic details on load
    axios
      .get("https://cleverank.adnan-qasim.me/category/get_academic_levels")
      .then((response) => {
        setAcademicDetails(response.data);
        // console.log(response.data);
      });
  }, []);

  useEffect(() => {
    if (selectedCourseId) {
      // Fetch stream details when course is selected
      axios
        .get(
          `https://cleverank.adnan-qasim.me/category/get_streams/${selectedCourseId}`
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
          `https://cleverank.adnan-qasim.me/category/get_academic_interest/{id}?acad_level_id=${selectedCourseId}&acad_stream_idx=1`
        )
        .then((response) => {
          setInterestDetails(response.data);
          console.log(response.data);
        });
    }
  }, [selectedStreamId]);

  useEffect(() => {
    if (selectedInterestIds.length > 0) {
      // Make a POST request with the selectedInterestIds array as the payload
      axios
        .post(
          "https://cleverank.adnan-qasim.me/category/get_academic_focus",
          selectedInterestIds, // Sending the array directly as JSON
          {
            headers: {
              accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          setFocusDetails(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.error("Error fetching focus details:", error);
        });
    }
  }, [selectedInterestIds]);

  const handleSubmit = () => {
    // Make a POST request with the selected data
    console.log("Submitting profile:", selectedFocusIds);
    console.log("token is:", localStorage.getItem("token"));
    axios
      .post(
        "https://cleverank.adnan-qasim.me/auth/add_academic_focus",
        selectedFocusIds,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((response) => {
        console.log("Profile saved successfully:", response.data);
        router.push("/recommended");
      })
      .catch((error) => {
        console.error("Error saving profile:", error);
      });
  };

  return (
    <div className="flex flex-col justify-between  h-[calc(100vh-1.22rem)]">
      <div className="p-6 ">
        <h1 className="text-3xl font-bold mb-6">Create Profile</h1>

        <div className="mb-6">
          <label className="block text-lg font-semibold mb-2">
            My Education
          </label>
          <div className="flex flex-wrap gap-4 ">
            {academicDetails.map((academic) => (
              <button
                key={academic.id}
                onClick={() => setSelectedCourseId(academic.id)}
                className={`px-4 py-2 rounded-lg border text-sm ${
                  selectedCourseId === academic.id
                    ? "bg-primary text-white"
                    : "bg-gray-200"
                }`}
              >
                {academic.education_level}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-lg font-semibold mb-2">My Stream</label>
          <div className="flex flex-wrap gap-4">
            {streamDetails.map((stream, index) => (
              <button
                key={index}
                onClick={() => setSelectedStreamId(index)}
                className={`px-4 py-2 rounded-lg border text-sm ${
                  selectedStreamId === index
                    ? "bg-primary text-white"
                    : "bg-gray-200"
                }`}
              >
                {stream}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-lg font-semibold mb-2">
            My Interest
          </label>
          <div className="flex flex-wrap gap-4">
            {interestDetails.map((interest) => (
              <button
                key={interest.id}
                onClick={() =>
                  setSelectedInterestIds((prevSelected) => {
                    if (prevSelected.includes(interest.id)) {
                      // If already selected, remove it from the array
                      return prevSelected.filter((id) => id !== interest.id);
                    } else {
                      // If not selected, add it to the array
                      return [...prevSelected, interest.id];
                    }
                  })
                }
                className={`px-4 py-2 rounded-lg border text-sm ${
                  selectedInterestIds.includes(interest.id)
                    ? "bg-primary text-white"
                    : "bg-gray-200"
                }`}
              >
                {interest.interest_name}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-lg font-semibold mb-2">My Focus</label>
          <div className="flex flex-wrap gap-4">
            {focusDetails.map((focus) => (
              <button
                key={focus.id}
                onClick={() =>
                  setSelectedFocusIds((prevSelected) => {
                    if (prevSelected.includes(focus.id)) {
                      // If already selected, remove it from the array
                      return prevSelected.filter((id) => id !== focus.id);
                    } else {
                      // If not selected, add it to the array
                      return [...prevSelected, focus.id];
                    }
                  })
                }
                className={`px-4 py-2 rounded-lg border text-sm ${
                  selectedFocusIds.includes(focus.id)
                    ? "bg-primary text-white"
                    : "bg-gray-200"
                }`}
              >
                {focus.focus_name}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="  flex items-center justify-end px-6 gap-2 sticky bottom-2 ">
        <Button
          variant="outline"
          className="text-red-600 hover:bg-gray-200/80 hover:text-red-600 font-semibold"
        >
          {" "}
          Cancle
        </Button>
        <Button onClick={handleSubmit}>Save Profile</Button>
      </div>
    </div>
  );
};

export default Page;
