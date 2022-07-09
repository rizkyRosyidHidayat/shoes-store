import React from "react";
import Head from "next/head";

type Props = {};

const Header = (props: Props) => {
  return (
    <Head>
      <title>Shoes Master House</title>
      <meta
        name="description"
        content="Guaranted 100% original and complete shoes store"
      />
      <link rel="icon" href="/logo.svg" />
    </Head>
  );
};

export default Header;
