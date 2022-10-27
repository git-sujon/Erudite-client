import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PDFFile from '../../Others/PDFFile';
import { PDFDownloadLink } from "@react-pdf/renderer";

const CoursesHeader = ({ coursesData, button }) => {
    // const {Category} =coursesData
    const [dataLoad, setDataLoad] =useState(true)

  

    

  return (
    <div>
      <section className="overflow-hidden bg-[url(https://unsplash.com/photos/WiONHd_zYI4/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjY2ODAxMjQ5&force=true&w=2400)] bg-cover bg-left bg-no-repeat">
        <div className="bg-black/25 p-8 md:p-12 lg:px-16 h-44">
          <div className=" flex justify-between  ">
            <h2 className="text-2xl text-center sm:text-left font-bold text-white sm:text-3xl md:text-5xl">
              {coursesData?.Category}
            </h2>
            {button && (
              <PDFDownloadLink document={<PDFFile coursesData={coursesData}/>} filename="FORM">
                {({ loading }) =>
                  loading ? (
                    <button className="inline-block rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"> <span className="block rounded-full bg-white px-8 py-3 text-sm font-medium hover:bg-transparent" >Loading PDF...</span></button>
                  ) : (
                    <button className="inline-block rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"> <span className="block rounded-full bg-white px-8 py-3 text-sm font-medium hover:bg-transparent" >Download PDF</span></button>
                  )
                }
              </PDFDownloadLink>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoursesHeader;
