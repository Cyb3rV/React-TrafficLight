import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

import { Container } from "react-bootstrap";
import { Trafficlight } from "@/components/Trafficlight";


export default function Home() {
  return (
    <Container>
      <Trafficlight/>
    </Container>
  );
}
