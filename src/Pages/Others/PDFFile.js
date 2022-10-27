import React from "react";
import { Page, Text, Image, Document, StyleSheet } from "@react-pdf/renderer";


const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  span: {
    margin: 12,
    fontSize: 12,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },

  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },

});

const PDFFile = ({coursesData}) => {
    const {
        id,
        img,
        course_title,
        Duration,
        price,
        reviews,
        instructor_img,
        instructor_name,
        Lectures,
        students,
        Level,
        Category,
        articles,
        cover_img,
        description,
        quiz,
        assignment,
      } = coursesData;


  return (
    <Document>
      <Page style={styles.body}>
        <Text style={styles.header} fixed></Text>
        <Image style={styles.image} src={img} />
        <Text style={styles.title}>{course_title}</Text>
        <Text style={styles.span}>Categories: {Category}</Text>
        <Text style={styles.text}>
          {description}
        </Text>
        <Text style={styles.span}>Instructor: {instructor_name}</Text>
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
        />
      </Page>
    </Document>
  );
};

export default PDFFile;