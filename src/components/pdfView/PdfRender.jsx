"use client"
import React from 'react';
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

// Import styles
import '@react-pdf-viewer/default-layout/lib/styles/index.css';


const PdfRender = () => {
    
const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <div>
      <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js">
      <div
         style={{
            height: '540px',
            width: '900px',
            marginLeft: 'auto',
            marginRight: 'auto',
        }}
      >

        <Viewer fileUrl="/dummyPdf.pdf"  plugins={[defaultLayoutPluginInstance]} />
      </div>
      </Worker>
    </div>
  );
};

export default PdfRender;
